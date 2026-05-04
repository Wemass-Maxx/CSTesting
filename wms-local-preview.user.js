// ==UserScript==
// @name         WMS Local Creative Override
// @namespace    wemass-local-dev
// @version      1.0
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

    // Base URL = everything up to and including the last slash before tag.js
    const baseUrl = customCreative.substring(0, customCreative.lastIndexOf('/') + 1);

    // 1. Intercept window.creativeURL before the inline script in iframe_page.html sets it.
    //    iframe_page.html does: window.creativeURL = "{{{creativeURL}}}" synchronously.
    //    By defining a non-writable property here (document-start), that assignment becomes a no-op.
    Object.defineProperty(window, 'creativeURL', {
        configurable: true,
        enumerable: true,
        get: () => customCreative,
        set: () => {},
    });

    // 2. Intercept fetch so that when wmsSkin.js downloads tag.js, we patch adPath to point
    //    to the base URL of our custom server instead of the app-generated URL.
    const _fetch = window.fetch;
    window.fetch = async function (...args) {
        const url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url) || '';
        const response = await _fetch.apply(this, args);
        if (url.includes('tag.js')) {
            const text = await response.text();
            const patched = text.replace(/"adPath"\s*:\s*"[^"]*"/, `"adPath":"${baseUrl}"`);
            return new Response(patched, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            });
        }
        return response;
    };
})();
