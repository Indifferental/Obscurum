// ==UserScript==
// @name         Radiant
// @namespace    http://tampermonkey.net/
// @version      none
// @description  none
// @author       Indifferental
// @match        https://*.tankionline.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAACXBIWXMAAAsTAAALEwEAmpwYAAACo0lEQVR4nO3b3YtMYRzA8cdisIRtQyS0oRSliCuFXHEj0ZSXkvKyEknyEvfI/4ALqc1L2pS3jRsX29aWGxdeLrhQTCFc2L3w1a+e7Tw7Zjfzm3PMnOf8vvXczNbz7H52zpk5z5xxzvo7YCtwDegp0LgKLKiGKFPc3gOzQoyn/gdfgMPACqAr4rEeuB6AlEOMl/7BXa5AAY/93328FsYMV6CAk+NhtLkC5U8JhiEZRpBhBBlGkGGkhQGc8m/MtKMCvANeAf3AbeAycAjYAEx2OcK4QLZ9B+4CB4D2omOEybPoaJaHbp4wRuoFphtG0kNgomEknTWM0SfXTsNIOmEYSX2GkfQzBozzwDngCnAP+IG+mXnHWFI1z9xg37XelkWFEYAMK+Za52LDkIBBxVwrXYtgzAfWKEZpjPmeKTDmtQRG2gGv64SopLx+a2AAaxXPijvRYQCrgDcKjB0p/x4NnTNWA5eUQ3a0bgVr1dtg2v+sRjF205x+yYk4TYi8YgwDO9OGyCvGR2C2YSTdMIwMX0nyjvEZmGMYSTcNY3SpvbLEgFFJ62KtWRhngC3AxuBKdh/wQTlfT54xNo8x33LZ11TOWY4KQwKONetwaUWMNuCFct77UWEEl/Sa/VBpr4sJQ/KX+Zq+AgtdZBjTgLfK+XujwpCATcBv5Rr7XUwYklyhKtf4BixykWF0Ap+U6zwBJkSDIckrBPoOupgwJOCRci15R9vlIsNY3MCn9X3/crjkBkPytzFo63aRYZSUHzaNHC5Ls8QoAR2KMUmD4ddsV64pY2pmGLFlGEGGEWQYQYZRB0aHK1DA6fEwjriCJN9SAAZqYTzwDw75G1e3+a39WMce4HnwBm179abKEMVM7giaUmtT9mIDtynlcXT/j+/CuTz2B67zmnW5DlZ2AAAAAElFTkSuQmCC
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-body
// ==/UserScript==

(function() {

        var version = 'v1.0.0'

        // изменение иконки на вкладке браузера

        var logo90 = 'data:image/png;base64,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',

            logo512 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAACXBIWXMAAAsTAAALEwEAmpwYAAACo0lEQVR4nO3b3YtMYRzA8cdisIRtQyS0oRSliCuFXHEj0ZSXkvKyEknyEvfI/4ALqc1L2pS3jRsX29aWGxdeLrhQTCFc2L3w1a+e7Tw7Zjfzm3PMnOf8vvXczNbz7H52zpk5z5xxzvo7YCtwDegp0LgKLKiGKFPc3gOzQoyn/gdfgMPACqAr4rEeuB6AlEOMl/7BXa5AAY/93328FsYMV6CAk+NhtLkC5U8JhiEZRpBhBBlGkGGkhQGc8m/MtKMCvANeAf3AbeAycAjYAEx2OcK4QLZ9B+4CB4D2omOEybPoaJaHbp4wRuoFphtG0kNgomEknTWM0SfXTsNIOmEYSX2GkfQzBozzwDngCnAP+IG+mXnHWFI1z9xg37XelkWFEYAMK+Za52LDkIBBxVwrXYtgzAfWKEZpjPmeKTDmtQRG2gGv64SopLx+a2AAaxXPijvRYQCrgDcKjB0p/x4NnTNWA5eUQ3a0bgVr1dtg2v+sRjF205x+yYk4TYi8YgwDO9OGyCvGR2C2YSTdMIwMX0nyjvEZmGMYSTcNY3SpvbLEgFFJ62KtWRhngC3AxuBKdh/wQTlfT54xNo8x33LZ11TOWY4KQwKONetwaUWMNuCFct77UWEEl/Sa/VBpr4sJQ/KX+Zq+AgtdZBjTgLfK+XujwpCATcBv5Rr7XUwYklyhKtf4BixykWF0Ap+U6zwBJkSDIckrBPoOupgwJOCRci15R9vlIsNY3MCn9X3/crjkBkPytzFo63aRYZSUHzaNHC5Ls8QoAR2KMUmD4ddsV64pY2pmGLFlGEGGEWQYQYZRB0aHK1DA6fEwjriCJN9SAAZqYTzwDw75G1e3+a39WMce4HnwBm179abKEMVM7giaUmtT9mIDtynlcXT/j+/CuTz2B67zmnW5DlZ2AAAAAElFTkSuQmCC'

        var favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');

        favicon.forEach((element) => {

                element.setAttribute('href', logo90);

        });

        // создание глобального колонтитула для объектов темы в body

        var variableHeader = element('data', `Radiant ${version}`, document.body);

        // определение языка игры

        var language

        if (localStorage.getItem('language_store_key') == 'RU' || localStorage.getItem('TNK_ratings_preferred_language') == 'RU') {

                language = 'RU'

        } else {

                language = 'EN'

        };

        // функция создания элемента

        function element(tag, className, parentNode) {

                let elem = document.createElement(tag);

                    elem.className = className

                    parentNode.appendChild(elem);

                return document.getElementsByClassName(className)[0];

        };

        // массив глобальных значений для функций

        const globalProperties = {

                background: 'rgb(0 0 0 / 30%)',
                background_hover: 'rgb(255 255 255 / 5%)',
                box_shadow: '0 0 0.5em rgb(0 0 0 / 75%)',
                outline: '1px solid rgb(255 255 255 / 10%)',
                outline_hover: '1px solid rgb(255 255 255 / 20%)',
                backdrop_filter: 'blur(0.375em)',
                transition: '100ms ease-out',

        };

        function styleSheet() {

                const elements = [

                        {
                                selector: 'body',
                                style: `
                                        --general-background: ${globalProperties.background};
                                        --general-background-hover: ${globalProperties.background_hover};
                                        --general-box-shadow: ${globalProperties.box_shadow};
                                        --general-outline: ${globalProperties.outline};
                                        --general-outline-hover: ${globalProperties.outline_hover};
                                        --general-blur: ${globalProperties.backdrop_filter};
                                        --general-transition: ${globalProperties.transition};
                                `
                        },

                        {
                                selector: '#holder',
                                style: `
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        width: 100%;
                                        height: 100%;
                                        overflow: hidden;
                                        z-index: -1;
                                `
                        },

                        { // filter: grayscale(1) brightness(1.5);
                                selector: '#holder > canvas',
                                style: `
                                        width: 100% !important;
                                        height: 100% !important;
                                `
                        },

                        {
                                selector: '.wrapper, .-container, .-background, .-entranceGradient',
                                style: `
                                        background: transparent !important;
                                `
                        },

                        {
                                selector: '.ApplicationLoaderComponentStyle-logo, .ApplicationLoaderComponentStyle-loader, .ApplicationLoaderComponentStyle-container.-flexCenterAlignCenterColumn > div:nth-child(1)',
                                style: `
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ClientInfoComponentStyle-main',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.-commonBlockForHotKey, .BreadcrumbsComponentStyle-backButton h3',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        backdrop-filter: var(--general-blur);
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;

                                        margin-left: 0.15em;
                                        min-width: max-content;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu:hover',
                                style: `
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu > .ContextMenuStyle-menuItemRank',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu > .-flexStartAlignCenter',
                                style: `
                                        height: 3em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu > .-flexStartAlignCenter:hover',
                                style: `
                                        background: rgb(255 255 255 / 20%);
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu > .-flexStartAlignCenter > span',
                                style: `
                                        margin: 0 1em;
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu > div:nth-child(2)',
                                style: `
                                        border-top-right-radius: inherit;
                                        corner-top-right-shape: inherit;
                                `
                        },

                        {
                                selector: '.ContextMenuStyle-menu > .-flexStartAlignCenter:last-child',
                                style: `
                                        border-bottom-left-radius: inherit;
                                        corner-bottom-left-shape: inherit;
                                `
                        },

                        // настройки темы

                        {
                                selector: '.radElement-settingsButtonImage',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBklEQVR4nO2dz4tNYRjHv0YzwmChEDt2EveWlUwY+bExQ40FYTVl50c0apqFFQp/gJRoxsZKRoStJWpsTMpGhHKNUOTXo1Pv6HS7957zvud5z3vOeZ5PPavbPd/zfr/PPe9733N/AIqi+GUegCWhT0IyBwD8ADAJYD+AntAnJI17AChWnwBcAbAZwJzQJ1d1lgH41RRAvF4AOAtgTegTrSonO5hPTfUEwHEAS0OfdJV4ZhEAmYrPF92hB1Bm1jqYTzpf8HGBIQDS+cKNLgCvmQMgU38APNb5ojPbPZlPTfVd54vWXM8pAIpVIzZfiGYBgC8BAqAW88VqCORgYPNJ+nxxvwDGU4vS+UJRFEVRFH7mejimYsGODo9xvcutJ5zDUQB/OxzjvdmhTUvd6Cad21fzxm8CwFCoJe6NDo9V2XxqUS8BDCJHFpouaIck88lUdD7nzK6wdw4Z0Xa4DmIGwMYE7WGz3dDuGB8ArLMYSw3AR6bLJpkQvPPAQwCNknZ+q1fCADyyEsBv5gBmKtD58Xrl87NQp2JC7ZDY+dRU0erIC1OMAcxUrPPjNQ4PrG8SaUdVOv82gC1m1RfVVgB3Uj53Gh64yBRAowTmn+lwrNEUz4/uELJvPbxlCKBRks5PYjLFcVjZaSFQZvPJXHaS2JZ3AOMZAyjThNub4tiL8gxgduvBNYAymU8pA1icZwCHLQXKeNmhWEWrnST68wzgoWMAZTSfzFIzibt5BRDferAJoKzmk6loqdmOsZTHYOG0g0DZzSdTk2a102uqP2XnswYw5SBQBfOJoTKzwYPAcIFWO4UP4BKzwLAg8zMHEN1ae8MoIM18QkZ2MQpINJ+QkQkmAanmEzxsPdgKSDafMviPIwwC0s2nLAE8yiig5sM9gFUdth7SCkh4k0W+AhhhEJDe+ZQlgOeeApBmPrmYX2MSUPPhFsBlDwFINZ9cPvXwjjkAyeaTbQC7GQXUfNgHcJNRQM2HXQDRJ3m/MQpIWecTVwB9vgWEdT7Z+nMsQAD1Cne+tT9jOQdQq3jnW/szkmMAdQGdb+3PvpwCqAnpfGt/VljsgLoGIKnzycGf/9989CEg0XyyDWBTwj6+q4C0yw65BhBxjVlAaueTawA9FrcjkwQkdz65BhAxH8DVjAJqPtwDmGUvgKeOApIvO8QVAMyvl/eZV8RnC4HQA6eCFPsf8+wBcAvATw0AuQcQZzmAExoAggWQROiBU0FKA4AGILqCEXrgVJDSACA0gNB/5kAFqWBMF2DwVIAKRpqvN5GACsZQAQZPBahgdJuf8yXhFZRBhztsVLEKzvkCmECSA+gyv6Us9ZVQGAaEzgmFotusjibMnx+k+SJ42UtRFEVRFEVRFAUR/wBJjmnn2FX9sQAAAABJRU5ErkJggg==);
                                        mask-position: center;
                                        mask-repeat: no-repeat;
                                        mask-size: 1.75em;
                                `
                        },

                        {
                                selector: '.radElement-backButton',
                                style: `
                                        border-top-left-radius: unset !important;
                                        corner-top-left-shape: unset !important;

                                        position: absolute;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        padding-left: 0.5em !important;
                                        width: 6em;
                                        height: 6em;
                                        opacity: 0;
                                        pointer-events: none;
                                `
                        },

                        {
                                selector: '.radElement-backButton:hover',
                                style: `
                                        background: var(--general-background-hover);
                                `
                        },

                        {
                                selector: '.radElement-backButtonImage',
                                style: `
                                        background-color: rgb(255 255 255 / 30%);
                                        mask-image: url("https://s.eu.tankionline.com/static/images/iconBackArrow.9f950ca9.svg");
                                        mask-position: center;
                                        mask-repeat: no-repeat;
                                        mask-size: contain;

                                        width: 1.875em;
                                        height: 1.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.radElement-backButton:hover > .radElement-backButtonImage',
                                style: `
                                        background-color: white;
                                `
                        },

                        {
                                selector: '.radElement-titleSpan',
                                style: `
                                        position: absolute;
                                        color: white;
                                        font-family: BaseFontMedium, FallbackFontMedium;
                                        font-size: 1.75em;
                                        text-transform: uppercase;
                                        opacity: 0;
                                `
                        },

                        {
                                selector: '.radElement-pageBlock',
                                style: `
                                        position: absolute;
                                        display: flex;
                                        flex-direction: row;
                                        justify-content: space-between;
                                        top: 7em;
                                        width: 74em;
                                        height: calc(100% - 9em);
                                        opacity: 0;
                                        pointer-events: none;
                                        z-index: 999;
                                `
                        },

                        {
                                selector: '.radElement-tabsHeader',
                                style: `
                                        width: 18em;
                                        height: 100%;
                                `
                        },

                        {
                                selector: '.radElement-tabButton',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        backdrop-filter: var(--general-blur);
                                        border-top-left-radius: 1em;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 1em;
                                        corner-bottom-right-shape: bevel;

                                        display: flex;
                                        align-items: center;
                                        margin-bottom: 1em;
                                        height: 4em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.radElement-tabButton:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        cursor: pointer;
                                `
                        },

                        {
                                selector: '.tabActive',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        cursor: default !important;
                                `
                        },

                        {
                                selector: '.radElement-tabButtonImage',
                                style: `
                                        background-color: rgb(255 255 255 / 30%);
                                        mask-position: center;
                                        mask-repeat: no-repeat;
                                        mask-size: contain;

                                        margin: 0 1em;
                                        width: 1.5em;
                                        height: 1.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: `.radElement-tabButton:hover > .radElement-tabButtonImage,
                                           .tabActive > .radElement-tabButtonImage`,
                                style: `
                                        background-color: white;
                                `
                        },

                        {
                                selector: '.img_1',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO2ZPUtcQRSGHzVxCzWFRTDRyiJKFIwQ7PPRWvvxC5RIxI/UiWlCNPkD6p9Z08UuaxQUsbYTP8AV5YaBsxC22JlzZm8yi/eBA3J1z/senTv3vSMUFBQ0kx9A5qkdEqUdOA8Y4EJ+NjmGA8zXaogEmVUMMEOCbCgGWP/X5toafG8A+C5rO3SAC/lMv1FTxSRwAnwBxv66/hD4DFQVxuurCqxJrxpjonUi2lF0Aod1ovsiuhthvL52ped+3fVD8WDmQxNNWmvVav4xcJbAAOfAE8sA2wmYz6S2tObHgbsEjGdSzsvLUPNtklesYr+ARWAE6JIakWuViL47oVvrlFHgGpj35JwO4F3E1jsVMsAEcGow/yr0Twy8NgxxKt6CGAQOFM3n0LOg6H8gnlT0AuXANW+Jx2457QX0L4sXEyXgyCPgbk4rS57eR+IhimOPyPOI3qOe3k47miuPSHdE7x5Pb6cdzaVHxJmw8iggdnOvl1CplW/i3sBttCJbohb3md95baPaB5mLB1re5/Ugs0QJFwveKMy/BW7yihLWMFeVeNBoOXXIb15rPtOEudg4vSc356g8I7rl6+XANZ/FxmnHC+A2Quy/vtDU2ErAeCa1SYu/1PdhZDWBAVZogYOtn3kdbDU6WnwAfJLXSavxa+Cj9MrlaLFGo+2r33i4+w14atTMhXXFAF9JkBnFANMkyJBigGckSHur/5OPwAzl8n1BQQHN4Q99a2BCKPa90gAAAABJRU5ErkJggg==);
                                `
                        },

                        {
                                selector: '.img_2',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Zz0sVURTHPz50YTuFJMtFz7WLQP+E+gOywtQgt4nZ3kXuC1pG9T8EqdimTUGBWPYPVNBGxVwIhpj68siFIwyP4d0f787cJ8wXvvB4c8895ztz75lzz0CFChUqXATUgClgBdgCGoBEZkPnXgYm1WcUDAPfCwjYxg313XbwfxIEL8odoB4afC3RnZcmfgtdTlMdELwo74cIWLFMeqwsQ8BSiIAty6R3gXslCdgMEdAqVX7UdWn4yTOYPWDN06YRIiBvolPgLdCXGden/506BvME6NEMIx6MImC8xfg7DkH8B67p+NcpBHwARnPGjuk1WxBfMja3UggQzTzTmXEPgBPHIGYzdt26OUsXYHioS2FIf7sE8Bu41ORjLpUAw1XgvaPzbeBGjo8uj70QXYALd4EXwBWLr9vAZ0smK03APvAKuKnr3AdDmmbXUwpYoH10A/9SCfh70Z+A5OyBQYuv8U7aA75Z6E0nZyHbe+Cxh32hAp4Ciw7jHnXKm1gyNFVlr9J2fjbrPHktJE18mLGZcahGr6asRiXDI61lyFnXRy3s5lOeB0T5PFPX58FcexbxRCYxBZjqc8DB/rJHpSplP4ED4CXQn2PXr9cOIgYvIQJc+p8/mypN8/tX5MAl9FBva6uc0/SPzrFaQPAS2lZZdpzc1C8jStfOhC/fhQiY9HDwQ5eTFMSJEAE1bXFLYn5t51vBcMALJyZ3gOu0ibq2uFPc+TqRUNMW95JmhKI+MW3qhp2I+YmpQoUKFSgMZyJwJB36SdGHAAAAAElFTkSuQmCC);
                                `
                        },


                        {
                                selector: '.img_3',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAED0lEQVR4nO2baWgVVxTHf88toonirhgXLEpEhYgruMR+ELcvIlaKdUcsGtQPVm1NC6ViUYxKKfWbuKFCXFC/VFu1LhhEbaOoJaJxQaxUaetKKlQtF05gGO6dN2/ezLxr3vzgQvLI+997ztw5dzknkJCQkBA+rYCTwFqgDGhBHrIXeCftFfAzsBoYAqTIAyY5HOBufwJVwCKgJ42UkcB/Hk5oaDVAM833i4CmvIeMB874MFy1emCARqOJaPwF7BZN9ZnV9AEO+zS8oS03aK3S/O1t4FNbA+oC4EWGxv9kCIalwGuP790FpmIJLV3R3m9TU7u7QXMWcAF4k0bjCNCJHNIBOBfAeNU+8qHfC/gGeOKh84fsM2KnHXDFh6GXgXLgrOOzXRn2VQh8KXsJXR+vZdbERmug2ofhEx3fmet4f9tmEWRPGfp7CywmJvZ4GP4SWKZZv9VTfA6MzbJvpbtODNY5QTk6UpZ4GH/TsKY3MDrEcSw0bLLU6zCKiOjj8R5WS1yIk3mGmfAI6BhFh8cMxp+XKZ4LvjKMaV/YHU0wdHQrKm/7JOXxYKaE2VG14X0bTO7pCjzTjO9aWIepMQYPf449rDCMcXYY4jsNB5MC7KFAdoW6o3bWe/2XGuEZ2McawywYHnbwu2PpRUU3w97gu2xEN2oEladt5bThgQXmF41gP+ylwvAalAQV/MclVIfdlIW5GrTRCGV6lI2bLgYHbA4i1l8jpO7qbCZlOK8cDSI2VCM0HfvR7QcuBREapRH6EPup04z7flgzYDj280gz7gdBhPpqhCK7bAgxBtSH5YBCzYWDyvfZRnvHz8WGVeD3oOIPXUIqM2Mb24DHwAnggMEBKlUfiGMuoU3YR4mPJEqNrGD9Mj3HVLiE1MWIjRxK4wD3RUnbTHZWHwNLJUvzg6VZ2hE+jVf3GD1opJxOY/w9oDd5WpFyr7Eb38Bv+Wy8YmZUxhcBKyX3NlkqvYotuxhFao3uRBXwHhjer6dArdQKHJKVwitHGDXlUUX77T6XmqoY6wBThiLNSJa6T3wY/6vUD8SBSsYez6LeIGO6GLKxfqq+wuYD4Lr0qWJTbFxN4wDloMqIg+M04G9Hnw/jDMaVPuPAjRCqQXRFU/sN/c0nJiZmcOhQ7UdgXJZBUZ3gvgf+9TjrqyU5Flq5BpIuJjgH+TUwzFAX7CQlRi+X/b1XH2dzUZ9wylEZUipn7UxmRb3c0h6UJ7teUnC7pT7YnYwxxZotQHNywBopd+ssvxdI5ZZpiobdbuf6dnoQMNBQRFXl43YmaFOR/zNJ2VtNX2CrbJHDMLxWLmTUeeS9okCqundIMZVfg1WO/yKwQXITjYbOkr1Va/YXEvxU+1b+l2iOJF5yVXKXkJCQkEC+8T9nhcrxtsrkNwAAAABJRU5ErkJggg==);
                                `
                        },


                        {
                                selector: '.img_4',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVR4nO2aP2sUQRyGHwTBCFFJGomFxMLGSv0GiiLB1kBSazzU/sosXpOUSb6BEQQrRS9cTKPWsVIw/kEbhVgkYjwwiLAy8DsYlr3b2Z3dud3NPDDNTnZ/7/vu/Ntw4PF4PB6Px5PMaeA50AIuASOUhxHR1BKNSmvuPANCre0DL4EGw6MhGvYj2pTW3GlFiuhtAfcEA/TcL6Lg5QEFXYcwyHwo0yF3jgB/ShBCkvn9ItenVwnFiw4hyXwoa0Khi05o0JTQYZgPXSzKTUMhC0MwP48jmg5DKJ15lyGU1ryLEEpvvsgQKmO+iBAqZz7PECprPo8QKm8+rZEgxXdG3D2lpplhJNwE/lb5zecRwhXgZx3M24RwDvhaB/M2IYwDr+tg3mZhPEzNaOZwTjgQoyCsYwhBCvO1CyHIYL42IQQW5isfQpCD+cqGEBgam6/i7vAC2AS2gDM57flZ7umhNHwQTUpb4XzXBC1G+myMZL13Uev7hgPWtIJdYEKuX7MwnzYEVQup3dWutx3453ZEzKpcPwQ8tTBvGsITqYXU1vuUtsIZBfYihWe0vncW5pNCeCs1FLORvj2tr3CWYoqfl75TwEcL8/1C2NKm20Xgd6RfaXLG1Zi3sw2clX4l9I2F+WgIaoU/KddUjR8x9ZUmZ2z0GaIqhAvyN0e1qWHDjDyr9+bjzKvWwRHXExapPZmfeTMbM+yjbYqCOQ58MdyqVrU5a8NEzGrfr30GjlEgjwyF9FpXDiqTGWpNyr36Pm/SHlIQd1MK0dv7DPW2LOrl/iOJGeBfQtE1+bf2Usw5Qa3iadmMWVuWpEYnQYvSOo3l9rMrR8uVBPOftKNpj1E5lbXl20HtGmnZkLN9W54VPeRMyZwfFMKK3L+bZjsOUgy1x8AJhocK5UEKvUaf1NsGD1LpzlEeGgZTNBRviawbmL9B+Zg2CMHosHQv4SHLlJflBO13TB4yHrOKh66/uTPSHqD7FzCW9Zs/1NoO5WVngO5baR8212cklPlHCkGfN5/afI8xOQF2ZAUts/kegWjtyJw3HvYej8fj4YDxH2s1g6J1u3M9AAAAAElFTkSuQmCC);
                                `
                        },


                        {
                                selector: '.img_5',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVR4nO2XP2gUQRjFf6coStAIYhlBLIIiF6IoWNgF0cLCQrBNE6IomjQhYGdjoSJYiFXKYAjR1tZShIj2CeYPEY0IForosbIwCx/DZna9I9m52/dgm9vve2/mt7szcyBJkiRJkpSvBpB0+dWRGhFMQAAQAAQAAUAAEAAEAAFAAOhBAH+Afpc5XEcAb0zmRB0B3DOZr+oI4KzL2wVs1g3Appt4qqFt8I8ewKzJu9NrAN4BlwpqRk3egvn9NzACLHYjgBVgzL3aewtqB0zWVw8AzuMasNQNAL4BU8A+4xEC8NHUNb17GQDrk34i32ME8BN4ABzy+vcA04G+R6b2tnevBdwFdnueh4HHDlDlAFrAHHAsp/e0WwNC/RdN/fwWNYtmm7RKP53nbgyVAWjm9BwEnpYY2C9gv8n5UnBUfgj05eSdrxKAryvAp5Kv5mvTd6pkzxpw1cvsiw3AasnJTJq+WyV71t2OEA2AZk5PuhA+K/EJpE8901xB7V/gCXAgtk+gFVgEzwQWwTXnnWV8DmS8B87l+B+NYRFM2twGZ0zNyQDcidi3waTNg9B1c//mFl5ddRBK/uMonD7ZIybjRQGA7Ci83OZYKgGQBP4MvfX8NwIALgMfOhxDpQCSnOu+8T+xDf7RA7hg/MfrBuCH2xkyzdYNwEvPf71uAG4Y78EdmHx0AI4b77E6AkgquASgEzUimIAAIAAIAAKAACAACAACwI4CkCRJkiSJntU/CjEp0g64A1AAAAAASUVORK5CYII=);
                                `
                        },


                        {
                                selector: '.radElement-tabButtonSpan',
                                style: `
                                        color: white;
                                        text-transform: uppercase;
                                        font-family: 'BaseFontMedium';
                                `
                        },

                        {
                                selector: '.radElement-pageHeader',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        backdrop-filter: var(--general-blur);
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;

                                        width: 55em;
                                `
                        },

                        {
                                selector: '.radElement-pageHolder',
                                style: `
                                        position: absolute;
                                        padding: 1em;
                                        width: calc(100% - 2em);
                                        height: calc(100% - 2em);
                                        opacity: 0;
                                        pointer-events: none;
                                        overflow: hidden scroll;
                                        scrollbar-color: rgb(255 255 255 / 20%) transparent;
                                        scrollbar-width: thin;
                                `
                        },

                        {
                                selector: '.radElement-pageElement',
                                style: `
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: space-between;
                                        margin-bottom: 2em;
                                        height: max-content;
                                `
                        },

                        {
                                selector: '.radElement-pageElementSpan',
                                style: `
                                        color: white;
                                        font-family: 'BaseFontRegular';
                                `
                        },

                        {
                                selector: '.radElement-inputSlider',
                                style: `
                                        background: rgb(255 255 255 / 20%);
                                        border-radius: 2px;

                                        appearance: none;
                                        margin: 1em 0;
                                        height: 3px;
                                `
                        },

                        {
                                selector: '.radElement-inputSlider::-webkit-slider-thumb',
                                style: `
                                        appearance: none;
                                        background: white;
                                        border-radius: 4px;

                                        height: 10px;
                                        width: 24px;
                                `
                        },

                        {
                                selector: '.radElement-pageElementInput',
                                style: `
                                        background: rgb(255 255 255 / 20%);
                                        border: unset;
                                        border-radius: 4px;

                                        appearance: none;
                                        margin: 0.5em 0;
                                        width: 6em;
                                        height: 3em;
                                `
                        },

                        {
                                selector: '.radElement-pageElementInputValue',
                                style: `
                                        color: rgb(255 255 255 / 20%);
                                        font-family: 'BaseFontRegular';
                                `
                        },

                        //

                        {
                                selector: '.radElement-fastPick-buttonsHeader',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-top-left-radius: 2em;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 2em;
                                        corner-bottom-right-shape: bevel;

                                        display: grid;
                                        grid-template-columns: repeat(4, 6.5em);
                                        position: absolute;
                                        top: 10em;
                                        width: 26em;
                                        height: 6em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader:hover',
                                style: `
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div:first-child',
                                style: `
                                        border-top-left-radius: inherit;
                                        corner-top-left-shape: inherit;
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div:last-child',
                                style: `
                                        border-bottom-right-radius: inherit;
                                        corner-bottom-right-shape: inherit;
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div',
                                style: `
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        height: 3em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div:hover',
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                        cursor: pointer;
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > div',
                                style: `
                                        background-color: rgb(255 255 255 / 25%);
                                        mask-position: center;
                                        mask-size: contain;
                                        mask-repeat: no-repeat;

                                        width: 1.5em;
                                        height: 1.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div:hover > div',
                                style: `
                                        background: white;
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-fastBattle-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/qb_mode.71a6ec19.svg");
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-tdm-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/tdm_mode.ef239dba.svg");
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-cp-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/cp_mode.9d327fbc.svg");
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-ctf-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/ctf_mode.fba37902.svg");
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-sge-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/sge_mode.4a6035e8.svg");
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-tjr-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/jg_mode.025a9047.svg");
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-rgb-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/rgb_mode.66312ba3.svg");
                                `
                        },

                        {
                                selector: '.radElement-fastPick-buttonsHeader > div > .radElement-fastPick-asl-img',
                                style: `
                                        mask-image: url("https://s.eu.tankionline.com/static/images/asl_mode.42f836ca.svg");
                                `
                        },

                        {
                                selector: '.radElement-clockDays',
                                style: `
                                        position: absolute;
                                        margin-top: 1.6em;
                                        font-family: 'BaseFontRegular';
                                        font-size: 1.7em;
                                        color: rgb(255 255 255 / 50%);
                                `
                        },

                        {
                                selector: '.radElement-clockTime',
                                style: `
                                        position: absolute;
                                        margin-bottom: 0.9em;
                                        font-family: 'BaseFontMedium';
                                        font-size: 2.25em;
                                        color: white;
                                `
                        },

                        //

                        {
                                selector: '.UserInfoContainerStyle-blockForIconTankiOnline > img',
                                style: `
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.MainScreenComponentStyle-containerPanel, .BreadcrumbsComponentStyle-headerContainer',
                                style: `
                                        border: unset;
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-blockLeftPanel, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart',
                                style: `
                                        box-shadow: var(--general-box-shadow);
                                        border-bottom-right-radius: 1em 100%;
                                        corner-bottom-right-shape: bevel;

                                        padding-right: 1em;
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > div',
                                style: `
                                        background: var(--general-background);
                                        backdrop-filter: var(--general-blur);
                                        box-shadow: unset;
                                        border-right: var(--general-outline);
                                        border-bottom: var(--general-outline);
                                        border-bottom-right-radius: 1em 100%;
                                        corner-bottom-right-shape: bevel;
                                        border-top-left-radius: 1em 100%;
                                        corner-top-left-shape: bevel;

                                        margin-right: -1em;
                                        padding: 0em 1em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(1), .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > .BreadcrumbsComponentStyle-backButton',
                                style: `
                                        border-top-left-radius: unset;
                                        corner-top-left-shape: unset;

                                        padding-left: 0.5em;
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(1):hover, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > .BreadcrumbsComponentStyle-backButton:hover',
                                style: `
                                        background: var(--general-background-hover);
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(2):hover, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > div:nth-child(2):hover',
                                style: `
                                        background: var(--general-background-hover);
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(3) > .UserInfoContainerStyle-rankIconContainerClickable, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > div:nth-child(3) > .UserInfoContainerStyle-rankIconContainerClickable, .UserInfoContainerStyle-containerRightBorder',
                                style: `
                                        border-right: var(--general-outline);
                                        border-bottom-right-radius: inherit;
                                        corner-bottom-right-shape: inherit;
                                        border-top-left-radius: inherit;
                                        corner-top-left-shape: inherit;

                                        margin-left: -1em;
                                        padding: 0em 1em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(3) > .UserInfoContainerStyle-rankIconContainerClickable:hover, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > div:nth-child(3) > .UserInfoContainerStyle-rankIconContainerClickable:hover',
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(3) > .UserInfoContainerStyle-containerProgressMainScreen, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > div:nth-child(3) > .UserInfoContainerStyle-containerProgressMainScreen',
                                style: `
                                        margin: 0em 1em;
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(3) > .UserInfoContainerStyle-containerProgressMainScreen > .-flexStartAlignStartColumn, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > div:nth-child(3) > .UserInfoContainerStyle-containerProgressMainScreen > .-flexStartAlignStartColumn',
                                style: `
                                        background: rgb(0 0 0 / 30%);
                                        outline: var(--general-outline);
                                        border-radius: unset;
                                        border-top-left-radius: 0.04em 100%;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 0.04em 100%;
                                        corner-bottom-right-shape: bevel;

                                        margin-top: 0.5em;
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-userTitleContainer > div:nth-child(3) > .UserInfoContainerStyle-containerProgressMainScreen > .-flexStartAlignStartColumn:after, .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > div:nth-child(3) > .UserInfoContainerStyle-containerProgressMainScreen > .-flexStartAlignStartColumn:after',
                                style: `
                                        background: linear-gradient(270deg, rgb(255 255 255), transparent);
                                        border-radius: unset;
                                        border-top-left-radius: 0.04em 100%;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 0.04em 100%;
                                        corner-bottom-right-shape: bevel;
                                `
                        },

                        {
                                selector: '.UserInfoContainerStyle-xpIcon',
                                style: `
                                        background-image: url(data:image/png;base64,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);
                                `
                        },

                        {
                                selector: `.UserInfoContainerStyle-progressValue,
                                           .UserInfoContainerStyle-progressValue > span`,
                                style: `
                                        color: white;
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div`,
                                style: `
                                        background: var(--general-background);
                                        backdrop-filter: var(--general-blur);
                                        box-shadow: unset;
                                        border-left: var(--general-outline);
                                        border-right: unset;
                                        border-bottom: var(--general-outline);
                                        border-bottom-left-radius: 1em 100%;
                                        corner-bottom-left-shape: bevel;
                                        border-top-right-radius: 1em 100%;
                                        corner-top-right-shape: bevel;

                                        margin-left: -1em;
                                        padding: 0em 1em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:hover,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:hover`,
                                style: `
                                        background: var(--general-background-hover);
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(1),
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(1)`,
                                style: `
                                        background: unset;
                                        backdrop-filter: unset;
                                        border: unset;

                                        flex-direction: row-reverse;
                                        justify-content: flex-end;
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(1) > .HeaderCommonStyle-icons,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(1) > .HeaderCommonStyle-icons`,
                                style: `
                                        background: unset;
                                        border: unset;

                                        min-width: 3em;
                                        margin: unset;
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(1) > .HeaderCommonStyle-icons > .UserScoreComponentStyle-addRubyCrystal,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(1) > .HeaderCommonStyle-icons > .UserScoreComponentStyle-addRubyCrystal`,
                                style: `
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(2) > .-maskImageContain,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(2) > .-maskImageContain`,
                                style: `
                                        background: rgb(255 255 255 / 25%);

                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(2):hover > .-maskImageContain,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(2):hover > .-maskImageContain`,
                                style: `
                                        background: rgb(255 255 255);
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(3),
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(3)`,
                                style: `
                                        border-top-right-radius: unset;
                                        corner-top-right-shape: unset;
                                        padding-right: 0.5em;
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(3) > .BreadcrumbsComponentStyle-iconLogout,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(3) > .IconStyle-iconLogOff,
                                           .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > .BreadcrumbsComponentStyle-backButton > .IconStyle-iconBackArrow`,
                                style: `
                                        background: rgb(255 255 255 / 25%);

                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: `.UserScoreComponentStyle-blockRightPanel > div:nth-child(3):hover > .BreadcrumbsComponentStyle-iconLogout,
                                           .BreadcrumbsComponentStyle-rightButtonsContainer > div:nth-child(3):hover > .IconStyle-iconLogOff,
                                           .BreadcrumbsComponentStyle-headerContainer > .-flexCenterAlignStart > .BreadcrumbsComponentStyle-backButton:hover > .IconStyle-iconBackArrow`,
                                style: `
                                        background: rgb(255 255 255);
                                `
                        },

                        //

                        {
                                selector: `.-container > .ContainersComponentStyle-navigationBlockForCategories,
                                           .-container > .ProBattlesComponentStyle-navigationBlock,
                                           .-container > .GarageMenuComponentStyle-garageMenuContainer,
                                           .-container > .ContainersComponentStyle-navigationContainer > .ContainersComponentStyle-navigationBlock,
                                           .-container > .-flexStartAlignStart > .GarageMenuComponentStyle-garageMenuContainer,
                                           .-container > .-flexStartAlignCenterColumn > .GarageMenuComponentStyle-garageMenuContainer,
                                           .-container > .GarageCommonStyle-garageContainer > .GarageMenuComponentStyle-garageMenuContainer > .-flexCenterAlignCenter,
                                           .GarageCommonStyle-garageContainer > .GarageMenuComponentStyle-garageMenuContainer.-flexCenterAlignCenterColumn > .GarageMenuComponentStyle-garageMenuContainer`,
                                style: `
                                        background: var(--general-background);
                                        box-shadow: var(--general-box-shadow);
                                        border-top: var(--general-outline);
                                        border-bottom: var(--general-outline);
                                        backdrop-filter: var(--general-blur);

                                        height: 3em;
                                        margin-top: 1em;
                                `
                        },

                        {
                                selector: `.-container > .ContainersComponentStyle-navigationContainer > .ContainersComponentStyle-navigationBlock > .-flexCenterAlignCenterColumn,
                                           .-container > .ContainersComponentStyle-navigationContainer > .ContainersComponentStyle-navigationBlock > .-flexCenterAlignCenterColumn > .-flexCenterAlignCenter,
                                           .-container > .ProBattlesComponentStyle-navigationBlock > .ProBattlesComponentStyle-section,
                                           .-container > .ProBattlesComponentStyle-navigationBlock > .ProBattlesComponentStyle-section > .-flexCenterAlignCenter,
                                           .GarageMenuComponentStyle-garageMenuContainer > .-flexCenterAlignCenter,
                                           .-flexCenterAlignCenter > .MenuComponentStyle-blockButtonsQECommunity,
                                           .-flexCenterAlignCenter > .MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity,
                                           .-flexCenterAlignCenter > .MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex`,
                                style: `
                                        height: inherit;
                                        padding: unset;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-mainMenuItem > span',
                                style: `
                                        background: unset;
                                        color: rgb(255 255 255 / 30%) !important;
                                        text-shadow: unset;

                                        padding: unset;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-mainMenuItem:hover span',
                                style: `
                                        color: white !important;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-mainMenuItem.-activeMenu span',
                                style: `
                                        color: white !important;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-decorLineMenu',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        border-radius: unset;

                                        width: 3em;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE:hover',
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE > span',
                                style: `
                                        color: transparent;
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO3aPSiucRjH8e9DOJE8MTicQWI4shhQFtFZlKPOciKLYjJ4FguD8pJFYbBgsKDOIi91FgbLOSeLSFmUhFOnMBx5jbx01zM/17XR774/de/39buv/7/u6/+HSCTyDiwCLymeCyALUXHg1ghgHGEJo/jgqUTYjlH8b4TVOr5+J8JmjeKvgFxE5QCXRgDTCOtytH8Nwv4Yxe8h7LPj6/cgbMIo/g7IR1QmcGYEsICwNkf7NyBswyj+EIghqhR4MgLoQ9iIUfwjUIyodODECGAZYV8dm18zwlaM4v8mu0TSR+DBCGAYYf1G8c9AGaJiwIERwDrCGh2bXyvCFo3io5E3whKO9o9G3qpqwz7yngnzyDsQ+gCqHUsgGI1L2zYC2EJct6MLqhCWB1wbAUwhbs4I4D+QjbA6xzLoQNyuEcAvxCXC/k8QB26MACYRN++YC3xAWL1jGbQjbt8IYBNxvY4uqEBYAXBvBDCGuB9GAOfKQ9LAF8cy+I6wWNgPSkhegrCOysoRVug4LB1F3JIRwD8gA2FNjs3wG8LSgCMjgJ+IGzACCG6UlSCsKHkzLFUIg4hbMwI4Vb47FGhxbIbBDTNZ6cCxEcAq4oaMAIJ94tNbv2Qkgp5X8N3wnDvf6rkAAAAASUVORK5CYII=);
                                        background: rgb(255 255 255 / 30%);
                                        mask-position: center;
                                        mask-size: contain;
                                        mask-repeat: no-repeat;
                                        font-size: 2em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE:hover > span',
                                style: `
                                        background: white !important;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE:first-child',
                                style: `
                                        border-bottom-left-radius: 1em 100%;
                                        corner-bottom-left-shape: bevel;
                                        border-top-right-radius: 1em 100%;
                                        corner-top-right-shape: bevel;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE:first-child > span',
                                style: `
                                        rotate: -18deg;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE:last-child',
                                style: `
                                        border-bottom-right-radius: 1em 100%;
                                        corner-bottom-right-shape: bevel;
                                        border-top-left-radius: 1em 100%;
                                        corner-top-left-shape: bevel;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-blockButtonsQECommunity > .-buttonQE:last-child > span',
                                style: `
                                        rotate: 198deg;
                                `
                        },

                        {
                                selector: `.MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-mainMenuItem,
                                           .MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-commonBlock > .MenuComponentStyle-mainMenuItem`,
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        color: rgb(255 255 255 / 30%);

                                        margin: unset;
                                        padding-left: 1.25em;
                                        padding-right: 1.25em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: `.MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-mainMenuItem:hover,
                                           .MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-commonBlock > .MenuComponentStyle-mainMenuItem:hover`,
                                style: `
                                        color: white;
                                `
                        },

                        {
                                selector: `.MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-mainMenuItem:first-child,
                                           .MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-commonBlock:first-child > .MenuComponentStyle-mainMenuItem`,
                                style: `
                                        border-bottom-left-radius: 1em 100%;
                                        corner-bottom-left-shape: bevel;

                                        padding-left: 2em;
                                `
                        },

                        {
                                selector: `.MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-mainMenuItem:last-child,
                                           .MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-commonBlock:last-child > .MenuComponentStyle-mainMenuItem`,
                                style: `
                                        border-bottom-right-radius: 1em 100%;
                                        corner-bottom-right-shape: bevel;

                                        padding-right: 2em;
                                `
                        },

                        {
                                selector: `.MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .-activeMenu,
                                           .MenuComponentStyle-blockButtonsQECommunity > .MenuComponentStyle-battleTitleCommunity > .-displayFlex > .MenuComponentStyle-commonBlock > .-activeMenu`,
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                        color: white;
                                `
                        },

                        {
                                selector: '.MenuComponentStyle-disabledMenuItem',
                                style: `
                                        color: rgb(255 255 255 / 30%) !important;
                                `
                        },

                        {
                                selector: '.-menuItemActive',
                                style: `
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-commonBlockHotkeyV',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        border-top-right-radius: 1em 100%;
                                        corner-top-right-shape: bevel;

                                        width: 7.5em;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-commonBlockHotkeyV:hover',
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-commonBlockHotkeyV > .-flexCenterAlignCenterColumn > .-maskImageContain',
                                style: `
                                        background: rgb(255 255 255 / 30%);

                                        margin-right: 0.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-commonBlockHotkeyV:hover > .-flexCenterAlignCenterColumn > .-maskImageContain',
                                style: `
                                        background: white;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-commonBlockHotkeyV > .-flexCenterAlignCenterColumn',
                                style: `
                                        border-top-right-radius: inherit;
                                        corner-top-right-shape: inherit;

                                        width: inherit;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.-flexStartAlignStart > .ProBattlesComponentStyle-commonBlockHotkeyV',
                                style: `
                                        border: unset;

                                        position: absolute;
                                        margin-top: 1.09em;
                                        height: 3em;
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-chatBlock,
                                           .ContainersComponentStyle-chatBlock`,
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        border-top-left-radius: 1em 100%;
                                        corner-top-left-shape: bevel;

                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        width: 7.5em;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-chatBlock:hover,
                                           .ContainersComponentStyle-chatBlock:hover`,
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-chatBlock > .ProBattlesComponentStyle-chatIcon,
                                           .ContainersComponentStyle-chatBlock > .ContainersComponentStyle-chatIcon`,
                                style: `
                                        background: rgb(255 255 255 / 30%);

                                        margin-right: unset;
                                        margin-left: 0.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-chatBlock:hover > .ProBattlesComponentStyle-chatIcon,
                                           .ContainersComponentStyle-chatBlock:hover > .ContainersComponentStyle-chatIcon`,
                                style: `
                                        background: white;
                                `
                        },

                        //

                        {
                                selector: '.PrimaryMenuItemComponentStyle-notificationIconNewNews',
                                style: `
                                        background: rgb(255 204 0 / 10%);
                                        corner-top-left-shape: inherit;
                                        border-top-left-radius: inherit;
                                        corner-bottom-right-shape: inherit;
                                        border-bottom-right-radius: inherit;

                                        top: 0em;
                                        left: 0em;
                                        width: 100%;
                                        height: 100%;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient',
                                style: `
                                        background: linear-gradient(315deg, transparent 0%, rgb(0 0 0 / 25%) 50%, transparent 100%);
                                        outline: var(--general-outline);
                                        box-shadow: 0 0 4em rgb(0 0 0 / 100%);
                                        corner-top-left-shape: bevel;
                                        border-top-left-radius: 8em;
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 5em;
                                        backdrop-filter: var(--general-blur);

                                        align-items: center;
                                        justify-content: center;
                                        justify-self: center;
                                        width: 28em;
                                        height: calc(100% - 8em);
                                        margin: 1em;
                                        z-index: 1;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-gradientBlock',
                                style: `
                                        visibility: hidden;
                                        pointer-events: none;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex',
                                style: `
                                        position: absolute;
                                        top: 0em;
                                        margin: 1em;
                                        width: 26em;
                                        height: 8em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        backdrop-filter: unset !important;
                                        border-radius: unset;
                                        border-bottom-right-radius: 5em;
                                        border-top-left-radius: 4em;
                                        corner-bottom-right-shape: bevel;
                                        corner-top-left-shape: bevel;

                                        width: inherit;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        border-bottom-right-radius: 3.5em;
                                        border-top-left-radius: 2.5em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay:before',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 2.5em;

                                        position: absolute;
                                        top: 0em;
                                        left: 0em;
                                        width: 2.5em;
                                        height: 2.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay:hover:before',
                                style: `
                                        border-bottom-right-radius: 1em;

                                        width: 1em;
                                        height: 1em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay:after',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-top-left-shape: bevel;
                                        border-top-left-radius: 3.5em;

                                        position: absolute;
                                        bottom: 0em;
                                        right: 0em;
                                        width: 3.5em;
                                        height: 3.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay:hover:after',
                                style: `
                                        border-top-left-radius: 2em;

                                        width: 2em;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay > span',
                                style: `
                                        background-color: rgb(255 255 255 / 25%);
                                        mask-image: url(data:image/png;base64,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);
                                        mask-position: center;
                                        mask-repeat: no-repeat;
                                        mask-size: contain;
                                        font-size: 3em;
                                        color: transparent;
                                        transition: var(--general-transition);
                                        pointer-events: none;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .-displayFlex > .MainScreenComponentStyle-buttonPlay:hover > span',
                                style: `
                                        background-color: rgb(255 255 255 / 100%);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu',
                                style: `
                                        position: absolute;
                                        top: 16em;
                                        margin: 1em;
                                        width: 26em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul',
                                style: `
                                        width: inherit;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-radius: unset;
                                        border-bottom-right-radius: 3em;
                                        border-top-left-radius: 2em;
                                        corner-bottom-right-shape: bevel;
                                        corner-top-left-shape: bevel;

                                        flex-grow: unset;
                                        margin-left: unset;
                                        margin-bottom: 1em;
                                        width: inherit;
                                        height: 4em;
                                        max-height: unset;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        border-bottom-right-radius: 2em;
                                        border-top-left-radius: 1.25em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer:before',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 1em;

                                        position: absolute;
                                        top: 0em;
                                        left: 0em;
                                        width: 1em;
                                        height: 1em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer:hover:before',
                                style: `
                                        border-bottom-right-radius: 0.5em;

                                        width: 0.5em;
                                        height: 0.5em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer:after',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-top-left-shape: bevel;
                                        border-top-left-radius: 2em;

                                        position: absolute;
                                        bottom: 0em;
                                        right: 0em;
                                        width: 2em;
                                        height: 2em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer:hover:after',
                                style: `
                                        border-top-left-radius: 1em;

                                        width: 1em;
                                        height: 1em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer > div',
                                style: `
                                        background-color: rgb(255 255 255 / 25%);

                                        margin-left: 2em;
                                        width: 2.5em;
                                        height: 2.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer:hover > div',
                                style: `
                                        background-color: rgb(255 255 255 / 100%);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul > .PrimaryMenuItemComponentStyle-menuItemContainer > .PrimaryMenuItemComponentStyle-itemName',
                                style: `
                                        font-size: 1.5em;
                                        margin-left: 0.5em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer',
                                style: `
                                        position: absolute;
                                        justify-content: center;
                                        bottom: 0em;
                                        margin: 1em;
                                        width: 26em;
                                        height: 4em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul',
                                style: `
                                        justify-content: space-between;
                                        margin: unset;
                                        width: inherit;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-radius: unset;
                                        border-bottom-right-radius: 2em;
                                        border-top-left-radius: 1.5em;
                                        corner-bottom-right-shape: bevel;
                                        corner-top-left-shape: bevel;

                                        width: 5.75em;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        border-bottom-right-radius: 1.5em;
                                        border-top-left-radius: 1em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu:before',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 0.75em;

                                        position: absolute;
                                        top: 0em;
                                        left: 0em;
                                        width: 0.75em;
                                        height: 0.75em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu:hover:before',
                                style: `
                                        border-bottom-right-radius: 0.375em;

                                        width: 0.375em;
                                        height: 0.375em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu:after',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-top-left-shape: bevel;
                                        border-top-left-radius: 1.25em;

                                        position: absolute;
                                        bottom: 0em;
                                        right: 0em;
                                        width: 1.25em;
                                        height: 1.25em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu:hover:after',
                                style: `
                                        border-top-left-radius: 0.75em;

                                        width: 0.75em;
                                        height: 0.75em;
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu > div',
                                style: `
                                        background-color: rgb(255 255 255 / 25%);

                                        width: 1.5em;
                                        height: 1.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.-container > .MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > .FooterComponentStyle-containerMenu:hover > div',
                                style: `
                                        background-color: rgb(255 255 255 / 100%);
                                `
                        },

                        //

                        {
                                selector: '.MainScreenComponentStyle-gradientBlockRight',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        backdrop-filter: var(--general-blur);
                                        border-radius: unset;
                                        border-bottom-left-radius: 5em;
                                        corner-bottom-left-shape: bevel;
                                        border-top-right-radius: 5em;
                                        corner-top-right-shape: bevel;

                                        top: 7em;
                                        right: 1em;
                                        margin: 1em;
                                        width: 26em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        border-bottom-left-radius: 3.5em;
                                        border-top-right-radius: 3.5em;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass:before',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-bottom-left-shape: bevel;
                                        border-bottom-left-radius: 3.5em;

                                        position: absolute;
                                        top: 0em;
                                        right: 0em;
                                        width: 3.5em;
                                        height: 3.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass:hover:before',
                                style: `
                                        border-bottom-left-radius: 2em;

                                        width: 2em;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass:after',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-top-right-shape: bevel;
                                        border-top-right-radius: 3.5em;

                                        position: absolute;
                                        bottom: 0em;
                                        left: 0em;
                                        width: 3.5em;
                                        height: 3.5em;
                                        transition: var(--general-transition);
                                        z-index: -1;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass:hover:after',
                                style: `
                                        border-top-right-radius: 2em;

                                        width: 2em;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass > .BattlePassLobbyComponentStyle-descriptionMenuPass > div > .-whiteSpaceNoWrap',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-menuBattlePass > .BattlePassLobbyComponentStyle-descriptionMenuPass > .BattlePassLobbyComponentStyle-numberStar',
                                style: `
                                        position: absolute;
                                        left: 1em;
                                        margin: unset;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-timers > div > span',
                                style: `
                                        font-size: 1.125em;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-blockBattlePass',
                                style: `
                                        background: unset;
                                        border: unset;
                                `
                        },

                        {
                                selector: '.BattlePassLobbyComponentStyle-blockBattlePass > div',
                                style: `
                                        border: unset;
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        backdrop-filter: var(--general-blur) !important;
                                        border-radius: unset;
                                        border-bottom-left-radius: 2em;
                                        corner-bottom-left-shape: bevel;
                                        border-top-left-radius: 2em;
                                        corner-top-left-shape: bevel;

                                        top: 8em;
                                        right: 29em;
                                        width: 10em;
                                        height: 10em;
                                        padding: unset;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .EventBattlePassLobbyComponentStyle-descriptionEventPass',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .EventBattlePassLobbyComponentStyle-commonBlockProgressBar',
                                style: `
                                        background: transparent;

                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        top: 2.75em;
                                        width: 6em;
                                        height: 6em;
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .EventBattlePassLobbyComponentStyle-commonBlockProgressBar:before',
                                style: `
                                        content: '';
                                        background-image: url(https://tankionline.com/play/static/images/passEvent.1a861057.svg);
                                        background-position: center;
                                        background-size: contain;
                                        background-repeat: no-repeat;

                                        position: absolute;
                                        width: 4em;
                                        height: 4em;
                                        opacity: 0.25;
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .EventBattlePassLobbyComponentStyle-commonBlockProgressBar > div',
                                style: `
                                        width: inherit;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .EventBattlePassLobbyComponentStyle-commonBlockProgressBar > div > div',
                                style: `
                                        border-color: rgb(255 204 0 / 10%);
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .EventBattlePassLobbyComponentStyle-commonBlockProgressBar > h2',
                                style: `
                                        font-size: 2.5em;
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .-flexCenterAlignCenterColumn',
                                style: `
                                        left: unset;
                                `
                        },

                        {
                                selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > .-flexCenterAlignCenterColumn > .ChallengeTimerComponentStyle-timer > .ChallengeTimerComponentStyle-textTime',
                                style: `
                                        background-color: transparent;
                                        color: rgb(255 204 0);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-mainContainer',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        backdrop-filter: var(--general-blur);
                                        border: unset !important;
                                        border-radius: unset;
                                        border-bottom-left-radius: 5em;
                                        corner-bottom-left-shape: bevel;
                                        border-top-right-radius: 3em;
                                        corner-top-right-shape: bevel;

                                        right: 2em;
                                        width: 26em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-mainContainer > .-flexCenterAlignCenterColumn',
                                style: `
                                        background: transparent;
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-mainContainer:before',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-bottom-left-shape: bevel;
                                        border-bottom-left-radius: 1.75em;
                                        position: absolute;
                                        top: 0em;
                                        right: 0em;
                                        width: 1.75em;
                                        height: 1.75em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-mainContainer:after',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-top-right-shape: bevel;
                                        border-top-right-radius: 3.5em;

                                        position: absolute;
                                        bottom: 0em;
                                        left: 0em;
                                        width: 3.5em;
                                        height: 3.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-mainBackGroundContainer',
                                style: `
                                        corner-top-right-shape: bevel;
                                        border-top-right-radius: inherit;
                                        corner-bottom-left-shape: bevel;
                                        border-bottom-left-radius: 2.5em;

                                        width: 100%;

                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-mainBackGroundContainer > .AnnouncementHomeScreenComponentStyle-mainClickContainer',
                                style: `
                                        corner-top-right-shape: inherit;
                                        border-top-right-radius: inherit;
                                        corner-bottom-left-shape: inherit;
                                        border-bottom-left-radius: inherit;

                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-mainBackGroundContainer > .AnnouncementHomeScreenComponentStyle-mainClickContainer > .AnnouncementHomeScreenComponentStyle-announceDescriptionContainer',
                                style: `
                                        corner-top-right-shape: inherit;
                                        border-top-right-radius: inherit;
                                        corner-bottom-left-shape: inherit;
                                        border-bottom-left-radius: inherit;
                                        border-top-left-radius: unset !important;

                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-announceContainer',
                                style: `
                                        background: unset;
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer',
                                style: `
                                        position: fixed !important;
                                        flex-direction: column !important;
                                        top: 0em !important;
                                        bottom: unset !important;
                                        left: -3em !important;
                                        width: 2em !important;
                                        height: 100% !important;
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-radius: unset;

                                        margin: unset !important;
                                        height: calc(50% - 0.5em) !important;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div > span',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div:nth-child(1)',
                                style: `
                                        border-top-left-radius: 0.5em;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 0.5em;
                                        corner-bottom-right-shape: bevel;
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div:nth-child(2)',
                                style: `
                                        border-bottom-left-radius: 0.5em;
                                        corner-bottom-left-shape: bevel;
                                        border-top-right-radius: 0.5em;
                                        corner-top-right-shape: bevel;
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div:nth-child(1):before',
                                style: `
                                        content: '';
                                        background-color: rgb(255 255 255 / 25%);
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO3aPSiucRjH8e9DOJE8MTicQWI4shhQFtFZlKPOciKLYjJ4FguD8pJFYbBgsKDOIi91FgbLOSeLSFmUhFOnMBx5jbx01zM/17XR774/de/39buv/7/u6/+HSCTyDiwCLymeCyALUXHg1ghgHGEJo/jgqUTYjlH8b4TVOr5+J8JmjeKvgFxE5QCXRgDTCOtytH8Nwv4Yxe8h7LPj6/cgbMIo/g7IR1QmcGYEsICwNkf7NyBswyj+EIghqhR4MgLoQ9iIUfwjUIyodODECGAZYV8dm18zwlaM4v8mu0TSR+DBCGAYYf1G8c9AGaJiwIERwDrCGh2bXyvCFo3io5E3whKO9o9G3qpqwz7yngnzyDsQ+gCqHUsgGI1L2zYC2EJct6MLqhCWB1wbAUwhbs4I4D+QjbA6xzLoQNyuEcAvxCXC/k8QB26MACYRN++YC3xAWL1jGbQjbt8IYBNxvY4uqEBYAXBvBDCGuB9GAOfKQ9LAF8cy+I6wWNgPSkhegrCOysoRVug4LB1F3JIRwD8gA2FNjs3wG8LSgCMjgJ+IGzACCG6UlSCsKHkzLFUIg4hbMwI4Vb47FGhxbIbBDTNZ6cCxEcAq4oaMAIJ94tNbv2Qkgp5X8N3wnDvf6rkAAAAASUVORK5CYII=);
                                        mask-position: center;
                                        mask-size: 2.5em;
                                        mask-repeat: no-repeat;

                                        position: absolute;
                                        width: inherit;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div:hover:nth-child(1):before',
                                style: `
                                        background-color: rgb(255 255 255 / 100%);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div:nth-child(2):before',
                                style: `
                                        content: '';
                                        background-color: rgb(255 255 255 / 25%);
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO3aPSiucRjH8e9DOJE8MTicQWI4shhQFtFZlKPOciKLYjJ4FguD8pJFYbBgsKDOIi91FgbLOSeLSFmUhFOnMBx5jbx01zM/17XR774/de/39buv/7/u6/+HSCTyDiwCLymeCyALUXHg1ghgHGEJo/jgqUTYjlH8b4TVOr5+J8JmjeKvgFxE5QCXRgDTCOtytH8Nwv4Yxe8h7LPj6/cgbMIo/g7IR1QmcGYEsICwNkf7NyBswyj+EIghqhR4MgLoQ9iIUfwjUIyodODECGAZYV8dm18zwlaM4v8mu0TSR+DBCGAYYf1G8c9AGaJiwIERwDrCGh2bXyvCFo3io5E3whKO9o9G3qpqwz7yngnzyDsQ+gCqHUsgGI1L2zYC2EJct6MLqhCWB1wbAUwhbs4I4D+QjbA6xzLoQNyuEcAvxCXC/k8QB26MACYRN++YC3xAWL1jGbQjbt8IYBNxvY4uqEBYAXBvBDCGuB9GAOfKQ9LAF8cy+I6wWNgPSkhegrCOysoRVug4LB1F3JIRwD8gA2FNjs3wG8LSgCMjgJ+IGzACCG6UlSCsKHkzLFUIg4hbMwI4Vb47FGhxbIbBDTNZ6cCxEcAq4oaMAIJ94tNbv2Qkgp5X8N3wnDvf6rkAAAAASUVORK5CYII=);
                                        mask-position: center;
                                        mask-size: 2.5em;
                                        mask-repeat: no-repeat;
                                        rotate: 180deg;

                                        position: absolute;
                                        width: inherit;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-navigationContainer > div:hover:nth-child(2):before',
                                style: `
                                        background-color: rgb(255 255 255 / 100%);
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-headerTimer',
                                style: `
                                        background: var(--general-background);
                                        border-radius: unset;
                                        border-bottom: var(--general-outline);
                                        border-right: var(--general-outline);
                                        border-bottom-right-radius: 2em;
                                        corner-bottom-right-shape: bevel;
                                        backdrop-filter: var(--general-blur);

                                        top: 0em;
                                        left: 0em;
                                        padding: 0.25em 2em 0.25em 0.5em;
                                `
                        },

                        {
                                selector: '.AnnouncementHomeScreenComponentStyle-headerTimer > div > span',
                                style: `
                                        color: white;
                                `
                        },

                        //

                        {
                                selector: '.ModalStyle-shaded',
                                style: `
                                        backdrop-filter: blur(0.5em);
                                `
                        },

                        {
                                selector: '.BattlePickComponentStyle-commonStyleBlock',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        //

                        {
                                selector: `.FriendRequestComponentStyle-blockInformationCommunityNoSearch,
                                           .FriendRequestComponentStyle-blockInformationCommunity`,
                                style: `
                                        margin-left: unset;
                                `
                        },

                        {
                                selector: '.FriendRequestComponentStyle-blockInformationCommunityNoSearch > .FriendListComponentStyle-friendsOnline',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-containerForm',
                                style: `
                                        justify-content: flex-end;
                                        height: 3em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-friendSearchInput',
                                style: `
                                        height: 3em !important;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-friendSearchInput > .SearchInputComponentStyle-searchInput',
                                style: `
                                        border-radius: unset;

                                        height: 3em !important;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-friendSearchInput > .SearchInputComponentStyle-searchInput > input',
                                style: `
                                        background: var(--general-background) !important;
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-radius: unset;
                                        border-top-left-radius: 1em;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 1em;
                                        corner-bottom-right-shape: bevel;

                                        height: 3em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-friendSearchInput > .SearchInputComponentStyle-searchInput > input:hover',
                                style: `
                                        background: var(--general-background-hover) !important;
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-friendSearchInput > .SearchInputComponentStyle-searchInput > input:focus',
                                style: `
                                        background: var(--general-background-hover) !important;
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-friendSearchInput > span',
                                style: `
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-containerButtonFriends',
                                style: `
                                        margin-left: 1em;
                                        width: 6em;
                                        height: 3em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-containerButtonFriends > .ButtonComponentStyle-disabled',
                                style: `
                                        width: 6em !important;
                                        height: 3em !important;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonFoundAdd',
                                style: `
                                        background: rgb(116 186 61 / 30%) !important;
                                        box-shadow: unset !important;
                                        border-radius: unset;
                                        border-bottom-right-radius: 1em;
                                        corner-bottom-right-shape: bevel;
                                        border-top-left-radius: 1em;
                                        corner-top-left-shape: bevel;

                                        position: absolute;
                                        right: 7em;
                                        width: 6em !important;
                                        height: 3em !important;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonFoundAdd:hover',
                                style: `
                                        background: rgb(116 186 61 / 60%) !important;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonNoFoundUser',
                                style: `
                                        background: rgb(235 87 87 / 30%) !important;
                                        box-shadow: unset !important;
                                        border-radius: unset;
                                        border-bottom-right-radius: 1em;
                                        corner-bottom-right-shape: bevel;
                                        border-top-left-radius: 1em;
                                        corner-top-left-shape: bevel;

                                        position: absolute;
                                        right: 7em;
                                        width: 6em !important;
                                        height: 3em !important;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonNoFoundUser:hover',
                                style: `
                                        background: rgb(235 87 87 / 60%) !important;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonCloseAddFriends',
                                style: `
                                        background: var(--general-background) !important;
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-radius: unset;
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;

                                        position: absolute;
                                        margin: unset !important;
                                        width: 6em !important;
                                        height: 3em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonCloseAddFriends:hover',
                                style: `
                                        background: var(--general-background-hover) !important;
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonCloseAddFriends > img',
                                style: `
                                        opacity: 0.5;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonCloseAddFriends:hover > img',
                                style: `
                                        opacity: 1;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-containerButtonFriends > .FriendListComponentStyle-buttonAddFriends',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        backdrop-filter: var(--general-blur);
                                        border-radius: unset;
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;

                                        width: inherit;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-containerButtonFriends > .FriendListComponentStyle-buttonAddFriends:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonAddFriends > img',
                                style: `
                                        filter: grayscale(1) brightness(15) !important;
                                        opacity: 0.5;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-buttonAddFriends:hover > img',
                                style: `
                                        opacity: 1;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-scrollCommunity',
                                style: `
                                        align-items: center;
                                        margin-top: unset;
                                        padding-top: 1em;
                                        width: 100%;
                                        height: 51.5em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity',
                                style: `
                                        height: 4em;
                                        min-height: unset;
                                        padding: unset;
                                        margin-bottom: 1em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > .FriendListComponentStyle-blockList',
                                style: `
                                        backdrop-filter: var(--general-blur);

                                        height: inherit;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(1)',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-radius: unset;
                                        border-bottom-right-radius: 3em;
                                        border-top-left-radius: 2em;
                                        corner-bottom-right-shape: bevel;
                                        corner-top-left-shape: bevel;

                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(1):hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        border-bottom-right-radius: 2em;
                                        border-top-left-radius: 1.25em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(1):before',
                                style: `
                                        content: '';
                                        outline: var(--general-outline);
                                        box-shadow: inherit;
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 1.25em;

                                        position: absolute;
                                        align-self: flex-start;
                                        width: 1.25em;
                                        height: 1.25em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(1):hover:before',
                                style: `
                                        outline: var(--general-outline-hover);
                                        border-bottom-right-radius: 0.5em;

                                        width: 0.5em;
                                        height: 0.5em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(1):after',
                                style: `
                                        content: '';
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        corner-top-left-shape: bevel;
                                        border-top-left-radius: 2em;

                                        position: absolute;
                                        right: 0em;
                                        align-self: flex-end;
                                        width: 2em;
                                        height: 2em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(1):hover:after',
                                style: `
                                        outline: var(--general-outline-hover);
                                        border-top-left-radius: 1em;

                                        width: 1em;
                                        height: 1em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(2)',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        border-radius: unset;
                                        border-bottom-left-radius: 3em;
                                        border-top-right-radius: 2em;
                                        corner-bottom-left-shape: bevel;
                                        corner-top-right-shape: bevel;

                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(2):hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                        border-bottom-left-radius: 2em;
                                        border-top-right-radius: 1.25em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(2):before',
                                style: `
                                        content: '';
                                        outline: var(--general-outline);
                                        box-shadow: inherit;
                                        corner-top-right-shape: bevel;
                                        border-top-right-radius: 2em;

                                        position: absolute;
                                        left: 0em;
                                        align-self: flex-end;
                                        width: 2em;
                                        height: 2em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(2):hover:before',
                                style: `
                                        outline: var(--general-outline-hover);
                                        border-top-right-radius: 1em;

                                        width: 1em;
                                        height: 1em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(2):after',
                                style: `
                                        content: '';
                                        outline: var(--general-outline);
                                        box-shadow: inherit;
                                        corner-bottom-left-shape: bevel;
                                        border-bottom-left-radius: 1.25em;

                                        position: absolute;
                                        right: 0em;
                                        align-self: flex-start;
                                        width: 1.25em;
                                        height: 1.25em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-stringCommunity > div:nth-child(2):hover:after',
                                style: `
                                        outline: var(--general-outline-hover);
                                        border-bottom-left-radius: 0.5em;

                                        width: 0.5em;
                                        height: 0.5em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-substrateRhombus',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-blockImage',
                                style: `
                                        margin-left: 3em;
                                        width: 3.5em;
                                        height: 3.5em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-rangFriends',
                                style: `
                                        width: inherit;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-containerNickName',
                                style: `
                                        margin-right: -6em;
                                        margin-left: unset;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-containerFriends',
                                style: `
                                        margin-top: 1em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-blockOnline',
                                style: `
                                        margin-top: unset;
                                        margin-right: 3em;
                                `
                        },

                        {
                                selector: '.FriendListComponentStyle-opacityText, .FriendListComponentStyle-greenTextOnline',
                                style: `
                                        margin-top: unset;
                                `
                        },

                        //

                        {
                                selector: '.ClanCommonStyle-marginContent',
                                style: `
                                        margin-top: 1em;
                                `
                        },

                        {
                                selector: '.ClanHeaderComponentStyle-blockInform',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        backdrop-filter: var(--general-blur);
                                        border-top-left-radius: 3em;
                                        corner-top-left-shape: bevel;
                                `
                        },

                        {
                                selector: '.ClanHeaderComponentStyle-blockInform:before',
                                style: `
                                        content: '';
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 2em;

                                        position: absolute;
                                        align-self: flex-start;
                                        width: 2em;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-messageClan',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        backdrop-filter: var(--general-blur);
                                        border-bottom-right-radius: 3em;
                                        corner-bottom-right-shape: bevel;

                                        margin-top: 1em;
                                        padding-bottom: 1em;
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-messageClan:after',
                                style: `
                                        content: '';
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow);
                                        corner-top-left-shape: bevel;
                                        border-top-left-radius: 2em;

                                        position: absolute;
                                        align-self: flex-end;
                                        margin-bottom: -1em;
                                        width: 2em;
                                        height: 2em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-messageClan > .ClanInfoComponentStyle-header',
                                style: `
                                        color: rgb(255 255 255 / 30%);
                                        font-size: 1em;
                                        margin: 1em;
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-messageClan > .ClanInfoComponentStyle-content',
                                style: `
                                        scrollbar-color: rgb(255 255 255 / 30%) transparent;
                                        margin-top: unset;
                                        margin-left: 1em;
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-buttonEditProfile',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        backdrop-filter: var(--general-blur);
                                        border-radius: unset;
                                        border-top-left-radius: 1em;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 1em;
                                        corner-bottom-right-shape: bevel;

                                        margin-top: 1em !important;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-buttonEditProfile:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-buttonEditProfile > span',
                                style: `
                                        color: rgb(255 255 255 / 30%);
                                        padding: unset !important;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ClanInfoComponentStyle-buttonEditProfile:hover > span',
                                style: `
                                        color: white;
                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        {
                                selector: '',
                                style: `

                                `
                        },

                        //

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer',
                                style: `
                                        margin-top: 1em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1)',
                                style: `
                                        background: var(--general-background);
                                        box-shadow: var(--general-box-shadow);
                                        border-right: var(--general-outline);
                                        border-top: var(--general-outline);
                                        border-top-right-radius: 3em;
                                        corner-top-right-shape: bevel;
                                        backdrop-filter: var(--general-blur);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1):before',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: var(--general-outline);
                                        box-shadow: inherit;
                                        corner-bottom-left-shape: bevel;
                                        border-bottom-left-radius: 2em;

                                        position: absolute;
                                        top: 0em;
                                        right: 0em;
                                        width: 2em;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn',
                                style: `
                                        border-right: unset;

                                        align-items: center;
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .BattleModesComponentStyle-button,
                                           .ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .-flexCenterAlignCenterColumn`,
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .BattleModesComponentStyle-blockModesFilter',
                                style: `
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        margin-top: 1em;
                                        padding-top: unset;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .BattleModesComponentStyle-blockModesFilter > div',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        border-radius: unset;
                                        border-left: var(--general-outline);
                                        border-right: var(--general-outline);
                                        box-shadow: unset !important;

                                        margin: unset;
                                        width: calc(100% - 2em);
                                        height: 4em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .BattleModesComponentStyle-blockModesFilter > div:hover',
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .BattleModesComponentStyle-blockModesFilter > div:first-child',
                                style: `
                                        border-top: var(--general-outline);
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .BattleModesComponentStyle-blockModesFilter > div:last-child',
                                style: `
                                        border-bottom: var(--general-outline);
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .ProBattlesComponentStyle-createBattleButton',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        outline: var(--general-outline);
                                        border: unset;
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;

                                        bottom: 1em;
                                        width: calc(100% - 2em);
                                        height: 4em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .ProBattlesComponentStyle-createBattleButton:hover',
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .ProBattlesComponentStyle-createBattleButton > h3',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .ProBattlesComponentStyle-createBattleButton > .IconStyle-iconAddBattle',
                                style: `
                                        background: rgb(255 255 255 / 30%);

                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .-flexStartAlignStartColumn > .ProBattlesComponentStyle-createBattleButton:hover > .IconStyle-iconAddBattle',
                                style: `
                                        background: white;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > .-alignSelfStart > .ProBattlesComponentStyle-battlesContainer',
                                style: `
                                        margin-left: unset;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > .-alignSelfStart > .ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody',
                                style: `
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: var(--general-box-shadow) !important;
                                        backdrop-filter: var(--general-blur);
                                        border-radius: unset;
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;

                                        margin-top: 1em;
                                        margin-bottom: unset;
                                        width: calc(100% - 2em);
                                        height: 2.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr:hover',
                                style: `
                                        background: var(--general-background-hover);
                                        outline: var(--general-outline-hover);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr > .ProBattlesComponentStyle-cellName',
                                style: `
                                        width: 55%;
                                        max-width: unset;
                                        min-width: unset;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr > .ProBattlesComponentStyle-cellName > .-flexStartAlignCenter > .-backgroundImageCover',
                                style: `
                                        margin-right: 1em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr > .ProBattlesComponentStyle-cellName > .-flexEndAlignCenter',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr > .ProBattlesComponentStyle-cellName > .ProBattlesComponentStyle-iconOptions',
                                style: `
                                        margin-left: 1.25em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr > .ProBattlesComponentStyle-cellName > .ProBattlesComponentStyle-iconOptions > div > div',
                                style: `
                                        margin-left: unset;
                                        margin-right: 0.5em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr > .ProBattlesComponentStyle-borderLineCell',
                                style: `
                                        border: unset;

                                        width: 15%;
                                        max-width: unset;
                                        min-width: unset;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > tr > .ProBattlesComponentStyle-borderLineCell > .ProBattlesComponentStyle-blockTimesScore > .-maskImageContain',
                                style: `
                                        background-color: white;
                                        margin-left: 1em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3)',
                                style: `
                                        background: var(--general-background);
                                        box-shadow: var(--general-box-shadow);
                                        border-left: var(--general-outline);
                                        border-top: var(--general-outline);
                                        border-top-left-radius: 3em;
                                        corner-top-left-shape: bevel;
                                        backdrop-filter: var(--general-blur);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3):before',
                                style: `
                                        content: '';
                                        background: inherit;
                                        outline: var(--general-outline);
                                        box-shadow: inherit;
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 2em;
                                        position: absolute;
                                        top: 0em;
                                        left: 0em;
                                        width: 2em;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .BattleInfoComponentStyle-blockCard',
                                style: `
                                        outline: var(--general-outline);
                                        border-top-left-radius: 1em;
                                        corner-top-left-shape: inherit;

                                        margin-top: 1em;
                                        width: calc(100% - 2em);
                                        height: 14em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .BattleInfoComponentStyle-blockCard > .-backgroundImageCover',
                                style: `
                                        box-shadow: unset;
                                        border-radius: unset;
                                        border-top-left-radius: inherit;
                                        corner-top-left-shape: inherit;

                                        width: 100%;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .BattleOptionsComponentStyle-transformLinearGradientImgCard',
                                style: `
                                        border-top-left-radius: inherit !important;
                                        corner-top-left-shape: inherit !important;
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .BattleOptionsComponentStyle-transformLinearGradientImgCard,
                                           .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .BattleOptionsComponentStyle-linearGradientImgCard`,
                                style: `
                                        border-radius: unset;

                                        opacity: 0.5;
                                `
                        },

                        {
                                selector: '.BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .-flexSpaceBetweenAlignStretch',
                                style: `
                                        width: 100%;
                                        height: 3em;
                                `
                        },

                        {
                                selector: '.BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .-flexSpaceBetweenAlignStretch > .-flexStartAlignStretch > .-displayFlex',
                                style: `
                                        margin: 1em;
                                `
                        },

                        {
                                selector: '.BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .-flexSpaceBetweenAlignStretch > .-flexStartAlignStretch > .-displayFlex > .BattleCardComponentStyle-containerTicker',
                                style: `
                                        margin: unset;
                                `
                        },

                        {
                                selector: '.BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .-flexSpaceBetweenAlignStretch > .-flexStartAlignStretch > .-displayFlex > .BattleCardComponentStyle-containerTicker > .-whiteSpaceNoWrap',
                                style: `
                                        font-size: 1em;
                                `
                        },

                        {
                                selector: '.BattleInfoComponentStyle-blockCard > .-backgroundImageCover > .-flexSpaceBetweenAlignStretch > div:nth-child(2)',
                                style: `
                                        margin: 1em;
                                        height: max-content;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-line',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-crystalFund',
                                style: `
                                        top: 4.25em;
                                        left: 1em;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-imgMode',
                                style: `
                                        top: 3em;
                                        right: 1em;
                                        width: 2em;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-battleModeName',
                                style: `
                                        top: 5.5em;
                                        right: 1em;
                                        width: 2em;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-mapName',
                                style: `
                                        justify-content: flex-end;
                                        margin: unset;
                                        width: 100%;
                                        max-width: unset;
                                        min-width: unset;
                                        height: 2em;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-mapName > .BattleCardComponentStyle-containerTicker',
                                style: `
                                        position: fixed;
                                        top: 3.5em;
                                        left: 2em;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-mapName > .-flexEnd',
                                style: `
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-mapName > .-flexEnd > div',
                                style: `
                                        background: var(--general-background);
                                        border-radius: unset;
                                        border-left: unset;
                                        border-top-left-radius: 0.5em 100%;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 0.5em 100%;
                                        corner-bottom-right-shape: bevel;
                                        backdrop-filter: var(--general-blur);

                                        margin-right: unset;
                                        margin-left: -0.25em;
                                        padding: 0 1em;
                                        max-width: unset;
                                        height: inherit;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-mapName > .-flexEnd > div:last-child',
                                style: `
                                        border-bottom-right-radius: unset;
                                        corner-bottom-right-shape: unset;

                                        padding-left: 1.25em;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-mapName > .-flexEnd > div > .BattleSelectStyle-battleTimer',
                                style: `
                                        margin: unset;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-enableIconSettings',
                                style: `
                                        display: grid !important;
                                        grid-auto-flow: column;
                                        grid-template-rows: repeat(2, 1.5em);
                                        bottom: 1em !important;
                                        left: 1em !important;
                                        margin: unset !important;
                                        width: max-content !important;
                                        height: max-content !important;
                                        z-index: 10 !important;
                                `
                        },

                        {
                                selector: '.BattleCardComponentStyle-enableIconSettings > div > .-maskImageContain',
                                style: `
                                        margin-left: unset !important;
                                        margin-right: 0.5em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexCenterAlignCenter',
                                style: `
                                        background: var(--general-background);
                                        border-top-left-radius: 0.5em 50%;
                                        corner-top-left-shape: bevel;
                                        border-bottom-left-radius: 0.5em 50%;
                                        corner-bottom-left-shape: bevel;
                                        backdrop-filter: var(--general-blur);

                                        position: absolute;
                                        top: 9.75em;
                                        right: 1em;
                                        margin-top: unset;
                                        padding-left: 0.5em;
                                        width: max-content;
                                        height: 2em;
                                        z-index: 10;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexCenterAlignCenter:before',
                                style: `
                                        content: '';
                                        background-image: url(data:image/png;base64,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);
                                        background-size: contain;
                                        background-position: center;
                                        background-repeat: no-repeat;

                                        position: absolute;
                                        width: 1em;
                                        height: 1em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexCenterAlignCenter > span',
                                style: `
                                        color: white;
                                        font-size: 1em;
                                        width: 3em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexCenterAlignCenter > p',
                                style: `
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .SettingsComponentStyle-scrollCreateBattle',
                                style: `
                                        margin-top: 1em;
                                        width: calc(100% - 2em);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .SettingsComponentStyle-scrollCreateBattle > .UsersTableStyle-containerBattleListCommands',
                                style: `
                                        width: 100%;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .SettingsComponentStyle-scrollCreateBattle > .UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable',
                                style: `
                                        align-items: center;
                                        margin: unset;
                                        width: 100%;
                                        height: 32.15em;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row',
                                style: `
                                        border-radius: unset;

                                        margin: unset;
                                        width: 100%;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-centerCell',
                                style: `
                                        border-radius: unset;
                                        border-left: var(--general-outline);
                                        border-right: var(--general-outline);

                                        margin: unset;
                                        width: calc(50% - 0.85em);
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:first-child > .UsersTableStyle-centerCell:first-child',
                                style: `
                                        border-top: var(--general-outline);
                                        border-top-left-radius: 1em;
                                        corner-top-left-shape: bevel;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:first-child > .UsersTableStyle-centerCell:last-child',
                                style: `
                                        border-top: var(--general-outline);
                                        border-top-right-radius: 1em;
                                        corner-top-right-shape: bevel;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:last-child > .UsersTableStyle-centerCell:first-child',
                                style: `
                                        border-bottom: var(--general-outline);
                                        border-bottom-right-radius: 1em;
                                        corner-bottom-right-shape: bevel;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:last-child > .UsersTableStyle-centerCell:last-child',
                                style: `
                                        border-bottom: var(--general-outline);
                                        border-bottom-left-radius: 1em;
                                        corner-bottom-left-shape: bevel;

                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-centerCell > .UsersTableStyle-emptyRow',
                                style: `
                                        width: 100%;
                                        opacity: 0.1;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-centerCell > .UsersTableStyle-emptyRow:before',
                                style: `
                                        content: '';
                                        background: rgb(255 255 255 / 100%);
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaElEQVR4nO2ay0tVURTGf0R6Kejl40aTXjYo0W6WBUGREPgXlELQHxENahLlJCgrTSKsiKBBkyijwkHNmhRhRWVWOqhh0VXIR/nCGxu+CwdT7z6vfY/gBxcu96y91v48e6+91reFJSQXL4AeIM0ix2sgB3xc7GTSIhGUTClwGDgHPAb6gCFgCpjQ909AF9ACNACpJJHZCdwEBjXOz8eQ6wTqikmmBuieNbH3wGXgCFALlAHLgRJgHZABjgJXZJsfNwM81RhnZMxyuABM6/lvoA3YHiBOtUiNyNcU0Br1kpuLzCbgnSfoVaA8gljGR7t8Gt9vgSpiImM27w99/wLsI3rsBvoV4ydQHxcZ83kGrCE+rNJ+MbGGgT1JSs1+UQLc87yZrWEdmoxzoIhkuhXvTdgEcBoYBxqLRGY1MKB4F4M62Qb8UY4/5PndNZl6pfrJoOfMQ032zhzPXJPpUKwnfgdu0V/BvJHKeWxckqkARrU6THVgjUua4O0Cdi7JtCnOddsBy4CsBtkUc67I1CjGoCptq9PVDPjqI4grMr2KcdDG+KSMb/gM4oJMu/yftTHukvGxAIHiJtMs3yajWre8QWucOMnskl+zxAriu4w3hggYF5kK+fxlYzwm4xUhg5rz54N8fQY2EB4p+TNlU0FMyNgqxTkmUypfZo4FkT9Douj8ol5m5Z6zpCD6ZGzUERJGJuNns+fTbxPRIgoyTRr/yMa4RcZG3SBhZNo19oyNcYNHoyJhZHo1ztsfLZjihjTA6E5JIVMt+6zaYCt0xri8gpLpCFID1qmJGYkwDYchU6m5zKic94W8tmTURIpM5pqeG5XfN2olYU6pRykWmf1qu808dgQN0Crn/VIAXZNZ65GDzodxnpI4ltNSs84WEZF5ru89UdR+VZItc5IxXZLJSTgP01L8J5INy3G3FMA4kZ51CxBpp1nveTMDUUv+nqqi0UXbXOXZM9M6pEzXFhbrgbs6J8ZdCecpCcqTCjAq8cz3QSVdwEiyf+VrDDilWwBn6kyttNgZz8bsVYXaLKGgTNlmpTbsXuA4cMtzM5V/u/cXuG5zoptlJGMGuZ7O6qzabBEn7UqeLZUCaP5h4IGCZdVfmyXzDXglTeqE6jkjz/pB2vEtQKxIe8gYDY7FTqYHeFnsiSyBefAPeVlosCFgj1wAAAAASUVORK5CYII=);
                                        mask-position: center;
                                        mask-size: contain;
                                        mask-repeat: no-repeat;

                                        width: 1em;
                                        height: 1em;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-centerCell > .UsersTableStyle-emptyRow > span',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-commonContainer > .UsersTableStyle-rangContainer',
                                style: `
                                        margin: 0 1em;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-points',
                                style: `
                                        opacity: 0.25;
                                        margin-right: 1em;
                                `
                        },

                        {
                                selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattleEmpty',
                                style: `
                                        background: rgb(255 255 255 / 1%);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn',
                                style: `
                                        position: absolute;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .-flexStartAlignCenter',
                                style: `
                                        border-top: var(--general-outline);

                                        width: 100%;
                                        height: 4.5em;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .-flexStartAlignCenter > div > .JoinToBattleComponentStyle-buttonJoin',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        box-shadow: unset !important;

                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .-flexStartAlignCenter > div > .JoinToBattleComponentStyle-buttonJoin:hover',
                                style: `
                                        background: rgb(255 255 255 / 15%);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .-flexStartAlignCenter > div > .JoinToBattleComponentStyle-buttonJoin > span',
                                style: `
                                        color: white;
                                        font-family: 'BaseFontMedium';
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .-flexStartAlignCenter > div > .ButtonComponentStyle-disabled',
                                style: `
                                        background: rgb(255 255 255 / 1%) !important;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions > div',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        border-top: var(--general-outline);
                                        border-bottom: var(--general-outline);

                                        position: absolute;
                                        justify-content: center;
                                        bottom: 5.5em;
                                        width: 25%;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions:hover',
                                style: `
                                        background: rgb(255 255 255 / 15%);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions:nth-child(1)',
                                style: `
                                        left: 25%;
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions:before,
                                           .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter:before`,
                                style: `
                                        content: '';
                                        background: rgb(255 255 255 / 30%);
                                        mask-position: center;
                                        mask-size: contain;
                                        mask-repeat: no-repeat;

                                        position: absolute;
                                        width: 1.5em;
                                        height: 1.5em;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite',
                                style: `
                                        background: rgb(255 255 255 / 5%);
                                        border-top: var(--general-outline);
                                        border-bottom: var(--general-outline);

                                        position: absolute;
                                        right: 0em;
                                        bottom: 5.5em;
                                        width: 50%;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter',
                                style: `
                                        justify-content: center;
                                        margin: unset;
                                        width: 50%;
                                        height: inherit;
                                        transition: var(--general-transition);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter:hover',
                                style: `
                                        background: rgb(255 255 255 / 10%);
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions:hover:before,
                                           .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter:hover:before`,
                                style: `
                                        background: white;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions:nth-child(1):before',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRElEQVR4nO2YP08VQRTFfyBgYykUQmKtX0QtFITHx4DwBTRBCNa0YowGhM5gg4kvlNrxJxT+WUOD0Vp5SqR5aya5JJOX3blvh9mdLfYkJ9lkz9y9Z/bOzN2FemAYaAEbwGfgD9CR6w25ZzS1xCSQAKnCRLS1wSDwtI/EbXaBFRkbHUWTt2lMRMWkzGaaQWPsAiuON/EgVvLDSs2vWtpVh+4YGIlhoKWUx3NLu6ZoTazK8VpJatPSbira9RgGvipJbVvat4r2SwwDHSWptqVtK1oTywtjwDJwIKem4T6wJPdcOFOS+mhpPyjaU5/kZ2WgK6hrcR0rSR1a2sPQJTTr2L979+k8E1t9jE/7ZKFFPKbMfC9/A6MZcWb6ML8m7IbcRpc9ZuhJzkH2zTHmnaXdceiSoh2qVo9ZNAs7C48dY46Aq3LKHoVsJYqUj72gs/BeGfdTGLSZ8zFg1kEvrgH/PBdt9zLt9EGgEpryTD65bAe65PHQxYw4z3o0f4FHwEPZFj/J2+7I9XqoT8qi2+gv4HpGnBNL8wa4SYVoFTjIpnNitGV3uUMktGRxumY+L/naYFQOqT2p1Y5cL+aUTYMGDWqC28Ac8EJO2R/yhXUm1/tyz2huUROMSyudeB7/ZuyNGIlPAK+Ac8/exea5xDIxS8cAsODZfWo0MeflGaXgSkazVQbN2xgqw8DLCpK/oFnswf8YpxXzfkgDuxEMtKv85VcGT0MaSCMxGBoDRDbwPULyJyEN3KvYhEn+bkgDDRo0aEDl+A9wnCbvvItVDwAAAABJRU5ErkJggg==);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-customOptions:nth-child(2):before',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACl0lEQVR4nO2ZS2sUQRDHf3kIgo/gK4IGAvoB1FxFb+IhFx85BK8e8gHievGBRkQRWeMHkBwFowdPuQri0Wc8eTKXaLImggefISMFNbAssz1dPbNrq/OHgmWnt+pfvdVV1TVQoUKFMnEaeAi8AVaBn8Av/fxWn50gUuwG1oAkR9aBfUSIIx7kUxklQpwxODBBhDhvcGCKCHHX4MBMN4n1A3XgMTAG9GWs6QFeGRx4B/S20XMMuA/cVNuFcafF+HtgEhjQ5xuAWwbyqcimpAQ3AmeB+Yw1hTDmIPANeAE0Asin8hF4Cnx2rDkVSn6HGkj+sDSAXZ0+lJ2WaSv5IeB7BMSTpnDda3FgKgLSSYtcsTiwUMDQEnABOAhsUjkEXNRnoXoXfMlLLl4JNPIA2OLQLc9mA3V/aVODMnEUWAwg3+O5QVYnVkMawEFgzhA2rp1vxVZg2VP3M2CYQMhu1Tz6fIl5Ky553Buul9VO1HKMHQjQKQfbpfMyJWJ7jjFL+KSQ37h07izTgcEOOCDnwKVzW5kOXM0xJjm/7BCqlUG8Xw/Seo4xKVJWSIy7dK6pEz6pORPDmsI6kUYHDG34nIawCce1eCQGmTUUskdG3YtaXL3DxnXByHNCDqdr563kE5VPlnAq0swta5EaATarjGjMN7rRzP0T7fSQXiKSSOQrsIe/+EpZJ7B9iOFS/6FIVXaNVSTNPlEDoeSWgOcaIu3WFB7H11sUzusQSoZRzZM7K/kbOhRL0+ukDs2a19wuSr65nbinY7+sXNyr40Jf8i/b2OrTf11ud9fKugv4YsbggCSI6GCpHeeIEBMGB8aJEKMGBw4TIfZ73BsSfWtpbo+7hXF9lfpah2M/VFb0O+lWT3aNTYUK/wF+Axm8WTVe3LC7AAAAAElFTkSuQmCC);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter:nth-child(1):before',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlUlEQVR4nO3UMY7DQAwEwf7/p+de4MBnWZKhaoDpkqhgS5Ik6XW7eC5vAAIwAJ12EIAeDnC7BqCPAH7+Ex2AAAxAhwF8OwABCEAAAhCAAHSDBwcgAAMQgAEIwI446Ox9AxCAAQjAAARgdzjo7H0DEID9Y7520Jv3Hv7gAARgTwL4NAABCEAAumoubwACsCcDSJKkbtkfTxU87jMWzCwAAAAASUVORK5CYII=);
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter:nth-child(2):before',
                                style: `
                                        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACD0lEQVR4nO2Yy0ocQRSGv5FENBKF7HwIjSEyKii6yBMEHbzBLBOCCFEhG8EbJMZN1ski7gT37kY0CzeJ+AAK5oJR0bhWVMhIQzUUjT3idJ1TPeIPPzM0NVP/11SdusC97o5agCHgrXHw/SkpVwMwB/wBijH+DcwC9aRM/cBJieBR/wP6SIlmgP+3CB86+M2U7/CjZQSP+o2v8Fng0gFA8B/PfQCsOQgf+pt2+A6H4UO3aQIsCAB80ATYFAD4rglwKACwrwlwLgBwrglwIADwVxPgR6XPgY8CAO81AdoFALIoa9Vh+HU8qNXRXugCeIYnjTgAeI1nTSU4D0ySEvUCx7cIfwS8JGWqN6ezXyWC/wSmgcekXM3AoHUrMQA0+Q51Z1UHdFtv/N0NHgfyQA9Q6yv0QxNiBThLuANdN0OsWiN4BsgBOwJbiT1TzUJVAcPGQb+J9QhYFgge9YTpb9h6FlxNJlIjsKUQvmjKLOYz+qws1Qrt/1UAMsCSYviia4CccNhd4DMwb/mFK4AHwLZg+K9ATYn+p5MC5IXffI1VKq9b8ApW+0JMm5IldkUQIBg20VJZLNNDcduD00oG6BYMbw+hjAlgT+LQG1b7jZg2g3FDaEAYIPCi5CQeUwAIDzhfIhOz0wXAhBKA2ELWVekAri+uvAA8iSwmWv7kejvdaY6B80p+ZfoNS2xsqbwXKdMVcG228dNLr4gAAAAASUVORK5CYII=);
                                `
                        },

                        {
                                selector: `.ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter > p,
                                           .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .-flexStartAlignStretchColumn > .BattleInfoComponentStyle-invite > .-flexStartAlignCenter > a`,
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .-flexStartAlignCenter',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '',
                                style: `
                                `
                        },

                        {
                                selector: '',
                                style: `
                                `
                        },

                        {
                                selector: `.BattleTimerComponentStyle-battleTimerMore66,
                                           .BattleTimerComponentStyle-battleTimerLess33,
                                           .BattleTimerComponentStyle-battleTimerLess66`,
                                style: `
                                        align-items: center;
                                        margin-left: unset !important;
                                 `
                        },

                        // внутри битвы

                        {
                                selector: '.BattleTabStatisticComponentStyle-containerInsideTeams',
                                style: `
                                        background: var(--general-background);
                                        outline: var(--general-outline);
                                        box-shadow: 0 0 1em rgb(0 0 0 / 50%) !important;
                                        backdrop-filter: var(--general-blur);
                                        border-radius: unset;
                                        border-bottom-right-radius: 4em;
                                        corner-bottom-right-shape: bevel;
                                        border-top-left-radius: 4em;
                                        corner-top-left-shape: bevel;

                                        width: 96em;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-containerInsideTeams:before',
                                style: `
                                        content: '';
                                        background: rgb(0 0 0 / 25%);
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-bottom-right-shape: bevel;
                                        border-bottom-right-radius: 3em;

                                        position: absolute;
                                        top: 0em;
                                        left: 0em;
                                        width: 3em;
                                        height: 3em;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-containerInsideTeams:after',
                                style: `
                                        content: '';
                                        background: rgb(0 0 0 / 25%);
                                        outline: inherit;
                                        box-shadow: inherit;
                                        corner-top-left-shape: bevel;
                                        border-top-left-radius: 3em;

                                        position: absolute;
                                        bottom: 0em;
                                        right: 0em;
                                        width: 3em;
                                        height: 3em;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-header',
                                style: `
                                        border: unset;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-commonBlockScroll',
                                style: `
                                        margin-top: unset;
                                        width: calc(100% - 2em);
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-tablesContainer',
                                style: `
                                        display: flex;
                                        justify-content: space-between;
                                        width: 100%;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-blueTeamTableContainer, .BattleTabStatisticComponentStyle-redTeamTableContainer',
                                style: `
                                        width: calc(50% - 0.5em);
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-blueTeamTableContainer table, .BattleTabStatisticComponentStyle-redTeamTableContainer table',
                                style: `
                                        margin-top: unset;
                                        padding: 1px;
                                        border-spacing: unset;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead, .BattleTabStatisticComponentStyle-redTeamTableContainer table thead',
                                style: `
                                        position: absolute;
                                        visibility: hidden;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr',
                                style: `
                                        background: linear-gradient(90deg, rgb(0 136 255 / 10%) 20%, rgb(0 0 0 / 20%) 40%);
                                        outline: var(--general-outline);
                                        box-shadow: unset !important;
                                        border-radius: unset;
                                        border-bottom-right-radius: 1.25em;
                                        corner-bottom-right-shape: bevel;
                                        border-top-left-radius: 1.25em;
                                        corner-top-left-shape: bevel;

                                        justify-content: flex-end;
                                        margin-top: unset;
                                        margin-bottom: 0.75em;
                                        width: 100%;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr',
                                style: `
                                        background: linear-gradient(270deg, rgb(255 0 0 / 10%) 20%, rgb(0 0 0 / 20%) 40%);
                                        outline: var(--general-outline);
                                        box-shadow: unset !important;
                                        border-radius: unset;
                                        border-bottom-left-radius: 1.25em;
                                        corner-bottom-left-shape: bevel;
                                        border-top-right-radius: 1.25em;
                                        corner-top-right-shape: bevel;

                                        justify-content: flex-end;
                                        margin-top: unset;
                                        margin-bottom: 0.75em;
                                        width: 100%;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-selectedRowBackGround',
                                style: `
                                        background: linear-gradient(90deg, rgb(0 136 255 / 10%) 20%, rgb(255 255 255 / 10%) 40%) !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:first-child, .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:first-child',
                                style: `
                                        margin-right: 9em;
                                        padding: unset;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-resistanceModuleCell',
                                style: `
                                        position: absolute;
                                        margin-right: 21em;
                                        width: 12em !important;
                                        visibility: visible;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-resistanceModuleCell:before',
                                style: `
                                        content: '';
                                        background: rgb(255 255 255 / 10%);
                                        border-top-left-radius: 1.25em;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 1.25em;
                                        corner-bottom-right-shape: bevel;
                                        width: 12em;
                                        position: absolute;
                                        height: 100%;
                                        z-index: -1;
                                `
                        },


                        {
                                selector: '.BattleTabStatisticComponentStyle-deviceCell, .BattleTabStatisticComponentStyle-defenceCell',
                                style: `
                                        width: 3em !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-defenceLabel',
                                style: `
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        width: 3.5em;
                                        margin: unset !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-defenceLabel:before',
                                style: `
                                        content: '';
                                        border-top-left-radius: 1.25em;
                                        corner-top-left-shape: bevel;
                                        border-bottom-right-radius: 1.25em;
                                        corner-bottom-right-shape: bevel;
                                        width: 4em;
                                        position: absolute;
                                        height: 100%;
                                        z-index: -1;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-defenceLabel > div',
                                style: `
                                        position: absolute;
                                        margin: unset !important;
                                        margin-top: 1em !important;
                                        margin-right: 1em !important;
                                        width: 1em !important;
                                        height: 1em !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-defenceLabel > h3',
                                style: `
                                        position: absolute;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        margin: unset !important;
                                        margin-bottom: 1em !important;
                                        margin-left: 1.1em !important;
                                        padding: unset !important;
                                        width: 1em !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-defenceLabel > img',
                                style: `
                                        width: 0.8em !important;
                                        height: 0.8em;
                                        margin: unset !important;
                                        filter: brightness(0.5);
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-scoreCell, .BattleTabStatisticComponentStyle-dlCell',
                                style: `
                                        border-left: unset !important;

                                        width: 5em !important;
                                `
                        },

                ];

                let cssStyles = document.createElement('style');

                    cssStyles.className = 'radiant-globalStyles'

                elements.forEach((element) => {

                        let css = `${element.selector} {${element.style}}\n`

                        cssStyles.textContent += css

                });

                document.body.appendChild(cssStyles);

        };

        function primaryNotification() {

                const notificationImage = 'data:image/webp;base64,UklGRngDAABXRUJQVlA4WAoAAAAQAAAAHwMAFAIAQUxQSCIAAAABBxARERAIJPurD1BE/zP+85///Oc///nPf/7zn//85/8PVlA4IDADAACwXgCdASogAxUCPpFIoU0lpCMiIAgAsBIJaW7hd2EbQAnsA99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPekAAP7/3gioPGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='

                const mainNotification = document.querySelectorAll('.PrimaryMenuItemComponentStyle-notificationIconNewNews');

                for (let i = 0; i < mainNotification.length; i++) {

                      mainNotification[i].src = notificationImage

                };

                const footerNotification = document.querySelectorAll('.MainScreenComponentStyle-new.FooterComponentStyle-marginEllips');

                for (let i = 0; i < footerNotification.length; i++) {

                      footerNotification[i].src = notificationImage

                };

        };

        // функция фастпика в лобби

        function battleFastPick() {

                let mainHeader = document.getElementsByClassName('MainScreenComponentStyle-containerForMenuGradient')[0];

                if (mainHeader) {

                        let buttonsHeader = element('div', 'radElement-fastPick-buttonsHeader', mainHeader);

                        if (buttonsHeader) {

                                let button1 = element('div', 'radElement-fastPick-fastBattle', buttonsHeader);

                                if (button1) {

                                        let button1img = element('div', 'radElement-fastPick-fastBattle-img', button1);

                                        button1.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardContentUp0 > .-flexSpaceBetweenAlignCenterColumn:nth-child(1)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button2 = element('div', 'radElement-fastPick-tdm', buttonsHeader);

                                if (button2) {

                                        let button2img = element('div', 'radElement-fastPick-tdm-img', button2);

                                        button2.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardContentUp0 > .-flexSpaceBetweenAlignCenterColumn:nth-child(2)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button3 = element('div', 'radElement-fastPick-cp', buttonsHeader);

                                if (button3) {

                                        let button3img = element('div', 'radElement-fastPick-cp-img', button3);

                                        button3.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardContentUp0 > .-flexSpaceBetweenAlignCenterColumn:nth-child(3)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button4 = element('div', 'radElement-fastPick-ctf', buttonsHeader);

                                if (button4) {

                                        let button4img = element('div', 'radElement-fastPick-ctf-img', button4);

                                        button4.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardContentUp0 > .-flexSpaceBetweenAlignCenterColumn:nth-child(4)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button5 = element('div', 'radElement-fastPick-sge', buttonsHeader);

                                if (button5) {

                                        let button5img = element('div', 'radElement-fastPick-sge-img', button5);

                                        button5.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardDown > .-flexSpaceBetweenAlignCenterColumn:nth-child(1)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button6 = element('div', 'radElement-fastPick-tjr', buttonsHeader);

                                if (button6) {

                                        let button6img = element('div', 'radElement-fastPick-tjr-img', button6);

                                        button6.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardDown > .-flexSpaceBetweenAlignCenterColumn:nth-child(2)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button7 = element('div', 'radElement-fastPick-rgb', buttonsHeader);

                                if (button7) {

                                        let button7img = element('div', 'radElement-fastPick-rgb-img', button7);

                                        button7.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardDown > .-flexSpaceBetweenAlignCenterColumn:nth-child(3)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button8 = element('div', 'radElement-fastPick-asl', buttonsHeader);

                                if (button8) {

                                        let button8img = element('div', 'radElement-fastPick-asl-img', button8);

                                        button8.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.-cardDown > .-flexSpaceBetweenAlignCenterColumn:nth-child(4)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                        };

                };

        };

        // часы в лобби

        function lobbyClocks() {

                let mainHeader = document.getElementsByClassName('UserInfoContainerStyle-blockForIconTankiOnline')[0];

                if (mainHeader) {

                        let days

                        let date = new Date();

                        let clockDays = element('div', 'radElement-clockDays', mainHeader);

                        let clockTime = element('div', 'radElement-clockTime', mainHeader);

                        if (language == 'RU') {

                                days = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ];

                        } else {

                                days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

                        };

                        clockDays.innerHTML = `${days[new Date().getDay().toLocaleString()]}, ${new Date().toISOString().slice(0,10).split('-').reverse().join('.')}`

                        clockTime.innerHTML = new Date().toLocaleString().slice(12, 20).split('-').join('.');

                        setInterval(function() {

                                clockDays.innerHTML = `${days[new Date().getDay().toLocaleString()]}, ${new Date().toISOString().slice(0,10).split('-').reverse().join('.')}`

                                clockTime.innerHTML = new Date().toLocaleString().slice(12, 20).split('-').join('.');

                        }, 1000);

                };

        };

        function tabFunctionsArray() {

                // цветные резисты

                var tankResistances = [

                        {
                                oldPicture: "https://s.eu.tankionline.com/static/images/crit_resistance.94e32312.svg",
                                picture: "https://tankionline.com/play/static/images/resistances/crit_resistance.3f4d1cc2.svg"
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/firebird_resistance.785a9d6b.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/firebird_resistance.00ac2221.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/freeze_resistance.33bdf642.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/freeze_resistance.d26eb338.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/isis_resistance.30a69ffc.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/isis_resistance.5b05887a.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/tesla_resistance.3e686c8e.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/tesla_resistance.663d3597.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/hammer_resistance.6c549d29.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/hammer_resistance.28e73097.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/twins_resistance.ad189f61.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/twins_resistance.fbbc4d72.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/ricochet_resistance.8247beaa.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/ricochet_resistance.69c6c7ee.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/smoky_resistance.845afc14.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/smoky_resistance.c4c202ca.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/rocket_launcher_resistance.b7dfd64f.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/rocket_launcher_resistance.5772cbaa.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/vulcan_resistance.824f6f0e.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/vulcan_resistance.9aebf267.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/thunder_resistance.6d7f4531.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/thunder_resistance.9dab2abf.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/scorpio_resistance.e8f1787f.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/scorpio_resistance.d40f8fbb.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/railgun_resistance.636a554f.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/railgun_resistance.7577c7a1.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/artillery_resistance.9b4cbc34.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/artillery_resistance.bd49fc96.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/gauss_resistance.bb8f409c.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/gauss_resistance.acf358ed.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/shaft_resistance.0778fd3e.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/shaft_resistance.7e58bc19.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/mine_resistance.dd581c90.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/mine_resistance.0d0d3c98.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/no_device.422b8dda.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/mine_resistance.0d0d3c98.svg'
                        },

                        {
                                oldPicture: 'https://s.eu.tankionline.com/static/images/tsunami_resistance.6200aad9.svg',
                                picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAACuUExURf/////+7f/0Qf/6ov/5of///f/0Qv/wAP/wA//7vP/5mf/yIf//+f//+P/yIP/5m//5nf/8xv/0SP/0R//8x//3e//wB//+8v/+9P/wCP/3fP/0P//7v//yJP/6pf/6pP/yJf/xDP/4jP/4i//+5//4iP/6q//2av/0Rv/8xf/0QP/7wf/92v/7u//xCf/2Z//7vf//+v/xCv/4g//yIv/wAv/2ZP//9//0Q//7wqP8IGQAAAABYktHRACIBR1IAAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH6gUfDxUDHnGqbgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0zMVQxNToyMTowMyswMDowMLtz4doAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMzFUMTU6MjE6MDMrMDA6MDDKLllmAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTMxVDE1OjIxOjAzKzAwOjAwnTt4uQAAAAFvck5UAc+id5oAAADDSURBVCjPxZDJEoJADAVTVEFQBPcdFxRBURBBEP7/xzTJjEev5tRN1+MwAL/OtNDuCHZstMxv6CKi0yNyvQ/2vwMyHBAOiDw9GZLhiHDMOFFhyjabAyyWjCsV1mzoA/hCaxU2oluAndBehUD0AHAUCuD3hSe5CCBSGHKIZY92GNoKYw5nZXi5aDpzSLT6vqbk/8HQer1qMjjc0ozknj8e+Z0oS2/yJm5BWhKWRIUr3/Mnz6vafdUVo5NzaPSf21ZTA/AGTusXQYUsJq8AAAAASUVORK5CYII='
                        },

                ];


                function color(target) {

                        let user = document.querySelector('.UserInfoContainerStyle-textDecoration')?.textContent?.split(' ').pop();

                        target.querySelectorAll('.-maskImage').forEach((element) => {

                                let maskImage = window.getComputedStyle(element).getPropertyValue('-webkit-mask-image')?.split('"')?.[1];

                                let resistance = tankResistances.find(({ oldPicture }) => maskImage === oldPicture);

                                if (resistance) {

                                        element.style.cssText = `

                                                -webkit-mask-image: none;
                                                background: url(${resistance.picture}) center center / 1em 1em no-repeat;
                                                width: 1em;
                                                height: 1em;

                                        `

                                };

                        });

                        let empty = document.querySelectorAll('.BattleTabStatisticComponentStyle-iconStandard');

                            empty.forEach((slot) => {

                                    slot.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVR4nO2Zz0sVURTHn6IVihRpUGSbaFHbMkn6F1IKEq0IxUU/NrULc9FG8LkxUgjb9Gv1BLE2Re1tV4t+biJcZFBm9mOhPYP4xGXOheMwPu7M3BkJ3nc795xzPzNz753znUKhqqqqWiPgBvAbmABqCw4CaoDDwGVgCngFfAJWgD/Ad+AtMAMMAUdcc8eSTMRM3up2pULAbuAa8IH4mgeKQKtvCHPnqQQBbANG5Q6n1SowCbT4AqiVSa8LAZwB/obGmNfkPnAeOAjsArYAm8zkgDagD7gLfIkA+Qb05gkxIBDPgRNmojHy1wFdwGwEyC2gPi+I/WbdpKxzDJgL1XkMNOQC4UNAE1AK1Xnk60mMRzzmLCBqgOFQncm0SbsjJp8ZhFEERE8hiWTn+KoSPcnpdaqRw9BqEWhOex4YkJ05r4k5VeNm3AR75ICx6lbX8oLoVPnLsU5sYEQFvwlvlTlCPFP5i65BtfIhZnW6wrhMIQgOO6uPTrmBDhX0s9JenDUEUA8sqNztLkGDKmDGYXzWEPdU3kGXgAcq4JxjkcwggH6Vc9olwCxaq44YhTKBIGiUrF67BJjPYqu9MYt5hwB2qFyLLgGmBbRqTHiSmgZF605SCGCzylN2CdAHmPM3flYQQIPKsewSsKQCErd5vl4ngr7bat4lwLgHVm1JAXxBsHYRv3QJMNaHVV8aAB8QwAUVV3IJuKrf27QAaSEIjAKrSy7FjOlkZdyDuo2CINiBfqjxh1wLGdPJqssHQBII4KQa997ZQBDHzGrWF0AcCIKt+IUaMxSnSGvoPOjMGwI4oMyzZWOUxS2iDyLT3jVtAMSAQIwkbeqN3WdVSmtipbAxtyYt0BtKPuwTIJfOTrzKNRAb8STStnXGq9Sa8rkmCJzsp6EaXiEaIiDm0u5OBHf+lJhX68nrkwh/IiPWR1ccI1ZynQXeReS7nvWa6Fnnji1IA94vPzNa5OdGI7APOApcBB4CvyLiPwPH81rYzcbuE8csrcrAGLA9VCMKYsILQKjZKIrpFFcmZrjSCRsBseIVIFSoXTylaeMeSGe3Kj32kvx6Nb3GFWlSnLZiyT0uPxTHMgGoqqrC/6t/pt8dkPoi80YAAAAASUVORK5CYII='

                            });

                };

                new MutationObserver((mutations) => {

                        mutations.forEach(({ addedNodes, target }) => {

                                if (addedNodes.length && ('tbody' === target.localName || target.className.includes('BattleComponentStyle-canvasContainer'))) {

                                        color(target);

                                };

                        });

                }).observe(document, {

                        attributes: true,

                        subtree: true,

                        childList: true

                });

        };

        function themeSettings() {

                // кнопка настроек

                let settingsButton = element('div', 'radElement-settingsButton PrimaryMenuItemComponentStyle-menuItemContainer', document.querySelector('.MainScreenComponentStyle-blockMainMenu > ul'));

                let settingsButtonImage = element('div', 'radElement-settingsButtonImage', settingsButton);

                let settingsButtonSpan = element('span', 'radElement-settingsButtonSpan PrimaryMenuItemComponentStyle-itemName', settingsButton);

                    settingsButtonSpan.innerHTML = 'Кастомизация'

                var showSettings = document.createElement('style');

                    showSettings.className = 'radStyleSheet-showSettings'

                var settingsSelectors = [

                        {
                                selector: `#app-root > .-visible,
                                           .BattlePassLobbyComponentStyle-menuBattlePass,
                                           .EventBattlePassLobbyComponentStyle-buttonEventBattlePass,
                                           .AnnouncementHomeScreenComponentStyle-mainContainer,
                                           .-container > .MainScreenComponentStyle-containerForMenuGradient,
                                           .PrimaryMenuItemComponentStyle-menuItemContainer,
                                           .UserInfoContainerStyle-userTitleContainer > div:nth-child(1),
                                           .radElement-clockDays,
                                           .radElement-clockTime`,
                                style: `
                                        transition: unset !important;
                                        opacity: 0;
                                        pointer-events: none;
                                `
                        },

                        {
                                selector: '.radElement-backButton',
                                style: `
                                        opacity: 1 !important;
                                        pointer-events: all !important;
                                        cursor: pointer;
                                `
                        },

                        {
                                selector: '.radElement-titleSpan',
                                style: `
                                        opacity: 1 !important;
                                `
                        },

                        {
                                selector: '.radElement-pageBlock',
                                style: `
                                        opacity: 1 !important;
                                        pointer-events: all !important;
                                `
                        },

                        {
                                selector: '.pageActive',
                                style: `
                                        opacity: 1 !important;
                                        pointer-events: all !important;
                                `
                        },

                ];

                settingsButton.addEventListener('click', function() {

                        settingsSelectors.forEach((element) => {

                                let css = `${element.selector} {${element.style}}\n`

                                showSettings.textContent += css.split(`                `).join(``);

                        });

                        variableHeader.appendChild(showSettings);

                });

                // кнопка назад

                let backButton = element('div', 'radElement-backButton', document.querySelector('.UserInfoContainerStyle-userTitleContainer'));

                let backButtonImage = element('div', 'radElement-backButtonImage', backButton);

                backButton.addEventListener('click', function() {

                        showSettings = document.getElementsByClassName('radStyleSheet-showSettings')[0];

                        variableHeader.removeChild(showSettings);

                });

                // заголовок страницы

                let titleSpan = element('div', 'radElement-titleSpan', document.querySelector('.UserInfoContainerStyle-blockForIconTankiOnline'));

                    titleSpan.innerHTML = 'Кастомизация'

                // сама страница

                let pageBlock = element('div', 'radElement-pageBlock', document.querySelector('.-container'));

                // левое меню

                let tabsHeader = element('div', 'radElement-tabsHeader', pageBlock);

                function activateTab(targetButton) {

                        document.querySelectorAll('.radElement-tabButton').forEach(button => {

                                button.classList.remove('tabActive');

                        });

                        targetButton.classList.add('tabActive');

                        document.querySelectorAll('.radElement-pageHolder').forEach(page => {

                                page.classList.remove('pageActive');

                        });

                };

                let tabButton_1 = element('li', 'radElement-tabButton btn_1 tabActive', tabsHeader);

                let tabButtonImage_1 = element('div', 'radElement-tabButtonImage img_1', tabButton_1);

                let tabButtonSpan_1 = element('span', 'radElement-tabButtonSpan txt_1', tabButton_1);

                    tabButtonSpan_1.innerHTML = 'Общие настройки'

                tabButton_1.addEventListener('click', function() {

                        if (tabButton_1.className.includes('tabActive')) {

                                return

                        } else {

                                activateTab(tabButton_1);

                                document.querySelector('.pge_1').classList.add('pageActive');

                        };

                });

                let tabButton_2 = element('li', 'radElement-tabButton btn_2', tabsHeader);

                let tabButtonImage_2 = element('div', 'radElement-tabButtonImage img_2', tabButton_2);

                let tabButtonSpan_2 = element('span', 'radElement-tabButtonSpan txt_2', tabButton_2);

                    tabButtonSpan_2.innerHTML = 'Фон страницы'

                tabButton_2.addEventListener('click', function() {

                        if (tabButton_2.className.includes('tabActive')) {

                                return

                        } else {

                                activateTab(tabButton_2);

                                document.querySelector('.pge_2').classList.add('pageActive');

                        };

                });

                let tabButton_3 = element('li', 'radElement-tabButton btn_3', tabsHeader);

                let tabButtonImage_3 = element('div', 'radElement-tabButtonImage img_3', tabButton_3);

                let tabButtonSpan_3 = element('span', 'radElement-tabButtonSpan txt_3', tabButton_3);

                    tabButtonSpan_3.innerHTML = 'Гараж'

                tabButton_3.addEventListener('click', function() {

                        if (tabButton_3.className.includes('tabActive')) {

                                return

                        } else {

                                activateTab(tabButton_3);

                                document.querySelector('.pge_3').classList.add('pageActive');

                        };

                });

                let tabButton_4 = element('li', 'radElement-tabButton btn_4', tabsHeader);

                let tabButtonImage_4 = element('div', 'radElement-tabButtonImage img_4', tabButton_4);

                let tabButtonSpan_4 = element('span', 'radElement-tabButtonSpan txt_4', tabButton_4);

                    tabButtonSpan_4.innerHTML = 'Битва'

                tabButton_4.addEventListener('click', function() {

                        if (tabButton_4.className.includes('tabActive')) {

                                return

                        } else {

                                activateTab(tabButton_4);

                                document.querySelector('.pge_4').classList.add('pageActive');

                        };

                });

                let tabButton_5 = element('li', 'radElement-tabButton btn_5', tabsHeader);

                let tabButtonImage_5 = element('div', 'radElement-tabButtonImage img_5', tabButton_5);

                let tabButtonSpan_5 = element('span', 'radElement-tabButtonSpan txt_5', tabButton_5);

                    tabButtonSpan_5.innerHTML = 'Разработка'

                tabButton_5.addEventListener('click', function() {

                        if (tabButton_5.className.includes('tabActive')) {

                                return

                        } else {

                                activateTab(tabButton_5);

                                document.querySelector('.pge_5').classList.add('pageActive');

                        };

                });

                // правое меню

                let pageHeader = element('div', 'radElement-pageHeader', pageBlock);

                // страница 1

                function hexToRgb(hex) {

                        var bigint = parseInt(hex, 16);

                        var r = (bigint >> 16) & 255

                        var g = (bigint >> 8) & 255

                        var b = bigint & 255

                        return r + "," + g + "," + b

                };

                let pageHolder_1 = element('div', 'radElement-pageHolder pge_1 pageActive', pageHeader);

                let p1_el1 = element('div', 'radElement-pageElement p1_elem_1', pageHolder_1);

                        let p1_el1_span = element('span', 'radElement-pageElementSpan p1_elem_1_span', p1_el1);

                            p1_el1_span.innerHTML = 'Цвет фона элементов'

                        let p1_el1_input = element('input', 'radElement-pageElementInput p1_elem_1_input', p1_el1);

                            p1_el1_input.type = 'color'

                        let p1_el1_input_span = element('span', 'radElement-pageElementInputValue p1_elem_1_value', p1_el1);

                        p1_el1_input.addEventListener('input', function (event) {

                                let p1_el1_input_value = hexToRgb(document.querySelector('.radElement-pageElementInput.p1_elem_1_input').value.replace('#', '')).replace(/,/g, ' ');

                                    p1_el1_input_span.innerHTML = p1_el1_input_value

                                if (localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')) {

                                        document.body.style.cssText += `--general-background: rgb(${p1_el1_input_value} / ${localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')}%)`

                                } else {

                                        document.body.style.cssText += `--general-background: rgb(${p1_el1_input_value} / 30%)`

                                };

                                localStorage.setItem('radiantValue-defaultBackgroundValue', p1_el1_input_value);

                        })

                        if (localStorage.getItem('radiantValue-defaultBackgroundValue')) {

                                p1_el1_input_span.innerHTML = localStorage.getItem('radiantValue-defaultBackgroundValue');

                                if (localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')) {

                                        document.body.style.cssText += `--general-background: rgb(${localStorage.getItem('radiantValue-defaultBackgroundValue')} / ${localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')}%)`

                                } else {

                                        document.body.style.cssText += `--general-background: rgb(${localStorage.getItem('radiantValue-defaultBackgroundValue')} / 30%)`

                                };

                        };

                let p1_el2 = element('div', 'radElement-pageElement p1_elem_2', pageHolder_1);

                        let p1_el2_span = element('span', 'radElement-pageElementSpan p1_elem_2_span', p1_el2);

                            p1_el2_span.innerHTML = 'Прозрачность цвета фона элементов'

                        let p1_el2_setting = element('input', 'radElement-inputSlider p1_elem_2_slider', p1_el2);

                            p1_el2_setting.setAttribute('type', 'range');

                            p1_el2_setting.setAttribute('value', '');

                            p1_el2_setting.setAttribute('step', '1');

                            p1_el2_setting.setAttribute('min', '0');

                            p1_el2_setting.setAttribute('max', '90');

                        let p1_el2_settingValue = element('span', 'radElement-pageElementInputValue p1_elem_2_value', p1_el2);

                            p1_el2_settingValue.innerHTML = `${p1_el2_setting.value}%`

                        p1_el2_setting.addEventListener('input', function() {

                                p1_el2_settingValue.innerHTML = `${p1_el2_setting.value}%`

                                if (localStorage.getItem('radiantValue-defaultBackgroundValue')) {

                                        document.body.style.cssText += `--general-background: rgb(${localStorage.getItem('radiantValue-defaultBackgroundValue')} / ${p1_el2_setting.value}%)`

                                } else {

                                        document.body.style.cssText += `--general-background: rgb(0 0 0 / ${p1_el2_setting.value}%)`

                                };

                                localStorage.setItem('radiantValue-defaultBackgroundTransparencyValue', p1_el2_setting.value);

                        });

                        if (localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')) {

                                p1_el2_settingValue.innerHTML = `${localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')}%`

                                p1_el2_setting.value = localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue');

                                if (localStorage.getItem('radiantValue-defaultBackgroundValue')) {

                                        document.body.style.cssText += `--general-background: rgb(${localStorage.getItem('radiantValue-defaultBackgroundValue')} / ${localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')}%)`

                                } else {

                                        document.body.style.cssText += `--general-background: rgb(0 0 0 / ${localStorage.getItem('radiantValue-defaultBackgroundTransparencyValue')}%)`

                                };

                        };

                let p1_el3 = element('div', 'radElement-pageElement p1_elem_3', pageHolder_1);

                        let p1_el3_span = element('span', 'radElement-pageElementSpan p1_elem_3_span', p1_el3);

                            p1_el3_span.innerHTML = 'Цвет фона элементов (при наведении)'

                        let p1_el3_input = element('input', 'radElement-pageElementInput p1_elem_3_input', p1_el3);

                            p1_el3_input.type = 'color'

                        let p1_el3_input_span = element('span', 'radElement-pageElementInputValue p1_elem_3_value', p1_el3);

                        p1_el3_input.addEventListener('input', function (event) {

                                let p1_el3_input_value = hexToRgb(document.querySelector('.radElement-pageElementInput.p1_elem_3_input').value.replace('#', '')).replace(/,/g, ' ');

                                    p1_el3_input_span.innerHTML = p1_el3_input_value

                                if (localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')) {

                                        document.body.style.cssText += `--general-background-hover: rgb(${p1_el3_input_value} / ${localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')}%)`

                                } else {

                                        document.body.style.cssText += `--general-background-hover: rgb(${p1_el3_input_value} / 5%)`

                                };

                                localStorage.setItem('radiantValue-hoverBackgroundValue', p1_el3_input_value);

                        })

                        if (localStorage.getItem('radiantValue-hoverBackgroundValue')) {

                                p1_el3_input_span.innerHTML = localStorage.getItem('radiantValue-hoverBackgroundValue');

                                if (localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')) {

                                        document.body.style.cssText += `--general-background-hover: rgb(${localStorage.getItem('radiantValue-hoverBackgroundValue')} / ${localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')}%)`

                                } else {

                                        document.body.style.cssText += `--general-background-hover: rgb(${localStorage.getItem('radiantValue-hoverBackgroundValue')} / 5%)`

                                };

                        };

                let p1_el4 = element('div', 'radElement-pageElement p1_elem_4', pageHolder_1);

                        let p1_el4_span = element('span', 'radElement-pageElementSpan p1_elem_4_span', p1_el4);

                            p1_el4_span.innerHTML = 'Прозрачность цвета фона элементов (при наведении)'

                        let p1_el4_setting = element('input', 'radElement-inputSlider p1_elem_4_slider', p1_el4);

                            p1_el4_setting.setAttribute('type', 'range');

                            p1_el4_setting.setAttribute('value', '');

                            p1_el4_setting.setAttribute('step', '1');

                            p1_el4_setting.setAttribute('min', '0');

                            p1_el4_setting.setAttribute('max', '90');

                        let p1_el4_settingValue = element('span', 'radElement-pageElementInputValue p1_elem_4_value', p1_el4);

                            p1_el4_settingValue.innerHTML = `${p1_el4_setting.value}%`

                        p1_el4_setting.addEventListener('input', function() {

                                p1_el4_settingValue.innerHTML = `${p1_el4_setting.value}%`

                                if (localStorage.getItem('radiantValue-hoverBackgroundValue')) {

                                        document.body.style.cssText += `--general-background-hover: rgb(${localStorage.getItem('radiantValue-hoverBackgroundValue')} / ${p1_el4_setting.value}%)`

                                } else {

                                        document.body.style.cssText += `--general-background-hover: rgb(255 255 255 / ${p1_el4_setting.value}%)`

                                };

                                localStorage.setItem('radiantValue-hoverBackgroundTransparencyValue', p1_el4_setting.value);

                        });

                        if (localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')) {

                                p1_el4_settingValue.innerHTML = `${localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')}%`

                                p1_el4_setting.value = localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue');

                                if (localStorage.getItem('radiantValue-hoverBackgroundValue')) {

                                        document.body.style.cssText += `--general-background-hover: rgb(${localStorage.getItem('radiantValue-hoverBackgroundValue')} / ${localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')}%)`

                                } else {

                                        document.body.style.cssText += `--general-background-hover: rgb(255 255 255 / ${localStorage.getItem('radiantValue-hoverBackgroundTransparencyValue')}%)`

                                };

                        };

                let p1_el5 = element('div', 'radElement-pageElement p1_elem_5', pageHolder_1);

                        let p1_el5_span = element('span', 'radElement-pageElementSpan p1_elem_5_span', p1_el5);

                            p1_el5_span.innerHTML = 'Цвет обводки элементов'

                let p1_el6 = element('div', 'radElement-pageElement p1_elem_6', pageHolder_1);

                        let p1_el6_span = element('span', 'radElement-pageElementSpan p1_elem_6_span', p1_el6);

                            p1_el6_span.innerHTML = 'Прозрачность цвета обводки элементов'

                let p1_el7 = element('div', 'radElement-pageElement p1_elem_7', pageHolder_1);

                        let p1_el7_span = element('span', 'radElement-pageElementSpan p1_elem_7_span', p1_el7);

                            p1_el7_span.innerHTML = 'Цвет обводки элементов (при наведении)'

                let p1_el8 = element('div', 'radElement-pageElement p1_elem_8', pageHolder_1);

                        let p1_el8_span = element('span', 'radElement-pageElementSpan p1_elem_8_span', p1_el8);

                            p1_el8_span.innerHTML = 'Прозрачность цвета обводки элементов (при наведении)'

                let p1_el9 = element('div', 'radElement-pageElement p1_elem_9', pageHolder_1);

                        let p1_el9_span = element('span', 'radElement-pageElementSpan p1_elem_9_span', p1_el9);

                            p1_el9_span.innerHTML = 'Величина размытия фона элементов'

                        let blurSetting = element('input', 'radElement-inputSlider p1_elem_9_slider', p1_el9);

                            blurSetting.setAttribute('type', 'range');

                            blurSetting.setAttribute('value', '');

                            blurSetting.setAttribute('step', '0.25');

                            blurSetting.setAttribute('min', '0');

                            blurSetting.setAttribute('max', '40');

                        let blurSettingValue = element('span', 'radElement-pageElementInputValue p1_elem_9_value', p1_el9);

                            blurSettingValue.innerHTML = blurSetting.value

                        blurSetting.addEventListener('input', function() {

                                blurSettingValue.innerHTML = `${blurSetting.value}px`

                                document.body.style.cssText += `--general-blur: blur(${blurSetting.value}px)`

                                localStorage.setItem('radiantValue-blurSettingValue', blurSetting.value);

                        });

                        if (localStorage.getItem('radiantValue-blurSettingValue')) {

                                blurSettingValue.innerHTML = `${localStorage.getItem('radiantValue-blurSettingValue')}px`

                                blurSetting.value = localStorage.getItem('radiantValue-blurSettingValue');

                                document.body.style.cssText += `--general-blur: blur(${localStorage.getItem('radiantValue-blurSettingValue')}px)`

                        };

                // страница 2

                let pageHolder_2 = element('div', 'radElement-pageHolder pge_2', pageHeader);

                let p2_el2 = element('div', 'radElement-pageElement p2_elem_2', pageHolder_2);

                        let p2_el2_span = element('span', 'radElement-pageElementSpan p2_elem_2_span', p2_el2);

                            p2_el2_span.innerHTML = 'Количество линий'

                        let p2_el2_setting = element('input', 'radElement-inputSlider p2_elem_2_slider', p2_el2);

                            p2_el2_setting.setAttribute('type', 'range');

                            p2_el2_setting.setAttribute('value', '');

                            p2_el2_setting.setAttribute('step', '1');

                            p2_el2_setting.setAttribute('min', '1');

                            p2_el2_setting.setAttribute('max', '10');

                        let p2_el2_settingValue = element('span', 'radElement-pageElementInputValue p2_elem_2_value', p2_el2);

                            p2_el2_settingValue.innerHTML = `${p2_el2_setting.value}`

                        p2_el2_setting.addEventListener('input', function() {

                                p2_el2_settingValue.innerHTML = `${p2_el2_setting.value}`

                                localStorage.setItem('radiantValue-canvas-linesCount', p2_el2_setting.value);

                        });

                        if (localStorage.getItem('radiantValue-canvas-linesCount')) {

                                p2_el2_settingValue.innerHTML = localStorage.getItem('radiantValue-canvas-linesCount');

                                p2_el2_setting.value = localStorage.getItem('radiantValue-canvas-linesCount');

                        };

                let p2_el3 = element('div', 'radElement-pageElement p2_elem_3', pageHolder_2);

                        let p2_el3_span = element('span', 'radElement-pageElementSpan p2_elem_3_span', p2_el3);

                            p2_el3_span.innerHTML = 'Толщина линий'

                        let p2_el3_setting = element('input', 'radElement-inputSlider p2_elem_3_slider', p2_el3);

                            p2_el3_setting.setAttribute('type', 'range');

                            p2_el3_setting.setAttribute('value', '');

                            p2_el3_setting.setAttribute('step', '25');

                            p2_el3_setting.setAttribute('min', '50');

                            p2_el3_setting.setAttribute('max', '400');

                        let p2_el3_settingValue = element('span', 'radElement-pageElementInputValue p2_elem_3_value', p2_el3);

                            p2_el3_settingValue.innerHTML = `${p2_el3_setting.value}`

                        p2_el3_setting.addEventListener('input', function() {

                                p2_el3_settingValue.innerHTML = `${p2_el3_setting.value}`

                                localStorage.setItem('radiantValue-canvas-linesWidth', p2_el3_setting.value);

                        });

                        if (localStorage.getItem('radiantValue-canvas-linesWidth')) {

                                p2_el3_settingValue.innerHTML = localStorage.getItem('radiantValue-canvas-linesWidth');

                                p2_el3_setting.value = localStorage.getItem('radiantValue-canvas-linesWidth');

                        };

                let p2_el4 = element('div', 'radElement-pageElement p2_elem_4', pageHolder_2);

                        let p2_el4_span = element('span', 'radElement-pageElementSpan p2_elem_4_span', p2_el4);

                            p2_el4_span.innerHTML = 'Направление линий (град.)'

                        let p2_el4_setting = element('input', 'radElement-inputSlider p2_elem_4_slider', p2_el4);

                            p2_el4_setting.setAttribute('type', 'range');

                            p2_el4_setting.setAttribute('value', '');

                            p2_el4_setting.setAttribute('step', '5');

                            p2_el4_setting.setAttribute('min', '0');

                            p2_el4_setting.setAttribute('max', '180');

                        let p2_el4_settingValue = element('span', 'radElement-pageElementInputValue p2_elem_4_value', p2_el4);

                            p2_el4_settingValue.innerHTML = `${p2_el4_setting.value}`

                        p2_el4_setting.addEventListener('input', function() {

                                p2_el4_settingValue.innerHTML = `${p2_el4_setting.value}°`

                                localStorage.setItem('radiantValue-canvas-linesRotation', p2_el4_setting.value);

                        });

                        if (localStorage.getItem('radiantValue-canvas-linesRotation')) {

                                p2_el4_settingValue.innerHTML = `${localStorage.getItem('radiantValue-canvas-linesRotation')}°`

                                p2_el4_setting.value = localStorage.getItem('radiantValue-canvas-linesRotation');

                        };

                let p2_el5 = element('div', 'radElement-pageElement p2_elem_5', pageHolder_2);

                        let p2_el5_span = element('span', 'radElement-pageElementSpan p2_elem_5_span', p2_el5);

                            p2_el5_span.innerHTML = 'Амплитуда движения линий'

                        let p2_el5_setting = element('input', 'radElement-inputSlider p2_elem_5_slider', p2_el5);

                            p2_el5_setting.setAttribute('type', 'range');

                            p2_el5_setting.setAttribute('value', '');

                            p2_el5_setting.setAttribute('step', '0.1');

                            p2_el5_setting.setAttribute('min', '0.1');

                            p2_el5_setting.setAttribute('max', '2');

                        let p2_el5_settingValue = element('span', 'radElement-pageElementInputValue p2_elem_5_value', p2_el5);

                            p2_el5_settingValue.innerHTML = `${p2_el5_setting.value}`

                        p2_el5_setting.addEventListener('input', function() {

                                p2_el5_settingValue.innerHTML = p2_el5_setting.value

                                localStorage.setItem('radiantValue-canvas-linesAmplitude', p2_el5_setting.value);

                        });

                        if (localStorage.getItem('radiantValue-canvas-linesAmplitude')) {

                                p2_el5_settingValue.innerHTML = localStorage.getItem('radiantValue-canvas-linesAmplitude');

                                p2_el5_setting.value = localStorage.getItem('radiantValue-canvas-linesAmplitude');

                        };

                // страница 3

                let pageHolder_3 = element('div', 'radElement-pageHolder pge_3', pageHeader);

                // страница 4

                let pageHolder_4 = element('div', 'radElement-pageHolder pge_4', pageHeader);

                // страница 5

                let pageHolder_5 = element('div', 'radElement-pageHolder pge_5', pageHeader);

        };

        function dynamicCheck() {

                // fetch API

                var originFetch = unsafeWindow.fetch

                var resources = [];

                unsafeWindow.fetch = async (url, options) => {

                        return originFetch(url, options).then(async (response) => {

                                for (let resource of resources) {

                                        let createPreview = (url) => {

                                                let replacedURL = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                                                return new RegExp(replacedURL);

                                        };

                                        let preview = createPreview(resource.orig);

                                        if (preview.test(url)) {

                                                return new Promise((resolve, reject) => {

                                                        GM_xmlhttpRequest({

                                                                url: resource.new,

                                                                responseType: "blob",

                                                                method: "GET",

                                                                onload: response => {

                                                                        if (response.status == 200) {

                                                                                resolve(new Response(response.response, {

                                                                                        status: 200,

                                                                                        statusText: "OK",

                                                                                        headers: {

                                                                                                "Content-Type": response.response.type

                                                                                        }

                                                                                }));

                                                                        } else {

                                                                                reject();

                                                                        };

                                                                },

                                                                onerror: reject

                                                        });

                                                });

                                        };

                                };

                                return response

                        });

                };

                // проверка на соответствие ссылкам

                let linksArray = [

                        'tankionline.com/play/',
                        'test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}'

                ];

                linksArray.forEach((link) => {

                        if (window.location.href.includes(link) == true) {

                                styleSheet();

                                tabFunctionsArray();

                                const Observer = new MutationObserver(function(inspect) {

                                        inspect.forEach(function(Mutation) {

                                                if (Mutation.addedNodes.length && Mutation.type === 'childList') {

                                                        Mutation.addedNodes.forEach(function(element) {

                                                                if (element.nodeType === 1 && element.classList.contains('-container')) {

                                                                        let nicknameHeader = document.querySelector('.UserInfoContainerStyle-userNameRank.UserInfoContainerStyle-textDecoration');

                                                                        if (nicknameHeader) {

                                                                                var nickname = nicknameHeader.innerHTML

                                                                                localStorage.setItem('obscLocalStorageVariable-nickname', nickname);

                                                                        };

                                                                        primaryNotification();

                                                                        battleFastPick();

                                                                        lobbyClocks();

                                                                        themeSettings();

                                                                };

                                                        });

                                                };

                                        });

                                });

                                Observer.observe(document.body, {

                                        attributes: true,

                                        subtree: true,

                                        childList: true

                                });

                        };

                });

                /* let ratingsLinks = [

                        'ratings.tankionline.com'

                ];

                ratingsLinks.forEach((link) => {

                        if (window.location.href.includes(link) == true) {

                                ratingsPage();

                        };

                }); */

        };

        dynamicCheck();

        function canvasBackground() {

                let a = document.createElement('div');

                a.id = 'holder'

                document.body.appendChild(a);

                (function () {

                        var pi = Math.PI

                        var pi2 = 2 * Math.PI

                        this.Waves = function (holder, options) {

                        var Waves = this

                        Waves.options = extend(options || {}, {
                                resize: false,
                                rotation: 30,
                                waves: 4,
                                width: 150,
                                hue: [0, 0],
                                amplitude: 0.4,
                                background: true,
                                preload: true,
                                speed: [0.002, 0.004],
                                debug: false,
                        });

                        if (localStorage.getItem('radiantValue-canvas-linesRotation')) {

                                Waves.options.rotation = localStorage.getItem('radiantValue-canvas-linesRotation');

                        };

                        if (localStorage.getItem('radiantValue-canvas-linesAmplitude')) {

                                Waves.options.amplitude = localStorage.getItem('radiantValue-canvas-linesAmplitude');

                        };

                        Waves.waves = [];

                        Waves.holder = document.querySelector(holder);

                        Waves.canvas = document.createElement('canvas');

                        Waves.ctx = Waves.canvas.getContext('2d');

                        Waves.holder.appendChild(Waves.canvas);

                        Waves.hue = Waves.options.hue[0];

                        Waves.hueFw = true

                        Waves.stats = new Stats();

                        Waves.resize();

                        Waves.init(Waves.options.preload);

                        if (Waves.options.resize)

                                window.addEventListener('resize', function () {

                                        Waves.resize();

                                }, false);

                        };

                        Waves.prototype.init = function (preload) {

                                var Waves = this

                                var options = Waves.options

                                for (var i = 0; i < options.waves; i++)

                                        Waves.waves[i] = new Wave(Waves)

                                if (preload) Waves.preload();

                        };

                        Waves.prototype.preload = function () {

                                var Waves = this

                                var options = Waves.options

                                for (var i = 0; i < options.waves; i++) {

                                        Waves.updateColor();

                                        for (var j = 0; j < options.width; j++) {

                                                Waves.waves[i].update();

                                        };

                                };

                        };

                        Waves.prototype.render = function () {

                                var Waves = this

                                var ctx = Waves.ctx

                                var options = Waves.options

                                Waves.updateColor();

                                Waves.clear();

                                if (Waves.options.debug) {

                                        ctx.beginPath();

                                        ctx.strokeStyle = '#f00'

                                        ctx.arc(Waves.centerX, Waves.centerY, Waves.radius, 0, pi2);

                                        ctx.stroke();

                                };

                                if (Waves.options.background) {

                                        Waves.background();

                                };

                                each(Waves.waves, function (wave, i) {

                                        wave.update();

                                        wave.draw();

                                });

                        };

                        Waves.prototype.animate = function () {

                                var Waves = this

                                Waves.render();

                                window.requestAnimationFrame(Waves.animate.bind(Waves));

                        };

                        Waves.prototype.clear = function () {

                                var Waves = this

                                Waves.ctx.clearRect(0, 0, Waves.width, Waves.height);

                        };

                        Waves.prototype.background = function () {

                                var Waves = this

                                var ctx = Waves.ctx

                                var gradient = Waves.ctx.createLinearGradient(0, 0, 0, Waves.height);

                                // потолок отображения

                                gradient.addColorStop(0, 'rgb(255 255 255 / 0%)');

                                // низ отображения

                                gradient.addColorStop(1, 'rgb(255 255 255 / 0%)');

                                ctx.fillStyle = gradient

                                ctx.fillRect(0, 0, Waves.width, Waves.height);

                        };

                        Waves.prototype.resize = function () {

                                var Waves = this

                                var width = Waves.holder.offsetWidth

                                var height = Waves.holder.offsetHeight

                                Waves.scale = window.devicePixelRatio || 1

                                Waves.width = width * Waves.scale

                                Waves.height = height * Waves.scale

                                Waves.canvas.width = Waves.width

                                Waves.canvas.height = Waves.height

                                Waves.canvas.style.width = width + 'px'

                                Waves.canvas.style.height = height + 'px'

                                Waves.radius = Math.sqrt(Math.pow(Waves.width, 2) + Math.pow(Waves.height, 2)) / 2

                                Waves.centerX = Waves.width / 2

                                Waves.centerY = Waves.height / 2

                        };

                        Waves.prototype.updateColor = function () {

                                var Waves = this

                                Waves.color = 'rgb(255 255 255 / 2.5%)'

                        };

                        function Wave(Waves) {

                                var Wave = this

                                var speed = Waves.options.speed

                                Wave.Waves = Waves

                                Wave.Lines = [];

                                Wave.angle = [

                                        rnd(pi2),

                                        rnd(pi2),

                                        rnd(pi2),

                                        rnd(pi2)

                                ];

                                Wave.speed = [

                                        rnd(speed[0], speed[1]) * rnd_sign(),

                                        rnd(speed[0], speed[1]) * rnd_sign(),

                                        rnd(speed[0], speed[1]) * rnd_sign(),

                                        rnd(speed[0], speed[1]) * rnd_sign(),

                                ];

                                return Wave

                        };

                        Wave.prototype.update = function () {

                                var Wave = this

                                var Lines = Wave.Lines

                                var color = Wave.Waves.color

                                Lines.push(new Line(Wave, color));

                                if (Lines.length > Wave.Waves.options.width) {

                                        Lines.shift();

                                };

                        };

                        Wave.prototype.draw = function () {

                                var Wave = this

                                var Waves = Wave.Waves

                                var ctx = Waves.ctx

                                var radius = Waves.radius

                                var radius3 = radius / 3

                                var x = Waves.centerX

                                var y = Waves.centerY

                                var rotation = dtr(Waves.options.rotation);

                                var amplitude = Waves.options.amplitude

                                var debug = Waves.options.debug

                                var Lines = Wave.Lines

                                each(Lines, function (line, i) {

                                        if (debug && i > 0) return

                                        var angle = line.angle

                                        var x1 = x - radius * Math.cos(angle[0] * amplitude + rotation);

                                        var y1 = y - radius * Math.sin(angle[0] * amplitude + rotation);

                                        var x2 = x + radius * Math.cos(angle[3] * amplitude + rotation);

                                        var y2 = y + radius * Math.sin(angle[3] * amplitude + rotation);

                                        var cpx1 = x - radius3 * Math.cos(angle[1] * amplitude * 2);

                                        var cpy1 = y - radius3 * Math.sin(angle[1] * amplitude * 2);

                                        var cpx2 = x + radius3 * Math.cos(angle[2] * amplitude * 2);

                                        var cpy2 = y + radius3 * Math.sin(angle[2] * amplitude * 2);

                                        ctx.strokeStyle = (debug) ? '#fff' : line.color

                                        ctx.beginPath();

                                        ctx.moveTo(x1, y1);

                                        ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);

                                        ctx.stroke();

                                        if (debug) {

                                                ctx.strokeStyle = '#fff'

                                                ctx.globalAlpha = 0.3

                                                ctx.beginPath();

                                                ctx.moveTo(x1, y1);

                                                ctx.lineTo(cpx1, cpy1);

                                                ctx.stroke();

                                                ctx.beginPath();

                                                ctx.moveTo(x2, y2);

                                                ctx.lineTo(cpx2, cpy2);

                                                ctx.stroke();

                                                ctx.globalAlpha = 1

                                        };

                                });

                        };

                        function Line(Wave, color) {

                                var Line = this

                                var angle = Wave.angle

                                var speed = Wave.speed

                                Line.angle = [

                                        Math.sin(angle[0] += speed[0]),

                                        Math.sin(angle[1] += speed[1]),

                                        Math.sin(angle[2] += speed[2]),

                                        Math.sin(angle[3] += speed[3])

                                ];

                                Line.color = color

                        };

                        function Stats() {

                                this.data = [];

                        };

                        Stats.prototype.time = function () {

                                return (performance || Date).now();

                        };

                        Stats.prototype.log = function () {

                                if (!this.last) {

                                this.last = this.time();

                                return 0

                        };

                        this.new = this.time();

                        this.delta = this.new - this.last

                        this.last = this.new

                        this.data.push(this.delta);

                        if (this.data.length > 10)

                                this.data.shift();

                        };

                        function each(items, callback) {

                                for (var i = 0; i < items.length; i++) {

                                        callback(items[i], i);

                                };

                        };

                        function extend(options, defaults) {

                                for (var key in options)

                                        if (defaults.hasOwnProperty(key))

                                                defaults[key] = options[key];

                                                return defaults

                        };

                        function dtr(deg) {

                                return deg * pi / 180

                        };

                        function rtd(rad) {

                                return rad * 180 / pi

                        };

                        function diagonal_angle(w, h) {

                                var a = Math.atan2(h, w) * 1.27325

                                return a

                        };

                        function rnd(a, b) {

                                if (arguments.length == 1)

                                        return Math.random() * a

                                        return a + Math.random() * (b - a);

                        };

                        function rnd_sign() {

                                return (Math.random() > 0.5) ? 1 : -1

                        };

                })();

                const wavesCountStr = localStorage.getItem('radiantValue-canvas-linesCount');

                const wavesWidthStr = localStorage.getItem('radiantValue-canvas-linesWidth');

                let wavesCount = 3

                let wavesWidth = 200

                if (wavesCountStr !== null) {

                        wavesCount = parseInt(wavesCountStr, 10);

                };

                if (wavesWidthStr !== null) {

                        wavesWidth = parseInt(wavesWidthStr, 10);

                };

                const waves = new Waves('#holder', {

                        waves: wavesCount,

                        width: wavesWidth

                });

                waves.animate();

        };

        let canvasValue = localStorage.getItem('Radiant-canvasValue');

        if (canvasValue == '1') {

                canvasBackground();

        };

})();
