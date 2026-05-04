// ==UserScript==
// @name         WMS Local Creative Override
// @namespace    wemass-local-dev
// @version      1.1
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

    // 2. Intercept _skn_creative assignment so we can patch adPath before wmsSkin.js reads it.
    //    wmsSkin.js loads tag.js as a <script> element (not via fetch), so tag.js executes and
    //    sets window._skn_creative = {...}. By defining a setter here, we patch adPath in-place
    //    the moment tag.js runs, before wmsSkin.js's init() picks it up.
    const baseUrlNoSlash = baseUrl.replace(/\/$/, '');
    let _sknCreative;
    Object.defineProperty(window, '_skn_creative', {
        configurable: true,
        enumerable: true,
        get: () => _sknCreative,
        set: (value) => {
            if (value && 'adPath' in value) {
                value.adPath = baseUrlNoSlash;
            }
            _sknCreative = value;
        },
    });
})();
