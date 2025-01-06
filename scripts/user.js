// ==UserScript==
// @name         Obscurum
// @namespace    http://tampermonkey.net/
// @version      none
// @description  none
// @author       Indifferental
// @match        https://*.tankionline.com/*
// @icon         https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/obscurum.png
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/scripts/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
