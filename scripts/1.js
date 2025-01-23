(function () {

        var resources = [

                /* {
                        orig: "/0/114/122/7/30545000607561/image.webp",
                        new: "https://img.freepik.com/premium-photo/red-lightning-black-background-background-illustrations-wallpapers_1033001-1774.jpg?ga=GA1.1.2077898723.1734198974&semt=ais_hybrid"
                },

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
                }, */

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

		var originFetch = unsafeWindow.fetch

        // console.log(`${originFetch} ready`);

        window.unsafeWindow.fetch = async (url, options) => {

                return originFetch(url, options).then(async (response) => {

                        console.log(url.toLocaleString());

                        for (let resource of resources) {

                                let createPreview = (url) => {

                                        let replacedURL = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

                                        return new RegExp(replacedURL);

                                };

                                let preview = createPreview(resource.orig);

                                if (preview.test(url)) {

                                        // console.log(`\n${url}\nreplaced to: ${resource.new}\n`);

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

})();
