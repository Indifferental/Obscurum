(function() {

        var version = 'v0.9'

        // изменение иконки на вкладке браузера

        var logoSmall = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAHAElEQVR4nO2dW4hVVRjHf0fHmTQzM3N00uyqlaZpvkRRWKYPRXeQInpJsKSSbhYW+WBB9FDqQ0FRZkLQ9aFEsoQiumimZHSDSDG1LM1LOZY6c3YP3xw9M529z/rWbe+j/uCDYc5a+/v2f769Zq2111qnNHfBiiag48nZUzlGOJqADtPCpVIpYCjdGAOcCnwN/BHLqZYkSYzL9goYhw0DgOXAt8AKYDPwQK4R+SJJEmOLwHNAUsPuiuFci0q7ggn9K7WFPghMiRGAhkYV+nhqi1yxncCo0EFo0GhXpDa6tc7nJwHvAP0ixOKdIgl9ikGZMcCi0IGEoEhCn2NY7g7gtpCBhKBIQl+mKPs8BWuv69GoQvcHlgC9A8Xin4L0Os4GymT3OmrZ7JBB1aMRu3dPoBc5AdqRP1IuNJrQvYBfsBM6AT4Cok3CVNNoQt+EvcgVuz1UcFk0ktAlZIbOVeityMgyKo00MrwRGO/hOm3AHA/XCUeOGd0H+A73bK7YPmCE7yCzaJSMvhc43+P1+gJPebyeX3LK6FZgN/6yuWJlYKzPQLNohIxeBJwY4LolitpW55DR1+I/k6vtAHC6r2CzKHJGD0ReV4WkD0V8zxg5o18jbDZXrB0Y4iPgLIqa0bd0WQz6AbMi+TKipMlUh3Udw4H1wCDbC1iwBWmrO0M50GgXI6N7IXPHMUUG+eNeFdlnKjGEvh+4IoKfWuQy2VSL0E3HOOBLoEVb0RN/I4OjfwzKjgBmIk/CauCVevVUHYSAvY5mpF2O0cvIshsMYr0Q+KtHvc+pkyAq7QIKPd+DSD7sJYNYP0ype19WpSIIPQlZxpW3yAmwqU6sJyMramvV3UDGC+C8+9EtwGJkSXAROI3spQnXky7mGcA1PoIIIfQ8Is6gGXJxxmcz6tSd6SUCz03HRGRSJ+/moqelLSO7wKBuBzDMVTufGd0MLEUmdYrGRSm/f9igbm/gVucIPGb0HPLP3DTbXiPeCcjw3KT+WmftPAndCuwpgKBZ1r8q3iZgjaJuGRnIWAvtq+l4Gtl/UmRGVv08D+mCmlLCtffhIaPHYv4I5mmXdMU7Hbt1fsuctPMg9NsFENHEpiHz4fst6++jxyKdmEKPxy478rCVHmK9zlZo1zb6MXJaYGjBlbjHat1Ou0yTDgc2Upyhdgx+Q3b0JoDpIA5wG4LP4OgSGWSEONqmoq3QTdSfIzhS0WwBOYSt0FOQR+hoJKrQXqYOG5RLbSrZ/jPcSKRlVwVlCLA99D/DcRzdIoNMB6uwEdqqjTrCmKCtYJvRsdmWg88s1NtBbIT2sefElPXAZOD1iD5NMN23fhjlXEdvZKVm6HmJTuBxDr+t+SGCT43tVGunFLotwk3soXv3MYZPGxuk0U47hA6xHaKadmQ6c1XV784M7NOWNroy2wRtGz1QWV7DAWQX7aoevy/qCFT1RkkrdMiMnoscwdaTvgF9uqDSQiv0ccrypqwGnk357M9APl1RaaEVeo+yvClzkLcftdgSyKcr+zSFtULvUpY3YS3wScbn31DMrN6rKawVeoeyvAlL6nzeCbwfwK8r7arSyn50Cckun/3RswzCnOTZpw9rDflyNgHWKetksQv42aDcV8jhsEVhL/C7poLNXMcaizpp/KgoOwtluxiQDdoKNkK/a1Enjd2KspuQoyeKwPfaCjZCr0YOm/LBQWX5xcBCT75d+EJbwUboBHjDol4thlrUeRA5DDZP1ELbLgkbiZ+V/baDkRaky5dHb2MXXdO3sdbeveopcNvZuRbgvRyEXloJIJbQ5+Fni9udlkKDzDcsjyz0zbGFBnjGQ+ArHYQGyexlEQROkGbj0EHhMYUeQPq5/KZWRg7gdqGFOJm9oNppTKEBrsZ93fGLlgJX0xd5OkKJXAbOrXYYW2hwb0I6cM9qkMd6lWMsafZmT2d5CN0MfOZ4I//bI2LJUGTJmk+RO5HNn93IQ2iAwcBPjjc0XSlqGhOBfx1jqbaaU7l5CQ1yaPY2hxvaQcp2YAtmOcRRbbtJGcHmKTRI/9qlJ/Ix/rY5p53DobHUr4/KW2iQ7Qcup5z7+q6V0dhvd0uQYX7qBqMiCA2ywGStw036OmPUtke0mTrNWFGEBtkA+ZbljZapc9SOISPQT4DtxWBpbpGErnAP9r2A+S6Ou1iq8NeJnNRelyIKDbLcd53ihqttmqPvqYZ+yii+26WoQoNsm3sEeTQ1Qr/g6LeZ+geDl4G7NRctstAV2pAD/NJO5+ppC2peRUfWSb8Hsdg32QhCVxgFvEx2+10GLvfga3LK9Xcg+8TVNJLQFQYjPYxP6Z7l+/HT86jwEN371SuR49qs0GgX61hjDScgh60MRPrhvr+uehhyROZWZF2fNSrtAmfqMYBHF35Q+g8djpXIp1EIUAAAAABJRU5ErkJggg=='

        let favicon = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');

        favicon.forEach((element) => {

                element.setAttribute('href', logoSmall);

        });

        // создание глобального колонтитула для объектов темы в body

        var body = document.body || document.getElementsByTagName('body')[0];

        var variableHeader = document.createElement('data');
            variableHeader.className = `Obscurum ${version}`

        body.appendChild(variableHeader);

        // массив глобальных значений для функций

        var globalProperties = [

                {
                        background: 'rgb(0 0 0 / 5%)',
                        background_hover: 'rgb(255 255 255 / 2.5%)',

                        outline: '2px solid rgb(255 255 255 / 2.5%)',
                        border_radius: '1.25em',
                        box_shadow: '0 0 2em 0 rgb(0 0 0 / 65%)',

                        backdrop_filter: 'blur(16px)',
                        least_backdrop_filter: 'blur(6px)',

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
                            selector: '.obscGlobalVariable-startText',
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
                                    margin-top: 1.5em;
                                    font-family: 'BaseFontRegular';
                                    font-size: 1.7em;
                                    color: rgb(255 255 255 / 50%);
                            `
                    },

                    {
                            selector: '.obscDOMElement-clockTime',
                            style: `
                                    position: absolute;
                                    margin-bottom: 0.85em;
                                    font-family: 'BaseFontMedium';
                                    font-size: 2.25em;
                                    color: white;
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);

                                    position: absolute;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                    top: 48.5em;
                                    left: 2em;
                                    width: 28em;
                                    height: 10em;
                                    z-index: 20;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard > a',
                            style: `
                                    display: flex;
                                    align-items: center;
                                    margin: 0.35em 0.35em 0.35em 0;
                                    transform: translate(56px, 12px);
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard-text1',
                            style: `
                                    color: white;
                                    font-size: 1.5em;
                                    font-family: 'BaseFontMedium';
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard-text1:before',
                            style: `
                                        content: '';
                                        background-color: var(--general-color);

                                        mask-image: url(data:image/png;base64,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);
                                        mask-position: center;
                                        mask-size: contain;
                                        mask-repeat: no-repeat;

                                        position: absolute;
                                        width: 1em;
                                        height: 1em;
                                        transform: translatex(-40px);
                            `
                    },

                    {
                            selector: `.obscDOMElement-holdingCard-text2,
                                       .obscDOMElement-holdingCard-text3,
                                       .obscDOMElement-holdingCard-text4`,
                            style: `
                                    color: rgb(255 255 255 / 75%);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.obscDOMElement-holdingCard-text2:hover,
                                       .obscDOMElement-holdingCard-text3:hover,
                                       .obscDOMElement-holdingCard-text4:hover`,
                            style: `
                                    color: white;
                                    cursor: pointer;
                            `
                    },

                    {
                            selector: `.obscDOMElement-holdingCard-text2:before`,
                            style: `
                                    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjMuMDRDMCAxMi4xNzg4IDAgNi43NDgyNiAzLjM3NDEzIDMuMzc0MTNDNi43NDgyNiAwIDEyLjE3ODggMCAyMy4wNCAwSDI0Ljk2QzM1LjgyMTIgMCA0MS4yNTE3IDAgNDQuNjI1OSAzLjM3NDEzQzQ4IDYuNzQ4MjYgNDggMTIuMTc4OCA0OCAyMy4wNFYyNC45NkM0OCAzNS44MjEyIDQ4IDQxLjI1MTcgNDQuNjI1OSA0NC42MjU5QzQxLjI1MTcgNDggMzUuODIxMiA0OCAyNC45NiA0OEgyMy4wNEMxMi4xNzg4IDQ4IDYuNzQ4MjYgNDggMy4zNzQxMyA0NC42MjU5QzAgNDEuMjUxNyAwIDM1LjgyMTIgMCAyNC45NlYyMy4wNFoiIGZpbGw9IiMwMDc3RkYiLz4KPHBhdGggZD0iTTI1LjU0IDM0LjU4MDFDMTQuNiAzNC41ODAxIDguMzYwMSAyNy4wODAxIDguMTAwMSAxNC42MDAxSDEzLjU4MDFDMTMuNzYwMSAyMy43NjAxIDE3LjggMjcuNjQwMSAyMSAyOC40NDAxVjE0LjYwMDFIMjYuMTYwMlYyMi41MDAxQzI5LjMyMDIgMjIuMTYwMSAzMi42Mzk4IDE4LjU2MDEgMzMuNzU5OCAxNC42MDAxSDM4LjkxOTlDMzguMDU5OSAxOS40ODAxIDM0LjQ1OTkgMjMuMDgwMSAzMS44OTk5IDI0LjU2MDFDMzQuNDU5OSAyNS43NjAxIDM4LjU2MDEgMjguOTAwMSA0MC4xMjAxIDM0LjU4MDFIMzQuNDM5OUMzMy4yMTk5IDMwLjc4MDEgMzAuMTgwMiAyNy44NDAxIDI2LjE2MDIgMjcuNDQwMVYzNC41ODAxSDI1LjU0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==);
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard-text3:before',
                            style: `
                                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwLDAsMjU2LDI1NiIgd2lkdGg9IjYwcHgiIGhlaWdodD0iNjBweCIgZmlsbC1ydWxlPSJub256ZXJvIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAuNzIsLTMwLjcyKSBzY2FsZSgxLjI0LDEuMjQpIj48ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDguNTMzMzMsOC41MzMzMykiPjxwYXRoIGQ9Ik0xNSwzYy02LjYyNywwIC0xMiw1LjM3MyAtMTIsMTJjMCw1LjYyMyAzLjg3MiwxMC4zMjggOS4wOTIsMTEuNjNjLTAuMDU2LC0wLjE2MiAtMC4wOTIsLTAuMzUgLTAuMDkyLC0wLjU4M3YtMi4wNTFjLTAuNDg3LDAgLTEuMzAzLDAgLTEuNTA4LDBjLTAuODIxLDAgLTEuNTUxLC0wLjM1MyAtMS45MDUsLTEuMDA5Yy0wLjM5MywtMC43MjkgLTAuNDYxLC0xLjg0NCAtMS40MzUsLTIuNTI2Yy0wLjI4OSwtMC4yMjcgLTAuMDY5LC0wLjQ4NiAwLjI2NCwtMC40NTFjMC42MTUsMC4xNzQgMS4xMjUsMC41OTYgMS42MDUsMS4yMjJjMC40NzgsMC42MjcgMC43MDMsMC43NjkgMS41OTYsMC43NjljMC40MzMsMCAxLjA4MSwtMC4wMjUgMS42OTEsLTAuMTIxYzAuMzI4LC0wLjgzMyAwLjg5NSwtMS42IDEuNTg4LC0xLjk2MmMtMy45OTYsLTAuNDExIC01LjkwMywtMi4zOTkgLTUuOTAzLC01LjA5OGMwLC0xLjE2MiAwLjQ5NSwtMi4yODYgMS4zMzYsLTMuMjMzYy0wLjI3NiwtMC45NCAtMC42MjMsLTIuODU3IDAuMTA2LC0zLjU4N2MxLjc5OCwwIDIuODg1LDEuMTY2IDMuMTQ2LDEuNDgxYzAuODk2LC0wLjMwNyAxLjg4LC0wLjQ4MSAyLjkxNCwtMC40ODFjMS4wMzYsMCAyLjAyNCwwLjE3NCAyLjkyMiwwLjQ4M2MwLjI1OCwtMC4zMTMgMS4zNDYsLTEuNDgzIDMuMTQ4LC0xLjQ4M2MwLjczMiwwLjczMSAwLjM4MSwyLjY1NiAwLjEwMiwzLjU5NGMwLjgzNiwwLjk0NSAxLjMyOCwyLjA2NiAxLjMyOCwzLjIyNmMwLDIuNjk3IC0xLjkwNCw0LjY4NCAtNS44OTQsNS4wOTdjMS4wOTgsMC41NzMgMS44OTksMi4xODMgMS44OTksMy4zOTZ2Mi43MzRjMCwwLjEwNCAtMC4wMjMsMC4xNzkgLTAuMDM1LDAuMjY4YzQuNjc2LC0xLjYzOSA4LjAzNSwtNi4wNzkgOC4wMzUsLTExLjMxNWMwLC02LjYyNyAtNS4zNzMsLTEyIC0xMiwtMTJ6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+);
                            `
                    },

                    {
                            selector: '.obscDOMElement-holdingCard-text4:before',
                            style: `
                                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwLDAsMjU2LDI1NiIgd2lkdGg9IjYwcHgiIGhlaWdodD0iNjBweCIgZmlsbC1ydWxlPSJub256ZXJvIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEuNTIsLTExLjUyKSBzY2FsZSgxLjA5LDEuMDkpIj48ZyBmaWxsPSIjOGM5ZWZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDUuMzMzMzMsNS4zMzMzMykiPjxwYXRoIGQ9Ik00MCwxMmMwLDAgLTQuNTg1LC0zLjU4OCAtMTAsLTRsLTAuNDg4LDAuOTc2YzQuODk2LDEuMTk4IDcuMTQyLDIuOTE1IDkuNDg4LDUuMDI0Yy00LjA0NSwtMi4wNjUgLTguMDM5LC00IC0xNSwtNGMtNi45NjEsMCAtMTAuOTU1LDEuOTM1IC0xNSw0YzIuMzQ2LC0yLjEwOSA1LjAxOCwtNC4wMTUgOS40ODgsLTUuMDI0bC0wLjQ4OCwtMC45NzZjLTUuNjgxLDAuNTM3IC0xMCw0IC0xMCw0YzAsMCAtNS4xMjEsNy40MjUgLTYsMjJjNS4xNjIsNS45NTMgMTMsNiAxMyw2bDEuNjM5LC0yLjE4NWMtMi43ODIsLTAuOTY3IC01LjkyNCwtMi42OTQgLTguNjM5LC01LjgxNWMzLjIzOCwyLjQ1IDguMTI1LDUgMTYsNWM3Ljg3NSwwIDEyLjc2MiwtMi41NSAxNiwtNWMtMi43MTUsMy4xMjEgLTUuODU3LDQuODQ4IC04LjYzOSw1LjgxNWwxLjYzOSwyLjE4NWMwLDAgNy44MzgsLTAuMDQ3IDEzLC02Yy0wLjg3OSwtMTQuNTc1IC02LC0yMiAtNiwtMjJ6TTE3LjUsMzBjLTEuOTMzLDAgLTMuNSwtMS43OTEgLTMuNSwtNGMwLC0yLjIwOSAxLjU2NywtNCAzLjUsLTRjMS45MzMsMCAzLjUsMS43OTEgMy41LDRjMCwyLjIwOSAtMS41NjcsNCAtMy41LDR6TTMwLjUsMzBjLTEuOTMzLDAgLTMuNSwtMS43OTEgLTMuNSwtNGMwLC0yLjIwOSAxLjU2NywtNCAzLjUsLTRjMS45MzMsMCAzLjUsMS43OTEgMy41LDRjMCwyLjIwOSAtMS41NjcsNCAtMy41LDR6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+);
                            `
                    },

                    {
                            selector: `.obscDOMElement-holdingCard-text2:before,
                                       .obscDOMElement-holdingCard-text3:before,
                                       .obscDOMElement-holdingCard-text4:before`,
                            style: `
                                    content: '';
                                    background-position: center;
                                    background-size: contain;
                                    background-repeat: no-repeat;

                                    position: absolute;
                                    width: 1em;
                                    height: 1em;
                                    transform: translatex(-36px);
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


                    // блок загрузки игры

                    {
                            selector: '.ApplicationLoaderComponentStyle-logo, .ApplicationLoaderComponentStyle-loader, .ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn > div:nth-child(1)',
                            style: `
                                    visibility: hidden
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
                            selector: '.Common-container, .Common-entranceBackground, .Common-entranceGradient, .Common-background',
                            style: `
                                    background: transparent;
                            `
                    },

                    {
                            selector: '.Common-buttonQE',
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
                            selector: '.Common-buttonQE:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.Common-buttonQE span',
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
                                    outline: var(--general-outline);
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
                                    backdrop-filter: var(--general-backdrop-filter);

                                    margin-bottom: 0.35em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.ChatComponentStyle-messageRow:hover',
                            style: `
                                    background: var(--general-bg-hover);
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

                    // блок основных кнопок меню

                    {
                            selector: '.MainScreenComponentStyle-gradientBlock',
                            style: `
                                    background: radial-gradient(transparent 35%, black);

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
                            `
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-menuItemContainer:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-menuItemContainer > div',
                            style: `
                                    background-color: var(--general-color) !important;
                            `
                    },

                    {
                            selector: '.PrimaryMenuItemComponentStyle-discountNotification',
                            style: `
                                    background-color: var(--least-general-color);
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
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rootTitle > div:hover',
                            style: `
                                    background-color: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexCenterAlignCenterColumn:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexCenterAlignCenter:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-containerPanel > .UserScoreComponentStyle-blockRightPanel > div:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable:hover,
                                       .MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-containerProgressMainScreen:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: '.MainScreenComponentStyle-container:before',
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
                                    height: 78%;
                                    z-index: 1;
                                    pointer-events: none;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container:after',
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
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-rightButtonsContainer > div:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-backButton:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexCenterAlignCenter:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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

                    // блок кнопки "Играть"

                    {
                            selector: '.MainScreenComponentStyle-container > .Common-displayFlex',
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
                            selector: '.MainScreenComponentStyle-container > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: unset;

                                    width: inherit;
                                    height: inherit;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .Common-displayFlex > .MainScreenComponentStyle-buttonPlay > span',
                            style: `
                                    color: var(--general-color) !important;
                                    text-shadow: 0 0 1.5em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .MainScreenComponentStyle-blockMainMenu',
                            style: `
                                    position: absolute;
                                    margin: unset;
                                    top: 20em;
                                    left: 2em;
                                    width: 28em;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .MainScreenComponentStyle-blockMainMenu > ul',
                            style: `
                                    width: inherit;
                                    height: inherit;
                            `
                    },

                    {
                            selector: `.Common-container > .ProBattlesComponentStyle-navigationBlock,
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
                            selector: '.MainScreenComponentStyle-container > .FooterComponentStyle-footer',
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
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .FooterComponentStyle-footer > ul',
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
                            selector: '.MainScreenComponentStyle-container > .FooterComponentStyle-footer > ul > li',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;

                                    margin-right: 1em;
                                    width: 6.25em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .FooterComponentStyle-footer > ul > li:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .FooterComponentStyle-footer > ul > li > div',
                            style: `
                                    background-color: var(--general-color) !important;
                            `
                    },

                    {
                            selector: '.MainScreenComponentStyle-container > .FooterComponentStyle-footer > .FooterComponentStyle-musicLink',
                            style: `
                                    visibility: hidden;
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

                                    top: 8em;
                                    right: 2em;
                                    margin: unset;
                                    width: 28em;
                                    height: 10em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattlePassLobbyComponentStyle-menuBattlePass:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.BattlePassLobbyComponentStyle-blockBattlePass',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: 1em;
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
                            `
                    },

                    {
                            selector: '.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                                    background: rgb(0 0 0 / 25%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 0.75em;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    color: white;
                                    text-shadow: 0 0 5px black;

                                    margin-top: 0.5em;
                                    padding: 0.25em 0.5em;
                            `
                    },

                    {
                            selector: '.AnnouncementHomeScreenComponentStyle-headerTimer',
                            style: `
                                    background: rgb(0 0 0 / 25%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 0.75em 0.5em 0.5em 0.5em;
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
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-blockList:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: `.FriendRequestComponentStyle-blockInformationCommunityNoSearch,
                                       .FriendRequestComponentStyle-blockInformationCommunity`,
                            style: `
                                    margin-left: unset;

                                    animation: var(--general-animation);
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
                            `
                    },

                    {
                            selector: '.FriendListComponentStyle-buttonAddFriends:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.FriendRequestComponentStyle-buttonDeclineAll:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: `.FriendRequestComponentStyle-buttonAccept:hover,
                                       .FriendRequestComponentStyle-buttonDecline:hover`,
                            style: `
                                    background: rgb(255 255 255 / 5%);
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
                            selector: '.nickNameClass:hover > div > div > span',
                            style: `
                                    color: var(--general-color) !important;
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
                            `
                    },

                    {
                            selector: '.ClanStatisticsComponentStyle-areCommon:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: `.ClanInfoComponentStyle-buttonEditProfile:hover,
                                       .ClanCommonStyle-buttonInvite:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: `.TableComponentStyle-row:hover,
                                       .ClanCommonStyle-row:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.ClanCommonStyle-rowEmpty',
                            style: `
                                    opacity: 0;
                            `
                    },

                    {
                            selector: '.TableComponentStyle-table > thead > tr > th',
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
                            selector: '.TableComponentStyle-table > thead > tr > th:hover',
                            style: `
                                    background: var(--general-bg-hover);

                                    cursor: pointer;
                            `
                    },

                    {
                            selector: '.TableComponentStyle-table > thead > tr > th > h2',
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
                            selector: '.SearchInputComponentStyle-searchInput',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    backdrop-filter: var(--least-backdrop-filter);
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SearchInputComponentStyle-searchInput > input',
                            style: `
                                    box-shadow: unset !important;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SearchInputComponentStyle-searchInput > input:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 1em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-keyButton:hover',
                            style: `
                                    background: rgb(255 255 255 / 12.5%);
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-enterButton',
                            style: `
                                    background: var(--least-general-color);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 1em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-enterButton:hover',
                            style: `
                                    background: var(--general-color);
                                    box-shadow: var(--general-box-shadow);
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-enterButton > span',
                            style: `
                                    color: white;
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
                            selector: `.Common-flexCenterAlignCenter > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin:hover,
                                       .Common-flexCenterAlignCenterColumn > .Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                                    justify-content: center;
                                    margin: unset;
                                    width: 50%;
                                    height: 100%;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-battlesContainer > .ProBattlesComponentStyle-table > .TableComponentStyle-tBody > .Common-flexStartAlignCenter:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: '.ProBattlesComponentStyle-chatBlock',
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
                            selector: '.ProBattlesComponentStyle-chatBlock:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-chatBlock > h3',
                            style: `
                                    visibility: hidden;
                                    position: absolute;
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-chatIcon',
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
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-commonBlockHotkeyV:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.ProBattlesComponentStyle-createBattleButton:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            `
                    },

                    {
                            selector: '.BattleModesComponentStyle-button:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn > .UsersTableStyle-row',
                            style: `
                                    width: inherit;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn > .UsersTableStyle-rowBattle',
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
                            selector: `.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn > .UsersTableStyle-row > .UsersTableStyle-rowBattle,
                                       .UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn > .UsersTableStyle-row > .UsersTableStyle-rowBattleEmpty`,
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
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn > .UsersTableStyle-row > .UsersTableStyle-rowBattle:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn > .UsersTableStyle-row > .UsersTableStyle-rowBattle > .UsersTableStyle-commonContainer',
                            style: `
                                    width: 100%;
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn:first-child > .UsersTableStyle-row > td:first-child',
                            style: `
                                    border-top-left-radius: var(--general-border-radius);
                                    border-top-right-radius: 0.65em;
                                    border-top: var(--general-outline);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn:first-child > .UsersTableStyle-row > td:last-child',
                            style: `
                                    border-top-left-radius: 0.65em;
                                    border-top-right-radius: var(--general-border-radius);
                                    border-top: var(--general-outline);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn:last-child > .UsersTableStyle-row > td:first-child',
                            style: `
                                    border-bottom-left-radius: var(--general-border-radius);
                                    border-bottom-right-radius: 0.65em;
                                    border-bottom: var(--general-outline);
                            `
                    },

                    {
                            selector: '.UsersTableStyle-containerBattleListCommands > .UsersTableStyle-scrollCommandTable > .Common-flexStartAlignStartColumn:last-child > .UsersTableStyle-row > td:last-child',
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
                                    color: var(--general-color);
                            `
                    },

                    // блок ингейм таба

                    {
                            selector: '.BattleComponentStyle-canvasContainer > .Common-container',
                            style: `
                                    background: radial-gradient(ellipse at top, rgb(25 25 25),  black);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-containerInsideTeams',
                            style: `
                                    background: linear-gradient(135deg, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url(data:image/webp;base64,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);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                                    animation: blend .2s ease-in-out;
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
                                    background: rgb(255 255 255 / 3.75%);
                                    outline: 2px solid rgb(255 255 255 / 3.75%);
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
                            selector: `.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+6),
                                       .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+7),
                                       .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+6),
                                       .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+7)`,
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
                            selector: `.BattleTabStatisticComponentStyle-containerInsideTeams:hover > .BattleTabStatisticComponentStyle-pinResistances,
                                       .BattleTabStatisticComponentStyle-containerInsideTeams:hover > .BattleTabStatisticComponentStyle-showResistances`,
                            style: `
                                    opacity: 1;
                            `
                    },

                    // блок ингейм дисплея с кнопками

                    {
                            selector: `.BattleHudComponentStyle-fullScreenButton,
                                       .BattleHudComponentStyle-pauseButton,
                                       .BattleHudComponentStyle-tabButton`,
                            style: `
                                    background: rgb(0 0 0 / 30%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 0.75em !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    width: 6em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: `.BattleHudComponentStyle-fullScreenButton:hover,
                                       .BattleHudComponentStyle-pauseButton:hover,
                                       .BattleHudComponentStyle-tabButton:hover`,
                            style: `
                                    background: rgb(255 255 255 / 1.5%);
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
                                    background: rgb(0 0 0 / 30%) !important;
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
                                    background: rgb(0 0 0 / 30%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border: unset;
                                    border-radius: var(--general-border-radius);
                                    backdrop-filter: var(--least-backdrop-filter);

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
                                    filter: blur(4px);

                                    transition: var(--general-transition) !important;
                            `
                    },

                    {
                            selector: '.ScrollingCardsComponentStyle-scrollCard:hover > .Common-backgroundImageCover',
                            style: `
                                    transform: scale(1.1, 1.1);
                                    filter: unset;
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
                            selector: `.ScrollingCardsComponentStyle-selectCard,
                                       .ScrollingCardsComponentStyle-cardCount`,
                            style: `
                                    visibility: hidden;
                                    position: absolute;
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
                                    filter: blur(3px);

                                    transition: var(--general-transition) !important;
                            `
                    },

                    {
                            selector: '.BattlePickComponentStyle-commonStyleBlock:hover > .Common-backgroundImage',
                            style: `
                                    transform: scale(1.1, 1.1);
                                    filter: unset;
                            `
                    },

                    // блок стилизации гаража

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
                            selector: `.MountedItemsStyle-commonBlockDrone:hover,
                                       .MountedItemsStyle-commonBlockGrenades:hover,
                                       .MountedItemsStyle-commonBlockForTurretsHulls:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                                    height: 50.5%;
                                    z-index: 1;

                                    transition: var(--general-transition);
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
                                    padding: 1.25em 0;
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
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice:hover,
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > .ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice:hover`,
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations:nth-child(1)`,
                            style: `
                                    position: absolute;
                                    visibility: hidden;
                            `
                    },

                    {
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations:nth-child(2) > .Common-flexCenterAlignCenter,
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations:nth-child(2) > div > .SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter`,
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
                            selector: `.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations:nth-child(2) > .Common-flexCenterAlignCenter:hover,
                                       .TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-descriptionContainer > .GarageCommonStyle-animatedBlurredLeftBlock > div:nth-child(2) > .DeviceButtonComponentStyle-blockAlterations:nth-child(2) > div > .SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter:hover`,
                            style: `
                                    background: var(--general-bg-hover);
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
                            selector: '.TanksPartComponentStyle-commonBlockDescriptionDevices',
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
                            `
                    },

                    {
                            selector: '.GarageTurretsAlterationsComponentStyle-mountStandardButton > .SquarePriceButtonComponentStyle-commonBlockButton:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                                    border-radius: 0.5em;
                                    width: 5.5em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > .MountedItemsStyle-resistanceContainer > .MountedItemsStyle-commonForCellResistenceName:hover',
                            style: `
                                    background: var(--general-hover-bg);
                            `
                    },

                    {
                            selector: '.GarageMainScreenStyle-blockParameters > div > .Common-flexStartAlignStartColumn > div > .MountedItemsStyle-resistanceContainer > .MountedItemsStyle-commonForCellResistenceName > .CellResistanceComponentStyle-resistanceIconContainer',
                            style: `
                                    width: inherit;
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
                                    height: 100% !important;
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
                                    background: transparent;
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsWrapper',
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
                            selector: '.ListItemsComponentStyle-itemsWrapper > .Common-flexCenterAlignCenter',
                            style: `
                                    background: transparent;
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsContainer',
                            style: `
                                    padding: 1.25em;
                            `
                    },

                    {
                            selector: '.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn',
                            style: `
                                    margin-right: 1.25em;
                            `
                    },

                    {
                            selector: '.Common-itemStyle',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.Common-itemStyle:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
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
                            selector: '.SuppliesComponentStyle-decorLine',
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
                                    width: calc(100% - 3em);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd',
                            style: `
                                    background: var(--general-bg);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius);

                                    margin-right: 1.5em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cellAdd:hover',
                            style: `
                                    background: var(--general-bg-hover);
                            `
                    },

                    {
                            selector: '.SuppliesComponentStyle-cell',
                            style: `
                                    width: 1.5em;
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

                ];

                var cssStyles = document.createElement(`style`);
                    cssStyles.className = `obscGlobalVariable-stylesSheet`

                elements.forEach((element) => {

                        let css = `${element.selector} {${element.style}}\n`

                        cssStyles.textContent += css.split(`                `).join(``);

                });

                variableHeader.appendChild(cssStyles);

                var cssKeyframes = document.createElement(`style`);
                    cssKeyframes.className = `obscGlobalVariable-keyframesArray`

                keyframes.forEach((keyframe) => {

                        let frames = `${keyframe.animations}\n`

                        cssKeyframes.textContent += frames.split(`                `).join(``);

                });

                variableHeader.appendChild(cssKeyframes);

        };

        // функции для ингейм таба

        function resistancesArray() {

                function color() {

                        var tankResistances = [{

                                  oldPicture: "https://tankionline.com/play/static/images/crit_resistance.7fb68893.svg",
                                  picture: "https://tankionline.com/play/static/images/resistances/crit_resistance.3f4d1cc2.svg"

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/firebird_resistance.785a9d6b.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/firebird_resistance.00ac2221.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/freeze_resistance.33bdf642.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/freeze_resistance.d26eb338.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/isis_resistance.30a69ffc.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/isis_resistance.5b05887a.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/tesla_resistance.3e686c8e.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/tesla_resistance.663d3597.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/hammer_resistance.6c549d29.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/hammer_resistance.28e73097.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/twins_resistance.ad189f61.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/twins_resistance.fbbc4d72.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/ricochet_resistance.8247beaa.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/ricochet_resistance.69c6c7ee.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/smoky_resistance.845afc14.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/smoky_resistance.c4c202ca.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/rocket_launcher_resistance.b7dfd64f.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/rocket_launcher_resistance.5772cbaa.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/vulcan_resistance.824f6f0e.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/vulcan_resistance.9aebf267.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/thunder_resistance.6d7f4531.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/thunder_resistance.9dab2abf.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/scorpio_resistance.e8f1787f.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/scorpio_resistance.d40f8fbb.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/railgun_resistance.636a554f.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/railgun_resistance.7577c7a1.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/artillery_resistance.9b4cbc34.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/artillery_resistance.bd49fc96.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/gauss_resistance.bb8f409c.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/gauss_resistance.acf358ed.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/shaft_resistance.0778fd3e.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/shaft_resistance.7e58bc19.svg'

                        }, {

                                  oldPicture: 'https://tankionline.com/play/static/images/mine_resistance.dd581c90.svg',
                                  picture: 'https://tankionline.com/play/static/images/resistances/mine_resistance.0d0d3c98.svg'

                        }];

                        new MutationObserver((mutations) => { mutations.forEach(({ addedNodes, target }) => { if (addedNodes.length && ('tbody' === target.localName || target.className.includes('BattleComponentStyle-canvasContainer'))) {

                                const user = document.querySelector('.UserInfoContainerStyle-textDecoration')?.textContent?.split(' ').pop();

                                target.querySelectorAll('.Common-maskImage').forEach((element) => {

                                        const maskImage = window.getComputedStyle(element).getPropertyValue('-webkit-mask-image')?.split('"')?.[1]; const resistance = tankResistances.find(({ oldPicture }) => maskImage === oldPicture);

                                        if (resistance) {

                                                element.style.cssText = `

                                                        -webkit-mask-image: none;
                                                        background: url(${resistance.picture}) center center / 1em 1em no-repeat;
                                                        width: 1em;
                                                        height: 1em;

                                                `

                                        };

                                });

                        }})}).observe(document, { subtree: true, childList: true });

                };

                color();

                function pin() {

                        new MutationObserver((mutations) => { mutations.forEach(({ target }) => { if (target.className.includes('BattleComponentStyle-canvasContainer')) {

                                let mainHeader = document.getElementsByClassName('BattleTabStatisticComponentStyle-containerInsideTeams')[0];

                                if (mainHeader) {

                                        const pinResistances = document.createElement('div');
                                              pinResistances.className = 'BattleTabStatisticComponentStyle-pinResistances'

                                        mainHeader.appendChild(pinResistances);

                                        const pinResistancesDiv = document.getElementsByClassName('BattleTabStatisticComponentStyle-pinResistances')[0];

                                        if (pinResistancesDiv) {

                                                if (localStorage.getItem('pinResistances') === 'true') {

                                                        var pressCount = 1

                                                } else {

                                                        pressCount = 0

                                                };

                                                pinResistancesDiv.addEventListener('click', function() {

                                                        pressCount++

                                                        if (pressCount == 1) {

                                                                localStorage.setItem('pinResistances', true);

                                                                let css = `

                                                                .BattleTabStatisticComponentStyle-pinResistances {
                                                                        background-color: var(--general-color) !important;
                                                                }

                                                                .BattleTabStatisticComponentStyle-containerInsideTeams > .Common-flexCenterAlignCenter {
                                                                        opacity: 1;
                                                                        margin-top: 0.5em;
                                                                }

                                                                `

                                                                const body = document.body || document.getElementsByTagName('body')[0];

                                                                const style = document.createElement('style');
                                                                      style.className = 'pinResistances'

                                                                if (style.styleSheet) {

                                                                      style.styleSheet.cssText = css

                                                                } else {

                                                                      style.appendChild(document.createTextNode(css));

                                                                };

                                                                body.appendChild(style);

                                                        };

                                                        if (pressCount == 2) {

                                                                localStorage.setItem('pinResistances', false);

                                                                const styleElement = document.querySelector('.pinResistances');

                                                                if (styleElement) {

                                                                      styleElement.remove();

                                                                };

                                                                pressCount = 0

                                                        };

                                                });

                                        };

                                };

                        }})}).observe(document, { subtree: true, childList: true });

                        if (localStorage.getItem('pinResistances') === 'true') {

                                let css = `

                                .BattleTabStatisticComponentStyle-pinResistances {
                                        background-color: var(--general-color) !important;
                                }

                                .BattleTabStatisticComponentStyle-containerInsideTeams > .Common-flexCenterAlignCenter {
                                        opacity: 1;
                                        margin-top: 0.5em;
                                }

                                `

                                const body = document.body || document.getElementsByTagName('body')[0];

                                const style = document.createElement('style');
                                      style.className = 'pinResistances'

                                if (style.styleSheet) {

                                      style.styleSheet.cssText = css

                                } else {

                                      style.appendChild(document.createTextNode(css));

                                };

                                body.appendChild(style);

                                let pressCount

                                pressCount = 1

                        };

                        if (localStorage.getItem('pinResistances') === 'false') {

                                const styleElement = document.querySelector('.pinResistances');

                                if (styleElement) {

                                      styleElement.remove();

                                };

                                let pressCount

                                pressCount = 0

                        };


                };

                pin();

                function display() {

                        new MutationObserver((mutations) => { mutations.forEach(({ target }) => { if (target.className.includes('BattleComponentStyle-canvasContainer')) {

                                let mainHeader = document.getElementsByClassName('BattleTabStatisticComponentStyle-containerInsideTeams')[0];

                                if (mainHeader) {

                                        const showResistances = document.createElement('div');
                                              showResistances.className = 'BattleTabStatisticComponentStyle-showResistances'

                                        mainHeader.appendChild(showResistances);

                                        const showResistancesDiv = document.getElementsByClassName('BattleTabStatisticComponentStyle-showResistances')[0];

                                        if (showResistancesDiv) {

                                                if (localStorage.getItem('showResistances') === 'true') {

                                                        var pressCount = 1

                                                } else {

                                                        pressCount = 0

                                                };

                                                showResistancesDiv.addEventListener('click', function() {

                                                        pressCount++

                                                        if (pressCount == 1) {

                                                                localStorage.setItem('showResistances', true);

                                                                let css = `

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr,
                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr {
                                                                        width: 45.125em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-showResistances {
                                                                        background-color: var(--general-color) !important;
                                                                }

                                                                .BattleTabStatisticComponentStyle-resistanceModuleCell,
                                                                .BattleTabStatisticComponentStyle-gsCell,
                                                                .BattleTabStatisticComponentStyle-deviceCell,
                                                                .BattleTabStatisticComponentStyle-defenceCell {
                                                                        visibility: visible !important;
                                                                        opacity: 1 !important;
                                                                        margin: unset !important;
                                                                }

                                                                .BattleTabStatisticComponentStyle-resistanceModuleCell {
                                                                        position: relative !important;
                                                                }

                                                                .BattleTabStatisticComponentStyle-defenceLabel {
                                                                        margin-left: -10em;
                                                                        margin-right: 10em
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:first-child,
                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:first-child {
                                                                        margin-right: 10em
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+6),
                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+7),
                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+6),
                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+7) {
                                                                        border: unset;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(1) {
                                                                        position: absolute;
                                                                        left: 0em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(2) {
                                                                        position: absolute;
                                                                        left: 25.55em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(3) {
                                                                        position: absolute;
                                                                        left: 29.75em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(4) {
                                                                        position: absolute;
                                                                        left: 32.75em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(5) {
                                                                        position: absolute;
                                                                        left: 35.7em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(6) {
                                                                        position: absolute;
                                                                        left: 41em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(1) {
                                                                        position: absolute;
                                                                        left: 0em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(2) {
                                                                        position: absolute;
                                                                        left: 25.55em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(3) {
                                                                        position: absolute;
                                                                        left: 29.75em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(4) {
                                                                        position: absolute;
                                                                        left: 32.75em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(5) {
                                                                        position: absolute;
                                                                        left: 35.7em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(6) {
                                                                        position: absolute;
                                                                        left: 41em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr,
                                                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr {
                                                                        width: 46.5em;
                                                                        justify-content: flex-end;
                                                                }

                                                                .BattleTabStatisticComponentStyle-containerInsideTeams {
                                                                        width: 95em;
                                                                }

                                                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table {
                                                                        padding-left: 1em;
                                                                }

                                                                `

                                                                const body = document.body || document.getElementsByTagName('body')[0];

                                                                const style = document.createElement('style');
                                                                      style.className = 'showResistances'

                                                                if (style.styleSheet) {

                                                                      style.styleSheet.cssText = css

                                                                } else {

                                                                      style.appendChild(document.createTextNode(css));

                                                                };

                                                                body.appendChild(style);

                                                        };

                                                        if (pressCount == 2) {

                                                                localStorage.setItem('showResistances', false);

                                                                const styleElement = document.querySelector('.showResistances');

                                                                if (styleElement) {

                                                                      styleElement.remove();

                                                                };

                                                                pressCount = 0

                                                        };

                                                });

                                        };

                                };

                        }})}).observe(document, { subtree: true, childList: true });

                        if (localStorage.getItem('showResistances') === 'true') {

                                let css = `

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr,
                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr {
                                        width: 45.125em;
                                }

                                .BattleTabStatisticComponentStyle-showResistances {
                                        background-color: var(--general-color) !important;
                                }

                                .BattleTabStatisticComponentStyle-resistanceModuleCell,
                                .BattleTabStatisticComponentStyle-gsCell,
                                .BattleTabStatisticComponentStyle-deviceCell,
                                .BattleTabStatisticComponentStyle-defenceCell {
                                        visibility: visible !important;
                                        opacity: 1 !important;
                                        margin: unset !important;
                                }

                                .BattleTabStatisticComponentStyle-resistanceModuleCell {
                                        position: relative !important;
                                }

                                .BattleTabStatisticComponentStyle-defenceLabel {
                                        margin-left: -10em;
                                        margin-right: 10em
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:first-child,
                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:first-child {
                                        margin-right: 10em
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+6),
                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+7),
                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+6),
                                .BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+7) {
                                        border: unset;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(1) {
                                        position: absolute;
                                        left: 0em;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(2) {
                                        position: absolute;
                                        left: 25.55em;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(3) {
                                        position: absolute;
                                        left: 29.75em;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(4) {
                                        position: absolute;
                                        left: 32.75em;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(5) {
                                        position: absolute;
                                        left: 35.7em;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th:nth-child(6) {
                                        position: absolute;
                                        left: 41em;
                                }

                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(1) {
                                        position: absolute;
                                        left: 0em;
                                }

                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(2) {
                                        position: absolute;
                                        left: 25.55em;
                                }

                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(3) {
                                        position: absolute;
                                        left: 29.75em;
                                }

                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(4) {
                                        position: absolute;
                                        left: 32.75em;
                                }

                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(5) {
                                        position: absolute;
                                        left: 35.7em;
                                }

                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th:nth-child(6) {
                                        position: absolute;
                                        left: 41em;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr,
                                .BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr {
                                        width: 46.5em;
                                        justify-content: flex-end;
                                }

                                .BattleTabStatisticComponentStyle-containerInsideTeams {
                                        width: 95em;
                                }

                                .BattleTabStatisticComponentStyle-blueTeamTableContainer table {
                                        padding-left: 1em;
                                }

                                `

                                const body = document.body || document.getElementsByTagName('body')[0];

                                const style = document.createElement('style');
                                      style.className = 'showResistances'

                                if (style.styleSheet) {

                                      style.styleSheet.cssText = css

                                } else {

                                      style.appendChild(document.createTextNode(css));

                                };

                                body.appendChild(style);

                                let pressCount

                                pressCount = 1

                        };

                        if (localStorage.getItem('showResistances') === 'false') {

                                const styleElement = document.querySelector('.showResistances');

                                if (styleElement) {

                                      styleElement.remove();

                                };

                                let pressCount

                                pressCount = 0

                        };

                };

                display();

        };

        // проверка на соответствие массиву доменов + обсервер мутаций DOM

        function dynamicCheck() {

                const linkArray = [ 'https://tankionline.com/play/',
                                    'https://tankionline.com/play/?desktop=true',
                                    'https://public-deploy1.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy1.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy1.test-eu.tankionline.com/balancer',
                                    'https://public-deploy2.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy2.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy2.test-eu.tankionline.com/balancer',
                                    'https://public-deploy3.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy3.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy3.test-eu.tankionline.com/balancer',
                                    'https://public-deploy4.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy4.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy4.test-eu.tankionline.com/balancer',
                                    'https://public-deploy5.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy5.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy5.test-eu.tankionline.com/balancer',
                                    'https://public-deploy6.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy6.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy6.test-eu.tankionline.com/balancer',
                                    'https://public-deploy7.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy7.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy7.test-eu.tankionline.com/balancer',
                                    'https://public-deploy8.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy8.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy8.test-eu.tankionline.com/balancer',
                                    'https://public-deploy9.test-eu.tankionline.com/browser-public/index.html?config-template=https://c{server}.public-deploy9.test-eu.tankionline.com/config.xml&resources=../resources&balancer=https://balancer.public-deploy9.test-eu.tankionline.com/balancer' ];

                const isArrayAvailable = linkArray.includes(window.location.href) || linkArray.includes(window.location.origin);

                if (isArrayAvailable == true) {

                        function mutationsObserver() {

                                let Observer = new MutationObserver(function(inspect) { inspect.forEach(function(Mutation) { if (Mutation.addedNodes.length && Mutation.type === 'childList') { Mutation.addedNodes.forEach(function(element) {

                                if (element.nodeType === 1 && element.classList.contains('Common-container')) {

                                        let nicknameHeader = document.querySelector('.UserInfoContainerStyle-userNameRank.UserInfoContainerStyle-textDecoration');

                                        if (nicknameHeader) {

                                                var nickname = nicknameHeader.innerHTML

                                                localStorage.setItem('obscLocalStorageVariable-nickname', nickname);

                                        };

                                        // функция изменения уведомлений в меню

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

                                        // функция часов в лобби

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

                                                        if (localStorage.getItem('language_store_key') == 'RU') {

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

                                        //

                                        function developerDetails() {

                                                let mainHeader = document.getElementsByClassName('MainScreenComponentStyle-container')[0];

                                                let holdingCard = document.createElement('div');
                                                    holdingCard.className = 'obscDOMElement-holdingCard'

                                                if (mainHeader) {

                                                        mainHeader.appendChild(holdingCard);

                                                        if (holdingCard) {

                                                                let text1 = document.createElement('a');
                                                                    text1.className = 'obscDOMElement-holdingCard-text1'
                                                                    text1.innerHTML = `Obscurum ${version}`

                                                                holdingCard.appendChild(text1);

                                                                let text2 = document.createElement('a');
                                                                    text2.className = 'obscDOMElement-holdingCard-text2'
                                                                    text2.innerHTML = 'https://vk.com/drawingwithblood'

                                                                    text2.setAttribute('href', 'https://vk.com/drawingwithblood');
                                                                    text2.target = '_blank'

                                                                holdingCard.appendChild(text2);

                                                                let text3 = document.createElement('a');
                                                                    text3.className = 'obscDOMElement-holdingCard-text3'
                                                                    text3.innerHTML = 'https://github.com/Indifferental'

                                                                    text3.setAttribute('href', 'https://github.com/Indifferental');
                                                                    text3.target = '_blank'

                                                                holdingCard.appendChild(text3);

                                                                let text4 = document.createElement('a');
                                                                    text4.className = 'obscDOMElement-holdingCard-text4'
                                                                    text4.innerHTML = 'Discord: drawingwithblood'

                                                                holdingCard.appendChild(text4);

                                                        };

                                                };

                                        };

                                        function rankImage() {

                                                let img = document.getElementsByClassName('UserInfoContainerStyle-titleRankIcon')[0];

                                                if (img) {

                                                        if (img.src === 'https://tankionline.com/play/static/images/31.06d52fbe.webp') {

                                                                img.src = 'data:image/webp;base64,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'

                                                        };

                                                };

                                        };

                                        // определение никнейма

                                        primaryNotification();

                                        lobbyClocks();

                                        developerDetails();

                                        rankImage();

                                };

                                if (element.nodeType === 1 && element.classList.contains('ModalStyle-rootHover')) {

                                        function createWindow() {

                                                let mainHeader = document.getElementsByClassName('ModalStyle-rootHover')[0];

                                                let window = document.createElement('div');
                                                    window.className = 'ModalStyle-surfaceWindow'

                                                if (mainHeader) {

                                                      mainHeader.appendChild(window);

                                                };

                                        };

                                        createWindow();

                                };

                                // инициализация загрузчика игры

                                if (element.nodeType === 1 && element.classList.contains('ApplicationLoaderComponentStyle-container') && element.classList.contains('Common-flexCenterAlignCenterColumn')) {

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

                                        applicationLoader();

                                };

                                // инициализация загрузчика в лобби

                                if (element.nodeType === 1 && element.classList.contains('LobbyLoaderComponentStyle-container')) {

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

                                        lobbyLoader();

                                };

                                }); }}); });

                                let Configuration = { subtree: true, childList: true }; Observer.observe(document.body, Configuration);

                        };

                        mutationsObserver();

                        // инициализация других функций в случае загрузки ссылки из массива

                        function startText() {

                                let textbox = document.createElement('pre');
                                    textbox.className = 'obscGlobalVariable-startText'

                                variableHeader.appendChild(textbox);

                                let text = [

                                        `Initialization complete\nObscurum Theme ${version}`

                                ];

                                if (localStorage.getItem('obscLocalStorageVariable-nickname')) {

                                        text = [

                                                `Initialization complete\nWelcome, ${localStorage.getItem('obscLocalStorageVariable-nickname')}`

                                        ];

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

                        applyBackground();

                        resistancesArray();

                } else {

                        console.log(`Obscurum ${version} is not available.\n` + window.location.href);

                };

        };

        styleSheet();

        dynamicCheck();

})();
