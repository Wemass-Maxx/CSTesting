// ==UserScript==
// @name         WMS Local Creative Override
// @namespace    wemass-local-dev
// @version      1.7-debug
// @description  Override creativeURL in iframe_preview renderer to test local skins via custom_creative param
// @match        https://creative-studio.wemass.com/iframe_preview*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const params = new URLSearchParams(location.search);
    const customCreative = params.get('custom_creative');
    if (!customCreative) return;

    const baseUrl = customCreative.substring(0, customCreative.lastIndexOf('/') + 1);
    const baseUrlNoSlash = baseUrl.replace(/\/$/, '');
    const previewWidth = params.get('width') || '1000';

    // Current wmsSkin.js accepts absolute creative URLs only when they contain
    // one of a few known Wemass hosts. The marker keeps jsDelivr/GitHub URLs
    // from being rewritten as https://cs-assets.wemass.com/https://...
    const creativeForRenderer = customCreative.includes('creative-studio.wemass.com')
        ? customCreative
        : customCreative + (customCreative.includes('?') ? '&' : '?') + 'wms_local_marker=https://creative-studio.wemass.com';

    console.log('[WMS] custom_creative:', customCreative);
    console.log('[WMS] creativeForRenderer:', creativeForRenderer);
    console.log('[WMS] baseUrl:', baseUrlNoSlash);
    console.log('[WMS] previewWidth:', previewWidth);

    document.documentElement.style.setProperty('--wms-content-width', `${previewWidth}px`);
    document.documentElement.style.setProperty('--wms-site-bg-helper-color', 'transparent');

    function defineCreativeUrlOverride(propertyName) {
        Object.defineProperty(window, propertyName, {
            configurable: true,
            enumerable: true,
            get: () => creativeForRenderer,
            set: () => {},
        });
    }

    // Older previews used creativeURL; current skins renderer checks __creativeUrl first.
    defineCreativeUrlOverride('creativeURL');
    defineCreativeUrlOverride('__creativeUrl');

    // Some iframe_preview versions inject wmsSkin.js with ?creative= directly in the
    // script src, bypassing window.creativeURL. Patch script insertion too.
    function rewriteWmsSkinScriptUrl(url) {
        if (typeof url !== 'string' || !url.includes('wmsSkin.js') || !url.includes('creative=')) {
            return url;
        }

        try {
            const parsedUrl = new URL(url, location.href);
            const creativeParam = parsedUrl.searchParams.get('creative');
            if (creativeParam === customCreative) {
                parsedUrl.searchParams.set('creative', creativeForRenderer);
                const rewrittenUrl = parsedUrl.toString();
                console.log('[WMS] patched wmsSkin script src:', rewrittenUrl);
                return rewrittenUrl;
            }
        } catch (error) {
            console.warn('[WMS] could not inspect script url:', url, error);
        }

        return url;
    }

    function rewriteBrokenCreativeAssetUrl(url) {
        if (typeof url !== 'string') return url;

        const brokenPrefixes = [
            'https://cs-assets.wemass.com/https://',
            'https://cs-assets.wemass.com/http://',
        ];

        for (const prefix of brokenPrefixes) {
            if (!url.startsWith(prefix)) continue;

            const protocol = prefix.endsWith('/https://') ? 'https://' : 'http://';
            const rewrittenUrl = protocol + url.substring(prefix.length);
            console.log('[WMS] patched creative asset url:', rewrittenUrl);
            return rewrittenUrl;
        }

        return url;
    }

    function patchResourceNode(node) {
        if (!node || !node.tagName) return;

        if (node.tagName === 'SCRIPT' && node.src) {
            node.src = rewriteBrokenCreativeAssetUrl(rewriteWmsSkinScriptUrl(node.src));
        }

        if (node.tagName === 'LINK' && node.href) {
            node.href = rewriteBrokenCreativeAssetUrl(node.href);
        }

        if (['IMG', 'VIDEO', 'SOURCE'].includes(node.tagName) && node.src) {
            node.src = rewriteBrokenCreativeAssetUrl(node.src);
        }
    }

    const nativeAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function (node) {
        patchResourceNode(node);

        return nativeAppendChild.call(this, node);
    };

    const nativeInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (node, child) {
        patchResourceNode(node);

        return nativeInsertBefore.call(this, node, child);
    };

    const nativeSetAttribute = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function (name, value) {
        const normalizedName = String(name).toLowerCase();

        if (this.tagName === 'SCRIPT' && normalizedName === 'src') {
            return nativeSetAttribute.call(this, name, rewriteBrokenCreativeAssetUrl(rewriteWmsSkinScriptUrl(value)));
        }

        if (this.tagName === 'LINK' && normalizedName === 'href') {
            return nativeSetAttribute.call(this, name, rewriteBrokenCreativeAssetUrl(value));
        }

        if (['IMG', 'VIDEO', 'SOURCE'].includes(this.tagName) && normalizedName === 'src') {
            return nativeSetAttribute.call(this, name, rewriteBrokenCreativeAssetUrl(value));
        }

        return nativeSetAttribute.call(this, name, value);
    };

    // PrimarySkinController waits if creativeClickURL is null. Keep the page value if it sets one,
    // otherwise provide a harmless fallback for local preview.
    let clickUrl = 'https://www.wemass.com/';
    Object.defineProperty(window, '__wms_click_url', {
        configurable: true,
        enumerable: true,
        get: () => clickUrl,
        set: (value) => {
            if (value) clickUrl = value;
        },
    });

    function rewriteCreativeUrls(value, originalBaseUrl) {
        if (!value || typeof value !== 'object') return value;

        for (const key of Object.keys(value)) {
            const current = value[key];

            if (typeof current === 'string') {
                value[key] = rewriteUrlString(current, originalBaseUrl);
            } else if (current && typeof current === 'object') {
                rewriteCreativeUrls(current, originalBaseUrl);
            }
        }

        return value;
    }

    function resolvePreviewExpressions(value) {
        if (!value || typeof value !== 'object') return value;

        if (
            value.__type__ === 'expression' &&
            typeof value.expression === 'string' &&
            value.expression.includes('/params/contentWidth') &&
            Object.prototype.hasOwnProperty.call(value, previewWidth)
        ) {
            console.log('[WMS] resolved contentWidth expression:', value[previewWidth]);
            return value[previewWidth];
        }

        for (const key of Object.keys(value)) {
            value[key] = resolvePreviewExpressions(value[key]);
        }

        return value;
    }

    function rewriteUrlString(value, originalBaseUrl) {
        if (!originalBaseUrl || typeof value !== 'string') return value;

        const normalizedOriginalBase = originalBaseUrl.replace(/\/$/, '');
        if (value.startsWith(normalizedOriginalBase + '/')) {
            return baseUrlNoSlash + value.substring(normalizedOriginalBase.length);
        }

        return value;
    }

    let _sknCreative;
    Object.defineProperty(window, '_skn_creative', {
        configurable: true,
        enumerable: true,
        get: () => _sknCreative,
        set: (value) => {
            console.log('[WMS] _skn_creative set, adPath before:', value && value.adPath);
            if (value && 'adPath' in value) {
                const originalAdPath = value.adPath;
                rewriteCreativeUrls(value, originalAdPath);
                resolvePreviewExpressions(value);
                value.adPath = baseUrlNoSlash;
            }
            console.log('[WMS] _skn_creative set, adPath after:', value && value.adPath);
            _sknCreative = value;
        },
    });

    window.addEventListener('unhandledrejection', (event) => {
        console.error('[WMS] Unhandled rejection reason:', event.reason);
        try {
            console.error('[WMS] Rejection detail:', JSON.stringify(event.reason, null, 2));
        } catch {
            console.error('[WMS] Rejection detail could not be stringified');
        }
    });

    window.addEventListener('error', (event) => {
        const target = event.target;
        if (!target || target === window) return;

        const tagName = target.tagName;
        if (!['LINK', 'SCRIPT', 'IMG', 'VIDEO', 'SOURCE'].includes(tagName)) return;

        console.error('[WMS] Resource load error:', {
            tagName,
            url: target.href || target.src || target.currentSrc || '',
            outerHTML: target.outerHTML,
        });
    }, true);

    function logDomState(label) {
        const selectors = [
            '.wms-full-bg',
            '.wms-stickyWrapper',
            '.wms-centerContents',
            '.wms-skinbg',
            'canvas.wms-skinimg',
            '.wms-siteBgHelper',
            '.wms-cont-video',
            'video.wms-video',
        ];

        const counts = {};
        for (const selector of selectors) {
            counts[selector] = document.querySelectorAll(selector).length;
        }

        const localResources = Array.from(document.querySelectorAll('link[href], script[src], img[src], video[src], source[src]'))
            .map((node) => node.href || node.src || node.currentSrc || '')
            .filter((url) => url.includes('CSTesting') || url.includes('test-scrolling') || url.includes(baseUrlNoSlash));

        console.log(`[WMS] DOM state ${label}:`, {
            counts,
            localResources,
            bodyChildren: document.body ? document.body.children.length : 0,
        });
    }

    setTimeout(() => logDomState('after 2s'), 2000);
    setTimeout(() => logDomState('after 5s'), 5000);
})();
