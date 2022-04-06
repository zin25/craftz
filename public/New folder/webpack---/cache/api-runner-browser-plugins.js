module.exports = [{
    plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
    options: {
        "plugins": [],
        "name": "Dimas Miftah",
        "short_name": "Dimas Miftah",
        "start_url": "/",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "display": "standalone",
        "icon": "src/assets/img/dimasmiftah.svg",
        "cache_busting_mode": "query",
        "include_favicon": true,
        "legacy": true,
        "theme_color_in_head": true,
        "cacheDigest": "6a51de792bcf60dbd77f24a27daac2ba"
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
    options: {
        "plugins": [],
        "google": {
            "families": ["Poppins:400,500,600,700&display=swap"]
        }
    },
}]