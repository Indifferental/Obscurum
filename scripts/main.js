(function() {

        var version = 'v1.00'

        // изменение иконки на вкладке браузера

        var logo90 = 'data:image/png;base64,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'

        var logo512 = 'data:image/png;base64,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'

        let favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');

        favicon.forEach((element) => {

                element.setAttribute('href', logo90);

        });

        // создание глобального колонтитула для объектов темы в body

        var body = document.body || document.getElementsByTagName('body')[0];

        var variableHeader = document.createElement('data');
            variableHeader.className = `Obscurum ${version}`

        body.appendChild(variableHeader);

        // определение языка игры

        var language

        if (localStorage.getItem('tips.data').includes('"lang":"ru"')) {

                language = 'ru'

        } else {

                language = 'en'

        };

        // массив глобальных значений для функций

        var globalProperties = [

                {
                        background: 'rgb(0 0 0 / 5%)',
                        background_hover: 'rgb(255 255 255 / 2.5%)',

                        outline: '2px solid rgb(255 255 255 / 2.5%)',
                        border_radius: '1.25em',
                        box_shadow: '0 0 2em 0 rgb(0 0 0 / 40%), inset 0 0 1em 0 rgb(0 0 0 / 10%)',

                        backdrop_filter: 'blur(12px)',
                        least_backdrop_filter: 'blur(4px)',

                        color: 'rgb(255 157 71)',
                        least_color: 'rgb(255 157 71 / 25%)',

                        transition: '.3s cubic-bezier(.25, .1, .25, 1)',
                        animation: 'blend .2s ease-in-out',
                }

        ];

        // применение стиля на все домены https://*.tankionline.com/*

        function styleSheet() {

                var elements = [

                    {
                            selector: '.obscDOMElement-startText',
                            style: `
                                    color: white;
                                    font-style: oblique;

                                    position: fixed;
                                    top: 0.5em;
                                    left: 1em;
                                    z-index: 9999 !important;
                                    pointer-events: none;
                            `
                    },

                    {
                            selector: `.${variableHeader.className.slice(0, 8)}`,
                            style: `
                                    position: fixed;
                                    display: flex;
                                    justify-content: center;
                                    z-index: -1;
                                    pointer-events: none;
                            `
                    },

                    {
                            selector: '.obscGlobalVariable-svgNode',
                            style: `
                                    position: inherit;
                                    z-index: inherit;
                                    pointer-events: inherit;
                                    opacity: 0;

                                    animation: translateDown 2s cubic-bezier(0.25, .5, .75, 1.25) 2s forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-startScreen-logo',
                            style: `
                                    background-color: white;
                                    mask-image: url(data:image/png;base64,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);
                                    mask-position: center;
                                    mask-size: contain;

                                    position: absolute;
                                    top: -6em;
                                    width: 8em;
                                    height: 8em;
                                    opacity: 0;

                                    animation: translateDown .75s cubic-bezier(.25, .1, .25, 1) forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-startScreen-h1',
                            style: `
                                    font-size: 4em;
                                    font-family: 'BaseFontBold';
                                    text-transform: uppercase;
                                    font-weight: unset;
                                    position: absolute;
                                    top: 0.6em;
                                    margin: unset;
                                    opacity: 0;

                                    animation: translateUp .75s cubic-bezier(.25, .1, .25, 1) forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-startScreen-h2',
                            style: `
                                    color: rgb(255 255 255 / 50%);
                                    font-size: 1.5em;
                                    font-family: 'BaseFontRegular';
                                    font-weight: unset;
                                    text-transform: uppercase;
                                    position: absolute;
                                    top: 4.4em;
                                    margin: unset;
                                    opacity: 0;

                                    animation: translateUp .75s cubic-bezier(.25, .1, .25, 1) forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-svgGradient',
                            style: `
                                    background: linear-gradient(0deg, rgb(0 0 0 / 50%), transparent 40%);
                                    position: inherit;
                                    width: 100%;
                                    height: 100%;
                                    z-index: 1;
                                    pointer-events: inherit;
                                    opacity: 0;

                                    animation: translateDown 6s cubic-bezier(0.25, .5, .75, 1.25) 3s forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-clockDays',
                            style: `
                                    position: absolute;
                                    margin-top: 1.6em;
                                    font-family: 'BaseFontRegular';
                                    font-size: 1.7em;
                                    color: rgb(255 255 255 / 50%);
                            `
                    },

                    {
                            selector: '.obscDOMElement-clockTime',
                            style: `
                                    position: absolute;
                                    margin-bottom: 0.9em;
                                    font-family: 'BaseFontMedium';
                                    font-size: 2.25em;
                                    color: white;
                            `
                    },

                    {
                            selector: '.loadingAnimation-innerGear',
                            style: `
                                    position: absolute;
                                    left: 50%;
                                    top: 50%;
                                    width: 120px;
                                    height: 120px;
                                    border-radius: 50%;
                                    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
                                    margin-left: -60px;
                                    margin-top: -60px;
                            `
                    },

                    {
                            selector: '.loadingAnimation-innerRing',
                            style: `
                                    position: absolute;
                                    left: 50%;
                                    top: 50%;
                                    width: 60px;
                                    height: 120px;
                                    margin-left: -60px;
                                    margin-top: -60px;
                                    overflow: hidden;
                                    transform-origin: 60px 60px;
                                    -webkit-mask-image: -webkit-linear-gradient(top, rgba(0,0,0,1), rgba(0,0,0,0));

                                    animation: rotate 1.2s infinite linear;
                            `
                    },

                    {
                            selector: '.loadingAnimation-outerRing',
                            style: `
                                    width: 120px;
                                    height: 120px;
                                    border-radius: 50%;
                                    box-shadow: inset 0 0 0 2px rgba(255 255 255 / 50%);
                            `
                    },

                    {
                            selector: '.StartScreenComponentStyle-mainContainer > img',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.StartScreenComponentStyle-text',
                            style: `
                                    position: absolute;
                                    top: 10em;
                                    margin: unset;
                                    opacity: 0;

                                    animation: blend .75s cubic-bezier(.25, .1, .25, 1) .75s forwards;
                            `
                    },

                    {
                            selector: 'body',
                            style: `
                                    --general-bg: ${globalProperties[0].background};
                                    --general-bg-hover: ${globalProperties[0].background_hover};

                                    --general-outline: ${globalProperties[0].outline};
                                    --general-border-radius: ${globalProperties[0].border_radius};
                                    --general-box-shadow: ${globalProperties[0].box_shadow};

                                    --general-backdrop-filter: ${globalProperties[0].backdrop_filter};
                                    --least-backdrop-filter: ${globalProperties[0].least_backdrop_filter};

                                    --general-color: ${globalProperties[0].color};
                                    --least-general-color: ${globalProperties[0].least_color};

                                    --general-transition: ${globalProperties[0].transition};
                                    --general-animation: ${globalProperties[0].animation};

                                    justify-content: center;
                            `
                    },

                    {
                            selector: 'html, body',
                            style: `
                                    background: radial-gradient(ellipse at top, rgb(25, 25, 25),  black);
                            `
                    },

                    {
                            selector: '#modal-root > .ModalStyle-rootHover',
                            style: `
                                    background: transparent;
                            `
                    },

                    {
                            selector: '.ModalStyle-surfaceWindow',
                            style: `
                                    background: linear-gradient(45deg, rgb(0 0 0 / 75%), rgb(0 0 0 / 25%));

                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                                    z-index: -1;
                                    pointer-events: none;

                                    animation: var(--general-animation);
                            `
                    },

                    // блок стилей гаража

                    {
                            selector: '.obscDOMElement-buttonsHeader',
                            style: `
                                    display: flex;
                                    justify-content: center;
                                    align-items: flex-start;
                                    place-self: center;
                                    margin-top: 7em;
                                    width: 30em;
                                    height: 3em;
                                    pointer-events: all;
                            `
                    },

                    {
                            selector: '.obscDOMElement-garageVisibility, .obscDOMElement-defaultButton, .obscDOMElement-eveningButton, .obscDOMElement-nightButton',
                            style: `
                                    background-color: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin: 0 0.5em;
                                    width: 5em;
                                    height: 2em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.obscDOMElement-garageVisibility:hover, .obscDOMElement-defaultButton:hover, .obscDOMElement-eveningButton:hover, .obscDOMElement-nightButton:hover',
                            style: `
                                    background-color: var(--general-bg-hover);

                                    cursor: pointer;
                            `
                    },

                    {
                            selector: '.obscDOMElement-garageVisibility',
                            style: `
                                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4klEQVR4nO2cW4hNYRTHf3N1GfHiMjIkDIMYoyEpMrmFMYaSJB4oomYaubyJoZFbGQ9STF4keaCU4sFMbqVxSSOXEE1hKJd4mRqG0TfWqTOnc87e+/v22WePvf+1al5mnfX9Zu31fWvt7wz01FgCrIVAO3CEAC++SyxQEMbFLD5iBwiQauMACFwm1IYQCCEohZlACKFbYSbwbyvscnGLzACGABOA2UA5sByYA0wFhvOfQegDLAb2AdeArwl8RdsX4AZwDFgE5NLLIGQB84EG4JuNBVvZD+AisBTIxMcQcoCNwGsXFp3IlO8aIM9vEC4ArSlceKx9BLYKdN9A6EqDvQTKgg7hD3AaGNQbINwHDsnWVwyMAIbKtrgEqAOeaoJ4C8zwI4SfwBlgigO/hbKLdDqE0AFUpWKhWcDmBEUnGYRmhwuP1SSgUSMbTgHZuKR+wGVxfMkhBJXSplILqdeAoA5e/U0/fCBwJ8axUwhuTZaqNCA0mUDIA24lcHxVjrleN1AnNCDcBgbopP1dC8fpyIRs+aumNBMyZXF2HKcDwmSN3UHZdbuFsd6hY10IJcAaYJ38rFplu2rQAKDspJXjGk3HCgIOILxP0OissglgvGacyqoTOS3TTC1lLS6eGPfahPBMM1a1xgWxzvKlw9KlalXlnUJYaQNAnUG8bcDg6KKnc9qKtgobATuB8MpGTVhmGPOVyGdsM3SkrNQGAKcQVGFMpiIX4t6CpIOpo5E2ATiBsNbCT74LcX/A8NmP2DAHAOxCUFtkMhW4EHebcrTbBUeqn8dlCGpekEzTXYh7B3Kmf2HoSE1scRHCOxu/W2EY8/Pokfss4LeBM5O2V7eBOmoQ7y9gZqxDnZ47YmqMZSKd3uGhQbx74jnMlQmOrtNCDyEUG8R5L1lTNNrm66t4phoUPIJwVjPGz8AYqyDKNetBp8zwUg2hWJ5hp/Gp4ew8u0FUaxJudGkYmWzG2Kz57mCT0yAOa0JQxdRvL1926gZxXPMDq3wEYb9JABmyH+tmQiofBztpvwuXVKNZGJtkhuc1BFXwNuCyKoHvmrtDg4yxvIDwSS5opESFwBOD51GNsQ7KMKNIusgCOZaukONti8agNWI3vbhn1Ffe8OrsxU7MKYQH8g7TM5UCj3wGwfML3hnAapnheQ3BV/cYc4D10mgEMhOiVSJngDcuAmiVIklvgRDRRGA7cA54LDc4rBbbIY/UeelJpmEtX0OIVra03Kqjmyt3hSrlTY263zPKoJL3GgiplK8KY7oUQiCE0K0wEwghdCvMBOJvkerLoupLo4HMhPZ4t0SCAiGwi0fU418E/AUDDbZehjbRwQAAAABJRU5ErkJggg==');
                                    background-position: center;
                                    background-size: 2em;
                                    background-repeat: no-repeat;
                            `
                    },

                    {
                            selector: '.obscDOMElement-defaultButton',
                            style: `
                                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2az07bQBDGRwIBKUg9g1AhkcoDpKCAeI48S49w7Btkg5QDkCIagcQdOPEnPRTeABBIRUU8xIeGYEhNbG/T3fXank8aKXIce79f7N2ZsYlEIpFIJBKJUhAatI4GfaPCmleE5ygaBPSbLxoEDDJfFAiIM593CNAxnyUI2KBZNKmuFQ3qaJt/iwPt42/QrHsATaoPYcpONKkuADJzBfyYAo5ngJ8V4HIB+PUZOPkEHE33vsvlFbA9DnQrwN0S8LgaH7wPw9kazwGA1ihwXgYeVpKNh4N/czYPtEYyCqBdAq6r/248HDdfgJ1SxgDsfwTul//ffBD3td4xMwHge6k3YFPmXyEsAzsfPAfQGgVuDFz2kbdDdfCc4A2A87I980HwxOgFgEYoveWlbpjZfpjV4f0SeZB+YdOt2DcfBOcJaRVQiKrqdJIcU8HnGjQG2xAQZb4z5c58EFFpsy0IiKvnObd3DeBoJjovMA0BSc0MviddA+A5J25MpiBAp5PDVZ1rABcLyTWCCQhQ9DXxRFzS+ghA0ZqZq0AlQDiZ8+8WMGVeC8LhtF+ToGnziRB4SXINYHfSrflECLeL7szzudIwHwvB5VLYLadnPhAUtf8awOYY8CelYqhJHfKiHD6btw/gdM7jfkBrxG5D5Nr3hoiy2BL7Xes1Wged0ysAKmiK1sya38tKU1S9RHsCuDLRFq9msC2u+uYEnhiHaZXxisITXmYfjKi+4GWL8wSdZIn3yc2jMRWRNnMez8UMV3Qc/Jm37eb14aiyHAKA6n6/IqNCabPev9rx+hUZK52ltAobzyDk07wmhHybT4BQDPMREIplPvS6/PrrBpFIJBKJRCJypydnHOy8jo2EgwAAAABJRU5ErkJggg==');
                                    background-position: center;
                                    background-size: 2em;
                                    background-repeat: no-repeat;
                            `
                    },

                    {
                            selector: '.obscDOMElement-eveningButton',
                            style: `
                                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nO1aS09TQRS+G/6AJD7X+Af6A0w6U5CZqm3P3LRdlBboK1CIJD5WrH3ECD9At+pCXRoWxkTjQl2w8R1x61tUykKIYcy5cO20Fiu9z5L5ki9p6O2Z+b6Ze+acezEMDQ0NDQ0NDQ0PET2W2RflIkMYzBMmFiiH14TDMmGwZpHDsvU3JhbwGrwWf2P0MgYHzT2UmzXKxBPKheyCG5TBY4yBsYxeQZSbhwiDOcJhtUvhf3Er1mV6PHPQCCsikXJflIsz7YQPx005I7Lyam5E3h0fla+qRfmxVpbfpyoW8fPLatH6Dq85KbLWb9oZQZh5GscywgQynD5MuVhsnXAllZG3C3n5qVaWq9OVHRFNuVUoWDHa7IpFylMDRhgQ42aSMrHSKvxhaWzHorfjg+KYLKXSzSYwsRKNpxKBiifcLBMGv+xJ8bgpb+TzcsUl4Sox5vV83hrjzy1hjQ2lwMRTzNRbk8kn0/J5tei68FY+q47LXKJpN2z4bkKMm0l15ScgI9/XSp6Lt/lusiwnlNyAcyEMTviX8FjjnkfxX6Z2nuScEsdsMoHDD88TYyRS7lOzPW57P1e+3U5ouR0WPT0iKYez9mAsLuTTivf3fCdi3lETI2VwyrsKjzeKHMz2QYu3eW1kRDWgPjSUPOC6AYTBnHrOe3HUdUuci1onEAaX3BWfSPSrq+9mkeMW7xdHm0vmRKLfNQModnXK6gctth3r0xVZVk6F2DBMumcAa7S0WNsHLXY73izklV0gHrki/ggz99sVH3Zo3TQ2fhEbqKPxRoUYiyX3urD6kLVdxZY2aJGdOC2yjV0QN9OODSAM5u2A2KsHLbATr+Ry6mkw54IBYsEOeG98NHCBnYgPVZTK8I5jAyiHJTsgPskJWmAnvqgW1R3wxvkO4PDVDvhhMrwJUO0PlKrws3MDGKzZAfH5XdACO/HbVMMAwsVPxwZQLt5uBoQlo0fg6pwpTw0QBjOheQi5S+esoaERUlAOFymHdbfe8/lHWKcMLjg3gEE9eDFdkkHdsQGEi/NqMdQr3JwznHNsgIaGhsb/vjPE/97YfHvkHXEMHMsIbwcm/Djjw9eZUm1AaoBwmLXqBk8Js7rN1dDQ2IXtNbjTvoYd9F/ttRvta9hBtmmvdfuqoaGhoaGhYfiM3/dAM3T1ibwfAAAAAElFTkSuQmCC');
                                    background-position: center;
                                    background-size: 2em;
                                    background-repeat: no-repeat;
                            `
                    },

                    {
                            selector: '.obscDOMElement-nightButton',
                            style: `
                                    background-image: url('data:image/png;base64,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');
                                    background-position: center;
                                    background-size: 2em;
                                    background-repeat: no-repeat;
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-buttonsHeader',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: absolute;
                                    margin: unset;
                                    top: 19em;
                                    left: 2em;
                                    width: 28em;
                                    height: 3em;
                                    z-index: 20;
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-buttonsHeader > div',
                            style: `
                                    position: relative;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width: 4em;
                                    height: 3em;
                                    z-index: 21;
                                    cursor: pointer;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.obscDOMElement-fastPick-buttonsHeader > div:first-child',
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-buttonsHeader > div:last-child',
                            style: `
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-buttonsHeader > div > div',
                            style: `
                                    background-color: var(--general-color);
                                    mask-position: center;
                                    mask-repeat: no-repeat;
                                    mask-size: contain;

                                    width: 1.35em;
                                    height: 1.35em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-fastBattle > div',
                            style: `
                                    mask-image: url("/play/static/images/qb_mode.71a6ec19.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-tdm > div',
                            style: `
                                    mask-image: url("/play/static/images/tdm_mode.ef239dba.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-cp > div',
                            style: `
                                    mask-image: url("/play/static/images/cp_mode.9d327fbc.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-ctf > div',
                            style: `
                                    mask-image: url("/play/static/images/ctf_mode.fba37902.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-sge > div',
                            style: `
                                    mask-image: url("/play/static/images/sge_mode.4a6035e8.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-tjr > div',
                            style: `
                                    mask-image: url("/play/static/images/jg_mode.025a9047.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-rgb > div',
                            style: `
                                    mask-image: url("/play/static/images/rgb_mode.66312ba3.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-fastPick-asl > div',
                            style: `
                                    mask-image: url("/play/static/images/asl_mode.42f836ca.svg");
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    top: 52em;
                                    left: 0em;
                                    width: 31em;
                                    height: 3em;
                                    z-index: 1;
                                    cursor: pointer;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.obscDOMElement-holdingCard-img1',
                            style: `
                                    background-color: var(--least-general-color);
                                    mask-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAHAElEQVR4nO2dW4hVVRjHf0fHmTQzM3N00uyqlaZpvkRRWKYPRXeQInpJsKSSbhYW+WBB9FDqQ0FRZkLQ9aFEsoQiumimZHSDSDG1LM1LOZY6c3YP3xw9M529z/rWbe+j/uCDYc5a+/v2f769Zq2111qnNHfBiiag48nZUzlGOJqADtPCpVIpYCjdGAOcCnwN/BHLqZYkSYzL9goYhw0DgOXAt8AKYDPwQK4R+SJJEmOLwHNAUsPuiuFci0q7ggn9K7WFPghMiRGAhkYV+nhqi1yxncCo0EFo0GhXpDa6tc7nJwHvAP0ixOKdIgl9ikGZMcCi0IGEoEhCn2NY7g7gtpCBhKBIQl+mKPs8BWuv69GoQvcHlgC9A8Xin4L0Os4GymT3OmrZ7JBB1aMRu3dPoBc5AdqRP1IuNJrQvYBfsBM6AT4Cok3CVNNoQt+EvcgVuz1UcFk0ktAlZIbOVeityMgyKo00MrwRGO/hOm3AHA/XCUeOGd0H+A73bK7YPmCE7yCzaJSMvhc43+P1+gJPebyeX3LK6FZgN/6yuWJlYKzPQLNohIxeBJwY4LolitpW55DR1+I/k6vtAHC6r2CzKHJGD0ReV4WkD0V8zxg5o18jbDZXrB0Y4iPgLIqa0bd0WQz6AbMi+TKipMlUh3Udw4H1wCDbC1iwBWmrO0M50GgXI6N7IXPHMUUG+eNeFdlnKjGEvh+4IoKfWuQy2VSL0E3HOOBLoEVb0RN/I4OjfwzKjgBmIk/CauCVevVUHYSAvY5mpF2O0cvIshsMYr0Q+KtHvc+pkyAq7QIKPd+DSD7sJYNYP0ype19WpSIIPQlZxpW3yAmwqU6sJyMramvV3UDGC+C8+9EtwGJkSXAROI3spQnXky7mGcA1PoIIIfQ8Is6gGXJxxmcz6tSd6SUCz03HRGRSJ+/moqelLSO7wKBuBzDMVTufGd0MLEUmdYrGRSm/f9igbm/gVucIPGb0HPLP3DTbXiPeCcjw3KT+WmftPAndCuwpgKBZ1r8q3iZgjaJuGRnIWAvtq+l4Gtl/UmRGVv08D+mCmlLCtffhIaPHYv4I5mmXdMU7Hbt1fsuctPMg9NsFENHEpiHz4fst6++jxyKdmEKPxy478rCVHmK9zlZo1zb6MXJaYGjBlbjHat1Ou0yTDgc2Upyhdgx+Q3b0JoDpIA5wG4LP4OgSGWSEONqmoq3QTdSfIzhS0WwBOYSt0FOQR+hoJKrQXqYOG5RLbSrZ/jPcSKRlVwVlCLA99D/DcRzdIoNMB6uwEdqqjTrCmKCtYJvRsdmWg88s1NtBbIT2sefElPXAZOD1iD5NMN23fhjlXEdvZKVm6HmJTuBxDr+t+SGCT43tVGunFLotwk3soXv3MYZPGxuk0U47hA6xHaKadmQ6c1XV784M7NOWNroy2wRtGz1QWV7DAWQX7aoevy/qCFT1RkkrdMiMnoscwdaTvgF9uqDSQiv0ccrypqwGnk357M9APl1RaaEVeo+yvClzkLcftdgSyKcr+zSFtULvUpY3YS3wScbn31DMrN6rKawVeoeyvAlL6nzeCbwfwK8r7arSyn50Cckun/3RswzCnOTZpw9rDflyNgHWKetksQv42aDcV8jhsEVhL/C7poLNXMcaizpp/KgoOwtluxiQDdoKNkK/a1Enjd2KspuQoyeKwPfaCjZCr0YOm/LBQWX5xcBCT75d+EJbwUboBHjDol4thlrUeRA5DDZP1ELbLgkbiZ+V/baDkRaky5dHb2MXXdO3sdbeveopcNvZuRbgvRyEXloJIJbQ5+Fni9udlkKDzDcsjyz0zbGFBnjGQ+ArHYQGyexlEQROkGbj0EHhMYUeQPq5/KZWRg7gdqGFOJm9oNppTKEBrsZ93fGLlgJX0xd5OkKJXAbOrXYYW2hwb0I6cM9qkMd6lWMsafZmT2d5CN0MfOZ4I//bI2LJUGTJmk+RO5HNn93IQ2iAwcBPjjc0XSlqGhOBfx1jqbaaU7l5CQ1yaPY2hxvaQcp2YAtmOcRRbbtJGcHmKTRI/9qlJ/Ix/rY5p53DobHUr4/KW2iQ7Qcup5z7+q6V0dhvd0uQYX7qBqMiCA2ywGStw036OmPUtke0mTrNWFGEBtkA+ZbljZapc9SOISPQT4DtxWBpbpGErnAP9r2A+S6Ou1iq8NeJnNRelyIKDbLcd53ihqttmqPvqYZ+yii+26WoQoNsm3sEeTQ1Qr/g6LeZ+geDl4G7NRctstAV2pAD/NJO5+ppC2peRUfWSb8Hsdg32QhCVxgFvEx2+10GLvfga3LK9Xcg+8TVNJLQFQYjPYxP6Z7l+/HT86jwEN371SuR49qs0GgX61hjDScgh60MRPrhvr+uehhyROZWZF2fNSrtAmfqMYBHF35Q+g8djpXIp1EIUAAAAABJRU5ErkJggg==');
                                    mask-position: center;
                                    mask-size: contain;
                                    mask-repeat: no-repeat;
                                    position: relative;
                                    margin: 0 0.5em 0 1em;
                                    width: 1.25em;
                                    height: 1.25em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard > h1',
                            style: `
                                    color: rgb(255 255 255 / 25%);
                                    position: relative;
                                    width: fit-content;
                                    font-weight: unset;
                                    font-family: 'BaseFontMedium';
                                    font-size: 1.25em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard-text1',
                            style: `
                                    margin: 0 0.25em;
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard:hover > .obscDOMElement-holdingCard-img1',
                            style: `
                                    background-color: var(--general-color);
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard:hover > h1',
                            style: `
                                    color: white;
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard:hover > h1',
                            style: `
                                    color: white;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogWindowBackground',
                            style: `
                                    background: linear-gradient(45deg, rgb(0 0 0 / 75%), rgb(0 0 0 / 25%));

                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                                    z-index: 999;
                                    cursor: pointer;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogWindow',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    align-self: center;
                                    justify-self: center;
                                    width: 40em;
                                    height: 57em;
                                    z-index: 1000;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelowWindow-img1',
                            style: `
                                    background-image: url(data:image/webp;base64,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);
                                    background-position: center;
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    border-radius: var(--general-border-radius);

                                    justify-self: center;
                                    margin-top: 2em;
                                    width: 35em;
                                    height: 23em;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelowWindow-header',
                            style: `
                                    color: rgb(255 255 255 / 50%);
                                    justify-self: center;
                                    margin: 0.5em 0em;
                                    font-size: 2em;
                                    font-weight: unset;
                                    font-family: 'BaseFontMedium';
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelowWindow-textHeader',
                            style: `
                                    justify-self: center;
                                    width: 35em;
                                    height: 27.5em;
                                    overflow-y: auto;
                                    scrollbar-width: thin;
                                    scrollbar-color: rgb(114 114 114 / 10%) transparent;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelowWindow-textHeader-h1',
                            style: `
                                    font-weight: unset;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                    text-align: left;
                                    word-break: break-word;
                                    font-family: 'BaseFontMedium';
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelowWindow-textHeader-h1 > span',
                            style: `
                                    text-align: left;
                                    word-break: break-word;
                                    margin-bottom: 0.5em;
                                    font-family: 'BaseFontRegular';
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelowWindow-textHeader-h1-line',
                            style: `
                                    background: rgb(255 255 255 / 10%);
                                    margin: 0.5em 0;
                                    width: 33em;
                                    height: 1px;
                            `
                    },

                    // блок загрузки игры

                    {
                            selector: '.ApplicationLoaderComponentStyle-logo, .ApplicationLoaderComponentStyle-loader, .ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn > div:nth-child(1)',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.ApplicationLoaderComponentStyle-container > .Common-flexCenterAlignCenter',
                            style: `
                                    bottom: 24em;
                            `
                    },

                    {
                            selector: '.ApplicationLoaderComponentStyle-container > .ApplicationLoaderComponentStyle-helpChangeTip',
                            style: `
                                    right: unset;
                                    bottom: 22em;
                            `
                    },

                    {
                            selector: '.ApplicationLoaderComponentStyle-helpChangeKey',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: 0.5em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ApplicationLoaderComponentStyle-helpChangeKey span',
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 16px;
                            `
                    },

                    // блок загрузки в меню

                    {
                            selector: '.LobbyLoaderComponentStyle-container',
                            style: `
                                    background: radial-gradient(ellipse at top, rgb(25 25 25),  black);

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.LobbyLoaderComponentStyle-loaderContainer',
                            style: `
                                    bottom: 24em;
                            `
                    },

                    {
                            selector: '.LobbyLoaderComponentStyle-loaderContainer > span',
                            style: `
                                    font-size: 1em;
                            `
                    },

                    {
                            selector: '.LobbyLoaderComponentStyle-loaderContainer > img, .LobbyLoaderComponentStyle-logo',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // основной блок меню

                    {
                            selector: '.Common-container, .Common-entranceBackground, .Common-entranceGradient, .Common-background, .Common-changingBackground',
                            style: `
                                    background: transparent !important;
                            `
                    },

                    {
                            selector: '.ContainerInfoComponentStyle-rewardsMenuHotkey',
                            style: `
                                    width: 2.5em;
                                    height: 1.25em;
                            `
                    },

                    {
                            selector: `.Common-buttonQE,
                                       .ContainerInfoComponentStyle-rewardsMenuHotkey h3`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: 0.25em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    width: 2.5em;
                                    height: 1.25em;
                                    min-height: 1.25em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.Common-buttonQE',
                            tags: 'hover'
                    },

                    {
                            selector: '.ContainerInfoComponentStyle-rewardsMenuHotkey h3',
                            tags: 'hover'
                    },

                    {
                            selector: `.Common-buttonQE span,
                                       .ContainerInfoComponentStyle-rewardsMenuHotkey h3`,
                            style: `
                                    color: var(--least-general-color);
                            `
                    },

                    {
                            selector: `.ContextMenuStyle-menu,
                                       .TooltipStyle-tooltip`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--general-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ContextMenuStyle-menu >  div:nth-child(2)',
                            style: `
                                    border-top-left-radius: 1.25em;
                                    border-top-right-radius: 1.5em;
                            `
                    },

                    {
                            selector: '.ContextMenuStyle-menu > div:nth-last-child(1)',
                            style: `
                                    border-bottom-left-radius: 1.25em;
                                    border-bottom-right-radius: 1.25em;
                            `
                    },

                    {
                            selector: '.ContextMenuStyle-menu > .Common-flexStartAlignCenter',
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ContextMenuStyle-menuItemRank',
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.MenuComponentStyle-mainMenuItem',
                            style: `
                                    color: rgb(150 150 150 / 50%);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MenuComponentStyle-mainMenuItem:hover',
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: '.Common-activeMenu',
                            style: `
                                    background: unset;
                                    color: var(--general-color) !important;
                                    text-shadow: 0 0 1.5em;

                                    transition: var(--general-transition);
                                    overflow: unset;
                            `
                    },

                    {
                            selector: '.Common-activeMenu > .Common-menuItemActive',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // блок чата и новостей в меню

                    {
                            selector: '.ChatComponentStyle-closeArea, .NewsComponentStyle-closeArea',
                            style: `
                                    background: linear-gradient(45deg, rgb(0 0 0 / 75%), rgb(0 0 0 / 25%));

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ChatComponentStyle-chatWindow',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);
                                    backdrop-filter: var(--general-backdrop-filter);

                                    animation: translateRight .2s ease-in-out;
                            `
                    },

                    {
                            selector: '.ChatComponentStyle-messageRow',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);

                                    margin-bottom: 0.35em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.NewsComponentStyle-newsWindow',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);

                                    border-right: var(--general-outline);
                                    backdrop-filter: var(--general-backdrop-filter);

                                    animation: translateLeft .2s ease-in-out;
                            `
                    },

                    {
                            selector: '.NewsComponentStyle-newsItemContainer',
                            style: `
                                    background: rgba(255, 255, 255, 0.1);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.NewsComponentStyle-newsItemHeaderReadMark',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.NewsComponentStyle-newsItemDate',
                            style: `
                                    margin-top: 1em;
                                    margin-right: 1em;
                            `
                    },

                    {
                            selector: '.NewsComponentStyle-header h1',
                            style: `
                                    display: flex;
                                    align-self: unset;
                                    margin: 0em 0.5em;
                            `
                    },

                    {
                            selector: '.TutorialModalComponentStyle-contentWrapper, .ItemDescriptionComponentStyle-commonBlockModal',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    backdrop-filter: var(--general-backdrop-filter);

                                    animation: translateRight .2s ease-in-out;
                            `
                    },

                    {
                            selector: '.ItemDescriptionComponentStyle-commonBlockModal > .ItemDescriptionComponentStyle-paddingHeaderModal > .Common-flexStartAlignCenter > .HotKey-commonBlockForHotKey',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // блок основных кнопок меню

                    {
                            selector: '.MainScreenComponentStyle-gradientBlock',
                            style: `
                                    background: radial-gradient(transparent 25%, black);

                                    width: 100%;
                                    opacity: 1;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-gradientBlockRight',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-notificationIconNewNews, .MainScreenComponentStyle-new.FooterComponentStyle-marginEllips',
                            style: `
                                    background: var(--general-color);
                                    border-radius: var(--general-border-radius);

                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                                    top: 0em;
                                    right: 0em;
                                    margin: unset;
                                    opacity: 0.1;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-itemCommonLi:hover .PrimaryMenuItemComponentStyle-notificationIconNewNews, .MainScreenComponentStyle-new.FooterComponentStyle-marginEllips:hover',
                            style: `
                                    background: rgb(255 255 255 / 45%);
                            `
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-menuItemContainer',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;

                                    margin-left: unset;
                                    margin-bottom: 1em;
                                    width: inherit;
                                    height: 5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-menuItemContainer > div',
                            style: `
                                    background-color: var(--general-color) !important;
                            `
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-discountNotification, .Common-discount',
                            style: `
                                    background-color: var(--general-color);
                                    border-radius: 0.5em;
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rootTitle > div',
                            style: `
                                    background-color: var(--general-bg);
                                    background-image: url(data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABQAAFwAAQUxQSEwAAAABmS5E9D/Aprb2Ji9NT8wkK2sHMZ01M+hgBjcEAVVBxASITQh2uSNMAAguABBFv3AbOv3zuRHwqNFyhFUjlwFSGQsArAMA7CYTD4sZVlA4ICQAAACwAgCdASoGABgAPpE6l0eloyIhMAgAsBIJaQAAeyAA/vhNAAA=);
                                    background-size: 0.3em;
                                    outline: var(--general-outline);
                                    border: unset;
                                    border-radius: 0.25em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel,
                                       .BreadcrumbsComponentStyle-headerContainer`,
                            style: `
                                    background: var(--general-bg);
                                    border-bottom: var(--general-outline);
                                    backdrop-filter: var(--least-backdrop-filter);
                                    box-shadow: var(--general-box-shadow);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockForIconTankiOnline > img',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexCenterAlignCenter > .HotKey-commonBlockForHotKey,
                                       .MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexCenterAlignCenterColumn > .HotKey-commonBlockForHotKey,
                                       .MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > .Common-flexCenterAlignCenter > .HotKey-commonBlockForHotKey,

                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexCenterAlignCenter > .HotKey-commonBlockForHotKey,
                                       .BreadcrumbsComponentStyle-rightButtonsContainer > .Common-flexCenterAlignCenter > h3,
                                       .BreadcrumbsComponentStyle-backButton > h3`,
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    left: 0.5em;
                                    width: 5em;
                                    height: 5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexCenterAlignCenter',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    left: 6em;
                                    width: 5em;
                                    height: 5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter',
                            style: `
                                    position: absolute;
                                    left: 12.5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > .Common-flexCenterAlignCenter > .Common-maskImageContain,
                                       .MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > .BreadcrumbsComponentStyle-logout > .BreadcrumbsComponentStyle-iconLogout,
                                       .BreadcrumbsComponentStyle-rightButtonsContainer > .Common-flexCenterAlignCenter > div,
                                       .BreadcrumbsComponentStyle-rightButtonsContainer > .BreadcrumbsComponentStyle-exitGameButton > .IconStyle-iconLogOff,
                                       .BreadcrumbsComponentStyle-backButton > .IconStyle-iconBackArrow`,
                            style: `
                                    background-color: var(--general-color) !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > div',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > div:nth-child(1)',
                            style: `
                                    position: absolute;
                                    right: 12.5em;
                                    width: 18.5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > div:nth-child(1) > .HeaderCommonStyle-icons',
                            style: `
                                    background: transparent !important;
                                    border: unset;

                                    height: 2.5em;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > div:nth-child(1) > .HeaderCommonStyle-icons > .Common-iconCoinSizeMedium,
                                       .BreadcrumbsComponentStyle-rightButtonsContainer > div > .HeaderCommonStyle-icons > .Common-iconCoinSizeMedium`,
                            style: `
                                    margin-left: 1em;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > div:nth-child(1) > .HeaderCommonStyle-icons > .UserScoreComponentStyle-iconCrystal,
                                       .BreadcrumbsComponentStyle-rightButtonsContainer > div > .HeaderCommonStyle-icons > .UserScoreComponentStyle-iconCrystal`,
                            style: `
                                    margin-left: 0.22em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > .Common-flexCenterAlignCenter',
                            style: `
                                    position: absolute;
                                    right: 6em;
                                    top: 0.5em;
                                    width: 5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > .BreadcrumbsComponentStyle-logout',
                            style: `
                                    position: absolute;
                                    right: 0.5em;
                                    width: 5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainer,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable`,
                            style: `
                                    width: 5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable > .UserInfoContainerStyle-titleRankIcon,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable > .UserInfoContainerStyle-titleRankIcon,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainer > .UserInfoContainerStyle-titleRankIcon`,
                            style: `
                                    width: 4em;
                                    height: auto;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen`,
                            style: `
                                    margin-left: 0.5em;
                                    width: 13em;
                                    height: 5em;
                                    align-items: center;
                                    justify-content: center;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable,
                                       .MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable',
                            tags: 'hover'
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen',
                            tags: 'hover'
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div`,
                            style: `
                                    position: absolute;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div > .UserInfoContainerStyle-userNameRank,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div > .UserInfoContainerStyle-userNameRank`,
                            style: `
                                    text-shadow: 0 0 2em;
                                    font-size: 1.25em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div > .UserInfoContainerStyle-userNameRank:hover,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div > .UserInfoContainerStyle-userNameRank:hover`,
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div > .UserInfoContainerStyle-userNameRank,
                                       .MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div:nth-child(1),
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div > .UserInfoContainerStyle-userNameRank,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div:nth-child(1)`,
                            style: `
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width: 100%;
                                    height: 100%;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn`,
                            style: `
                                    background: var(--least-general-color);
                                    border-radius: var(--general-border-radius);

                                    width: 100%;
                                    height: 100%;
                                    opacity: 0;
                                    pointer-events: none;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn:after,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn:after`,
                            style: `
                                    background: var(--general-color);
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .UserInfoContainerStyle-containerParameterProgress,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .UserInfoContainerStyle-containerParameterProgress`,
                            style: `
                                    opacity: 0;
                                    pointer-events: none;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen:hover > .Common-flexStartAlignStartColumn,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen:hover > .Common-flexStartAlignStartColumn`,
                            style: `
                                    opacity: 0.175;
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rightButtonsContainer > div',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    top: 0.5em;
                                    right: 12.5em;
                                    width: 18.5em;
                                    height: 5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rightButtonsContainer > div > .HeaderCommonStyle-icons',
                            style: `
                                    background: transparent !important;
                                    border: unset;

                                    height: 2.5em;
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rightButtonsContainer > .UserScoreComponentStyle-coinsContainer',
                            style: `
                                    display: flex;
                                    align-items: center;
                                    right: 30em;
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rightButtonsContainer > .UserScoreComponentStyle-coinsContainer > .HeaderCommonStyle-icons',
                            style: `
                                    height: 100%;
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rightButtonsContainer > .Common-flexCenterAlignCenter',
                            style: `
                                    position: absolute;
                                    right: 6em;
                                    top: 0.5em;
                                    width: 5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rightButtonsContainer > .BreadcrumbsComponentStyle-exitGameButton',
                            style: `
                                    position: absolute;
                                    right: 0.5em;
                                    top: 0.5em;
                                    width: 5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-backButton',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    left: 0.5em;
                                    top: 0.5em;
                                    width: 5em;
                                    height: 5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexCenterAlignCenter',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    left: 6em;
                                    top: 0.5em;
                                    width: 5em;
                                    height: 5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter',
                            style: `
                                    position: absolute;
                                    top: 0.5em;
                                    left: 12.5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: `.BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainer,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainer:hover,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable:hover,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-headerContainer > .BreadcrumbsComponentStyle-breadcrumbs > .BreadcrumbsComponentStyle-rootTitle',
                            style: `
                                    animation: var(--general-animation);
                            `
                    },

                    // блок кнопки "Играть"

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .Common-displayFlex',
                            style: `
                                    position: absolute;
                                    margin: unset;
                                    top: 8em;
                                    left: 2em;
                                    width: 28em;
                                    height: 10em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: unset;

                                    width: inherit;
                                    height: inherit;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay > span',
                            style: `
                                    color: var(--general-color) !important;
                                    text-shadow: 0 0 1.5em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay > .Common-backgroundImageContain',
                            style: `
                                    mask-image: url("/play/static/images/lockButtonPlay.4bb62c08.svg");
                                    mask-size: contain;
                                    mask-position: center;
                                    mask-repeat: no-repeat;
                                    background-color: var(--general-color);
                                    background-image: unset;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay > h3',
                            style: `
                                    color: var(--general-color);
                                    margin-bottom: 0.5em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-disabledButtonPlay',
                            style: `
                                    background: var(--general-bg) !important;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu',
                            style: `
                                    position: absolute;
                                    margin: unset;
                                    top: 23em;
                                    left: 2em;
                                    width: 28em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu > ul',
                            style: `
                                    width: inherit;
                                    height: inherit;
                            `
                    },

                    {
                            selector: `.Common-container > .ContainersComponentStyle-navigationBlockForCategories,
                                       .Common-container > .ProBattlesComponentStyle-navigationBlock,
                                       .Common-container > .GarageMenuComponentStyle-garageMenuContainer,
                                       .Common-container > .Common-flexStartAlignStart > .GarageMenuComponentStyle-garageMenuContainer,
                                       .Common-container > .Common-flexStartAlignCenterColumn > .GarageMenuComponentStyle-garageMenuContainer,
                                       .Common-container > .GarageCommonStyle-garageContainer > .GarageMenuComponentStyle-garageMenuContainer,
                                       .Common-container > .GarageCommonStyle-garageContainer > .GarageMenuComponentStyle-garageMenuContainer > .GarageMenuComponentStyle-garageMenuContainer,
                                       .Common-container > .ContainersComponentStyle-navigationContainer > .ContainersComponentStyle-navigationBlock`,
                            style: `
                                    background: var(--general-bg);
                                    border-bottom: var(--general-outline);
                                    backdrop-filter: var(--least-backdrop-filter);
                                    box-shadow: 0px 20px 2.5em 0 rgb(0 0 0 / 40%);

                                    justify-content: center;
                                    align-items: center;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.MenuComponentStyle-decorLineMenu',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // блок нижнего колонтитула в меню

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    bottom: 1em;
                                    width: 31em;
                                    height: 6.5em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul',
                            style: `
                                    position: absolute;
                                    left: 1em;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    margin: unset;
                                    width: inherit;
                                    height: inherit;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > li',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;

                                    margin-right: 1em;
                                    width: 6.25em;
                                    height: 4.5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > li > div',
                            style: `
                                    background-color: var(--general-color) !important;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > .FooterComponentStyle-musicLink',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient:before',
                            style: `
                                    content: '';

                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    top: 7em;
                                    left: 0em;
                                    width: 31em;
                                    height: 65%;
                                    z-index: 1;
                                    pointer-events: none;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerForMenuGradient:after',
                            style: `
                                    content: '';

                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    bottom: 1em;
                                    right: 0em;
                                    width: 31em;
                                    height: 88%;
                                    z-index: 1;
                                    pointer-events: none;

                                    transition: var(--general-transition);
                            `
                    },

                    // блок обычного БП

                    {
                            selector: '.BattlePassLobbyComponentStyle-menuBattlePass',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    align-items: center;
                                    top: 8em;
                                    right: 2em;
                                    margin: unset;
                                    width: 28em;
                                    height: 10em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.BattlePassLobbyComponentStyle-blockBattlePass',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: 1em;

                                    width: 95%;
                            `
                    },

                    {
                            selector: '.BattlePassLobbyComponentStyle-imagePass',
                            style: `
                                    width: 6.813em;
                            `
                    },

                    {
                            selector: '.BattlePassLobbyComponentStyle-commonDescription',
                            style: `
                                    border: unset;
                            `
                    },

                    // блок элитного БП

                    {
                            selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: unset;

                                    top: 19em;
                                    right: 2em;
                                    margin: unset;
                                    padding: unset;
                                    width: 28em;
                                    height: 10em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.EventBattlePassLobbyComponentStyle-commonBlockProgressBar',
                            style: `
                                    background: transparent;

                                    top: 1em;
                            `
                    },

                    {
                            selector: '.EventBattlePassLobbyComponentStyle-commonBlockProgressBar > h2, .EventBattlePassLobbyComponentStyle-descriptionEventPass > h3',
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 0.75em;
                            `
                    },

                    {
                            selector: '.EventBattlePassLobbyComponentStyle-descriptionEventPass',
                            style: `
                                    bottom: 1em;
                            `
                    },

                    {
                            selector: '.EventBattlePassLobbyComponentStyle-progressBar > div:nth-child(1)',
                            style: `
                                    border-color: var(--least-general-color);
                                    opacity: 0.35;
                            `
                    },

                    {
                            selector: '.EventBattlePassLobbyComponentStyle-progressBar > div > div',
                            style: `
                                    border-color: var(--general-color);
                            `
                    },

                    // блок объявлений

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-mainContainer',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset !important;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: unset;

                                    bottom: 2em;
                                    right: 2em;
                                    width: 28em;
                                    height: 17.5em;
                            `
                    },

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-announceContainer',
                            style: `
                                    background: transparent;
                            `
                    },

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-mainContainer > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    background: transparent;
                            `
                    },

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-mainBackGroundContainer',
                            style: `
                                    border-bottom: var(--general-outline);

                                    width: inherit;
                                    height: max-content;
                            `
                    },

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-announceDescriptionContainer',
                            style: `
                                    border-top-left-radius: var(--general-border-radius) !important;
                                    border-top-right-radius: var(--general-border-radius) !important;
                            `
                    },

                    // блок таймеров в меню

                    {
                            selector: '.ChallengeTimerComponentStyle-textTime',
                            style: `
                                    background: rgb(0 0 0 / 5%);
                                    outline: var(--general-outline);
                                    border-radius: 0.75em;

                                    color: white;
                                    text-shadow: 0 0 5px black;

                                    margin-top: 0.5em;
                                    padding: 0.25em 0.5em;
                            `
                    },

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-headerTimer',
                            style: `
                                    background: rgb(0 0 0 / 5%);
                                    outline: var(--general-outline);
                                    border-radius: 0.75em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    padding: 0.25em 0.5em;
                            `
                    },

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-headerTimer > div > span',
                            style: `
                                    color: white;
                                    text-shadow: 0 0 5px black;
                            `
                    },

                    // блок раздела с друзьями

                    {
                            selector: '.FriendListComponentStyle-blockList',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.FriendListComponentStyle-containerFriends',
                            style: `
                                    margin-top: 1.25em;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-nickName > .Font-normal',
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-stringCommunity',
                            style: `
                                    padding-bottom: 0.75em;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-substrateRhombus',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-blockImage',
                            style: `
                                    margin-left: 1em;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-offline, .FriendListComponentStyle-greenTextOnline, .FriendListComponentStyle-opacityText',
                            style: `
                                    margin: 0.1em;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-friendsOnline',
                            style: `
                                    margin-right: 12.25em;
                                    width: auto;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-friendsOnline > .FriendListComponentStyle-numberFriends',
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 0.75em;
                            `
                    },

                    {
                            selector: `.FriendListComponentStyle-offlineBlock,
                                       .FriendListComponentStyle-blockOnline`,
                            style: `
                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    right: 1em;
                                    margin: unset;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-containerNickName',
                            style: `
                                    position: absolute;
                                    left: 6.5em;
                                    margin: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-scrollCommunity',
                            style: `
                                    align-items: center;
                                    margin-top: unset;
                                    padding-top: 1.5em;
                                    width: 100%;
                                    height: 100%;
                            `
                    },

                    {
                            selector: `.FriendRequestComponentStyle-blockInformationCommunityNoSearch,
                                       .FriendRequestComponentStyle-blockInformationCommunity`,
                            style: `
                                    margin-left: unset;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-buttonAddFriends',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: 1em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.FriendListComponentStyle-buttonAddFriends > img',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-buttonAddFriends:before',
                            style: `
                                    content: '';

                                    background: var(--general-color);

                                    mask-image: url(/play/static/images/Add-friend.137d3601.svg);
                                    mask-position: center;
                                    mask-repeat: no-repeat;
                                    mask-size: 3em;

                                    position: absolute;
                                    width: inherit;
                                    height: inherit;
                            `
                    },

                    {
                            selector: `.FriendRequestComponentStyle-buttonDeclineAll,
                                       .FriendRequestComponentStyle-buttonDeclineAllInvisible`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 1em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.FriendRequestComponentStyle-buttonDeclineAll',
                            tags: 'hover'
                    },

                    {
                            selector: '.FriendRequestComponentStyle-cellActions',
                            style: `
                                    background: rgb(255 255 255 / 1.5%) !important;
                                    cursor: default !important;
                            `
                    },

                    {
                            selector: `.FriendRequestComponentStyle-buttonAccept,
                                       .FriendRequestComponentStyle-buttonDecline`,
                            style: `
                                    background: rgb(255 255 255 / 2.5%);
                                    border: unset;
                                    border-radius: unset;

                                    align-items: center;
                                    justify-content: center;
                                    width: 10em;
                                    height: inherit;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.FriendRequestComponentStyle-buttonAccept',
                            tags: 'hover'
                    },

                    {
                            selector: '.FriendRequestComponentStyle-buttonDecline',
                            tags: 'hover'
                    },

                    {
                            selector: '.FriendRequestComponentStyle-buttonAccept',
                            style: `
                                    border-top-right-radius: 1em;
                                    border-bottom-right-radius: 1em;

                                    margin: unset;
                            `
                    },

                    {
                            selector: '.FriendRequestComponentStyle-buttonDecline',
                            style: `
                                    border-top-left-radius: 1em;
                                    border-bottom-left-radius: 1em;
                            `
                    },

                    {
                            selector: '.nickNameClass:hover > div > div > span',
                            style: `
                                    color: var(--general-color) !important;
                            `
                    },

                    // блок раздела с контейнерами

                    {
                            selector: '.ContainersComponentStyle-infoPanel',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    top: 10em;
                                    left: 0em;
                                    margin-top: 5.5em;
                                    padding: 1.5em 0;
                                    width: 25em;
                                    height: max-content;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > div > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-nameItem',
                            style: `
                                    margin-left: 0.75em;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > div > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ContainersComponentStyle-description',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > div > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ContainersComponentStyle-description > .ItemDescriptionComponentStyle-textClipped',
                            style: `
                                    -webkit-line-clamp: 5;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > div > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ContainersComponentStyle-description > .Common-flexStartAlignStart',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: unset;

                                    padding: 0.75em 0;
                                    height: max-content;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock > .ContainersComponentStyle-rewards',
                            style: `
                                    margin: unset;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock > .ContainersComponentStyle-rewards > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: unset;

                                    margin: 4px;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock > .ContainersComponentStyle-rewards > .Common-flexCenterAlignCenterColumn > div:nth-child(1)',
                            style: `
                                    width: 2em;
                                    height: 2em;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock > .DeviceButtonComponentStyle-blockAlterations',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: `.ContainersComponentStyle-leftPane,
                                       .ContainersComponentStyle-rightPane`,
                            style: `
                                    opacity: 0;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-navigationContainer > .ContainersComponentStyle-navigationBlock > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    padding: unset;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-keyBlock',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.ContainerInfoComponentStyle-lootBoxDescriptionContainer',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    height: calc(100% - 3.5em);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ContainerInfoComponentStyle-itemsContainer > .Common-flexStartAlignStretchColumn > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.ContainerInfoComponentStyle-itemsContainer > .Common-flexStartAlignStretchColumn > .Common-flexCenterAlignCenterColumn > div:nth-child(2)',
                            style: `
                                    width: 2em;
                                    height: 2em;
                            `
                    },

                    {
                            selector: '.RewardCardComponentStyle-probabilityBlock',
                            style: `
                                    justify-content: center;
                                    width: 100%;
                            `
                    },

                    {
                            selector: '.RewardCardComponentStyle-probabilityBlock > .RewardCardComponentStyle-probability',
                            style: `
                                    color: rgb(255 255 255 / 35%);

                                    margin-top: 0.25em;
                                    margin-right: unset;
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-bottomBlock > .DeviceButtonComponentStyle-blockAlterations > h2',
                            style: `
                                    color: var(--general-color);
                                    overflow: visible;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.ContainersComponentStyle-bottomBlock > .DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter,
                                       .ContainersComponentStyle-moreButton`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 1em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    visibility: visible;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ContainersComponentStyle-bottomBlock > .DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter',
                            tags: 'hover'
                    },

                    {
                            selector: '.ContainersComponentStyle-moreButton',
                            tags: 'hover'
                    },

                    {
                            selector: `.ContainersComponentStyle-bottomBlock > .DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter > span,
                                       .ContainersComponentStyle-moreButton > span`,
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 3em;

                                    margin: unset !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.ContainersComponentStyle-bottomBlock > .DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter > div,
                                       .ContainersComponentStyle-moreButton > div`,
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.GarageTurretsAlterationsComponentStyle-hotkeyG',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: 0.5em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    color: var(--general-color);
                                    text-shadow: 0 0 16px;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.AnimationOpenContainerComponentStyle-controlButton > .DeviceButtonComponentStyle-blockAlterations > h2',
                            style: `
                                    color: rgb(255 255 255 / 60%);
                                    font-family: 'BaseFontRegular';
                            `
                    },

                    {
                            selector: `.AnimationOpenContainerComponentStyle-rewardContainer,
                                       .RewardCardComponentStyle-fastAppearance`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin: 0.35em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.AnimationOpenContainerComponentStyle-rewardContainer > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    background: transparent;
                                    box-shadow: unset;
                                    border-radius: inherit;
                            `
                    },

                    {
                            selector: '.AnimationOpenContainerComponentStyle-rewardContainer > .Common-flexCenterAlignCenterColumn > div:nth-child(1)',
                            style: `
                                    width: 2em;
                                    height: 2em;
                            `
                    },

                    // блок раздела с кланом

                    {
                            selector: '.ClanCommonStyle-marginContent',
                            style: `
                                    margin-top: 1.25em;
                            `
                    },

                    {
                            selector: `.ClanHeaderComponentStyle-blockInform,
                                       .ClanInfoComponentStyle-messageClan`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ClanStatisticsComponentStyle-areCommon',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: `.ClanInfoComponentStyle-buttonEditProfile,
                                       .ClanCommonStyle-buttonInvite`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 1em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ClanInfoComponentStyle-buttonEditProfile',
                            tags: 'hover'
                    },

                    {
                            selector: '.ClanCommonStyle-buttonInvite',
                            tags: 'hover'
                    },

                    {
                            selector: `.ClanInfoComponentStyle-buttonEditProfile > .Common-flexStartAlignStart > h3,
                                       .ClanCommonStyle-buttonInvite > .Common-flexStartAlignStart > h3`,
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: `.ClanInfoComponentStyle-buttonEditProfile > span,
                                       .ClanCommonStyle-buttonInvite > span`,
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 2em;
                                    padding: unset !important;
                            `
                    },

                    // общий блок таблиц в меню и в клане

                    {
                            selector: '.TableComponentStyle-tBody',
                            style: `
                                    padding-left: 2em;
                                    margin-left: -2em;
                            `
                    },

                    {
                            selector: '.TableComponentStyle-td ',
                            style: `
                                    height: 100%;
                            `
                    },

                    {
                            selector: `.TableComponentStyle-row,
                                       .ClanCommonStyle-row`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 1em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin-bottom: 0.75em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.TableComponentStyle-row:hover',
                            tags: 'hover'
                    },

                    {
                            selector: '.ClanCommonStyle-row:hover',
                            tags: 'hover'
                    },

                    {
                            selector: '.ClanCommonStyle-rowEmpty',
                            style: `
                                    opacity: 0;
                            `
                    },

                    {
                            selector: '.ClanInvitationsComponentStyle-invitationContent',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ClanInvitationsComponentStyle-sendButton > .Common-flexStartAlignStart > .HotKey-commonBlockForHotKey',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.ClanInvitationsComponentStyle-blockInformationClanInvitation',
                            style: `
                                    margin: 1em 0;
                            `
                    },

                    {
                            selector: `.TableComponentStyle-table > thead > tr > th,
                                       .ClanCommonStyle-tableInvite > thead > tr > th`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 0.85em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    height: 2em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.TableComponentStyle-table > thead > tr > th:hover,
                                       .ClanCommonStyle-tableInvite > thead > tr > th:hover`,
                            style: `
                                    background: var(--general-bg-hover);

                                    cursor: pointer;
                            `
                    },

                    {
                            selector: `.TableComponentStyle-table > thead > tr > th > h2,
                                       .ClanCommonStyle-tableInvite > thead > tr > th > h2`,
                            style: `
                                    color: var(--general-color) !important;
                                    text-shadow: 0 0 2em;
                            `
                    },

                    {
                            selector: '.TableComponentStyle-commonSort',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    // блок ввода с поиском в меню

                    {
                            selector: '.SearchInputComponentStyle-search',
                            style: `
                                    height: auto;
                            `
                    },

                    {
                            selector: '.SearchInputComponentStyle-searchInput',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    backdrop-filter: var(--least-backdrop-filter);
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.SearchInputComponentStyle-searchInput > input',
                            style: `
                                    box-shadow: unset !important;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.SearchInputComponentStyle-searchInput > input:focus',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.SearchInputComponentStyle-searchInput > .Common-backgroundImageContain',
                            style: `
                                    visibility: hidden;
                                    pointer-events: none;
                            `
                    },

                    // блок диалогового окна

                    {
                            selector: '.DialogContainerComponentStyle-container',
                            style: `
                                    background: rgb(0 0 0 / 40%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    animation: blend 200ms ease-in-out;
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-keyButton',
                            style: `
                                    background: rgb(255 255 255 / 7.5%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 1em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-keyButton:hover',
                            style: `
                                    background: rgb(255 255 255 / 12.5%) !important;
                            `
                    },

                    {
                            selector: `.DialogContainerComponentStyle-enterButton,
                                       .TutorialModalComponentStyle-navigationButton,
                                       .MainQuestComponentStyle-buttonContainer`,
                            style: `
                                    background: var(--least-general-color);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius) !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.DialogContainerComponentStyle-enterButton:hover,
                                       .TutorialModalComponentStyle-navigationButton:hover,
                                       .MainQuestComponentStyle-buttonContainer:hover`,
                            style: `
                                    background: var(--general-color);
                                    box-shadow: var(--general-box-shadow);
                            `
                    },

                    {
                            selector: `.DialogContainerComponentStyle-enterButton > span,
                                       .TutorialModalComponentStyle-navigationButton > span,
                                       .MainQuestComponentStyle-buttonContainer > span`,
                            style: `
                                    color: white;
                            `
                    },

                    {
                            selector: '.MainQuestComponentStyle-buttonContainer > .Common-flexStartAlignStart > .HotKey-commonBlockForHotKey',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-imgClose',
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    // блок информации о битве

                    {
                            selector: '.ItemNotificationMarkerStyle-rightOnCard',
                            style: `
                                    visibility: visible;
                                    right: unset;
                            `
                    },

                    {
                            selector: '.UserScoreComponentStyle-coinBlock',
                            style: `
                                    margin-left: 1em;
                            `
                    },

                    {
                            selector: '.UserGroupTitleButtonComponentStyle-commonBlockGroup',
                            style: `
                                    margin-bottom: 0.5em;
                            `
                    },

                    {
                            selector: '.Common-flexCenterAlignCenter > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin',
                            style: `
                                    background: var(--general-bg);
                                    border-top: var(--general-outline);
                                    border-left: var(--general-outline);
                                    border-bottom: var(--general-outline);
                                    box-shadow: unset;
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);

                                    margin-right: 2px;
                                    min-width: unset;
                                    min-height: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.Common-flexCenterAlignCenterColumn > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin',
                            style: `
                                    background: var(--general-bg);
                                    border-top: var(--general-outline);
                                    border-right: var(--general-outline);
                                    border-bottom: var(--general-outline);
                                    box-shadow: unset;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);

                                    min-width: unset;
                                    min-height: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.Common-flexCenterAlignCenter > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin',
                            tags: 'hover'
                    },


                    {
                            selector: '.Common-flexCenterAlignCenterColumn > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin',
                            tags: 'hover'
                    },

                    {
                            selector: `.Common-flexCenterAlignCenter > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin > span,
                                       .Common-flexCenterAlignCenterColumn > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin > span`,
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 3em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ButtonComponentStyle-disabled',
                            style: `
                                    background: var(--general-bg) !important;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-caption',
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 1.5em;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-customOptions',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-invite',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    border-bottom: unset;
                                    border-radius: 1em;

                                    margin-bottom: 0.625em;
                                    width: 29.5em;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter',
                            style: `
                                    background: transparent;

                                    justify-content: center;
                                    margin: unset;
                                    width: 50%;
                                    height: 100%;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter:nth-child(1)',
                            style: `
                                    border-top-left-radius: 1em;
                                    border-bottom-left-radius: 1em;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter:nth-child(3)',
                            style: `
                                    border-top-right-radius: 1em;
                                    border-bottom-right-radius: 1em;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter > h3',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: `.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter > a,
                                       .BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter > p`,
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 3em;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-linkCustomOptions',
                            style: `
                                    margin: unset;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-blockCard',
                            style: `
                                    margin-top: 1em;
                                    width: 29.5em;
                                    height: 17em;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-blockCard > .Common-backgroundImageCover',
                            style: `
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    width: inherit;
                                    height: inherit;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-blockCard > .Common-backgroundImageCover > .Common-flexSpaceBetweenAlignStretch',
                            style: `
                                    width: 100%;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-blockCard > .Common-backgroundImageCover > .Common-flexSpaceBetweenAlignStretch > .Common-flexStartAlignStretch:nth-child(2)',
                            style: `
                                    margin-top: 0.5em;
                                    margin-right: 0.5em;
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-blockCard > .Common-backgroundImageCover > .Common-flexSpaceBetweenAlignStretch > .Common-flexStartAlignStretch > .Common-displayFlex > .BattleCardComponentStyle-containerTicker > span',
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-selectBattle',
                            style: `
                                    background-blend-mode: unset !important;
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: `.BattleInfoComponentStyle-commonBlockSelectBattle,
                                       .Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(3)`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    height: 96%;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .Common-flexStartAlignCenter',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody',
                            style: `
                                    padding-top: 3em;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > .Common-flexStartAlignCenter',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin-top: unset;
                                    margin-bottom: 1em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.ProBattlesComponentStyle-iconOptions',
                            style: `
                                    margin-left: 0.75em !important;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-borderLineCell',
                            style: `
                                    border: unset;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-cellName > .Common-flexStartAlignCenter',
                            style: `
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-cellName > .Common-flexStartAlignCenter > .Common-backgroundImageCover',
                            style: `
                                    margin-right: 1em;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-cellName > .Common-flexEndAlignCenter',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-blockTimesScore > .Common-maskImageContain',
                            style: `
                                    background-color: var(--general-color) !important;
                                    margin-left: 1em;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-mainContainer',
                            style: `
                                    align-items: center;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-mainContainer > .Common-alignSelfStart',
                            style: `
                                    width: 75.5%;
                            `
                    },

                    {
                            selector: `.ProBattlesComponentStyle-chatBlock,
                                       .ContainersComponentStyle-chatBlock`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    right: 0.5em;
                                    width: 5em;
                                    height: 3em;
                                    z-index: 20;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-chatBlock',
                            tags: 'hover'
                    },

                    {
                            selector: '.ContainersComponentStyle-chatBlock',
                            tags: 'hover'
                    },

                    {
                            selector: `.ProBattlesComponentStyle-chatBlock > h3,
                                       .ContainersComponentStyle-chatBlock > h3`,
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: `.ProBattlesComponentStyle-chatIcon,
                                       .ContainersComponentStyle-chatIcon`,
                            style: `
                                    background-color: var(--general-color) !important;

                                    position: absolute;
                                    margin: unset;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-commonBlockHotkeyV',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    left: 0.5em;
                                    width: 5em;
                                    height: 3em;
                                    z-index: 20;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.ProBattlesComponentStyle-commonBlockHotkeyV > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    width: inherit;
                                    height: inherit;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-commonBlockHotkeyV > .Common-flexCenterAlignCenterColumn > .Common-maskImageContain',
                            style: `
                                    background-color: var(--general-color) !important;

                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-commonBlockHotkeyV > h3',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1)',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    align-self: unset;
                                    height: 96%;
                                    transform: translateX(-4.5em);
                                    margin-right: -5em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1):hover',
                            style: `
                                    transform: translateX(0em);
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .Common-flexStartAlignStartColumn',
                            style: `
                                    border: unset;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .Common-flexStartAlignStartColumn > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    margin-top: 0.75em;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .Common-flexStartAlignStartColumn > .BattleModesComponentStyle-button > .Common-flexCenterAlignCenter > .Common-maskImageContain',
                            style: `
                                    background-color: var(--general-color);
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .Common-flexStartAlignStartColumn > .BattleModesComponentStyle-button > .Common-flexCenterAlignCenter > div > div',
                            style: `
                                    border-color: var(--least-general-color);
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .Common-flexStartAlignStartColumn > .BattleModesComponentStyle-button > .Common-flexCenterAlignCenter > div > div > div',
                            style: `
                                    border-color: var(--general-color);
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(1) > .Common-flexStartAlignStartColumn > .BattleModesComponentStyle-blockModesFilter > .Common-flexCenterAlignCenter',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    border-radius: var(--general-border-radius);
                                    box-shadow: var(--general-box-shadow);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .Common-flexCenterAlignCenter',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .SettingsComponentStyle-scrollCreateBattle',
                            style: `
                                    position: absolute;
                                    top: 18.625em;
                                    height: 27.125em;
                                    overflow: unset;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .Common-flexStartAlignStretchColumn',
                            style: `
                                    position: absolute;
                                    align-items: center;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .Common-flexStartAlignStretchColumn > .Common-flexStartAlignCenter',
                            style: `
                                    justify-content: space-between;
                                    margin-bottom: 1em;
                                    width: 29.5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .Common-flexStartAlignStretchColumn > .Common-flexStartAlignCenter > .Common-flexCenterAlignCenter',
                            style: `
                                    flex-direction: column;
                                    -webkit-box-orient: vertical;
                                    -webkit-box-direction: normal;
                            `
                    },

                    {
                            selector: '.Common-container > .ProBattlesComponentStyle-mainContainer > div:nth-child(3) > .Common-flexStartAlignStretchColumn > .Common-flexStartAlignCenter > div > div > h3',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-createBattleButton',
                            style: `
                                    background: var(--general-bg);
                                    border-top: var(--general-outline);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    box-shadow: var(--general-box-shadow);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.ProBattlesComponentStyle-createBattleButton > h3',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.IconStyle-iconAddBattle',
                            style: `
                                    background: var(--general-color);
                            `
                    },

                    {
                            selector: '.BattleModesComponentStyle-button',
                            style: `
                                    background: var(--general-bg);
                                    border-bottom: var(--general-outline);
                                    border-top-right-radius: var(--general-border-radius);
                                    box-shadow: var(--general-box-shadow);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: `.BattleModesComponentStyle-button > .Common-flexCenterAlignCenter,
                                       .BattleModesComponentStyle-fund`,
                            style: `
                                    background: transparent !important;
                            `
                    },

                    {
                            selector: `.BattleTimerComponentStyle-battleTimerLess66,
                                       .BattleTimerComponentStyle-battleTimerMore66,
                                       .BattleTimerComponentStyle-battleTimerLess33,
                                       .BattleTimerComponentStyle-battleTimerMore33`,
                            style: `
                                    margin-left: unset !important;
                            `
                    },

                    {
                            selector: '.BattleSelectStyle-battleTimer',
                            style: `
                                    align-items: center;
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-crystalFund',
                            style: `
                                    top: 3em;
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-imgMode',
                            style: `
                                    top: 2.75em;
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-enableIconSettings > div > .Common-maskImageContain',
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-enableIconSettings > div > .Common-maskImageContain:hover',
                            style: `
                                    background-color: var(--general-color);
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-battleModeName',
                            style: `
                                    top: 6.25em;
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-mapName',
                            style: `
                                    margin: unset;
                                    width: 100%;
                                    max-width: 100%;
                                    min-width: 100%;
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-mapName > .BattleCardComponentStyle-containerTicker',
                            style: `
                                    margin-left: 0.75em;
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-mapName > .Common-flexEnd',
                            style: `
                                    margin-right: 0.75em;
                            `
                    },

                    {
                            selector: '.BattleCardComponentStyle-line',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands',
                            style: `
                                    width: 27.5em !important;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable',
                            style: `
                                    width: inherit;
                                    margin-left: unset;
                                    padding-bottom: 0.625em;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable',
                            style: `
                                    width: inherit;
                                    margin-left: unset;
                                    padding-bottom: 0.625em;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row',
                            style: `
                                    width: inherit;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-rowBattle',
                            style: `
                                    width: inherit;
                            `
                    },

                    {
                            selector: `.MainSectionComponentStyle-transformLinearGradientImgCard,
                                       .MainSectionComponentStyle-linearGradientImgCard`,
                            style: `
                                    border-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-emptyRows',
                            style: `
                                    position: absolute;
                                    height: unset;
                            `
                    },

                    {
                            selector: `.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle,
                                       .UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattleEmpty`,
                            style: `
                                    background: var(--general-bg);
                                    border-radius: unset;
                                    border-left: var(--general-outline);
                                    border-right: var(--general-outline);

                                    width: 14.75em;
                                    height: 2.75em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle',
                            tags: 'hover'
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-commonContainer',
                            style: `
                                    width: 100%;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:first-child > td:first-child',
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-top-right-radius: 0.65em;
                                    border-top: var(--general-outline);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:first-child > td:last-child',
                            style: `
                                    border-top-left-radius: 0.65em;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-top: var(--general-outline);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:last-child > td:first-child',
                            style: `
                                    border-bottom-left-radius: var(--general-border-radius);
                                    border-bottom-right-radius: 0.65em;
                                    border-bottom: var(--general-outline);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row:last-child > td:last-child',
                            style: `
                                    border-bottom-left-radius: 0.65em;
                                    border-bottom-right-radius: var(--general-border-radius);
                                    border-bottom: var(--general-outline);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-fontCell span',
                            style: `
                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    // блок ингейм таба

                    {
                            selector: '.BattleComponentStyle-canvasContainer > .Common-container',
                            style: `
                                    background: radial-gradient(ellipse at top, rgb(25 25 25),  black) !important;
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-containerInsideTeams,
                                       .BattleTabStatisticComponentStyle-containerInsideResults`,
                            style: `
                                    background: rgb(0 0 0 / 50%);
                                    outline: var(--general-outline);
                                    box-shadow: 0 0 4em 0 rgb(0 0 0 / 50%);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: blur(8px);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-containerInsideTeams > .Common-flexCenterAlignCenter',
                            style: `
                                    opacity: 0;
                                    margin-top: -1em;
                                    margin-bottom: 0.75em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-containerInsideTeams:hover > .Common-flexCenterAlignCenter',
                            style: `
                                    opacity: 1;
                                    margin-top: 0.5em;
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-containerInsideTeams:hover > .BattleTabStatisticComponentStyle-pinResistances,
                                       .BattleTabStatisticComponentStyle-containerInsideTeams:hover > .BattleTabStatisticComponentStyle-showResistances`,
                            style: `
                                    opacity: 1;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-tablesContainer',
                            style: `
                                    width: 100%;
                                    padding-bottom: 0.1em;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-header',
                            style: `
                                    border-bottom: unset;
                                    height: 2em;
                                    pointer-events: none;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-commonBlockMapName',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-commonBlockScroll',
                            style: `
                                    margin: unset;
                                    justify-content: center;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-commonBlockCustomName',
                            style: `
                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-customBattleName',
                            style: `
                                    color: var(--general-color);
                                    font-family: 'BaseFontRegular';

                                    margin-top: 0.5em;
                                    margin-left: unset;
                                    width: auto !important;
                                    opacity: 1 !important;
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table,
                                       .BattleTabStatisticComponentStyle-redTeamTableContainer table`,
                            style: `
                                    padding-bottom: 0em;
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead,
                                       .BattleTabStatisticComponentStyle-redTeamTableContainer table thead,
                                       .BattleTabStatisticComponentStyle-dmTableContainer table thead,
                                       .BattleTabStatisticComponentStyle-commonContainerIconOptions`,
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-rowBackGround',
                            style: `
                                    background: var(--general-bg);
                                    outline: 2px solid rgb(255 255 255 / 3.25%);
                                    border-radius: 0.8em;

                                    margin-top: 0.65em !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-rowBackGround:hover',
                            style: `
                                    background: rgb(255 255 255 / 1.5%);
                                    box-shadow: unset !important;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-selectedRowBackGround',
                            style: `
                                    background: rgb(255 255 255 / 5%);
                                    outline: 2px solid rgb(255 255 255 / 5%);
                                    box-shadow: unset !important;
                                    border-radius: 0.8em;

                                    margin-top: 0.65em !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-selectedRowBackGround > .BattleTabStatisticComponentStyle-nicknameCell > div > div > .Common-flexStartAlignCenter > span',
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-nicknameCell > div > img',
                            style: `
                                    margin-left: 0.5em;
                                    margin-right: 0.75em;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-nicknameCell > div > div > div > span',
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-nicknameCell > div > div > div > span:hover',
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+6),
                                       .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+7),
                                       .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+6),
                                       .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+7),
                                       .BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:nth-child(n+6),
                                       .BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:nth-child(n+7)`,
                            style: `
                                    border-left: unset;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-resistanceModuleCell',
                            style: `
                                    position: absolute;
                                    margin-left: 17em;
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-selectedRowBackGround > .BattleTabStatisticComponentStyle-gsCell,
                                       .BattleTabStatisticComponentStyle-selectedRowBackGround > .BattleTabStatisticComponentStyle-deviceCell,
                                       .BattleTabStatisticComponentStyle-selectedRowBackGround > .BattleTabStatisticComponentStyle-defenceCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround > .BattleTabStatisticComponentStyle-gsCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround > .BattleTabStatisticComponentStyle-deviceCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround > .BattleTabStatisticComponentStyle-defenceCell`,
                            style: `
                                    visibility: visible !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-selectedRowBackGround:hover > .BattleTabStatisticComponentStyle-gsCell,
                                       .BattleTabStatisticComponentStyle-selectedRowBackGround:hover > .BattleTabStatisticComponentStyle-deviceCell,
                                       .BattleTabStatisticComponentStyle-selectedRowBackGround:hover > .BattleTabStatisticComponentStyle-defenceCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround:hover > .BattleTabStatisticComponentStyle-gsCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround:hover > .BattleTabStatisticComponentStyle-deviceCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround:hover > .BattleTabStatisticComponentStyle-defenceCell`,
                            style: `
                                    margin-top: 1em;
                                    opacity: 0;
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-selectedRowBackGround > .BattleTabStatisticComponentStyle-resistanceModuleCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround > .BattleTabStatisticComponentStyle-resistanceModuleCell`,
                            style: `
                                    visibility: visible !important;
                                    margin-top: -1em;
                                    opacity: 0;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-selectedRowBackGround:hover > .BattleTabStatisticComponentStyle-resistanceModuleCell,
                                       .BattleTabStatisticComponentStyle-rowBackGround:hover > .BattleTabStatisticComponentStyle-resistanceModuleCell`,
                            style: `
                                    margin-top: unset;
                                    opacity: 1 !important;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-pinResistances',
                            style: `
                                    background-color: rgb(255 255 255 / 25%);
                                    mask-image: url("data:image/webp;base64,UklGRtgBAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSIMBAAABkCvbtmlb89qKbN8b830AM9v2e4f5y2zbth3atm0ba4+HdfaZa67sRhExAdQ0Mn34hoPrh6Xb0+kN/n/TyZZ+DvSOx46ir3DpsWIyXHtsuOQOHgvehgGPvAfhwCNuU1jwSBsbHjyiEhaC0yOo/DxYnY5i2rwD89sMGXEzwD/USIV/6f79i/w1RSdhcK2B5NUO9L9g8hBf5EHIXMPXHUKH8O0W8iqV76YMpz3xnxHxrQ8ZnG5ozPyrz2/NLiWT5V+MLCKJ3ZSB8wkiqJ9i+1RFQvspru4ktp/imUGC+ymOk3GSaCXDryKS3EUxoFpS8x/g9Aqq/QTWBXIqX4J3t5jc+9CrVcrdDikZl6D/0YUGKFdLhCQehv5TcyIaoNz4ZERtgf5NM/q/nwrlVIiIWA79/UrS91chlpPIidBfzqXQ3b5o9iWJCEJ/JIPclk07eW1n5wiS2MPRHUwmO1v/gnZ5NNkZ+RjaSRFkaSb+d4JkbcQ9AL/6kMX1d/GoFdmdGUFNcAEAVlA4IC4AAACQAwCdASpAAEAAPpFIoEwlpCMiIggAsBIJaQAAEDdTUAV4hbkAAP74zvV4AAAA");
                                    mask-position: center;
                                    mask-size: contain;
                                    mask-repeat: no-repeat;

                                    position: absolute;
                                    bottom: 0.8em;
                                    right: 1em;
                                    width: 1em;
                                    height: 1em;
                                    scale: 1.5;

                                    opacity: 0;
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-showResistances',
                            style: `
                                    background-color: rgb(255 255 255 / 25%);
                                    mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB50lEQVQ4jX2UsU4bURBF76xSICsVFRUFokCpUljuSE1CwydYgZIPoMtHuE1HwSeYxrJIS5MoAj6AFCgSuCK4gHtSMIsf611GGu3svJm77829+0IdZrsn6VNE7EoaA46Iz8BY0o+qqv519UqSAAGbtg9tj4F70mwPbQ9Z2L3tse1DYBNYAhvYvrJNmwNDYNi1bvsKGEhSlYDfJG29eQRJEdGV20qMZ0BJl5JcFzQa55J+ps87gB0Rl4s3W0Df9qSY05PtE2DDdi99I3NPRd3Edt+2SsDjnFMFfAFGWdSzfQTMgJnto8z1bY9s79iucr7HJSnTHO4v24P8yJ7t6xYCrm3vZc0gewCm5Q6nRcNZ5m5b2K7j26w5K3LTkpSStZXy2UZCsbaihr3L52PdVIq0BKrjLukAj+UO/xSL8wznzcbC2mpeMGT7oCalVjzQSQqwlzUD4HfO96AEXC1ks9OUje2Z7RlwBPRs94FR1lb5r6++OgOw3hQ28CJsoJfxSYq+Zn4CrC8NxfaK7XOW7QH4mP7Qsn5ue4ntepdrwEVL0zC9aRe210qMVzqMiBtJ25JOeb4f3/JTSdtVVd10AiboHbAbEfuS/mau1N9NROxHxG5E3C31t559MYL3wNfiavog6XtEdF7//wF+7O1VS+r7GAAAAABJRU5ErkJggg==");
                                    mask-position: center;
                                    mask-size: contain;
                                    mask-repeat: no-repeat;

                                    position: absolute;
                                    bottom: 0.8em;
                                    right: 2.75em;
                                    width: 1em;
                                    height: 1em;
                                    scale: 1.15;

                                    opacity: 0;
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.BattleTabStatisticComponentStyle-pinResistances:hover,
                                       .BattleTabStatisticComponentStyle-showResistances:hover`,
                            style: `
                                    background-color: var(--general-color);
                                    cursor: pointer;
                            `
                    },

                    // блок ингейм дисплея с кнопками

                    {
                            selector: `.BattleHudComponentStyle-fullScreenButton,
                                       .BattleHudComponentStyle-pauseButton,
                                       .BattleHudComponentStyle-tabButton`,
                            style: `
                                    background: rgb(0 0 0 / 35%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 0.75em !important;
                                    backdrop-filter: blur(4px);

                                    margin-bottom: 0.65em !important;
                                    width: 6em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.BattleHudComponentStyle-fullScreenButton:hover,
                                       .BattleHudComponentStyle-pauseButton:hover,
                                       .BattleHudComponentStyle-tabButton:hover`,
                            style: `
                                    background: rgb(255 255 255 / 1.5%) !important;
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer',
                            style: `
                                    margin-left: 0.813em;
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainer',
                            style: `
                                    background: rgb(0 0 0 / 35%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    width: 5em;
                                    height: 5em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainer > .UserInfoContainerStyle-titleRankIcon',
                            style: `
                                    width: 4em;
                                    height: 4em;
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen',
                            style: `
                                    background: rgb(0 0 0 / 35%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: blur(4px);

                                    margin-left: 0.5em;
                                    width: 13em;
                                    height: 5em;
                                    align-items: center;
                                    justify-content: center;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div',
                            style: `
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > div:nth-child(1) > span',
                            style: `
                                    font-size: 1.25em;
                                    text-shadow: 0 0 2em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn',
                            style: `
                                    background: var(--least-general-color);
                                    border-radius: var(--general-border-radius);

                                    width: 100%;
                                    height: 100%;
                                    opacity: 0;
                                    pointer-events: none;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn:after',
                            style: `
                                    background: var(--general-color);
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleHudComponentStyle-hudContainer > div > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen > .UserInfoContainerStyle-containerParameterProgress',
                            style: `
                                    opacity: 0;
                                    pointer-events: none;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattlePauseMenuComponentStyle-blackGlobalWrapper',
                            style: `
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleAutoPauseComponentStyle-timerContainer span',
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: `.BattleChatComponentStyle-inputContainerAllies,
                                       .BattleChatComponentStyle-inputContainerAll`,
                            style: `
                                    background: rgb(0 0 0 / 50%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.BattleChatComponentStyle-btnToggleTeamAllies,
                                       .BattleChatComponentStyle-btnToggleTeamAll`,
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    // блок стилизации окна после завершения катки

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table',
                            style: `
                                    align-items: center !important;
                                    height: 42em !important;
                                    width: 100em !important;
                            `
                    },

                    {
                            selector: `.BattleKillBoardComponentStyle-tableContainer table td,
                                       .BattleKillBoardComponentStyle-tableContainer table th`,
                            style: `
                                    box-sizing: border-box !important;
                                    flex-shrink: 0 !important;
                                    margin: 0 !important;
                                    max-width: unset !important;
                                    min-width: unset !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tr',
                            style: `
                                    width: 49.5em !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tr > *',
                            style: `
                                    width: 9.28% !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tr > * > *',
                            style: `
                                    margin: 0 !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tr > :first-child',
                            style: `
                                    width: 35% !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table > thead',
                            style: `
                                    padding-right: 1em !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table > thead > tr',
                            style: `
                                    pointer-events: none !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table > thead > tr > :first-child',
                            style: `
                                    padding-left: .75em !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table > thead > tr > th > :nth-child(2)',
                            style: `
                                    display: none !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table > tbody',
                            style: `
                                    display: grid !important;
                                    gap: .3em 1em !important;
                                    grid-auto-flow: column !important;
                                    grid-auto-rows: min-content !important;
                                    grid-template-columns: 1fr 1fr !important;
                                    margin-top: unset !important;
                                    padding-right: unset !important;
                                    width: 100% !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table > tbody > tr',
                            style: `
                                    grid-column: 1 / 2 !important;
                                    margin-top: 0.25em;
                                    margin-bottom: 0.25em;
                                    height: 2.5em !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table > tbody > tr#enemyCommand',
                            style: `
                                    grid-column: 2 / 3 !important;
                            `
                    },

                    {
                            selector: `.BattleKillBoardComponentStyle-tableContainer table > tbody > tr#rowSpace,
                                       .BattleKillBoardComponentStyle-tableContainer table > tbody > tr#teamRowSpace`,
                            style: `
                                    display: none !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table:not(:has(> tbody > #teamRowSpace))',
                            style: `
                                    width: 50em !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table:not(:has(> tbody > #teamRowSpace)) tr',
                            style: `
                                    grid-column: 1 / 2 !important;
                                    width: 50em !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table:not(:has(> tbody > #teamRowSpace)) > thead > :nth-child(2)',
                            style: `
                                    display: none !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table:not(:has(> tbody > #teamRowSpace)) > tbody',
                            style: `
                                    grid-template-columns: 1fr !important;
                            `
                    },

                    {
                            selector: `.BattleResultNavigationComponentStyle-commonBlockBattleResultNavigation,
                                       .BattleResultHeaderComponentStyle-accountTeams`,
                            style: `
                                    background: var(--general-bg);
                                    border-bottom: var(--general-outline);
                                    backdrop-filter: var(--least-backdrop-filter);
                                    box-shadow: var(--general-box-shadow);

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleResultHeaderComponentStyle-accountTeams',
                            style: `
                                    z-index: 15;
                            `
                    },

                    {
                            selector: '.BattleResultHeaderComponentStyle-resultBg',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: `.BattleResultHeaderComponentStyle-firstTeamAccount,
                                       .BattleResultHeaderComponentStyle-twoTeamAccount`,
                            style: `
                                    margin-top: 1.75em;
                            `
                    },

                    {
                            selector: '.BattleResultQuestProgressComponentStyle-container',
                            style: `
                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleResultUserInfoComponentStyle-userInfoNick',
                            style: `
                                    margin-top: 1em;
                            `
                    },

                    {
                            selector: '.BattleResultUserInfoComponentStyle-progressVictoryContainer',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    backdrop-filter: var(--least-backdrop-filter);
                                    border-bottom: unset;
                                    box-shadow: var(--general-box-shadow);

                                    margin-top: 1em;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.BattleRewardsComponentStyle-normalRow,
                                       .BattleRewardsComponentStyle-selectedRow`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    backdrop-filter: var(--least-backdrop-filter);
                                    border-bottom: unset;
                                    border-radius: 0.75em;
                                    box-shadow: var(--general-box-shadow);

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.BattleRewardsComponentStyle-normalRowSpace,
                                       .BattleRewardsComponentStyle-extendedRowSpace`,
                            style: `
                                    height: 0.75em;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table thead, .BattleKillBoardComponentStyle-tableContainer table thead tr, .BattleKillBoardComponentStyle-tableContainer table thead tr th',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody #selfUserBg',
                            style: `
                                    background: rgb(0 212 255 / 20%);
                                    box-shadow: unset !important;
                                    border-radius: 0.8em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody #blueCommand',
                            style: `
                                    background: rgb(0 212 255 / 5%);
                                    box-shadow: unset !important;
                                    border-radius: 0.8em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody #enemyCommand',
                            style: `
                                    background: rgb(255 102 102 / 10%);
                                    box-shadow: unset !important;
                                    border-radius: 0.8em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody tr td > .GearScoreStyle-bestGS',
                            style: `
                                    margin-left: unset;
                            `
                    },

                    {
                            selector: '.BattleResultStyle-crystalSize, .BattleResultStyle-starSize',
                            style: `
                                    position: absolute;
                                    margin: unset !important;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-rankIcon',
                            style: `
                                    margin: 0 0.75em;
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-button',
                            style: `
                                    background: var(--least-general-color);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-button:hover',
                            style: `
                                    background: var(--general-color);
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-button > .Common-flexStartAlignStart',
                            style: `
                                    background-color: white;
                                    mask-image: url(/play/static/images/iconButtonNext.ed3de493.svg);
                                    mask-position: center;
                                    mask-size: contain;
                                    mask-repeat: no-repeat;

                                    height: 2em;
                                    width: 2em;
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-button > .Common-flexStartAlignStart > img',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-button > .Common-flexStartAlignStart > .HotKey-commonBlockForHotKey',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-disabledButton',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-disabledButton > .Common-flexStartAlignStart',
                            style: `
                                    mask-image: unset !important;
                                    background: unset;
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-disabledButton > .Common-flexStartAlignStart > .HotKey-commonBlockForHotKey',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // блок стилизации карточек в лобби

                    {
                            selector: '.ScrollingCardsComponentStyle-blockCenter',
                            style: `
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-scrollCardPick',
                            style: `
                                    align-items: center;
                                    padding: unset;
                                    margin: unset;
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-scrollCard',
                            style: `
                                    background: transparent;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    justify-content: center;
                                    min-width: 20em;
                                    height: 90%;
                                    margin-right: 1.5em !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-scrollCard > .Common-backgroundImageCover',
                            style: `
                                    background-blend-mode: color-dodge;

                                    transition: var(--general-transition) !important;
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-scrollCard:hover > .Common-backgroundImageCover',
                            style: `
                                    transform: scale(1.1, 1.1);
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-cardName',
                            style: `
                                    background: transparent !important;

                                    justify-content: center;
                                    padding: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-cardDescription',
                            style: `
                                    bottom: unset;
                                    opacity: 0;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.ScrollingCardsComponentStyle-cardCount,
                                       .ScrollingCardsComponentStyle-selectCard`,
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: `.ScrollingCardsComponentStyle-scrollCard > .ScrollingCardsComponentStyle-cardName h2,
                                       .ScrollingCardsComponentStyle-scrollCard > .ScrollingCardsComponentStyle-cardDescription p`,
                            style: `
                                    text-shadow: 0 0 5px rgb(0 0 0 / 50%);
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-scrollCard:hover > .ScrollingCardsComponentStyle-cardName',
                            style: `
                                    margin-bottom: 3em;
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-scrollCard:hover > .ScrollingCardsComponentStyle-cardDescription',
                            style: `
                                    margin-top: 3em;
                                    opacity: 1;
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-modeCards',
                            style: `
                                    height: 31.5em;
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-cardContentLeft',
                            style: `
                                    min-height: 20em;
                                    height: 31.5em;
                                    margin-right: 0.75em;
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-cardContentRight',
                            style: `
                                    min-height: 20em;
                                    height: 31.5em;
                                    margin-left: 0.75em;
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-commonStyleBlock',
                            style: `
                                    background: transparent;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    align-items: center;
                                    justify-content: center;
                                    height: 15em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-descriptionBattle',
                            style: `
                                    align-items: center;
                                    justify-content: center;
                                    bottom: unset;
                                    left: unset;
                            `
                    },

                    {
                            selector: `.BattlePickComponentStyle-blockForCrystalXP,
                                       .BattlePickComponentStyle-timerButton`,
                            style: `
                                    position: absolute;
                                    margin: unset;
                                    opacity: 0;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-commonStyleBlock > .Common-backgroundImage',
                            style: `
                                    background-blend-mode: hard-light;

                                    transition: var(--general-transition) !important;
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-commonStyleBlock:hover > .Common-backgroundImage',
                            style: `
                                    transform: scale(1.1, 1.1);
                            `
                    },

                    {
                            selector: '.BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: `.BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn > .BattleModesComponentStyle-imageBlock > div,
                                       .BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn > .BattleModesComponentStyle-imageBlock > div`,
                            style: `
                                    background-color: var(--general-color);
                            `
                    },

                    {
                            selector: `.BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn > .Common-flexCenterAlignCenterColumn > h2,
                                       .BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn > .Common-flexCenterAlignCenterColumn > h2`,
                            style: `
                                    color: var(--general-color) !important;
                            `
                    },

                    {
                            selector: `.BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn > span,
                                       .BattleModesComponentStyle-blockCenter > .BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn > span`,
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // блок стилизации приглашений

                    {
                            selector: '.InvitationWindowsComponentStyle-header',
                            style: `
                                    align-items: flex-start;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-typeListContainer > h3',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-substrateRank',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-usersScroll',
                            style: `
                                    align-items: center;
                                    margin-top: unset;
                                    padding-top: 1.5em;
                                    width: 100%;
                                    height: 100%;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch',
                            style: `
                                    margin-top: unset;
                                    padding-bottom: 1.5em;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .nickNameClass',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .nickNameClass > .InvitationWindowsComponentStyle-rankContainer',
                            style: `
                                    margin-left: 1em;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .nickNameClass > div:nth-child(2)',
                            style: `
                                    position: absolute;
                                    left: 6.5em;
                                    margin: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .nickNameClass > .InvitationWindowsComponentStyle-onlineContainer',
                            style: `
                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    top: unset;
                                    right: 1em;
                                    margin: unset;
                            `
                    },

                    {
                            selector: `.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .nickNameClass > .InvitationWindowsComponentStyle-onlineContainer > .InvitationWindowsComponentStyle-onlineLabel,
                                       .InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .nickNameClass > .InvitationWindowsComponentStyle-onlineContainer > .InvitationWindowsComponentStyle-battleLabel`,
                            style: `
                                    margin: 0.1em;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-centerBlock',
                            style: `
                                    align-items: center;
                                    max-width: unset;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-commonItem',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    top: 7em;
                                    left: 0em;
                                    width: 28em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.InvitationWindowsComponentStyle-commonBorder,
                                       .InvitationWindowsComponentStyle-commonBlockButton`,
                            style: `
                                    border: unset !important;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-commonItem > div',
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-commonItem > div:first-child:hover',
                            style: `
                                    background: var(--general-bg-hover);
                                    border-top-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-commonItem > div:last-child:hover',
                            style: `
                                    background: var(--general-bg-hover);
                                    border-bottom-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-commonItem > div > div:nth-child(1)',
                            style: `
                                    margin: 0 0.5em;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-commonItem > div > div:nth-child(1)',
                            style: `
                                    margin: 0 0.5em;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-buttonsContainer > .InvitationWindowsComponentStyle-backButton',
                            style: `
                                    background: rgb(255 255 255 / 7.5%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 1em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-buttonsContainer > .InvitationWindowsComponentStyle-backButton:hover',
                            style: `
                                    background: rgb(255 255 255 / 12.5%) !important;
                            `
                    },

                    {
                            selector: `.InvitationWindowsComponentStyle-buttonsContainer > .InvitationWindowsComponentStyle-backButton > div > .HotKey-commonBlockForHotKey,
                                       .InvitationWindowsComponentStyle-buttonsContainer > .InvitationWindowsComponentStyle-buttons > div > div > .HotKey-commonBlockForHotKey`,
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-buttonsContainer > .InvitationWindowsComponentStyle-buttons > .InvitationWindowsComponentStyle-inviteButton',
                            style: `
                                    background: var(--least-general-color);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-buttonsContainer > .InvitationWindowsComponentStyle-buttons > .InvitationWindowsComponentStyle-inviteButton:hover',
                            style: `
                                    background: var(--general-color);
                            `
                    },

                    {
                            selector: '.InvitationWindowsComponentStyle-buttonsContainer > .InvitationWindowsComponentStyle-buttons > .InvitationWindowsComponentStyle-inviteButton > span',
                            style: `
                                    color: white;
                                    margin: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ModalStyle-root > .InvitationWindowsComponentStyle-commonItem:nth-child(2)',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // стилизация окна приглашения в битву

                    {
                            selector: '.NotificationViewStyle-commonBlockNotification',
                            style: `
                                    background: transparent;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    animation: translateRight .2s ease-in-out;
                            `
                    },

                    {
                            selector: '.NotificationViewStyle-positionBlock',
                            style: `
                                    border: unset;
                                    box-shadow: var(--general-box-shadow);
                            `
                    },

                    {
                            selector: '.NotificationViewStyle-commonBlockButtonYesNo > div',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                                    animation: unset !important;
                            `
                    },

                    {
                            selector: '.NotificationViewStyle-commonBlockButtonYesNo > div:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.NotificationViewStyle-commonBlockButtonYesNo > div > p',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.NotificationViewStyle-commonBlockButtonYesNo > div > span',
                            style: `
                                    color: var(--general-color);
                                    margin: unset;
                            `
                    },

                    {
                            selector: '.NotificationViewStyle-progressNotification',
                            style: `
                                    background: transparent;

                                    opacity: 0.15;
                                    filter: saturate(0) brightness(2);
                                    clip-path: inset(0px 0px 0px round 15px);
                            `
                    },

                    {
                            selector: `.NotificationViewStyle-positionBlock,
                                       .NotificationViewStyle-commonBlockNotification,
                                       .NotificationViewStyle-descriptionNotification,
                                       .NotificationViewStyle-blockButtonAndTimer,
                                       .NotificationViewStyle-progressBarNotification`,
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    // блок стилизации поиска битвы

                    {
                            selector: '.MatchmakingWaitComponentStyle-container',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);
                                    backdrop-filter: var(--least-backdrop-filter);
                                    border-bottom-left-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);

                                    align-self: center;
                                    top: 0em;
                                    right: unset;
                                    width: 48em;
                                    height: 7em;
                                    z-index: 100;
                            `
                    },

                    {
                            selector: '.MatchmakingWaitComponentStyle-cancelButton',
                            style: `
                                    border: unset;

                                    margin-top: unset;
                                    height: 6em;
                            `
                    },

                    {
                            selector: '.MatchmakingWaitComponentStyle-cancelButton > span',
                            style: `
                                    margin: unset;
                            `
                    },

                    {
                            selector: '.MatchmakingWaitComponentStyle-contentContainer',
                            style: `
                                    margin-top: unset;
                                    margin-left: 2em;
                                    height: 6em;
                            `
                    },

                    {
                            selector: `.MatchmakingWaitComponentStyle-averageTimeContainer,
                                       .MatchmakingWaitComponentStyle-currentTimeContainer`,
                            style: `
                                    margin-bottom: unset;
                                    margin-left: unset;
                            `
                    },

                    {
                            selector: '.MatchmakingWaitComponentStyle-container > div',
                            style: `
                                    background-image: unset;
                            `
                    },

                    // блок стилизации миссий

                    {
                            selector: `.TableMainQuestComponentStyle-commonTableMainQuest,
                                       .TableMainQuestComponentStyle-cardRewardGivenTable`,
                            style: `
                                    margin-top: unset !important;
                                    margin-bottom: 1em;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-cardRewardGivenTable',
                            style: `
                                    box-shadow: unset;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation) !important;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-cardRewardCompletedTable',
                            style: `
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    height: 4.125em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation) !important;
                            `
                    },

                    {
                            selector: '.MainQuestComponentStyle-cardPlayCommon',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    height: 4.125em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation) !important;
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.MainQuestComponentStyle-cardPlay',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation) !important;
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.MainQuestComponentStyle-commonDescriptionProgress > .Common-flexSpaceBetweenAlignEnd > span',
                            style: `
                                    margin-bottom: 0.75em;
                            `
                    },

                    {
                            selector: '.MainQuestComponentStyle-commonDescriptionProgress > .Common-flexSpaceBetweenAlignEnd > h4',
                            style: `
                                    color: rgb(255 255 255 / 50%);
                            `
                    },

                    {
                            selector: '.MainQuestComponentStyle-nameMission',
                            style: `
                                    color: rgb(191, 213, 255);
                            `
                    },

                    {
                            selector: '.MainQuestComponentStyle-mediaContainer > div > h2',
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: `.MainQuestComponentStyle-descriptionRewards,
                                       .SuperMissionComponentStyle-descriptionSuperMission > .Common-flexSpaceBetween > .Common-flexEndAlignCenterColumn > span`,
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-rewardsContainerTable',
                            style: `
                                    top: 0.75em;
                                    height: 75%;
                            `
                    },

                    {
                            selector: `.TableMainQuestComponentStyle-rewardsContainerTable > .Common-flexCenterAlignCenterColumn,
                                       .SuperMissionComponentStyle-rewardsContainer > .Common-flexCenterAlignCenterColumn,
                                       .MainQuestComponentStyle-rewardsInDescriptionModal > .Common-flexStartAlignCenter`,
                            style: `
                                    background: rgb(255 255 255 / 2.5%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);

                                    margin: 0.25em;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-progressTableMission',
                            style: `
                                    background: transparent;
                                    filter: contrast(10) saturate(0);
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-colorLockedGradientTable',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: `.TableMainQuestComponentStyle-timerTable,
                                       .TableMainQuestComponentStyle-commonBlockTimerButtonTable`,
                            style: `
                                    background-color: rgb(0 0 0 / 25%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 0.5em !important;
                            `
                    },

                    {
                            selector: `.TableMainQuestComponentStyle-timerTable span,
                                       .TableMainQuestComponentStyle-commonBlockTimerButtonTable > div > span`,
                            style: `
                                    color: white !important;
                                    text-shadow: 0 0 5px black;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-cardLockedTable',
                            style: `
                                    background: rgba(255 204 0 / 5%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation) !important;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-cardLockedTable:hover',
                            style: `
                                    background: rgba(255 204 0 / 10%);
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-commonBlockTimerButtonTable > .MainQuestComponentStyle-imgLockTimer',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.MainQuestComponentStyle-cardCommonLocked',
                            style: `
                                    background: rgb(255 102 102 / 5%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation) !important;
                            `
                    },

                    {
                            selector: '.MainQuestComponentStyle-cardCommonLocked:hover',
                            style: `
                                    background: rgb(255 102 102 / 10%);
                            `
                    },

                    {
                            selector: '.SuperMissionComponentStyle-descriptionSuperMission',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin-top: 2em;
                                    height: calc(100% - 4em);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.SuperMissionComponentStyle-gradientBackground',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.QuestsComponentStyle-emptyList0',
                            style: `
                                    animation: var(--general-animation) !important;
                            `
                    },

                    {
                            selector: '.QuestsComponentStyle-emptyList0 > h2',
                            style: `
                                    background-color: rgb(255 255 255 / 30%);
                                    backdrop-filter: var(--general-backdrop-filter);

                                    color: black;
                            `
                    },

                    {
                            selector: '.QuestsComponentStyle-emptyList0 > p',
                            style: `
                                    color: rgb(255 255 255 / 30%);
                            `
                    },

                    {
                            selector: '.SuperMissionComponentStyle-buttonCollect',
                            style: `
                                    background-image: url("/play/static/images/claimAllButton.b9e9611f.webp"), radial-gradient(50% 100% at 50% 0%, rgb(59 128 25) 0%, rgb(48 102 20) 100%) !important;
                                    box-shadow: unset !important;
                                    border-bottom-right-radius: var(--general-border-radius) !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SuperMissionComponentStyle-buttonCollect > .Common-flexStartAlignStart > .HotKey-commonBlockForHotKey',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.SuperMissionComponentStyle-buttonDisable',
                            style: `
                                    box-shadow: unset !important;
                                    border-bottom-right-radius: var(--general-border-radius) !important;

                                    transition: var(--general-transition);
                            `
                    },

                    // блок стилизации гаража

                    {
                            selector: '.GearScoreStyle-bestGS',
                            style: `
                                    background-image: linear-gradient(135deg, rgb(40, 255, 203) 0%, rgb(40 255 126), rgb(40, 255, 203) 100%);
                            `
                    },

                    {
                            selector: '.GearScoreStyle-bestGS:before',
                            style: `
                                    content: '9999';
                                    background-image: linear-gradient(135deg, rgb(40, 255, 203) 0%, rgb(40 255 126), rgb(40, 255, 203) 100%);
                                    background-clip: text;
                                    filter: blur(0.5em);

                                    position: absolute;
                            `
                    },

                    {
                            selector: `.GarageCommonStyle-animatedBlurredLeftBlock,
                                       .GarageCommonStyle-animatedBlurredRightBlock`,
                            style: `
                                    backdrop-filter: unset;

                                    animation: unset;
                            `
                    },

                    {
                            selector: `.CssCommonAnimations-appearFromBottom,
                                       .CssCommonAnimations-appearFromLeft`,
                            style: `
                                    animation: unset;
                            `
                    },

                    {
                            selector: '.GarageCommonStyle-garageContainer > .GarageCommonStyle-positionContent > .GarageMainScreenStyle-blockParameters > .GarageCommonStyle-animatedBlurredRightBlock',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    top: 0em;
                                    right: 0em;
                                    width: 25em;
                                    height: 92.5%;
                                    z-index: 1;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.GarageSuppliesComponentStyle-containerButtons',
                            style: `
                                    height: auto;
                            `
                    },

                    {
                            selector: '.MountedItemsStyle-containerBlockGarage',
                            style: `
                                    justify-content: center;
                                    overflow: visible;
                                    height: auto;
                            `
                    },

                    {
                            selector: `.MountedItemsStyle-commonBlockDrone,
                                       .MountedItemsStyle-commonBlockGrenades,
                                       .MountedItemsStyle-commonBlockForTurretsHulls`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;

                                    margin: 0.3em !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MountedItemsStyle-commonBlockDrone',
                            tags: 'hover'
                    },

                    {
                            selector: '.MountedItemsStyle-commonBlockGrenades',
                            tags: 'hover'
                    },

                    {
                            selector: '.MountedItemsStyle-commonBlockForTurretsHulls',
                            tags: 'hover'
                    },

                    {
                            selector: '.MountedItemsStyle-tankPartNameContainer h1',
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 3em;
                            `
                    },

                    {
                            selector: '.Common-container > .GarageCommonStyle-garageContainer > .GarageCommonStyle-positionContent > .GarageMainScreenStyle-blockParameters > div:nth-child(2)',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    top: 0em;
                                    left: 0em;
                                    width: 25em;
                                    height: max-content;
                                    padding: 1em 0;
                                    z-index: 1;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.TankPreviewComponentStyle-visible',
                            style: `
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-tankPartUpgrades',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    top: 0em;
                                    right: 0em;
                                    margin-top: 5.5em;
                                    padding: 1.25em 0;
                                    width: 25em;
                                    height: max-content;
                                    z-index: 1;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-tankPartUpgrades > .GarageCommonStyle-animatedBlurredRightBlock > .Common-displayFlexColumn > .Common-flexStart',
                            style: `
                                    justify-content: space-between;
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    top: 0em;
                                    left: 0em;
                                    margin-top: 5.5em;
                                    padding: 1.5em 0;
                                    width: 25em;
                                    height: max-content;
                                    z-index: 1;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-nameItem,
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-nameItem`,
                            style: `
                                    margin-left: 0.75em;
                            `
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice,
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2),
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice',
                            tags: 'hover'
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice',
                            tags: 'hover'
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations:nth-child(1)`,
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter,
                                   .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations > div > .SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter',
                            tags: 'hover'
                    },


                    {
                            selector: ' .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations > div > .SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter',
                            tags: 'hover'
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations > h2,
                                   .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations > h3`,
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice > .ItemDescriptionComponentStyle-textClipped,
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice > .ItemDescriptionComponentStyle-textClipped`,
                            style: `
                                    -webkit-line-clamp: 5;
                            `
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice > .Common-flexStartAlignStart,
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice > .Common-flexStartAlignStart`,
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .GarageProtectionsComponentStyle-blockParametersProtection > .GarageProtectionsComponentStyle-aboutDefence',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    padding: 1.25em 0 1.25em 2em;
                                    width: 23em;
                                    height: max-content;
                                    z-index: 1;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: `.TanksPartComponentStyle-commonBlockDescriptionDevices,
                                       .TanksPartComponentStyle-amountItems`,
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.TankParametersStyle-leftParamsContainer',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: var(--general-border-radius) !important;

                                    position: relative;
                                    margin: 0.25em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.TankParametersStyle-marginBlockGear,
                                       .TankParametersStyle-parametersBlockGear`,
                            style: `
                                    border: unset;
                            `
                    },

                    {
                            selector: '.SquarePriceButtonComponentStyle-commonBlockButton',
                            style: `
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: var(--general-border-radius) !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SquarePriceButtonComponentStyle-commonBlockButton > .Common-flexStartAlignStart',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.GarageTurretsAlterationsComponentStyle-mountStandardButton > .SquarePriceButtonComponentStyle-commonBlockButton',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.GarageTurretsAlterationsComponentStyle-mountStandardButton > .SquarePriceButtonComponentStyle-commonBlockButton > .Common-flexEndAlignEnd > .Font-bold',
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 16px;
                                    padding: 0.75em;
                            `
                    },

                    {
                            selector: '.GarageTurretsAlterationsComponentStyle-styleDescriptionBlock > .Common-flexStartAlignStartColumn > .Common-flexStartAlignStart',
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters',
                            style: `
                                    display: flex;
                                    justify-content: center;
                                    width: 100% !important;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > .GarageComponentStyle-tankPreview',
                            style: `
                                    width: 50%;
                                    z-index: 20;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn',
                            style: `
                                    position: relative;
                                    bottom: unset;
                                    margin: 0.25em;
                                    width: 22.5em;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn:before',
                            style: `
                                    content: '';
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;

                                    width: inherit;
                                    height: 5em;
                                    position: absolute;
                                    z-index: -1;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div',
                            style: `
                                    justify-content: center;
                                    width: inherit;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > .MountedItemsStyle-resistanceContainer',
                            style: `
                                    position: unset;
                                    visibility: visible;
                                    margin-right: unset;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > .MountedItemsStyle-resistanceContainer > .MountedItemsStyle-commonForCellResistenceName',
                            style: `
                                    background: transparent;
                                    width: inherit;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > .MountedItemsStyle-resistanceContainer > .MountedItemsStyle-commonForCellResistenceName > .CellResistanceComponentStyle-resistanceIconContainer',
                            style: `
                                    width: inherit;
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > .MountedItemsStyle-resistanceContainer:first-child > .MountedItemsStyle-commonForCellResistenceName',
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > .MountedItemsStyle-resistanceContainer:nth-child(4) > .MountedItemsStyle-commonForCellResistenceName',
                            style: `
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > div > .MountedItemsStyle-improvementArrow',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.Common-container > .GarageCommonStyle-garageContainer > .GarageCommonStyle-positionContent > .GarageMainScreenStyle-blockParameters > .TanksPartBaseComponentStyle-tankPartContainer',
                            style: `
                                    background: unset !important;
                                    outline: unset !important;
                                    box-shadow: unset !important;
                                    border-top-right-radius: unset !important;
                                    border-bottom-right-radius: unset !important;
                                    backdrop-filter: unset !important;

                                    position: unset !important;
                                    display: flex !important;
                                    align-items: flex-start !important;
                                    justify-content: space-between !important;
                                    width: 100% !important;
                                    height: 94% !important;
                                    top: auto !important;
                                    left: auto !important;
                                    z-index: 1 !important;

                                    transition: unset !important;
                                    animation: unset !important;
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsListContainer',
                            style: `
                                    background: var(--general-bg);
                                    border-top: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    backdrop-filter: var(--general-backdrop-filter);

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsListContainer > .Common-flexCenterAlignCenter',
                            style: `
                                    background: transparent;

                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsContainer',
                            style: `
                                    border-radius: var(--general-border-radius);
                                    box-shadow: var(--general-box-shadow);

                                    margin-left: 1.25em;
                                    margin-right: 1.25em;
                                    padding: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn',
                            style: `
                                    margin-right: unset;
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn:first-child > .Common-itemStyle',
                            style: `
                                    border-left: var(--general-outline);
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn:last-child > .Common-itemStyle',
                            style: `
                                    border-right: var(--general-outline);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.Common-itemStyle',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: unset !important;
                                    border-top: var(--general-outline);
                                    border-bottom: var(--general-outline);
                                    border-radius: unset;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: `.Common-itemStyle > .Common-flexSpaceBetweenAlignStretch,
                                       .Common-itemStyle > .Common-flexSpaceBetweenAlignStretch > img,

                                       .SkinCellStyle-widthHeight > .SkinCellComponentStyle-deviceCategoryIcons-RARE,
                                       .SkinCellStyle-widthHeight > .SkinCellComponentStyle-deviceCategoryIcons-EPIC,
                                       .SkinCellStyle-widthHeight > .SkinCellComponentStyle-deviceCategoryIcons-LEGENDARY`,
                            style: `
                                    width: 2em;
                                    height: 2em;
                            `
                    },

                    {
                            selector: `.SuppliesComponentStyle-decorLine,
                                       .SuppliesComponentStyle-discountLabel`,
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-commonBlockSupplies',
                            style: `
                                    width: 100%;
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-commonBlockSupplies > .SuppliesComponentStyle-containersBlocks',
                            style: `
                                    background: var(--general-bg);
                                    border-top: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-commonBlockSupplies > .SuppliesComponentStyle-containersBlocks > .SuppliesComponentStyle-blocksCell',
                            style: `
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);

                                    width: calc(100% - 3em);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: unset !important;
                                    border-top: var(--general-outline);
                                    border-bottom: var(--general-outline);
                                    border-radius: unset;

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    margin-right: unset;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd:first-child',
                            style: `
                                    border-left: var(--general-outline);
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd:last-child',
                            style: `
                                    border-right: var(--general-outline);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd span',
                            style: `
                                    position: absolute;
                                    margin: unset;
                                    opacity: 0;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd:hover span',
                            style: `
                                    opacity: 1;
                                    margin-top: 2em;
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd > .SuppliesComponentStyle-cell',
                            style: `
                                    position: absolute;
                                    margin: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd:hover > .SuppliesComponentStyle-cell',
                            style: `
                                    margin-bottom: 1.5em;
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-screenShotButtonOpen',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.GarageCommonStyle-subMenu',
                            style: `
                                    align-items: center;
                            `
                    },

                    {
                            selector: '.GarageCommonStyle-subMenu > .Common-flexSpaceBetweenAlignStartColumn',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    height: calc(100% - 8em);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.GarageCommonStyle-subMenu > .BattleCreateComponentStyle-scrollBattlePick',
                            style: `
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.GarageItemComponentStyle-amountItemsScroll',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: 0 0 1em 0 rgb(0 0 0 / 40%), inset 0 0 0.5em 0 rgb(0 0 0 / 10%);
                                    border-radius: 0.35em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    color: white !important;
                                    margin-top: 3.5em !important;
                                    padding: 0.15em 0.35em;
                                    z-index: 20;
                            `
                    },

                    {
                            selector: `.GarageItemComponentStyle-descriptionDevice > div,
                                       .GarageItemComponentStyle-descriptionDevice > div > span`,
                            style: `
                                    overflow: visible;
                            `
                    },

                    {
                            selector: '.GarageItemComponentStyle-descriptionDevice > div > span',
                            style: `
                                    color: var(--general-color);
                                    text-shadow: 0 0 1em;
                                    z-index: 20;
                            `
                    },

                    {
                            selector: '.GarageItemComponentStyle-descriptionDevice > h2',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: 0 0 1em 0 rgb(0 0 0 / 40%), inset 0 0 0.5em 0 rgb(0 0 0 / 10%);
                                    border-radius: 0.35em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    text-shadow: 0 0 1em !important;
                                    position: absolute;
                                    top: 2.25em;
                                    margin: unset !important;
                                    padding: 0.15em 0.35em;
                                    z-index: 20;
                            `
                    },

                    {
                            selector: '.SkinCellStyle-widthHeight',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    margin: 0.5em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SkinCellStyle-widthHeight:hover',
                            style: `
                                    background: var(--general-bg-hover);

                                    cursor: pointer;
                            `
                    },

                    {
                            selector: '.SaleByKitStyle-commonBlockModal',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);
                                    backdrop-filter: var(--general-backdrop-filter);
                                    border-right: var(--general-outline);

                                    animation: translateLeft .2s ease-in-out;
                            `
                    },

                    {
                            selector: '.SaleByKitStyle-card',
                            style: `
                                    box-shadow: unset !important;
                                    animation : unset !important;
                            `
                    },

                    {
                            selector: '.SaleByKitStyle-commonCard',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.SaleByKitStyle-commonBlockModal > .SaleByKitStyle-paddingHeaderModal > .Common-flexStartAlignCenter > .HotKey-commonBlockForHotKey',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    // блок настроек

                    {
                            selector: '.SettingsComponentStyle-scrollingMenu',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.SettingsMenuComponentStyle-menuItemOptions',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin-bottom: 1em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.SettingsMenuComponentStyle-activeItemOptions',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.SettingsMenuComponentStyle-slideMenuOptions',
                            style: `
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.CheckBoxComponentStyle-oneSetting > .CheckBoxStyle-checkbox > label > span',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    border: unset;
                                    border-radius: 0.5em;

                                    display: flex;
                                    align-items: center;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.CheckBoxComponentStyle-oneSetting > .CheckBoxStyle-checkbox > label > span::before',
                            style: `
                                    background: unset;
                                    background-color: var(--general-color);
                                    border-radius: 0.35em;

                                    width: 1em;
                                    height: 1em;
                            `
                    },

                    {
                            selector: '.InputRangeComponentStyle-range',
                            style: `
                                    border-radius: 0.35em;
                            `
                    },

                    {
                            selector: `.InputRangeComponentStyle-blockSoundVolume p span,
                                       .GameSettingsStyle-notificationTextBlock > .GameSettingsStyle-notificationText,
                                       .AccountSettingsComponentStyle-blockTextOptions h1`,
                            style: `
                                    color: var(--general-color);
                            `
                    },

                    {
                            selector: '.DropDownStyle-dropdownControl',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.SettingsButtonsComponentStyle-buttonsWidthBackReset',
                            style: `
                                    background: var(--least-general-color);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius) !important;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SettingsButtonsComponentStyle-buttonsWidthBackReset:hover',
                            style: `
                                    background: var(--general-color);
                                    box-shadow: var(--general-box-shadow);
                            `
                    },

                    {
                            selector: '.SettingsButtonsComponentStyle-buttonsWidthBackReset > span',
                            style: `
                                    color: white;
                            `
                    },

                    // блок стилизации магазина

                    {
                            selector: '.ShopSelectedSectionComponentStyle-limitedOffersCommon',
                            style: `
                                    height: 100%;
                            `
                    },

                    {
                            selector: `.ShopSelectedSectionComponentStyle-limitedOffersCommon,
                                       .ShopSelectedSectionComponentStyle-commonCard`,
                            style: `
                                    background: transparent !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    justify-content: center;
                                    padding: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.ShopSelectedSectionComponentStyle-limitedOffersCommon > .Common-backgroundImageCover,
                                       .ShopSelectedSectionComponentStyle-commonCard > .Common-backgroundImageCover`,
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.ShopSelectedSectionComponentStyle-limitedOffersCommon:hover > .Common-backgroundImageCover,
                                       .ShopSelectedSectionComponentStyle-commonCard:hover > .Common-backgroundImageCover`,
                            style: `
                                    transform: scale(1.1, 1.1);
                            `
                    },

                    {
                            selector: `.ShopSelectedSectionComponentStyle-limitedOffersCommon:before, .ShopSelectedSectionComponentStyle-limitedOffersCommon:after,
                                       .ShopSelectedSectionComponentStyle-commonCard:before, .ShopSelectedSectionComponentStyle-commonCard:after`,
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ShopSelectedSectionComponentStyle-gradientCategory',
                            style: `
                                    background: transparent;

                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ShopSelectedSectionComponentStyle-limitedOffersCommon > span',
                            style: `
                                    text-shadow: 0 0 5px rgb(0 0 0 / 50%);
                                    top: 1em;
                                    bottom: unset;
                                    left: unset;
                            `
                    },

                    {
                            selector: '.NewShopCommonComponentStyle-commonBlockMenuShop',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-right: unset;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin-left: unset;
                                    padding: 2em 1.25em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.NewShopCommonComponentStyle-commonBlockMenuShop > div',
                            style: `
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.NewShopCommonComponentStyle-commonBlockMenuShop > div > .Common-flexStartAlignCenter',
                            style: `
                                    box-shadow: unset !important;
                                    border-radius: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.NewShopCommonComponentStyle-commonBlockMenuShop > div > .Common-flexStartAlignCenter:first-child',
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-top-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.NewShopCommonComponentStyle-commonBlockMenuShop > div > .Common-flexStartAlignCenter:last-child',
                            style: `
                                    border-bottom-left-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                            `
                    },


                    {
                            selector: `.NewShopCommonComponentStyle-commonBlockMenuShop > div > .Common-flexStartAlignCenter > h4,
                                       .NewShopCommonComponentStyle-commonBlockMenuShop > div > .Common-flexStartAlignCenter > .ShopSelectedSectionComponentStyle-activeCategory`,
                            style: `
                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ShopSelectedSectionComponentStyle-activeCategory',
                            style: `
                                    margin-left: 1.25em;
                            `
                    },

                    {
                            selector: '.ShopCategoryOfferSectionStyle-containerLimitOffers',
                            style: `
                                    padding-left: 2em;
                            `
                    },

                    {
                            selector: `.shop-item-component,
                                       .ShopCategoryOfferSectionStyle-containerLimitOffers > .Common-flexCenterAlignCenter`,
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    opacity: 1;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation) !important;
                            `
                    },

                    {
                            selector: `.shop-item-component:hover,
                                       .ShopCategoryOfferSectionStyle-containerLimitOffers > .Common-flexCenterAlignCenter:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: `.SpecialItemComponentStyle-smallSizePreviewItem,
                                       .SpecialItemComponentStyle-bigSizePreviewItem`,
                            style: `
                                    background: var(--general-bg);
                                    border-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.NewShopCommonComponentStyle-commonContainer',
                            style: `
                                    background: transparent;
                            `
                    },

                ];

                var keyframes = [

                    {
                            animations: `@keyframes blend {

                                                0% {
                                                        opacity: 0;
                                                }

                                                100% {
                                                        opacity: 1;
                                                }

                                        }
                            `
                    },

                    {
                            animations: `@keyframes translateRight {

                                                0% {
                                                        opacity: 0;
                                                        transform: translateX(30px);
                                                }

                                                100% {
                                                        opacity: 1;
                                                }

                                        }
                            `
                    },

                    {
                            animations: `@keyframes translateLeft {

                                                0% {
                                                        opacity: 0;
                                                        transform: translateX(-30px);
                                                }

                                                100% {
                                                        opacity: 1;
                                                }

                                        }
                            `
                    },

                    {
                            animations: `@keyframes translateUp {

                                                0% {
                                                        opacity: 0;
                                                        transform: translateY(-10px);
                                                }

                                                100% {
                                                        opacity: 1;
                                                }

                                        }
                            `
                    },

                    {
                            animations: `@keyframes translateDown {

                                                0% {
                                                        opacity: 0;
                                                        transform: translateY(30px);
                                                }

                                                100% {
                                                        opacity: 1;
                                                }

                                        }
                            `
                    },

                    {
                            animations: `@keyframes rotate {

                                                0% {
                                                        transform: rotate(0deg);
                                                }

                                                100% {
                                                        transform: rotate(360deg);
                                                }

                                        }
                            `
                    },

                    {
                            animations: `@keyframes gradient {

                                                0% {
                                                        background-position: 0%;
                                                }

                                                50% {
                                                        background-position: 250%;
                                                }

                                                100% {
                                                        background-position: 0%;
                                                }

                                        }
                            `
                    },

                ];

                var cssStyles = document.createElement(`style`);
                    cssStyles.className = `obscStyleSheet-globalStyles`

                elements.forEach((element) => {

                        let css = `${element.selector} {${element.style}}\n`

                        cssStyles.textContent += css.split(`                `).join(``);

                });

                variableHeader.appendChild(cssStyles);

                var cssKeyframes = document.createElement(`style`);
                    cssKeyframes.className = `obscStyleSheet-keyframesArray`

                keyframes.forEach((keyframe) => {

                        let frames = `${keyframe.animations}\n`

                        cssKeyframes.textContent += frames.split(`                `).join(``);

                });

                variableHeader.appendChild(cssKeyframes);

                // выборка тегов

                var hoverStyles = elements.filter((element) => element.tags === 'hover');

                hoverStyles.forEach((element) => {

                        let css = `${element.selector}:hover {background-color: var(--general-bg-hover);}\n`

                        cssStyles.textContent += css.split(`                `).join(``);

                });

        };

        // функции для ингейм таба

        function tabFunctionsArray() {

                var tankResistances = [

                        {
                                oldPicture: "https://tankionline.com/play/static/images/crit_resistance.7fb68893.svg",
                                picture: "https://tankionline.com/play/static/images/resistances/crit_resistance.3f4d1cc2.svg"
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/firebird_resistance.785a9d6b.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/firebird_resistance.00ac2221.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/freeze_resistance.33bdf642.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/freeze_resistance.d26eb338.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/isis_resistance.30a69ffc.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/isis_resistance.5b05887a.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/tesla_resistance.3e686c8e.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/tesla_resistance.663d3597.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/hammer_resistance.6c549d29.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/hammer_resistance.28e73097.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/twins_resistance.ad189f61.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/twins_resistance.fbbc4d72.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/ricochet_resistance.8247beaa.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/ricochet_resistance.69c6c7ee.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/smoky_resistance.845afc14.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/smoky_resistance.c4c202ca.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/rocket_launcher_resistance.b7dfd64f.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/rocket_launcher_resistance.5772cbaa.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/vulcan_resistance.824f6f0e.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/vulcan_resistance.9aebf267.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/thunder_resistance.6d7f4531.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/thunder_resistance.9dab2abf.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/scorpio_resistance.e8f1787f.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/scorpio_resistance.d40f8fbb.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/railgun_resistance.636a554f.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/railgun_resistance.7577c7a1.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/artillery_resistance.9b4cbc34.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/artillery_resistance.bd49fc96.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/gauss_resistance.bb8f409c.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/gauss_resistance.acf358ed.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/shaft_resistance.0778fd3e.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/shaft_resistance.7e58bc19.svg'
                        },

                        {
                                oldPicture: 'https://tankionline.com/play/static/images/mine_resistance.dd581c90.svg',
                                picture: 'https://tankionline.com/play/static/images/resistances/mine_resistance.0d0d3c98.svg'
                        },

                ];

                function color() {

                        new MutationObserver((mutations) => {

                                mutations.forEach(({ addedNodes, target }) => {

                                        if (addedNodes.length && ('tbody' === target.localName || target.className.includes('BattleComponentStyle-canvasContainer'))) {

                                                let user = document.querySelector('.UserInfoContainerStyle-textDecoration')?.textContent?.split(' ').pop();

                                                target.querySelectorAll('.Common-maskImage').forEach((element) => {

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

                                        };

                                });

                        }).observe(document, {

                                subtree: true,

                                childList: true

                        });

                };

                color();

                // закреп нижней панели в табе

                var cssStylesPin = document.createElement(`style`);
                    cssStylesPin.className = `obscStyleSheet-pinResistances`

                var pinnedResistances = [

                        {
                                selector: '.BattleTabStatisticComponentStyle-pinResistances',
                                style: `
                                        background-color: var(--general-color) !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-containerInsideTeams > .Common-flexCenterAlignCenter',
                                style: `
                                        opacity: 1;
                                        margin-top: 0.5em;
                                `
                        },

                ];

                function pin() {

                        let mainHeader = document.getElementsByClassName('BattleTabStatisticComponentStyle-containerInsideTeams')[0];

                        if (mainHeader) {

                                let pinResistances = document.createElement('div');
                                    pinResistances.className = 'BattleTabStatisticComponentStyle-pinResistances'

                                mainHeader.appendChild(pinResistances);

                                if (pinResistances) {

                                        let pressCount

                                        if (localStorage.getItem('pinResistances') === 'true') {

                                                pressCount = 1

                                        } else {

                                                pressCount = 0

                                        };

                                        pinResistances.addEventListener('click', function() {

                                                pressCount++

                                                if (pressCount == 1) {

                                                        let elements = pinnedResistances

                                                        elements.forEach((element) => {

                                                                let css = `${element.selector} {${element.style}}\n`

                                                                cssStylesPin.textContent += css.split(`                `).join(``);

                                                        });

                                                        variableHeader.appendChild(cssStylesPin);

                                                        localStorage.setItem('pinResistances', true);

                                                };

                                                if (pressCount == 2) {

                                                        if (cssStylesPin) {

                                                              cssStylesPin.remove();

                                                        };

                                                        pressCount = 0

                                                        localStorage.setItem('pinResistances', false);

                                                };

                                        });

                                };

                        };

                };

                if (localStorage.getItem('pinResistances') === 'true') {

                        let pressCount = 1

                        let elements = pinnedResistances

                        elements.forEach((element) => {

                                let css = `${element.selector} {${element.style}}\n`

                                cssStylesPin.textContent += css.split(`                `).join(``);

                        });

                        variableHeader.appendChild(cssStylesPin);

                } else {

                        let pressCount = 0

                };

                // закреп резистов в табе

                var cssStylesShow = document.createElement(`style`);
                    cssStylesShow.className = `obscStyleSheet-showResistances`

                var showingResistances = [

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr,
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr`,
                                style: `
                                        width: 45.125em;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-showResistances',
                                style: `
                                        background-color: var(--general-color) !important;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-resistanceModuleCell,
                                           .BattleTabStatisticComponentStyle-gsCell,
                                           .BattleTabStatisticComponentStyle-deviceCell,
                                           .BattleTabStatisticComponentStyle-defenceCell`,
                                style: `
                                        visibility: visible !important;
                                        opacity: 1 !important;
                                        margin: unset !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-resistanceModuleCell',
                                style: `
                                        position: relative !important;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-defenceLabel',
                                style: `
                                        margin-left: -10em;
                                        margin-right: 10em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:first-child,
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:first-child`,
                                style: `
                                        margin-right: 10em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+6),
                                           .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+7),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+6),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+7)`,
                                style: `
                                        border: unset;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(1),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(1)`,
                                style: `
                                        position: absolute;
                                        left: 0em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(2),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(2)`,
                                style: `
                                        position: absolute;
                                        left: 25.55em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(3),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(3)`,
                                style: `
                                        position: absolute;
                                        left: 29.75em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(4),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(4)`,
                                style: `
                                        position: absolute;
                                        left: 32.75em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(5),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(5)`,
                                style: `
                                        position: absolute;
                                        left: 35.7em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(6),
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(6)`,
                                style: `
                                        position: absolute;
                                        left: 41em;
                                `
                        },

                        {
                                selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr,
                                           .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr`,
                                style: `
                                        width: 46.5em;
                                        justify-content: flex-end;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-containerInsideTeams',
                                style: `
                                        width: 95em;
                                `
                        },

                        {
                                selector: '.BattleTabStatisticComponentStyle-blueTeamTableContainer table',
                                style: `
                                        padding-left: 1em;
                                `
                        },

                ];

                function show() {

                        let mainHeader = document.getElementsByClassName('BattleTabStatisticComponentStyle-containerInsideTeams')[0];

                        if (mainHeader) {

                                let showResistances = document.createElement('div');
                                    showResistances.className = 'BattleTabStatisticComponentStyle-showResistances'

                                mainHeader.appendChild(showResistances);

                                if (showResistances) {

                                        let pressCount

                                        if (localStorage.getItem('showResistances') === 'true') {

                                                pressCount = 1

                                        } else {

                                                pressCount = 0

                                        };

                                        showResistances.addEventListener('click', function() {

                                                pressCount++

                                                if (pressCount == 1) {

                                                        let elements = showingResistances

                                                        elements.forEach((element) => {

                                                                let css = `${element.selector} {${element.style}}\n`

                                                                cssStylesShow.textContent += css.split(`                `).join(``);

                                                        });

                                                        variableHeader.appendChild(cssStylesShow);

                                                        localStorage.setItem('showResistances', true);

                                                };

                                                if (pressCount == 2) {

                                                        if (cssStylesShow) {

                                                              cssStylesShow.remove();

                                                        };

                                                        pressCount = 0

                                                        localStorage.setItem('showResistances', false);

                                                };

                                        });

                                };

                        };

                };

                if (localStorage.getItem('showResistances') === 'true') {

                        let pressCount = 1

                        let elements = showingResistances

                        elements.forEach((element) => {

                                let css = `${element.selector} {${element.style}}\n`

                                cssStylesShow.textContent += css.split(`                `).join(``);

                        });

                        variableHeader.appendChild(cssStylesShow);

                } else {

                        let pressCount = 0

                };

                new MutationObserver((mutations) => {

                        mutations.forEach(({ target }) => {

                                if (target.className.includes('BattleComponentStyle-canvasContainer')) {

                                        pin();

                                        show();

                                };

                        });

                }).observe(document, {

                        subtree: true,

                        childList: true

                });

        };

        // стилизация уведомлений в лобби

        function primaryNotification() {

                let notificationImage = 'data:image/webp;base64,UklGRngDAABXRUJQVlA4WAoAAAAQAAAAHwMAFAIAQUxQSCIAAAABBxARERAIJPurD1BE/zP+85///Oc///nPf/7zn//85/8PVlA4IDADAACwXgCdASogAxUCPpFIoU0lpCMiIAgAsBIJaW7hd2EbQAnsA99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPekAAP7/3gioPGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='

                let mainNotification = document.querySelectorAll('.PrimaryMenuItemComponentStyle-notificationIconNewNews');

                for (let i = 0; i < mainNotification.length; i++) {

                    mainNotification[i].src = notificationImage

                };

                let footerNotification = document.querySelectorAll('.MainScreenComponentStyle-new.FooterComponentStyle-marginEllips');

                for (let i = 0; i < footerNotification.length; i++) {

                    footerNotification[i].src = notificationImage

                };

        };

        // часы в лобби

        function lobbyClocks() {

                let mainHeader = document.getElementsByClassName('UserInfoContainerStyle-blockForIconTankiOnline')[0];

                if (mainHeader) {

                        let days

                        let date = new Date();

                        let clockDays = document.createElement('div');
                            clockDays.className = 'obscDOMElement-clockDays'

                        mainHeader.appendChild(clockDays);

                        let clockTime = document.createElement('div');
                            clockTime.className = 'obscDOMElement-clockTime'

                        mainHeader.appendChild(clockTime);

                        if (language == 'ru') {

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

        // функция фастпика в лобби

        function battleFastPick() {

                let mainHeader = document.getElementsByClassName('MainScreenComponentStyle-containerForMenuGradient')[0];

                if (mainHeader) {

                        let buttonsHeader = document.createElement('div');
                            buttonsHeader.className = 'obscDOMElement-fastPick-buttonsHeader'

                        mainHeader.appendChild(buttonsHeader);

                        if (buttonsHeader) {

                                let button1 = document.createElement('div');
                                    button1.className = 'obscDOMElement-fastPick-fastBattle'

                                    buttonsHeader.appendChild(button1);

                                if (button1) {

                                        let button1img = document.createElement('div');
                                            button1img.className = 'obscDOMElement-fastPick-fastBattle-img'

                                        button1.appendChild(button1img);

                                        button1.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(1)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button2 = document.createElement('div');
                                    button2.className = 'obscDOMElement-fastPick-tdm'

                                    buttonsHeader.appendChild(button2);

                                if (button2) {

                                        let button2img = document.createElement('div');
                                            button2img.className = 'obscDOMElement-fastPick-tdm-img'

                                        button2.appendChild(button2img);

                                        button2.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(2)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button3 = document.createElement('div');
                                    button3.className = 'obscDOMElement-fastPick-cp'

                                    buttonsHeader.appendChild(button3);

                                if (button3) {

                                        let button3img = document.createElement('div');
                                            button3img.className = 'obscDOMElement-fastPick-cp-img'

                                        button3.appendChild(button3img);

                                        button3.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(3)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button4 = document.createElement('div');
                                    button4.className = 'obscDOMElement-fastPick-ctf'

                                    buttonsHeader.appendChild(button4);

                                if (button4) {

                                        let button4img = document.createElement('div');
                                            button4img.className = 'obscDOMElement-fastPick-ctf-img'

                                        button4.appendChild(button4img);

                                        button4.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(4)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button5 = document.createElement('div');
                                    button5.className = 'obscDOMElement-fastPick-sge'

                                    buttonsHeader.appendChild(button5);

                                if (button5) {

                                        let button5img = document.createElement('div');
                                            button5img.className = 'obscDOMElement-fastPick-sge-img'

                                        button5.appendChild(button5img);

                                        button5.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(1)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button6 = document.createElement('div');
                                    button6.className = 'obscDOMElement-fastPick-tjr'

                                    buttonsHeader.appendChild(button6);

                                if (button6) {

                                        let button6img = document.createElement('div');
                                            button6img.className = 'obscDOMElement-fastPick-tjr-img'

                                        button6.appendChild(button6img);

                                        button6.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(2)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button7 = document.createElement('div');
                                    button7.className = 'obscDOMElement-fastPick-rgb'

                                    buttonsHeader.appendChild(button7);

                                if (button7) {

                                        let button7img = document.createElement('div');
                                            button7img.className = 'obscDOMElement-fastPick-rgb-img'

                                        button7.appendChild(button7img);

                                        button7.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(3)');

                                                                                if (header) {

                                                                                        header.click();

                                                                                };

                                                                        }, 15);

                                                                };

                                                        }, 15);

                                                };

                                        });

                                };

                                let button8 = document.createElement('div');
                                    button8.className = 'obscDOMElement-fastPick-asl'

                                    buttonsHeader.appendChild(button8);

                                if (button8) {

                                        let button8img = document.createElement('div');
                                            button8img.className = 'obscDOMElement-fastPick-asl-img'

                                        button8.appendChild(button8img);

                                        button8.addEventListener('click', function() {

                                                let playButton = document.getElementsByClassName('MainScreenComponentStyle-buttonPlay')[0];

                                                if (playButton) {

                                                        playButton.click();

                                                        setTimeout(function() {

                                                                let gameModes = document.querySelector('.BattlePickComponentStyle-cardContentLeft > .BattlePickComponentStyle-commonStyleBlock:nth-child(2)');

                                                                if (gameModes) {

                                                                        gameModes.click();

                                                                        setTimeout(function() {

                                                                                let header = document.querySelector('.BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn:nth-child(4)');

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

        // стили гаража в лобби

        function garageStyles() {

                let mainHeader = document.getElementsByClassName('MainScreenComponentStyle-gradientBlock')[0];

                if (mainHeader) {

                        let buttonsHeader = document.createElement('div');
                            buttonsHeader.className = 'obscDOMElement-buttonsHeader'

                        mainHeader.appendChild(buttonsHeader);

                        if (buttonsHeader) {

                                function visibilityON() {

                                        let elements = [

                                                {
                                                        selector: '.obscDOMElement-garageVisibility',
                                                        style: `
                                                                background-color: rgb(255 255 255 / 10%) !important;
                                                        `
                                                },

                                                {
                                                        selector: '.obscDOMElement-holdingCard',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },

                                                {
                                                        selector: '.obscDOMElement-fastPick-buttonsHeader',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },

                                                {
                                                        selector: '.Common-container, .NotificationViewStyle-commonBlockNotification',
                                                        style: `
                                                                pointer-events: none;
                                                        `
                                                },

                                                {
                                                        selector: '.MainScreenComponentStyle-containerForMenuGradient:before',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },

                                                {
                                                        selector: '.MainScreenComponentStyle-containerForMenuGradient:after',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },


                                                {
                                                        selector: '.MainScreenComponentStyle-containerForMenuGradient > .Common-displayFlex',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },


                                                {
                                                        selector: '.MainScreenComponentStyle-containerForMenuGradient > .MainScreenComponentStyle-blockMainMenu',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },


                                                {
                                                        selector: '.MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },

                                                {
                                                        selector: '.BattlePassLobbyComponentStyle-menuBattlePass',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },

                                                {
                                                        selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },

                                                {
                                                        selector: '.AnnouncementHomeScreenComponentStyle-mainContainer',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },

                                        ];

                                        let cssStyles = document.createElement(`style`);
                                            cssStyles.className = `obscStyleSheet-garageVisibility`

                                        elements.forEach((element) => {

                                                let css = `${element.selector} {${element.style}}\n`

                                                cssStyles.textContent += css.split(`                `).join(``);

                                        });

                                        variableHeader.appendChild(cssStyles);

                                };

                                function visibilityOFF() {

                                        let cssStyles = document.getElementsByClassName('obscStyleSheet-garageVisibility')[0];

                                        if (cssStyles) {

                                                variableHeader.removeChild(cssStyles);

                                        };

                                };

                                let visibility = document.createElement('div');
                                    visibility.className = 'obscDOMElement-garageVisibility'

                                buttonsHeader.appendChild(visibility);

                                let pressCount = 0

                                if (visibility) {

                                        visibility.addEventListener('click', function() {

                                                pressCount++

                                                if (pressCount == 1) {

                                                        visibilityON();

                                                };

                                                if (pressCount == 2) {

                                                        pressCount = 0

                                                        visibilityOFF();

                                                };

                                        });

                                };

                                function reloadPage() {

                                        setTimeout(function() {

                                                window.location.reload();

                                        }, 500);

                                };

                                let pressCount1 = localStorage.getItem('obscLocalStorageVariable-garageDefault-pressCount');
                                let pressCount2 = localStorage.getItem('obscLocalStorageVariable-garageEvening-pressCount');
                                let pressCount3 = localStorage.getItem('obscLocalStorageVariable-garageNight-pressCount');

                                let defaultButton = document.createElement('div');
                                    defaultButton.className = 'obscDOMElement-defaultButton'

                                buttonsHeader.appendChild(defaultButton);

                                if (defaultButton) {

                                        defaultButton.addEventListener('click', function() {

                                                pressCount1++

                                                pressCount2 = 0
                                                pressCount3 = 0

                                                if (pressCount1 == 1) {

                                                        defaultButton.style = 'background-color: rgb(255 255 255 / 5%)'

                                                        eveningButton.style = ''
                                                        nightButton.style = ''

                                                        localStorage.setItem('obscLocalStorageVariable-garageStyle', 'default');

                                                        localStorage.setItem('obscLocalStorageVariable-garageDefault-pressCount', 1);

                                                        localStorage.setItem('obscLocalStorageVariable-garageEvening-pressCount', 0);
                                                        localStorage.setItem('obscLocalStorageVariable-garageNight-pressCount', 0);

                                                        reloadPage();

                                                };

                                                if (pressCount1 == 2) {

                                                        pressCount1 = 0

                                                        defaultButton.style = ''

                                                        localStorage.setItem('obscLocalStorageVariable-garageDefault-pressCount', 0);

                                                        localStorage.setItem('obscLocalStorageVariable-garageStyle', 'default');

                                                        reloadPage();

                                                };

                                        });

                                };

                                var eveningButton = document.createElement('div');
                                    eveningButton.className = 'obscDOMElement-eveningButton'

                                buttonsHeader.appendChild(eveningButton);

                                if (eveningButton) {

                                        eveningButton.addEventListener('click', function() {

                                                pressCount2++

                                                pressCount1 = 0
                                                pressCount3 = 0

                                                if (pressCount2 == 1) {

                                                        eveningButton.style = 'background-color: rgb(255 255 255 / 10%)'

                                                        defaultButton.style = ''
                                                        nightButton.style = ''

                                                        localStorage.setItem('obscLocalStorageVariable-garageStyle', 'evening');

                                                        localStorage.setItem('obscLocalStorageVariable-garageEvening-pressCount', 1);

                                                        localStorage.setItem('obscLocalStorageVariable-garageDefault-pressCount', 0);
                                                        localStorage.setItem('obscLocalStorageVariable-garageNight-pressCount', 0);

                                                        reloadPage();

                                                };

                                                if (pressCount2 == 2) {

                                                        pressCount2 = 0

                                                        eveningButton.style = ''

                                                        localStorage.setItem('obscLocalStorageVariable-garageEvening-pressCount', 0);

                                                        localStorage.setItem('obscLocalStorageVariable-garageStyle', 'default');

                                                        reloadPage();

                                                };

                                        });

                                };

                                var nightButton = document.createElement('div');
                                    nightButton.className = 'obscDOMElement-nightButton'

                                buttonsHeader.appendChild(nightButton);

                                if (nightButton) {

                                        nightButton.addEventListener('click', function() {

                                                pressCount3++

                                                pressCount1 = 0
                                                pressCount2 = 0

                                                if (pressCount3 == 1) {

                                                        nightButton.style = 'background-color: rgb(255 255 255 / 10%)'

                                                        defaultButton.style = ''
                                                        eveningButton.style = ''

                                                        localStorage.setItem('obscLocalStorageVariable-garageStyle', 'night');

                                                        localStorage.setItem('obscLocalStorageVariable-garageNight-pressCount', 1);

                                                        localStorage.setItem('obscLocalStorageVariable-garageDefault-pressCount', 0);
                                                        localStorage.setItem('obscLocalStorageVariable-garageEvening-pressCount', 0);

                                                        reloadPage();

                                                };

                                                if (pressCount3 == 2) {

                                                        pressCount3 = 0

                                                        nightButton.style = ''

                                                        localStorage.setItem('obscLocalStorageVariable-garageNight-pressCount', 0);

                                                        localStorage.setItem('obscLocalStorageVariable-garageStyle', 'default');

                                                        reloadPage();

                                                };

                                        });

                                };

                        };

                };

                if (localStorage.getItem('obscLocalStorageVariable-garageStyle') == 'evening') {

                        if (eveningButton) {

                                eveningButton.style = 'background-color: rgb(255 255 255 / 10%)'

                        };

                };

                if (localStorage.getItem('obscLocalStorageVariable-garageStyle') == 'night') {

                        if (nightButton) {

                                nightButton.style = 'background-color: rgb(255 255 255 / 10%)'

                        };

                        let darkening = document.getElementsByClassName('MainScreenComponentStyle-gradientBlockRight')[0];

                        if (darkening) {

                                darkening.style = 'background: radial-gradient(black 10%, transparent 60%); visibility: visible; position: absolute; right: 2em; width: 100%; height: 100%; opacity: 0.35'

                        };

                        let vignette = document.getElementsByClassName('MainScreenComponentStyle-gradientBlock')[0];

                        if (vignette) {

                                vignette.style = 'background: radial-gradient(transparent 25%, rgb(0 0 0 / 20%))'

                        };

                };

        };

        // начальный экран

        function startScreen() {

                let mainHeader = document.querySelector('.StartScreenComponentStyle-mainContainer');

                if (mainHeader) {

                        let mainHeaderimg = document.createElement('div');
                            mainHeaderimg.className = 'obscDOMElement-startScreen-logo'

                        mainHeader.appendChild(mainHeaderimg);

                        let mainHeaderh1 = document.createElement('h1');
                            mainHeaderh1.className = 'obscDOMElement-startScreen-h1'
                            mainHeaderh1.innerHTML = 'Obscurum'

                        mainHeader.appendChild(mainHeaderh1);

                        let mainHeaderh2 = document.createElement('h2');
                            mainHeaderh2.className = 'obscDOMElement-startScreen-h2'
                            mainHeaderh2.innerHTML = version

                        mainHeader.appendChild(mainHeaderh2);

                };

        };

        // затемнение при модальном окне

        function createWindow() {

                let mainHeader = document.getElementsByClassName('ModalStyle-rootHover')[0];

                let window = document.createElement('div');
                    window.className = 'ModalStyle-surfaceWindow'

                if (mainHeader) {

                        mainHeader.appendChild(window);

                };

        };

        // загрузчик игры

        function applicationLoader() {

                let mainHeader = document.getElementsByClassName('ApplicationLoaderComponentStyle-container')[0];

                if (mainHeader) {

                        let innerGear = document.createElement('div');
                            innerGear.className = 'loadingAnimation-innerGear'

                            mainHeader.appendChild(innerGear);

                        let innerRing = document.createElement('div');
                            innerRing.className = 'loadingAnimation-innerRing'

                            mainHeader.appendChild(innerRing);

                        let outerRing = document.createElement('div');
                            outerRing.className = 'loadingAnimation-outerRing'

                            innerRing.appendChild(outerRing);

                };

        };

        // загрузчик в лобби

        function lobbyLoader() {

                let mainHeader = document.getElementsByClassName('LobbyLoaderComponentStyle-container')[0];

                if (mainHeader) {

                        let innerGear = document.createElement('div');
                            innerGear.className = 'loadingAnimation-innerGear'

                            mainHeader.appendChild(innerGear);

                        let innerRing = document.createElement('div');
                            innerRing.className = 'loadingAnimation-innerRing'

                            mainHeader.appendChild(innerRing);

                        let outerRing = document.createElement('div');
                            outerRing.className = 'loadingAnimation-outerRing'

                            innerRing.appendChild(outerRing);

                };

        };

        // наложение SVG анимации фона через HTML

        function applyBackground() {

                variableHeader.insertAdjacentHTML('beforeend',

                    `<svg class="obscGlobalVariable-svgNode" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="1200px" y="0px" width="100%" height="100%" viewBox="0 0 1600 1050" preserveAspectRatio="xMidYMax slice">
                             <defs>
                                     <linearGradient id="bg">
                                             <stop offset="0%" style="stop-color:rgba(50, 50, 50, 0.25)"></stop>
                                             <stop offset="50%" style="stop-color:rgba(200, 200, 200, 0.25)"></stop>
                                             <stop offset="100%" style="stop-color:rgba(10, 10, 10, 0.25)"></stop>
                                     </linearGradient>
                                     <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                             </defs>
                             <g>
                                     <use xlink:href='#wave' opacity=".3">
                                             <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="20s" calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                                     </use>
                                     <use xlink:href='#wave' opacity=".6">
                                             <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="16s" calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1"keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                                     </use>
                                     <use xlink:href='#wave' opacity=".9">
                                             <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="12s" calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" />
                                     </use>
                             </g>
                     </svg>

                `);

                let gradient = document.createElement('div');
                    gradient.className = 'obscDOMElement-svgGradient'

                variableHeader.appendChild(gradient);

        };

        // чейнджлог в лобби

        function developerDetails() {

                let mainHeader = document.getElementsByClassName('MainScreenComponentStyle-containerForMenuGradient')[0];

                let holdingCard = document.createElement('div');
                    holdingCard.className = 'obscDOMElement-holdingCard'

                if (mainHeader) {

                        mainHeader.appendChild(holdingCard);

                        if (holdingCard) {

                                let img1 = document.createElement('div');
                                    img1.className = 'obscDOMElement-holdingCard-img1'

                                holdingCard.appendChild(img1);

                                let text1 = document.createElement('h1');
                                    text1.className = 'obscDOMElement-holdingCard-text1'
                                    text1.innerHTML = `Obscurum ${version}`

                                holdingCard.appendChild(text1);

                                let text2 = document.createElement('h1');
                                    text2.className = 'obscDOMElement-holdingCard-text2'

                                if (language == 'ru') {

                                        text2.innerHTML = `// Список изменений`

                                } else {

                                        text2.innerHTML = `// Changelog`

                                };

                                holdingCard.appendChild(text2);

                                holdingCard.addEventListener('click', function() {

                                        let windowBackground = document.createElement('div');
                                            windowBackground.className = 'obscDOMElement-changelogWindowBackground'

                                        document.body.appendChild(windowBackground);

                                        if (windowBackground) {

                                                windowBackground.addEventListener('click', function() {

                                                        document.body.removeChild(windowBackground);

                                                        document.body.removeChild(logWindow);

                                                });

                                        };

                                        let logWindow = document.createElement('div');
                                            logWindow.className = 'obscDOMElement-changelogWindow'

                                        document.body.appendChild(logWindow);

                                        if (logWindow) {

                                                let logWindow_img1 = document.createElement('div');
                                                    logWindow_img1.className = 'obscDOMElement-changelowWindow-img1'

                                                logWindow.appendChild(logWindow_img1);

                                                let logWindow_header = document.createElement('h1');
                                                    logWindow_header.className = 'obscDOMElement-changelowWindow-header'
                                                    logWindow_header.innerHTML = 'Obcsurum v1.00'

                                                logWindow.appendChild(logWindow_header);

                                                let logWindow_textHeader = document.createElement('div');
                                                    logWindow_textHeader.className = 'obscDOMElement-changelowWindow-textHeader'

                                                logWindow.appendChild(logWindow_textHeader);

                                                if (logWindow_textHeader) {

                                                        let logWindow_textHeader_text1 = document.createElement('h1');
                                                            logWindow_textHeader_text1.className = 'obscDOMElement-changelowWindow-textHeader-h1'
                                                            logWindow_textHeader_text1.innerHTML = `v1.00`

                                                        logWindow_textHeader.appendChild(logWindow_textHeader_text1);

                                                        let logWindow_textHeader_text1_line = document.createElement('div');
                                                            logWindow_textHeader_text1_line.className = 'obscDOMElement-changelowWindow-textHeader-h1-line'

                                                        logWindow_textHeader_text1.appendChild(logWindow_textHeader_text1_line);

                                                        if (logWindow_textHeader_text1) {

                                                                let logWindow_textHeader_text1_span1 = document.createElement('span');

                                                                logWindow_textHeader_text1.appendChild(logWindow_textHeader_text1_span1);

                                                                let logWindow_textHeader_text1_span2 = document.createElement('span');

                                                                logWindow_textHeader_text1.appendChild(logWindow_textHeader_text1_span2);

                                                                let logWindow_textHeader_text1_span3 = document.createElement('span');

                                                                logWindow_textHeader_text1.appendChild(logWindow_textHeader_text1_span3);

                                                                let logWindow_textHeader_text1_span4 = document.createElement('span');

                                                                logWindow_textHeader_text1.appendChild(logWindow_textHeader_text1_span4);

                                                                if (language == 'ru') {

                                                                        logWindow_textHeader_text1_span1.innerHTML = '• Введение списка изменений (чейнджлога) в лобби'

                                                                        logWindow_textHeader_text1_span2.innerHTML = '• Полная переделка раздела с результатами битвы'

                                                                        logWindow_textHeader_text1_span3.innerHTML = '• Добавление автоматического перевода текста в теме на английский'

                                                                        logWindow_textHeader_text1_span4.innerHTML = '• Начало разработки отдельного меню для темы. Планируется возможность накладывать фильтры на игру (контраст, сепия, затемнение, виньетка), менять акцентовый цвет на другие доступные, менять фон лобби (canvas снег/дождь, мультимедиа) и др.'

                                                                } else {

                                                                        logWindow_textHeader_text1_span1.innerHTML = '• Adding a changelog into the lobby'

                                                                        logWindow_textHeader_text1_span2.innerHTML = '• Complete rework of the battle results section'

                                                                        logWindow_textHeader_text1_span3.innerHTML = '• Adding automatic translation of text in the topic into English'

                                                                        logWindow_textHeader_text1_span4.innerHTML = '• Start of development of a menu for the theme. It is planned to be able to apply filters to the game (contrast, sepia, darkening, vignette), change the accent color to other available ones, change the lobby background (canvas snow/rain, multimedia), etc.'

                                                                };

                                                        };

                                                        let logWindow_textHeader_text2 = document.createElement('h1');
                                                            logWindow_textHeader_text2.className = 'obscDOMElement-changelowWindow-textHeader-h1'
                                                            logWindow_textHeader_text2.innerHTML = `v0.992`

                                                        logWindow_textHeader.appendChild(logWindow_textHeader_text2);

                                                        let logWindow_textHeader_text2_line = document.createElement('div');
                                                            logWindow_textHeader_text2_line.className = 'obscDOMElement-changelowWindow-textHeader-h1-line'

                                                        logWindow_textHeader_text2.appendChild(logWindow_textHeader_text2_line);

                                                        if (logWindow_textHeader_text2) {

                                                                let logWindow_textHeader_text2_span1 = document.createElement('span');

                                                                logWindow_textHeader_text2.appendChild(logWindow_textHeader_text2_span1);

                                                                let logWindow_textHeader_text2_span2 = document.createElement('span');

                                                                logWindow_textHeader_text2.appendChild(logWindow_textHeader_text2_span2);

                                                                let logWindow_textHeader_text2_span3 = document.createElement('span');

                                                                logWindow_textHeader_text2.appendChild(logWindow_textHeader_text2_span3);

                                                                let logWindow_textHeader_text2_span4 = document.createElement('span');

                                                                logWindow_textHeader_text2.appendChild(logWindow_textHeader_text2_span4);

                                                                if (language == 'ru') {

                                                                        logWindow_textHeader_text2_span1.innerHTML = '• Небольшой хотфикс таба в DM-матчах'

                                                                        logWindow_textHeader_text2_span2.innerHTML = '• Стилизация окна приглашения в битву/группу'

                                                                        logWindow_textHeader_text2_span3.innerHTML = '• Стилизация кнопок "Назад" и "Пригласить" в разделе приглашений'

                                                                        logWindow_textHeader_text2_span4.innerHTML = '• Фикс недоступных (красных) заданий в разделе миссий'

                                                                } else {

                                                                        logWindow_textHeader_text2_span1.innerHTML = '• Small hotfix of tab in DM matches'

                                                                        logWindow_textHeader_text2_span2.innerHTML = '• Stylization of the battle/group invitation window'

                                                                        logWindow_textHeader_text2_span3.innerHTML = '• Stylization of the "Back" and "Invite" buttons in the invitation section'

                                                                        logWindow_textHeader_text2_span4.innerHTML = '• Fix for unavailable (red) tasks in the missions section'

                                                                };


                                                        };

                                                        let logWindow_textHeader_text3 = document.createElement('h1');
                                                            logWindow_textHeader_text3.className = 'obscDOMElement-changelowWindow-textHeader-h1'
                                                            logWindow_textHeader_text3.innerHTML = `v0.991`

                                                        logWindow_textHeader.appendChild(logWindow_textHeader_text3);

                                                        let logWindow_textHeader_text3_line = document.createElement('div');
                                                            logWindow_textHeader_text3_line.className = 'obscDOMElement-changelowWindow-textHeader-h1-line'

                                                        logWindow_textHeader_text3.appendChild(logWindow_textHeader_text3_line);

                                                        if (logWindow_textHeader_text3) {

                                                                let logWindow_textHeader_text3_span1 = document.createElement('span');

                                                                logWindow_textHeader_text3.appendChild(logWindow_textHeader_text3_span1);

                                                                let logWindow_textHeader_text3_span2 = document.createElement('span');

                                                                logWindow_textHeader_text3.appendChild(logWindow_textHeader_text3_span2);

                                                                let logWindow_textHeader_text3_span3 = document.createElement('span');

                                                                logWindow_textHeader_text3.appendChild(logWindow_textHeader_text3_span3);

                                                                let logWindow_textHeader_text3_span4 = document.createElement('span');

                                                                logWindow_textHeader_text3.appendChild(logWindow_textHeader_text3_span4);

                                                                let logWindow_textHeader_text3_span5 = document.createElement('span');

                                                                logWindow_textHeader_text3.appendChild(logWindow_textHeader_text3_span5);

                                                                if (language == 'ru') {

                                                                        logWindow_textHeader_text3_span1.innerHTML = '• Исправлены некоторые ошибки в игровом табе'

                                                                        logWindow_textHeader_text3_span2.innerHTML = '• Стилизация окна поиска битвы в матчмейкинг, окна группы и раздела игровых настроек'

                                                                        logWindow_textHeader_text3_span3.innerHTML = '• Небольшая реструктуризация функции, связанной с заменой текстур в лобби'

                                                                        logWindow_textHeader_text3_span4.innerHTML = '• Исправление некоторых ошибок с анимациями в разделе "Друзья", "Клан" и др.'

                                                                        logWindow_textHeader_text3_span5.innerHTML = '• Добавление функции "фастпика" в режимы матчмейкинга в лобби'

                                                                } else {

                                                                        logWindow_textHeader_text3_span1.innerHTML = '• Fixed some bugs in the game tab'

                                                                        logWindow_textHeader_text3_span2.innerHTML = '• Stylized the battle search window in matchmaking, the group window and the game settings section'

                                                                        logWindow_textHeader_text3_span3.innerHTML = '• Minor restructuring of the function related to replacing textures in the lobby'

                                                                        logWindow_textHeader_text3_span4.innerHTML = '• Fixed some bugs with animations in the "Friends", "Clan" section, etc.'

                                                                        logWindow_textHeader_text3_span5.innerHTML = '• Added the "fastpick" function to matchmaking modes in the lobby'

                                                                };

                                                        };

                                                };

                                        };

                                });

                        };

                };

        };

        // проверка на соответствие массиву доменов + обсервер мутаций DOM

        function dynamicCheck() {

                // fetch API

                var originFetch = unsafeWindow.fetch

                var resources = [];

                unsafeWindow.fetch = async (url, options) => {

                        return originFetch(url, options).then(async (response) => {

                                // console.log(url.toLocaleString());

                                for (let resource of resources) {

                                        let createPreview = (url) => {

                                                let replacedURL = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                                                return new RegExp(replacedURL);

                                        };

                                        let preview = createPreview(resource.orig);

                                        if (preview.test(url)) {

                                                // console.log(`\n${url}\nreplaced to: ${resource.new}\n `);

                                                return new Promise((resolve, reject) => {

                                                        GM_xmlhttpRequest({ url: resource.new, responseType: "blob", method: "GET",

                                                                onload: response => {

                                                                        if (response.status == 200) {

                                                                                resolve(new Response(response.response, {

                                                                                        status: 200,
                                                                                        statusText: "OK",
                                                                                        headers: { "Content-Type": response.response.type }

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

                let evening = [

                        {
                                orig: "/601/166176/165/206/31167700267244/bg1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/bg1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/bl.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/bl.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/flr1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/flr1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/gar1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/gar1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/pl1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/pl1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/pl2.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/pl2.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/race1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/race1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/sky1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/evening/sky1.webp"
                        },

                ];

                let night = [

                        {
                                orig: "/601/166176/165/206/31167700267244/bg1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/bg1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/bl.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/bl.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/flr1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/flr1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/gar1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/gar1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/pl1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/pl1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/pl2.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/pl2.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/race1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/race1.webp"
                        },

                        {
                                orig: "/601/166176/165/206/31167700267244/sky1.webp",
                                new: "https://raw.githubusercontent.com/Indifferental/Obscurum/refs/heads/main/assets/garage/night/sky1.webp"
                        },

                ];

                if (localStorage.getItem('obscLocalStorageVariable-garageStyle') == 'evening') {

                        resources = evening

                };

                if (localStorage.getItem('obscLocalStorageVariable-garageStyle') == 'night') {

                        resources = night

                };

                const linksArray = [ 'tankionline.com/play/',
                                     'tankionline.com/play/?desktop=true',
                                     'test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}' ];

                linksArray.forEach((link) => {

                        if (window.location.href.includes(link) == true) {

                                styleSheet();

                                tabFunctionsArray();

                                applyBackground();

                                function mutationsObserver() {

                                        let Observer = new MutationObserver(function(inspect) { inspect.forEach(function(Mutation) { if (Mutation.addedNodes.length && Mutation.type === 'childList') { Mutation.addedNodes.forEach(function(element) {

                                        if (element.nodeType === 1 && element.classList.contains('Common-container')) {

                                                let nicknameHeader = document.querySelector('.UserInfoContainerStyle-userNameRank.UserInfoContainerStyle-textDecoration');

                                                if (nicknameHeader) {

                                                        var nickname = nicknameHeader.innerHTML

                                                        localStorage.setItem('obscLocalStorageVariable-nickname', nickname);

                                                };

                                                primaryNotification();

                                                lobbyClocks();

                                                battleFastPick();

                                                garageStyles();

                                                startScreen();

                                                developerDetails();

                                        };

                                        if (element.nodeType === 1 && element.classList.contains('ModalStyle-rootHover')) {

                                                createWindow();

                                        };

                                        // инициализация загрузчика игры

                                        if (element.nodeType === 1 && element.classList.contains('ApplicationLoaderComponentStyle-container') && element.classList.contains('Common-flexCenterAlignCenterColumn')) {

                                                applicationLoader();

                                        };

                                        // инициализация загрузчика в лобби

                                        if (element.nodeType === 1 && element.classList.contains('LobbyLoaderComponentStyle-container')) {

                                                lobbyLoader();

                                        };

                                        }); }}); });

                                        let Configuration = {

                                                subtree: true,

                                                childList: true

                                        };

                                        Observer.observe(document.body, Configuration);

                                };

                                mutationsObserver();

                                function startText() {

                                        let textbox = document.createElement('pre');
                                            textbox.className = 'obscDOMElement-startText'

                                        variableHeader.appendChild(textbox);

                                        let text = [

                                                `Obscurum ${version}\nInitialization complete`

                                        ];

                                        if (localStorage.getItem('obscLocalStorageVariable-nickname')) {

                                                if (language == 'ru') {

                                                        text = [

                                                                `Obscurum ${version}\nДобро пожаловать, ${localStorage.getItem('obscLocalStorageVariable-nickname')}`

                                                        ];

                                                } else {

                                                        text = [

                                                                `Obscurum ${version}\nWelcome, ${localStorage.getItem('obscLocalStorageVariable-nickname')}`

                                                        ];

                                                };

                                        };

                                        let line = 0

                                        let count = 0

                                        let result = ''

                                        function typeLine() {

                                                let interval = setTimeout(() => {

                                                        result += text[line][count];

                                                        textbox.innerHTML = result + '|'

                                                        count++

                                                        if (count >= text[line].length) {

                                                                count = 0

                                                                line++

                                                                if (line == text.length) {

                                                                        clearTimeout(interval);

                                                                        textbox.innerHTML = result

                                                                        setTimeout(function() {

                                                                                variableHeader.removeChild(textbox);

                                                                        }, 3500);

                                                                        return true

                                                                };

                                                        };

                                                typeLine();

                                                }, 75);

                                        };

                                        typeLine();

                                };

                                startText();

                        };

                });

        };

        dynamicCheck();

})();
