// ==UserScript==
// @name         Obscurum
// @namespace    http://tampermonkey.net/
// @version      none
// @description  An open-source theme for Tanki Online
// @author       Indifferental
// @match        https://*.tankionline.com/*
// @icon         https://github.com/Indifferental/Obscurum/blob/main/assets/icons/flame90.png?raw=true
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/scripts/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
