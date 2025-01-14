(function() {

        var version = 'v0.84'

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
                        transition: '.3s cubic-bezier(.25, .1, .25, 1)',

                        backdrop_filter: 'blur(16px)',
                        least_backdrop_filter: 'blur(6px)',

                        color: 'rgb(255 157 71)',
                        least_color: 'rgb(255 157 71 / 25%)',

                        animation: 'blend .15s ease-in-out',
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

                                    position: absolute;
                                    top: 0.5em;
                                    left: 1em;
                                    z-index: 9999;
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
                                    --general-transition: ${globalProperties[0].transition};

                                    --general-backdrop-filter: ${globalProperties[0].backdrop_filter};
                                    --least-backdrop-filter: ${globalProperties[0].least_backdrop_filter};

                                    --general-color: ${globalProperties[0].color};
                                    --least-general-color: ${globalProperties[0].least_color};

                                    --general-animation: ${globalProperties[0].animation};
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
                            selector: '',
                            style: `

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
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable`,
                            style: `
                                    width: 5em;
                                    height: 5em;
                            `
                    },

                    {
                            selector: `.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable > .UserInfoContainerStyle-titleRankIcon,
                                       .BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart > .Common-flexStartAlignCenter > .UserInfoContainerStyle-rankIconContainerClickable > .UserInfoContainerStyle-titleRankIcon`,
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
                            selector: '.FriendRequestComponentStyle-buttonDeclineAll',
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
                                    background: rgb(255 255 255 / 7.5%);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 1em;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.DialogContainerComponentStyle-keyButton:hover',
                            style: `
                                    background: rgb(255 255 255 / 12.5%);
                                    box-shadow: var(--general-box-shadow);
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
                                    backdrop-filter: var(--least-backdrop-filter);

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
                                    backdrop-filter: var(--least-backdrop-filter);

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
                                    backdrop-filter: var(--least-backdrop-filter);
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
                                    background: radial-gradient(ellipse at top, rgb(25, 25, 25),  black);
                            `
                    },

                    {
                            selector: '.BattleTabStatisticComponentStyle-containerInsideTeams',
                            style: `
                                    background: rgb(0 0 0 / 30%);
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
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-tankPartUpgrades',
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
                                    align-items: center;
                                    top: 0em;
                                    right: 0em;
                                    margin-top: 5.5em;
                                    width: 25em;
                                    height: 62.5%;
                                    z-index: 1;

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.TanksPartBaseComponentStyle-tankPartContainer > .TanksPartBaseComponentStyle-blockInsideContainerItem > .TanksPartComponentStyle-tankPartUpgrades > .GarageCommonStyle-animatedBlurredRightBlock > .Common-displayFlexColumn > .Common-flexStart',
                            style: `
                                    justify-content: space-between;
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
                            selector: '.GarageMainScreenStyle-blockParameters',
                            style: `
                                    width: 100% !important;
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

                                        // инициализация функции изменения блока уведомлений в меню

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

                                        primaryNotification();

                                        // определение никнейма

                                        let nicknameHeader = document.querySelector('.UserInfoContainerStyle-userNameRank.UserInfoContainerStyle-textDecoration');

                                        if (nicknameHeader) {

                                                var nickname = nicknameHeader.innerHTML

                                                localStorage.setItem('obscLocalStorageVariable-nickname', nickname);

                                        };

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
