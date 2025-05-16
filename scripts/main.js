(function() {

        var version = 'v1.1.3'

        // изменение иконки на вкладке браузера

        var logo90 = 'data:image/png;base64,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'

        var logo512 = 'data:image/png;base64,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'

        var favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');

        favicon.forEach((element) => {

                element.setAttribute('href', logo90);

        });

        // создание глобального колонтитула для объектов темы в body

        var variableHeader = element('data', `Obscurum ${version}`, document.body);

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

        var globalProperties = [

                {
                        background: 'rgb(0 0 0 / 5%)',
                        background_hover: 'rgb(255 255 255 / 2.5%)',

                        outline: '2px solid rgb(255 255 255 / 2.5%)',
                        border_radius: '1.25em',
                        box_shadow: '0 0 1.5em 0 rgb(0 0 0 / 40%)',

                        backdrop_filter: 'blur(16px)',
                        least_backdrop_filter: 'blur(3px)',

                        color: '255 157 71',

                        transition: '.225s cubic-bezier(.25, .1, .25, 1)',
                        animation: 'blend .15s ease-in-out',
                }

        ];

        // применение стиля на все домены https://*.tankionline.com/*

        var globalKeyframes = [

                {
                        animation: `
                                    @keyframes blend {

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
                        animation: `
                                    @keyframes translateRight {

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
                        animation: `
                                    @keyframes translateLeft {

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
                        animation: `
                                    @keyframes translateUp {

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
                        animation: `
                                    @keyframes translateDown {

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
                        animation: `
                                    @keyframes rotate {

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
                        animation: `
                                    @keyframes windowDown {

                                            0% {
                                                    opacity: 0;
                                                    transform: translateY(-5em);
                                            }

                                            100% {
                                                    opacity: 1;
                                            }

                                    }
                        `
                },

                {
                        animation: `
                                    @keyframes windowUp {

                                            0% {
                                                    opacity: 1;
                                            }

                                            100% {
                                                    opacity: 0;
                                                    transform: translateY(-5em);
                                            }

                                    }
                        `
                },

        ];

        function styleSheet() {

                const elements = [

                    {
                            selector: '.obscDOMElement-startTextNode',
                            style: `
                                    background: var(--general-bg);
                                    backdrop-filter: blur(1em);
                                    border-bottom: var(--general-outline);
                                    border-right: var(--general-outline);
                                    border-left: var(--general-outline);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                                    box-shadow: var(--general-box-shadow);

                                    position: absolute;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: flex-end;
                                    align-items: center;
                                    top: 0em;
                                    width: max-content;
                                    height: 5em;
                                    padding-right: 2em;
                                    padding-left: 2em;
                                    z-index: 9999 !important;
                                    opacity: 0;

                                    animation: windowDown 1s ease-out 2s forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-startText',
                            style: `
                                    color: white;
                                    font-family: 'BaseFontRegular';
                                    text-shadow: 0 0 8px black;

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    margin: 0.2em;

                                    position: relative;
                            `
                    },

                    {
                            selector: '.obscDOMElement-startTextVersion',
                            style: `
                                    color: var(--general-color);
                                    font-family: 'BaseFontBold';

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    margin: 0.2em;
                                    margin-bottom: 0.65em;

                                    position: relative;
                            `
                    },

                    {
                            selector: '.obscDOMElement-startTextVersion:before',
                            style: `
                                    content: '';

                                    background-color: var(--general-color);

                                    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAHAElEQVR4nO2dW4hVVRjHf0fHmTQzM3N00uyqlaZpvkRRWKYPRXeQInpJsKSSbhYW+WBB9FDqQ0FRZkLQ9aFEsoQiumimZHSDSDG1LM1LOZY6c3YP3xw9M529z/rWbe+j/uCDYc5a+/v2f769Zq2111qnNHfBiiag48nZUzlGOJqADtPCpVIpYCjdGAOcCnwN/BHLqZYkSYzL9goYhw0DgOXAt8AKYDPwQK4R+SJJEmOLwHNAUsPuiuFci0q7ggn9K7WFPghMiRGAhkYV+nhqi1yxncCo0EFo0GhXpDa6tc7nJwHvAP0ixOKdIgl9ikGZMcCi0IGEoEhCn2NY7g7gtpCBhKBIQl+mKPs8BWuv69GoQvcHlgC9A8Xin4L0Os4GymT3OmrZ7JBB1aMRu3dPoBc5AdqRP1IuNJrQvYBfsBM6AT4Cok3CVNNoQt+EvcgVuz1UcFk0ktAlZIbOVeityMgyKo00MrwRGO/hOm3AHA/XCUeOGd0H+A73bK7YPmCE7yCzaJSMvhc43+P1+gJPebyeX3LK6FZgN/6yuWJlYKzPQLNohIxeBJwY4LolitpW55DR1+I/k6vtAHC6r2CzKHJGD0ReV4WkD0V8zxg5o18jbDZXrB0Y4iPgLIqa0bd0WQz6AbMi+TKipMlUh3Udw4H1wCDbC1iwBWmrO0M50GgXI6N7IXPHMUUG+eNeFdlnKjGEvh+4IoKfWuQy2VSL0E3HOOBLoEVb0RN/I4OjfwzKjgBmIk/CauCVevVUHYSAvY5mpF2O0cvIshsMYr0Q+KtHvc+pkyAq7QIKPd+DSD7sJYNYP0ype19WpSIIPQlZxpW3yAmwqU6sJyMramvV3UDGC+C8+9EtwGJkSXAROI3spQnXky7mGcA1PoIIIfQ8Is6gGXJxxmcz6tSd6SUCz03HRGRSJ+/moqelLSO7wKBuBzDMVTufGd0MLEUmdYrGRSm/f9igbm/gVucIPGb0HPLP3DTbXiPeCcjw3KT+WmftPAndCuwpgKBZ1r8q3iZgjaJuGRnIWAvtq+l4Gtl/UmRGVv08D+mCmlLCtffhIaPHYv4I5mmXdMU7Hbt1fsuctPMg9NsFENHEpiHz4fst6++jxyKdmEKPxy478rCVHmK9zlZo1zb6MXJaYGjBlbjHat1Ou0yTDgc2Upyhdgx+Q3b0JoDpIA5wG4LP4OgSGWSEONqmoq3QTdSfIzhS0WwBOYSt0FOQR+hoJKrQXqYOG5RLbSrZ/jPcSKRlVwVlCLA99D/DcRzdIoNMB6uwEdqqjTrCmKCtYJvRsdmWg88s1NtBbIT2sefElPXAZOD1iD5NMN23fhjlXEdvZKVm6HmJTuBxDr+t+SGCT43tVGunFLotwk3soXv3MYZPGxuk0U47hA6xHaKadmQ6c1XV784M7NOWNroy2wRtGz1QWV7DAWQX7aoevy/qCFT1RkkrdMiMnoscwdaTvgF9uqDSQiv0ccrypqwGnk357M9APl1RaaEVeo+yvClzkLcftdgSyKcr+zSFtULvUpY3YS3wScbn31DMrN6rKawVeoeyvAlL6nzeCbwfwK8r7arSyn50Cckun/3RswzCnOTZpw9rDflyNgHWKetksQv42aDcV8jhsEVhL/C7poLNXMcaizpp/KgoOwtluxiQDdoKNkK/a1Enjd2KspuQoyeKwPfaCjZCr0YOm/LBQWX5xcBCT75d+EJbwUboBHjDol4thlrUeRA5DDZP1ELbLgkbiZ+V/baDkRaky5dHb2MXXdO3sdbeveopcNvZuRbgvRyEXloJIJbQ5+Fni9udlkKDzDcsjyz0zbGFBnjGQ+ArHYQGyexlEQROkGbj0EHhMYUeQPq5/KZWRg7gdqGFOJm9oNppTKEBrsZ93fGLlgJX0xd5OkKJXAbOrXYYW2hwb0I6cM9qkMd6lWMsafZmT2d5CN0MfOZ4I//bI2LJUGTJmk+RO5HNn93IQ2iAwcBPjjc0XSlqGhOBfx1jqbaaU7l5CQ1yaPY2hxvaQcp2YAtmOcRRbbtJGcHmKTRI/9qlJ/Ix/rY5p53DobHUr4/KW2iQ7Qcup5z7+q6V0dhvd0uQYX7qBqMiCA2ywGStw036OmPUtke0mTrNWFGEBtkA+ZbljZapc9SOISPQT4DtxWBpbpGErnAP9r2A+S6Ou1iq8NeJnNRelyIKDbLcd53ihqttmqPvqYZ+yii+26WoQoNsm3sEeTQ1Qr/g6LeZ+geDl4G7NRctstAV2pAD/NJO5+ppC2peRUfWSb8Hsdg32QhCVxgFvEx2+10GLvfga3LK9Xcg+8TVNJLQFQYjPYxP6Z7l+/HT86jwEN371SuR49qs0GgX61hjDScgh60MRPrhvr+uehhyROZWZF2fNSrtAmfqMYBHF35Q+g8djpXIp1EIUAAAAABJRU5ErkJggg==);
                                    mask-position: center;
                                    mask-size: contain;
                                    mask-repeat: no-repeat;

                                    position: absolute;
                                    margin: 0 0 0 -9.5em;
                                    width: 1em;
                                    height: 1em;

                                    transition: var(--general-transition);
                            `
                    },


                    {
                            selector: '.obscGlobalVariable-svgNode',
                            style: `
                                    position: fixed;
                                    top: 0em;
                                    left: 0em;
                                    z-index: -1;
                                    pointer-events: inherit;
                                    opacity: 0;

                                    animation: translateDown 2s cubic-bezier(0.25, .5, .75, 1.25) 2s forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-svgGradient',
                            style: `
                                    background: linear-gradient(0deg, rgb(0 0 0 / 50%), transparent 40%);
                                    position: fixed;
                                    top: 0em;
                                    left: 0em;
                                    width: 100%;
                                    height: 100%;
                                    z-index: 1;
                                    pointer-events: inherit;
                                    opacity: 0;

                                    animation: translateDown 6s cubic-bezier(0.25, .5, .75, 1.25) 3s forwards;
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
                            selector: '.Common-entranceBackground > .Common-entranceGradient > .Common-flexStartAlignStartColumn',
                            style: `
                                    background-color: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.Common-entranceBackground > .Common-entranceGradient > .Common-flexStartAlignStartColumn > span',
                            style: `
                                    color: white;
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

                                    --general-color: rgb(${globalProperties[0].color});
                                    --least-general-color: rgb(${globalProperties[0].color} / 25%);

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

                                    transition: var(--general-transition);
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
                            selector: '.obscDOMElement-changelogWindow-img1',
                            style: `
                                    background-image: url(data:image/png;base64,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);
                                    background-position: center;
                                    background-size: contain;
                                    background-repeat: no-repeat;
                                    border-radius: var(--general-border-radius);

                                    justify-self: center;
                                    margin-top: 2em;
                                    width: 35em;
                                    height: 23em;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogWindow-header',
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
                            selector: '.obscDOMElement-changelogWindow-textHeader',
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
                            selector: `.obscDOMElement-changelogWindow-textHeader-h1`,
                            style: `
                                    color: rgb(255 255 255 / 35%);
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
                            selector: '.obscDOMElement-changelogWindow-textHeader-h1 > span',
                            style: `
                                    text-align: left;
                                    word-break: break-word;
                                    margin-bottom: 0.5em;
                                    font-family: 'BaseFontRegular';
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogWindow-textHeader-h1-line',
                            style: `
                                    background: rgb(255 255 255 / 10%);
                                    margin: 0.5em 0;
                                    width: 33em;
                                    height: 1px;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogDetails',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: absolute;
                                    top: 5.25em;
                                    right: 87em;
                                    justify-self: center;
                                    width: 25em;
                                    height: 9.5em;
                                    z-index: 1000;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogDetails-textHeader',
                            style: `
                                    display: flex;
                                    flex-direction: column;
                                    justify-self: center;
                                    width: 22em;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogDetails-textHeader-headerimg',
                            style: `
                                    background-color: var(--general-color);
                                    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfUlEQVR4nO2YO2uUQRSGHzWFtyhqF9CInZFYZAvjBWzV1oAiogii5AdEMNWiYhQb0X9gFQvFC6bWShBDjJdSEBSNWimRREEjI7OyHM63O7cv64fzwFQ7886c+WbOnHchk8lkMv8JXUAd6Kfi7AMWbHsODFNRbjQFYto1KshK4KsIZCcV5LAI4g2whApyTwRyfrEXUAMGIjXWA99FIH1txgzYuZPQA7wF5oAjETqnRRBTbfofBGaB98BGIlkFTDZN/gsYDdR6KAIZadF31M7V6PvUJoogzCUcF5ObdjFAy+zoT7EhvS36jynz3gKWhgSiid0OFDsjdMzXabeJN5X5z/lOfEwRmbJHLYRnQuuUw5gVwBMxznzJo66T7gbmhcCHiAu3VWj9ADZ4JJp3YvycyyO6GfioDBwknAtC767n+BrwTWjMAJuKBnTbIk5+ypiUa876a6F5KEBnSGQx014Ca2THZcB95V6YcjuGXUJvNuKe1ZX1PbBr/8tVpdN4gjroutA0lW/q5+BSo8MJ5cfJmAeoyUDNCF3jRWJYDjxW1nuyzED2C81PNrjSAinraEkDZY4ZJRyty2Ve9jIMVF1Z34S87I30+yJR+k1toIaU9PsKWFv2g5jSQNWUB/EzsKXdwD2RJco6xUBtCwyiRylRjPZeV4HjBUXj6hIMlE/RuNCcoVy54vKSKjzyMFC+ZfxYgNYf33HHU8zXQPl4oQmHTSzEHKXpopJAYcTTQBVxVmzItOOxbkmvLTXm7d1JbaCKOAB8cc1Qrgw6pOA+JbuYv4Bi2A7sYJGJNVD/BKkMVMdJaaA6SkoD1VGGhd+PNVAdp9+W27EGKpPJZDJUgt9qe2YKMc1BIgAAAABJRU5ErkJggg==);
                                    mask-position: center;
                                    mask-size: contain;
                                    mask-repeat: no-repeat;

                                    justify-self: center;
                                    margin-top: 1em;
                                    width: 2em;
                                    height: 2em;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogDetails-textHeader-span1',
                            style: `
                                    font-family: 'BaseFontMedium';
                                    margin-top: 0.5em;
                                    margin-bottom: 1em;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogDetails-textHeader-span2',
                            style: `
                                    color: rgb(255 255 255 / 75%);
                                    display: flex;
                                    align-items: center;
                                    margin-left: 1.5em;
                            `
                    },

                    {
                            selector: '.obscDOMElement-changelogDetails-textHeader-span2:before',
                            style: `
                                    content: '';

                                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVR4nO2ZXU8TQRSG653X3vsn/AfeS/w5XuoNibpTo1ETjZ0pajEaqo2QGIym9aMajHxoIhUVqQoREEiwLBQ/ltecHhp2a7uwsDPbkn2Tk+3OOXP2PDszu5NtIhErVqz9q7MKxy2FJ0LCFgowZhK2kChYCl27Ll5InDZatGpulkT3ru581IUL74gcCwRQmzZRF61co6CQDwqwEnXRwmuVQABtUDAaLQYQ8QigPafQ+evA4HNgYgr4+AWQ2eZx1P7pK8c8LHI/ESVAMg0UXgFrVeDtBNCfB54NA1PTwNIyt29s8JHOqZ38FPfmPbBaBfJDnCcSACqoYnMxc4sIJIofKwE/bc5jHKBvkAtZ/4U9aX2zP+UzClCeQagqzxgEUHehRTJrCODlmB6AF6OGAOaX9ADMLRoAuHyLH41NC1gAUn1sjU8lP19dlPdSr2aA3GO0VKZ/K653YOc+t3KPNAMUR9FSF25sxdHvnfrcKo5oBvhQRktlBnxGwMfnFm1HtALMLqClaG6nsvw4/G8N+Pjc+v5DMwBtHdxvUcfBnuQ43rc55dcKYK95CyhN8u4yKAjFU7/SpLed8msF6Ml5R4FE6+Lmfd5S066UpsFyBahu3lk60jm1k5/iKL5xPVVsIH3PwIvsYoYLcd/133+A4Xf+z3Ey8o+Mc3xdfx3OR3n9+oYGULerd4Cnr3k7vLIKTM9uv7cnP8VR/Odv3P/K7e2vpQXAtCViABWPAIxNIav9Pi0i2BqQKHT6CHQZLvCckKiGBlCDkOg2BWBJnDqjcMSSKIcGQKI/FujbvIE1MU7XS17DIaHwIDSAKATggKVwQig4HQlQVzKFo0JivmMBSELhsFAY6lgA0sk0DgqFVO0kVqxE6PoHNYpuWEoqBdMAAAAASUVORK5CYII=);
                                    background-position: center;
                                    background-size: contain;
                                    background-repeat: no-repeat;

                                    position: absolute;
                                    width: 1em;
                                    height: 1em;
                                    transform: translatex(-1.5em);
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
                                    margin-bottom: 1em;
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

                                    transition: var(--general-transition);
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
                                    height: 51.5em;
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
                            selector: `.FriendRequestComponentStyle-buttonAccept:hover,
                                       .FriendRequestComponentStyle-buttonDecline:hover`,
                            style: `
                                    background: rgb(255 255 255 / 5%);
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
                            selector: '.BattleOptionsComponentStyle-transformLinearGradientImgCard',
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-top-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.BattleOptionsComponentStyle-linearGradientImgCard',
                            style: `
                                    border-bottom-left-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
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
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable:hover',
                            style: `
                                    scrollbar-width: thin;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row',
                            style: `
                                    margin-bottom: unset;
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
                            selector: '.UsersTableStyle-points',
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-rangContainer',
                            style: `
                                    margin-right: 0.5em;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-commonContainer',
                            style: `
                                    width: 100%;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-commonContainer > div:nth-child(2)',
                            style: `
                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-commonContainer > div:nth-child(2) > div',
                            style: `
                                    display: flex;
                                    align-items: center;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-commonContainer > div:nth-child(2) > div > .Common-flexStartAlignCenter',
                            style: `
                                    max-width: 9.5em;
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
                            `
                    },

                    {
                            selector: '.UsersTableStyle-fontCell span:hover',
                            style: `
                                    color: var(--general-color) !important;
                            `
                    },

                    // блок ингейм таба

                    {
                            selector: '.BattleComponentStyle-canvasContainer > .Common-container',
                            style: `
                                    background: radial-gradient(ellipse at top, rgb(25 25 25),  black) !important;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-containerInsideTeams',
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
                                    margin-top: 0.5em;
                                    margin-bottom: 0.5em;
                                    scrollbar-color: transparent transparent;
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

                    {
                            selector: '.BattleTabStatisticComponentStyle-containerInsideResults',
                            style: `
                                    background: rgb(0 0 0 / 50%);
                                    outline: var(--general-outline);
                                    box-shadow: 0 0 4em 0 rgb(0 0 0 / 50%);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: blur(8px);

                                    width: 63em;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr',
                            style: `
                                    width: 61em;
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:first-child',
                            style: `
                                    max-width: 24em;
                                    width: 24em;
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
                                    background: rgb(0 0 0 / 30%) !important;
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
                            selector: '.BattlePauseMenuDialogComponentStyle-wrapper',
                            style: `
                                    transform: translateY(-50%) translateX(36.25%);
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
                                    border-radius: 0.75em;
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
                                    backdrop-filter: var(--general-backdrop-filter);

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
                                    backdrop-filter: var(--general-backdrop-filter);

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
                                    backdrop-filter: var(--general-backdrop-filter);

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

                                    animation: translateUp .2s ease-in-out !important;
                            `
                    },

                    {
                            selector: '.MatchmakingWaitComponentStyle-cancelButton',
                            style: `
                                    border: unset;
                                    border-left: var(--general-outline);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);

                                    margin-top: unset;
                                    height: 7em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MatchmakingWaitComponentStyle-cancelButton:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.MatchmakingWaitComponentStyle-cancelButton > span',
                            style: `
                                    color: var(--general-color) !important;
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
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .GarageProtectionsComponentStyle-blockParametersProtection > .Common-flexStartAlignStart',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    flex-direction: column;
                                    top: 16em;
                                    bottom: unset;
                                    padding: 1.25em 0 1.25em 2em;
                                    width: 23em;
                                    min-width: unset;
                                    height: 12em;
                                    z-index: 1;

                                    transition: var(--general-transition);
                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .GarageProtectionsComponentStyle-blockParametersProtection > .Common-flexStartAlignStart > .Common-flexStartAlignStartColumn',
                            style: `
                                    margin-top: 3.5em;
                                    width: max-content;
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .GarageProtectionsComponentStyle-blockParametersProtection > .Common-flexStartAlignStart > .Common-flexStartAlignCenter',
                            style: `
                                    margin-left: 1.25em;
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .GarageProtectionsComponentStyle-blockParametersProtection > .Common-flexStartAlignStart > .Common-flexStartAlignStartColumn:before',
                            style: `
                                    content: '';

                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow) !important;
                                    outline: var(--general-outline);
                                    border-radius: var(--general-border-radius) !important;

                                    position: absolute;
                                    width: 20em;
                                    height: 5em;
                                    z-index: -1;
                            `
                    },

                    {
                            selector: `.GarageProtectionsComponentStyle-containerEquipmentCannon,
                                       .GarageProtectionsComponentStyle-blockParameterEquip`,
                            style: `
                                    width: inherit;
                            `
                    },

                    {
                            selector: '.GarageProtectionsComponentStyle-blockParameterEquip > div:first-child > div > .GarageProtectionsComponentStyle-equipmentResistance',
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-bottom-left-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.GarageProtectionsComponentStyle-blockParameterEquip > div:last-child > div > .GarageProtectionsComponentStyle-equipmentResistance',
                            style: `
                                    border-top-right-radius: var(--general-border-radius);
                                    border-bottom-right-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.GarageProtectionsComponentStyle-blockParameterEquip > div > div > .GarageProtectionsComponentStyle-equipmentResistance',
                            style: `
                                    background: transparent;

                                    width: 5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.GarageProtectionsComponentStyle-resistanceIcon > .Common-boxShadowForButton',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: 0.25em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.GarageProtectionsComponentStyle-unequip > .Common-boxShadowForButton',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: 0.25em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.GarageProtectionsComponentStyle-unequip > span',
                            style: `
                                    color: var(--general-color) !important;
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

                    {
                            selector: '.PaintsCollectionComponentStyle-commonBlockFOrInfoAndCaptionCategory',
                            style: `
                                    margin-bottom: 1em;
                            `
                    },

                    {
                            selector: '.PaintsCollectionComponentStyle-commonBlockPaint',
                            style: `
                                    width: fit-content;
                            `
                    },

                    {
                            selector: '.PaintsCollectionComponentStyle-commonBlockPaint > .Common-flexCenterAlignCenter',
                            style: `
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 0.75em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    margin-left: 0.5em;
                                    margin-right: unset;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.PaintsCollectionComponentStyle-commonBlockPaint > .Common-flexCenterAlignCenter:hover',
                            style: `
                                    background: rgb(255 255 255 / 15%);
                            `
                    },

                    {
                            selector: '.PaintsCollectionComponentStyle-captionPaint > .Common-backgroundImageContain',
                            style: `
                                    background-image: unset;
                                    background-color: var(--general-color);
                                    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqklEQVR4nO3VSwrCMBhF4TtqFtEt2i7T2pFuRdq5EvgFJyENRLjF80Gg2OQQ7EsCAAAAAABnkSTNkm6S9hj5eIpzp2iMkh6SXoVxjznWjVRZ/B1Jzo35wOLPuBQ2YdFYGwJLYRMWja0hkOfaNraGwLPDJn7WWB1uC3VoTB0eVItGildabXGeMxQ24dLQWIkc/Zg5NDTEJVviwcvjGr8V/wHTBgAAAADg77wBWTZQCh5Pk9sAAAAASUVORK5CYII=);
                                    mask-position: center;
                                    mask-repeat: no-repeat;
                                    mask-size: 1.5em;
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
                            selector: '.NewShopCommonComponentStyle-commonContainer',
                            style: `
                                    background: radial-gradient(ellipse at top, rgb(25 25 25),  black) !important;
                            `
                    },

                    {
                            selector: '.TimeLeftComponentStyle-timeLeftContainer',
                            style: `
                                    visibility: hidden;
                            `
                    },

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

                const keyframes = globalKeyframes

                let cssStyles = document.createElement(`style`);

                    cssStyles.className = `obscStyleSheet-globalStyles`

                elements.forEach((element) => {

                        let css = `${element.selector} {${element.style}}\n`

                        cssStyles.textContent += css.split(`                            `).join(``);

                });

                variableHeader.appendChild(cssStyles);

                let cssKeyframes = document.createElement(`style`);

                    cssKeyframes.className = `obscStyleSheet-keyframesArray`

                keyframes.forEach((keyframe) => {

                        let frames = `${keyframe.animation}\n`

                        cssKeyframes.textContent += frames.split(`                                    `).join(``);

                });

                variableHeader.appendChild(cssKeyframes);

                // выборка тегов

                let hoverStyles = elements.filter((element) => element.tags === 'hover');

                hoverStyles.forEach((element) => {

                        let css = `${element.selector}:hover {background-color: var(--general-bg-hover);}\n`

                        cssStyles.textContent += css.split(`                            `).join(``);

                });

        };

        // стиль для сайта с рейтингами

        function ratingsPage() {

                const elements = [

                    {
                            selector: 'body',
                            style: `
                                    background: transparent;

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
                            `
                    },

                    {
                            selector: '.generic-box',
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
                            selector: '.parallax',
                            style: `
                                    background: radial-gradient(ellipse at top, rgb(25, 25, 25),  black);

                                    z-index: -2;
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
                                    position: fixed;
                                    top: 0em;
                                    left: 0em;
                                    z-index: -1;
                                    pointer-events: inherit;
                                    opacity: 0;

                                    animation: translateDown 2s cubic-bezier(0.25, .5, .75, 1.25) 2s forwards;
                            `
                    },

                    {
                            selector: '.obscDOMElement-svgGradient',
                            style: `
                                    background: linear-gradient(0deg, rgb(0 0 0 / 50%), transparent 40%);
                                    position: fixed;
                                    top: 0em;
                                    left: 0em;
                                    width: 100%;
                                    height: 100%;
                                    z-index: 1;
                                    pointer-events: inherit;
                                    opacity: 0;

                                    animation: translateDown 6s cubic-bezier(0.25, .5, .75, 1.25) 3s forwards;
                            `
                    },

                    {
                            selector: `.current-ratings__table td,
                                       .current-ratings__table th`,
                            style: `
                                    border: 1px solid rgb(255 255 255 / 5%);
                            `
                    },

                    {
                            selector: '.progress-bar',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);
                                    border: var(--general-outline) !important;
                                    border-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.generic-input',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);
                                    border: var(--general-outline) !important;
                                    border-radius: 0.5em;

                                    padding: 0 0.75em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.generic-selector__itself',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);
                                    border: var(--general-outline) !important;
                                    border-radius: 0.5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.generic-button',
                            style: `
                                    background: var(--general-bg);
                                    box-shadow: var(--general-box-shadow);
                                    border: var(--general-outline) !important;
                                    border-radius: 0.5em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: `.generic-input:focus,
                                       .generic-input:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.progress-bar__bar',
                            style: `
                                    background: var(--least-general-color);
                                    border-radius: var(--general-border-radius);
                            `
                    },

                    {
                            selector: '.generic-entry__spacer',
                            style: `
                                    border-bottom: 2px solid rgb(255 255 255 / 5%);
                            `
                    },

                    {
                            selector: '.stats-panel__gearscore-wrapper',
                            style: `
                                    flex: unset;
                                    margin-top: 2em;
                                    margin-right: 0.5rem;
                                    padding: unset;
                                    height: fit-content;
                                    width: fit-content;
                            `
                    },

                    {
                            selector: '.stats-panel__gearscore-wrapper > span',
                            style: `
                                    font-size: 1.5em;
                            `
                    },

                    {
                            selector: '.profile-entity-card',
                            style: `
                                    background: unset;
                                    outline: unset;
                                    box-shadow: unset;
                                    border-radius: unset;
                                    backdrop-filter: unset;
                            `
                    },

                    {
                            selector: '.slider__inner',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.user-profile .slider__slide-button-holder',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    margin: 0 -1em;
                                    height: 100%;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: '.leaderboards .slider__slide-button-holder',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: absolute;
                                    top: 6em;
                                    margin: 0 -1em;
                                    height: 12em;

                                    transition: var(--general-transition);
                            `,
                            tags: 'hover'
                    },

                    {
                            selector: `.user-profile .slider__slide-button-holder:before,
                                       .leaderboards .slider__slide-button-holder:before`,
                            style: `
                                    content: '';

                                    background-color: var(--least-general-color);
                                    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVR4nO2avWoCURBGz2LeSWLeQVJZmQgimJi4LNkuhY0siL0E7FPkWayzD2DKYGNKf1lQsInudHc+PDD9PXCZO3dm4Io+t0AOLIAXnHMHLIHdSbwjJLPzKlUF/v6ROUaKI2YXZI7xhhPykkJFJDigDqxLCm2BGAc0jFJ9HNACNmpSbaPUKw7oHA5bVspFRREbMl8h1cMBiaJUapR6xgEDo9QTDhgapbo4IFOUGhmkNofHOnjGRqlHAicCJgapokZ8wIHUh1GqiQOpqZpUBfg0SK2AewLnBvgySP0gJjQnYKSuXKSUFCKltB2pPaxjpdJnpFScZkrfh6GSzEDpC54qNUkSpTZWrCTTUWoFt5Wa9S2lcUpDaeBVVxtJ5mpD45naWL+qtnhRUFNajTkn5VbmdL3sG/gNvZy5QgDsAZ6fAHSa5TG4AAAAAElFTkSuQmCC);
                                    mask-position: center;
                                    mask-repeat: no-repeat;
                                    mask-size: contain;

                                    position: absolute;
                                    width: 2.5em;
                                    height: 2.5em;
                                    pointer-events: none;
                            `
                    },

                    {
                            selector: `.user-profile .slider__slide-button-holder_backward:before,
                                       .leaderboards .slider__slide-button-holder_backward:before`,
                            style: `
                                    transform: rotate(180deg);
                            `
                    },

                    {
                            selector: '.arrow-button',
                            style: `
                                    background: unset;

                                    height: 100%;
                            `
                    },

                    {
                            selector: '.navbar',
                            style: `
                                    background: unset;
                            `
                    },

                    {
                            selector: `.search-panel__label,
                                       .current-stats__title`,
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.search-panel__row',
                            style: `
                                    margin-left: unset;
                            `
                    },

                    {
                            selector: '.my-favorites__list',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    position: fixed;
                                    top: 0em;
                                    left: 64em;
                                    width: fit-content;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.site-logo',
                            style: `
                                    margin: 2rem 0;
                            `
                    },

                ];

                const keyframes = globalKeyframes

                let cssStyles = document.createElement(`style`);

                    cssStyles.className = `obscStyleSheet-globalStyles`

                    variableHeader.appendChild(cssStyles);

                elements.forEach((element) => {

                        let css = `${element.selector} {${element.style}}\n`

                        cssStyles.textContent += css

                });

                let cssKeyframes = document.createElement(`style`);

                    cssKeyframes.className = `obscStyleSheet-keyframesArray`

                    variableHeader.appendChild(cssKeyframes);

                keyframes.forEach((keyframe) => {

                        let frames = `${keyframe.animation}\n`

                        cssKeyframes.textContent += frames

                });

                // выборка тегов

                let hoverStyles = elements.filter((element) => element.tags === 'hover');

                hoverStyles.forEach((element) => {

                        let css = `${element.selector}:hover {background-color: var(--general-bg-hover);}\n`

                        cssStyles.textContent += css

                });

        };

        // функции для ингейм таба

        function tabFunctionsArray() {

                // цветные резисты

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

                        attributes: true,

                        subtree: true,

                        childList: true

                });

        };

        // функция фастпика в лобби

        function battleFastPick() {

                let mainHeader = document.getElementsByClassName('MainScreenComponentStyle-containerForMenuGradient')[0];

                if (mainHeader) {

                        let buttonsHeader = element('div', 'obscDOMElement-fastPick-buttonsHeader', mainHeader);

                        if (buttonsHeader) {

                                let button1 = element('div', 'obscDOMElement-fastPick-fastBattle', buttonsHeader);

                                if (button1) {

                                        let button1img = element('div', 'obscDOMElement-fastPick-fastBattle-img', button1);

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

                                let button2 = element('div', 'obscDOMElement-fastPick-tdm', buttonsHeader);

                                if (button2) {

                                        let button2img = element('div', 'obscDOMElement-fastPick-tdm-img', button2);

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

                                let button3 = element('div', 'obscDOMElement-fastPick-cp', buttonsHeader);

                                if (button3) {

                                        let button3img = element('div', 'obscDOMElement-fastPick-cp-img', button3);

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

                                let button4 = element('div', 'obscDOMElement-fastPick-ctf', buttonsHeader);

                                if (button4) {

                                        let button4img = element('div', 'obscDOMElement-fastPick-ctf-img', button4);

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

                                let button5 = element('div', 'obscDOMElement-fastPick-sge', buttonsHeader);

                                if (button5) {

                                        let button5img = element('div', 'obscDOMElement-fastPick-sge-img', button5);

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

                                let button6 = element('div', 'obscDOMElement-fastPick-tjr', buttonsHeader);

                                if (button6) {

                                        let button6img = element('div', 'obscDOMElement-fastPick-tjr-img', button6);

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

                                let button7 = element('div', 'obscDOMElement-fastPick-rgb', buttonsHeader);

                                if (button7) {

                                        let button7img = element('div', 'obscDOMElement-fastPick-rgb-img', button7);

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

                                let button8 = element('div', 'obscDOMElement-fastPick-asl', buttonsHeader);

                                if (button8) {

                                        let button8img = element('div', 'obscDOMElement-fastPick-asl-img', button8);

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

                        let buttonsHeader = element('div', 'obscDOMElement-buttonsHeader', mainHeader);

                        if (buttonsHeader) {

                                let pressCount = 0

                                let pressCount1 = localStorage.getItem('obscLocalStorageVariable-garageDefault-pressCount');

                                let pressCount2 = localStorage.getItem('obscLocalStorageVariable-garageEvening-pressCount');

                                let pressCount3 = localStorage.getItem('obscLocalStorageVariable-garageNight-pressCount');

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
                                                        selector: '.MainScreenComponentStyle-containerForMenuGradient > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay',
                                                        style: `
                                                                opacity: 0;
                                                        `
                                                },


                                                {
                                                        selector: '.PrimaryMenuItemComponentStyle-menuItemContainer',
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
                                                        selector: '.MainScreenComponentStyle-containerForMenuGradient > .FooterComponentStyle-footer > ul > li',
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

                                function reloadPage() {

                                        setTimeout(function() {

                                                window.location.reload();

                                        }, 500);

                                };

                                var visibility = element('div', 'obscDOMElement-garageVisibility', buttonsHeader);

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

                                var defaultButton = element('div', 'obscDOMElement-defaultButton', buttonsHeader);

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

                                var eveningButton = element('div', 'obscDOMElement-eveningButton', buttonsHeader);

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

                                var nightButton = element('div', 'obscDOMElement-nightButton', buttonsHeader);

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

                        let clockDays = element('div', 'obscDOMElement-clockDays', mainHeader);

                        let clockTime = element('div', 'obscDOMElement-clockTime', mainHeader);

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

        // начальный экран

        function startScreen() {

                let mainHeader = document.querySelector('.StartScreenComponentStyle-mainContainer');

                if (mainHeader) {

                        let mainHeaderimg = element('div', 'obscDOMElement-startScreen-logo', mainHeader);

                        let mainHeaderh1 = element('h1', 'obscDOMElement-startScreen-h1', mainHeader);

                            mainHeaderh1.innerHTML = 'Obscurum'

                        let mainHeaderh2 = element('h2', 'obscDOMElement-startScreen-h2', mainHeader);

                            mainHeaderh2.innerHTML = version

                };

        };

        // затемнение при модальном окне

        function createWindow() {

                let mainHeader = document.getElementsByClassName('ModalStyle-rootHover')[0];

                if (mainHeader) {

                        let window = element('div', 'ModalStyle-surfaceWindow', mainHeader);

                };

        };

        // загрузчик игры

        function applicationLoader() {

                let mainHeader = document.getElementsByClassName('ApplicationLoaderComponentStyle-container')[0];

                if (mainHeader) {

                        let innerGear = element('div', 'loadingAnimation-innerGear', mainHeader);

                        let innerRing = element('div', 'loadingAnimation-innerRing', mainHeader);

                        let outerRing = element('div', 'loadingAnimation-outerRing', innerRing);

                };

        };

        // загрузчик в лобби

        function lobbyLoader() {

                let mainHeader = document.getElementsByClassName('LobbyLoaderComponentStyle-container')[0];

                if (mainHeader) {

                        let innerGear = element('div', 'loadingAnimation-innerGear', mainHeader);

                        let innerRing = element('div', 'loadingAnimation-innerRing', mainHeader);

                        let outerRing = element('div', 'loadingAnimation-outerRing', innerRing);

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

                let gradient = element('div', 'obscDOMElement-svgGradient', variableHeader);

        };

        // чейнджлог в лобби

        function developerDetails() {

                let mainHeader = document.getElementsByClassName('MainScreenComponentStyle-containerForMenuGradient')[0];

                if (mainHeader) {

                        let holdingCard = element('div', 'obscDOMElement-holdingCard', mainHeader);

                        if (holdingCard) {

                                let img1 = element('div', 'obscDOMElement-holdingCard-img1', holdingCard);

                                let text1 = element('h1', 'obscDOMElement-holdingCard-text1', holdingCard);

                                    text1.innerHTML = `Obscurum ${version}`

                                let text2 = element('h1', 'obscDOMElement-holdingCard-text2', holdingCard);

                                if (language == 'RU') {

                                        text2.innerHTML = `// Список изменений`

                                } else {

                                        text2.innerHTML = `// Changelog`

                                };

                                holdingCard.addEventListener('click', function() {

                                        let windowBackground = element('div', 'obscDOMElement-changelogWindowBackground', document.body);

                                        if (windowBackground) {

                                                windowBackground.addEventListener('click', function() {

                                                        document.body.removeChild(windowBackground);

                                                        document.body.removeChild(logWindow);

                                                        document.body.removeChild(detailsWindow);

                                                });

                                        };

                                        let logWindow = element('div', 'obscDOMElement-changelogWindow', document.body);

                                        if (logWindow) {

                                                let logWindow_img1 = element('div', 'obscDOMElement-changelogWindow-img1', logWindow);

                                                let logWindow_header = element('div', 'obscDOMElement-changelogWindow-header', logWindow);

                                                    logWindow_header.innerHTML = `Obcsurum ${version}`

                                                let logWindow_textHeader = element('div', 'obscDOMElement-changelogWindow-textHeader', logWindow);

                                                if (logWindow_textHeader) {

                                                        // v1.1.3

                                                        let h1_113 = element('h1', 'obscDOMElement-changelogWindow-textHeader-h1 obsc_v1_1_3', logWindow_textHeader);

                                                            h1_113.innerHTML = 'v1.1.3'

                                                        if (h1_113) {

                                                                let h1_113_line = element('div', 'obscDOMElement-changelogWindow-textHeader-h1-line', h1_113);

                                                                let h1_113_span1 = element('span', 'h1-113-span1', h1_113);

                                                                let h1_113_span2 = element('span', 'h1-113-span2', h1_113);

                                                                let h1_113_span3 = element('span', 'h1-113-span3', h1_113);

                                                                if (language == 'RU') {

                                                                        h1_113_span1.innerHTML = '• Окно паузы перемещено в центр'

                                                                        h1_113_span2.innerHTML = '• Обновлена начальная плашка с текстом и ником'

                                                                        h1_113_span3.innerHTML = '• Некоторые визуальные доработки'

                                                                } else {

                                                                        h1_113_span1.innerHTML = '• Pause window moved to center'

                                                                        h1_113_span2.innerHTML = '• Updated start-window with text and nickname'

                                                                        h1_113_span3.innerHTML = '• Some visual improvements'

                                                                };

                                                        };

                                                        // v1.1.2

                                                        let h1_112 = element('h1', 'obscDOMElement-changelogWindow-textHeader-h1 obsc_v1_1_2', logWindow_textHeader);

                                                            h1_112.innerHTML = 'v1.1.2'

                                                        if (h1_112) {

                                                                let h1_112_line = element('div', 'obscDOMElement-changelogWindow-textHeader-h1-line', h1_112);

                                                                let h1_112_span1 = element('span', 'h1-112-span1', h1_112);

                                                                let h1_112_span2 = element('span', 'h1-112-span2', h1_112);

                                                                if (language == 'RU') {

                                                                        h1_112_span1.innerHTML = '• Фикс кнопок переключения между разделами на сайте рейтингов'

                                                                        h1_112_span2.innerHTML = '• Стилизация некоторых элементов'

                                                                } else {

                                                                        h1_112_span1.innerHTML = '• Fixed buttons for switching between sections on the site ratings'

                                                                        h1_112_span2.innerHTML = '• Stylization of some elements'

                                                                };

                                                        };

                                                        // v1.1.1

                                                        let h1_111 = element('h1', 'obscDOMElement-changelogWindow-textHeader-h1 obsc_v1_1_1', logWindow_textHeader);

                                                            h1_111.innerHTML = 'v1.1.1'

                                                        if (h1_111) {

                                                                let h1_111_line = element('div', 'obscDOMElement-changelogWindow-textHeader-h1-line', h1_111);

                                                                let h1_111_span1 = element('span', 'h1-111-span1', h1_111);

                                                                if (language == 'RU') {

                                                                        h1_111_span1.innerHTML = '• Полная стилизация сайта рейтингов (ratings.tankionline.com)'

                                                                } else {

                                                                        h1_111_span1.innerHTML = '• Full stylization of the ratings site (ratings.tankionline.com)'

                                                                };

                                                        };

                                                        // v1.1.0

                                                        let h1_110 = element('h1', 'obscDOMElement-changelogWindow-textHeader-h1 obsc_v1_1_0', logWindow_textHeader);

                                                            h1_110.innerHTML = 'v1.1.0'

                                                        if (h1_110) {

                                                                let h1_110_line = element('div', 'obscDOMElement-changelogWindow-textHeader-h1-line', h1_110);

                                                                let h1_110_span1 = element('span', 'h1-110-span1', h1_110);

                                                                let h1_110_span2 = element('span', 'h1-110-span2', h1_110);

                                                                let h1_110_span3 = element('span', 'h1-110-span3', h1_110);

                                                                if (language == 'RU') {

                                                                        h1_110_span1.innerHTML = '• Реструктуризация кода, связанного с созданием элементов DOM на странице'

                                                                        h1_110_span2.innerHTML = '• Небольшое ускорение анимаций и переходов'

                                                                        h1_110_span3.innerHTML = '• Косметические улучшения и изменения'

                                                                } else {

                                                                        h1_110_span1.innerHTML = '• Restructuring the code associated with creating DOM elements on the page'

                                                                        h1_110_span2.innerHTML = '• Minor speedup of animations and transitions'

                                                                        h1_110_span3.innerHTML = '• Cosmetic improvements and changes'

                                                                };

                                                        };

                                                        // v1.0.0

                                                        let h1_100 = element('h1', 'obscDOMElement-changelogWindow-textHeader-h1 obsc_v1_0_0', logWindow_textHeader);

                                                            h1_100.innerHTML = 'v1.0.0'

                                                        if (h1_100) {

                                                                let h1_100_line = element('div', 'obscDOMElement-changelogWindow-textHeader-h1-line', h1_100);

                                                                let h1_100_span1 = element('span', 'h1-100-span1', h1_100);

                                                                let h1_100_span2 = element('span', 'h1-100-span2', h1_100);

                                                                let h1_100_span3 = element('span', 'h1-100-span3', h1_100);

                                                                let h1_100_span4 = element('span', 'h1-100-span4', h1_100);

                                                                if (language == 'RU') {

                                                                        h1_100_span1.innerHTML = '• Введение списка изменений (чейнджлога) в лобби'

                                                                        h1_100_span2.innerHTML = '• Полная переделка раздела с результатами битвы'

                                                                        h1_100_span3.innerHTML = '• Добавление автоматического перевода текста в теме на английский'

                                                                        h1_100_span4.innerHTML = '• Начало разработки отдельного меню для темы. Планируется возможность накладывать фильтры на игру (контраст, сепия, затемнение, виньетка), менять акцентовый цвет на другие доступные, менять фон лобби (canvas снег/дождь, мультимедиа) и др.'

                                                                } else {

                                                                        h1_100_span1.innerHTML = '• Adding a changelog into the lobby'

                                                                        h1_100_span2.innerHTML = '• Complete rework of the battle results section'

                                                                        h1_100_span3.innerHTML = '• Adding automatic translation of text in the topic into English'

                                                                        h1_100_span4.innerHTML = '• Start of development of a menu for the theme. It is planned to be able to apply filters to the game (contrast, sepia, darkening, vignette), change the accent color to other available ones, change the lobby background (canvas snow/rain, multimedia), etc.'

                                                                };

                                                        };

                                                        // v0.9.2

                                                        let h1_092 = element('h1', 'obscDOMElement-changelogWindow-textHeader-h1 obsc_v0_9_2', logWindow_textHeader);

                                                            h1_092.innerHTML = 'v0.9.2'

                                                        if (h1_092) {

                                                                let h1_092_line = element('div', 'obscDOMElement-changelogWindow-textHeader-h1-line', h1_092);

                                                                let h1_092_span1 = element('span', 'h1-092-span1', h1_092);

                                                                let h1_092_span2 = element('span', 'h1-092-span2', h1_092);

                                                                let h1_092_span3 = element('span', 'h1-092-span3', h1_092);

                                                                let h1_092_span4 = element('span', 'h1-092-span4', h1_092);

                                                                if (language == 'RU') {

                                                                        h1_092_span1.innerHTML = '• Небольшой хотфикс таба в DM-матчах'

                                                                        h1_092_span2.innerHTML = '• Стилизация окна приглашения в битву/группу'

                                                                        h1_092_span3.innerHTML = '• Стилизация кнопок "Назад" и "Пригласить" в разделе приглашений'

                                                                        h1_092_span4.innerHTML = '• Фикс недоступных (красных) заданий в разделе миссий'

                                                                } else {

                                                                        h1_092_span1.innerHTML = '• Small hotfix of tab in DM matches'

                                                                        h1_092_span2.innerHTML = '• Stylization of the battle/group invitation window'

                                                                        h1_092_span3.innerHTML = '• Stylization of the "Back" and "Invite" buttons in the invitation section'

                                                                        h1_092_span4.innerHTML = '• Fix for unavailable (red) tasks in the missions section'

                                                                };


                                                        };

                                                        // v0.9.1

                                                        let h1_091 = element('h1', 'obscDOMElement-changelogWindow-textHeader-h1 obsc_v0_9_1', logWindow_textHeader);

                                                            h1_091.innerHTML = 'v0.9.1'

                                                        if (h1_091) {

                                                                let h1_091_line = element('div', 'obscDOMElement-changelogWindow-textHeader-h1-line', h1_091);

                                                                let h1_091_span1 = element('span', 'h1-091-span1', h1_091);

                                                                let h1_091_span2 = element('span', 'h1-091-span2', h1_091);

                                                                let h1_091_span3 = element('span', 'h1-091-span3', h1_091);

                                                                let h1_091_span4 = element('span', 'h1-091-span4', h1_091);

                                                                let h1_091_span5 = element('span', 'h1-091-span4', h1_091);

                                                                if (language == 'RU') {

                                                                        h1_091_span1.innerHTML = '• Исправлены некоторые ошибки в игровом табе'

                                                                        h1_091_span2.innerHTML = '• Стилизация окна поиска битвы в матчмейкинг, окна группы и раздела игровых настроек'

                                                                        h1_091_span3.innerHTML = '• Небольшая реструктуризация функции, связанной с заменой текстур в лобби'

                                                                        h1_091_span4.innerHTML = '• Исправление некоторых ошибок с анимациями в разделе "Друзья", "Клан" и др.'

                                                                        h1_091_span5.innerHTML = '• Добавление функции "фастпика" в режимы матчмейкинга в лобби'

                                                                } else {

                                                                        h1_091_span1.innerHTML = '• Fixed some bugs in the game tab'

                                                                        h1_091_span2.innerHTML = '• Stylized the battle search window in matchmaking, the group window and the game settings section'

                                                                        h1_091_span3.innerHTML = '• Minor restructuring of the function related to replacing textures in the lobby'

                                                                        h1_091_span4.innerHTML = '• Fixed some bugs with animations in the "Friends", "Clan" section, etc.'

                                                                        h1_091_span5.innerHTML = '• Added the "fastpick" function to matchmaking modes in the lobby'

                                                                };

                                                        };

                                                };

                                        };

                                        let detailsWindow = element('div', 'obscDOMElement-changelogDetails', document.body);

                                        if (windowBackground) {

                                                let detailsWindow_textHeader = element('div', 'obscDOMElement-changelogDetails-textHeader', detailsWindow);

                                                if (detailsWindow_textHeader) {

                                                        let headerimg = element('div', 'obscDOMElement-changelogDetails-textHeader-headerimg', detailsWindow_textHeader);

                                                        let text1 = element('span', 'obscDOMElement-changelogDetails-textHeader-span1', detailsWindow_textHeader);

                                                        if (language == 'RU') {

                                                                text1.innerHTML = 'С предложениями и замечаниями по теме писать:'

                                                        } else {

                                                                text1.innerHTML = 'With suggestions or comments about theme, write to:'

                                                        };

                                                        let text2 = element('span', 'obscDOMElement-changelogDetails-textHeader-span2', detailsWindow_textHeader);

                                                            text2.innerHTML = 'drawingwithblood'

                                                };
                                        };

                                });

                        };

                };

        };

        // текст в левом верхнем углу экрана

        function startText() {

                let textNode = element('div', 'obscDOMElement-startTextNode', document.body);

                let textBox = element('span', 'obscDOMElement-startText', textNode);

                    textBox.innerHTML = 'Initialization complete'

                let versionBox = element('span', 'obscDOMElement-startTextVersion', textNode);

                    versionBox.innerHTML = `Obscurum ${version}`

                if (localStorage.getItem('obscLocalStorageVariable-nickname')) {

                        if (language == 'RU') {

                                textBox.innerHTML = `Добро пожаловать, ${localStorage.getItem('obscLocalStorageVariable-nickname')}`

                        } else {

                                textBox.innerHTML = `Welcome, ${localStorage.getItem('obscLocalStorageVariable-nickname')}`

                        };

                };

                setTimeout(function() {

                        textNode.style = 'animation: windowUp 1s ease-in forwards;'

                }, 8000);

                setTimeout(function() {

                        document.body.removeChild(textNode);

                }, 16000);


        };

        // проверка на соответствие массиву доменов + обсервер мутаций DOM

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

                if (localStorage.getItem('obscLocalStorageVariable-garageStyle') == 'evening') {

                        resources = [

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

                };

                if (localStorage.getItem('obscLocalStorageVariable-garageStyle') == 'night') {

                        resources = [

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

                                applyBackground();

                                startText();

                                function mutationsObserver() {

                                        let Observer = new MutationObserver(function(inspect) {

                                                inspect.forEach(function(Mutation) {

                                                        if (Mutation.addedNodes.length && Mutation.type === 'childList') {

                                                                Mutation.addedNodes.forEach(function(element) {

                                                                        if (element.nodeType === 1 && element.classList.contains('Common-container')) {

                                                                                let nicknameHeader = document.querySelector('.UserInfoContainerStyle-userNameRank.UserInfoContainerStyle-textDecoration');

                                                                                if (nicknameHeader) {

                                                                                        var nickname = nicknameHeader.innerHTML

                                                                                        localStorage.setItem('obscLocalStorageVariable-nickname', nickname);

                                                                                };

                                                                                battleFastPick();

                                                                                garageStyles();

                                                                                primaryNotification();

                                                                                lobbyClocks();

                                                                                startScreen();

                                                                                developerDetails();

                                                                        };

                                                                        if (element.nodeType === 1 && element.classList.contains('ModalStyle-rootHover')) {

                                                                                createWindow();

                                                                        };

                                                                        if (element.nodeType === 1 && element.classList.contains('ApplicationLoaderComponentStyle-container') && element.classList.contains('Common-flexCenterAlignCenterColumn')) {

                                                                                applicationLoader();

                                                                        };

                                                                        if (element.nodeType === 1 && element.classList.contains('LobbyLoaderComponentStyle-container')) {

                                                                                lobbyLoader();

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

                                mutationsObserver();

                        };

                });

                let ratingsLinks = [

                        'ratings.tankionline.com'

                ];

                ratingsLinks.forEach((link) => {

                        if (window.location.href.includes(link) == true) {

                                ratingsPage();

                                applyBackground();

                        };

                });

        };

        dynamicCheck();

})();
