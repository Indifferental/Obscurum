(function() {

        var version = 'v0.991'

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
                                    background: transparent;
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
                            selector: '.Common-container > .ContainersComponentStyle-navigationContainer > .ContainersComponentStyle-navigationBlock > .Common-flexCenterAlignCenterColumn',
                            style: `
                                    padding: unset;
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
                            selector: `.DialogContainerComponentStyle-enterButton,
                                       .TutorialModalComponentStyle-navigationButton,
                                       .MainQuestComponentStyle-buttonContainer`,
                            style: `
                                    background: var(--least-general-color);
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
                                    background: radial-gradient(ellipse at top, rgb(25 25 25),  black);
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
                            selector: '.BattleKillBoardComponentStyle-tableContainer',
                            style: `
                                    margin-left: 4em;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table thead, .BattleKillBoardComponentStyle-tableContainer table thead tr, .BattleKillBoardComponentStyle-tableContainer table thead tr th',
                            style: `
                                    height: 2em;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table thead tr th > :first-child',
                            style: `
                                    position: absolute;
                                    left: 0em;
                                    margin: 1em !important;
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
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody tr td > .GearScoreStyle-bestGS',
                            style: `
                                    margin-left: unset;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-rankIcon',
                            style: `
                                    margin: 0 0.75em;
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody #selfUserBg',
                            style: `
                                    background: rgb(0 212 255 / 15%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 0.75em;

                                    margin-bottom: 0.25em;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody #blueCommand',
                            style: `
                                    background: linear-gradient(90deg, rgb(0 212 255 / 15%), rgb(0 0 0 / 5%));
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 0.75em;

                                    margin-bottom: 0.25em;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table tbody #enemyCommand',
                            style: `
                                    background: linear-gradient(90deg, rgb(254 102 102 / 15%), rgb(0 0 0 / 5%));
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow);
                                    border-radius: 0.75em;

                                    margin-bottom: 0.25em;

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleKillBoardComponentStyle-tableContainer table',
                            style: `
                                    margin-top: 2em;
                                    height: 55.5em;
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-button',
                            style: `
                                    background: rgb(118 255 51 / 50%);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border: unset;
                                    border-radius: var(--general-border-radius);

                                    animation: var(--general-animation);
                            `
                    },

                    {
                            selector: '.BattleResultNavigationComponentStyle-commonBlockButtonNextLeave > .BattleResultNavigationComponentStyle-button:hover',
                            style: `
                                    background: rgb(118 255 51 / 70%);
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

                                    animation: var(--general-animation);
                            `,
                            tags: 'hover'
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
                            selector: '.ModalStyle-root > .InvitationWindowsComponentStyle-commonItem:nth-child(2)',
                            style: `
                                    visibility: hidden;
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
                            selector: '.TableMainQuestComponentStyle-timerTable',
                            style: `
                                    background-color: rgb(0 0 0 / 25%) !important;
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: 0.5em !important;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-timerTable span',
                            style: `
                                    color: white !important;
                                    text-shadow: 0 0 5px black;
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-cardLockedTable',
                            style: `
                                    background: rgba(255, 204, 0, 0.05);
                                    outline: var(--general-outline);
                                    box-shadow: var(--general-box-shadow) !important;
                                    border-radius: var(--general-border-radius) !important;
                                    backdrop-filter: var(--least-backdrop-filter);

                                    transition: var(--general-transition);
                            `
                    },

                    {
                            selector: '.TableMainQuestComponentStyle-cardLockedTable:hover',
                            style: `
                                    background: rgba(255, 204, 0, 0.1);
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

                        if (localStorage.getItem('tips.data').includes('"lang":"ru"')) {

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

        // функция скрытия панели при поиске в матчмейкинге

        function matchmakingWaiting() {

                const mainHeader = document.getElementsByClassName('MatchmakingWaitComponentStyle-container')[0];

                const menuPanel = document.getElementsByClassName('UserInfoContainerStyle-blockForIconTankiOnline')[0] || document.getElementsByClassName('BreadcrumbsComponentStyle-breadcrumbs')[0];

                if (mainHeader) {

                        if (menuPanel) {

                                menuPanel.style = 'visibility: hidden'

                        };

                };

                if (!mainHeader) {

                        if (menuPanel) {

                                menuPanel.style = 'visibility: visible'

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

                                        if (element.nodeType === 1 && element.classList.contains('MatchmakingWaitComponentStyle-container')) {

                                                matchmakingWaiting();

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

                                                text = [

                                                        `Obscurum ${version}\nWelcome, ${localStorage.getItem('obscLocalStorageVariable-nickname')}`

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

                        };

                });

        };

        dynamicCheck();

})();
