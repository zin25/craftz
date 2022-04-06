(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        FWR3: function(e, t, a) {
            e.exports = {
                achievment: "achievment-module--achievment--_yC2m",
                card: "achievment-module--card--3svd6",
                date: "achievment-module--date--2Zap8",
                title: "achievment-module--title--17ZGJ",
                hero: "achievment-module--hero--28Q0E",
                body: "achievment-module--body--2GrMC"
            }
        },
        ZbQX: function(e, t, a) {
            e.exports = {
                tabs: "tabs-module--tabs--2nN-H",
                tab: "tabs-module--tab--ubC2g",
                icon: "tabs-module--icon--1D_i-"
            }
        },
        "cdl/": function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return d
            }));
            var n = a("q1tI"),
                l = a.n(n),
                o = a("yBb5"),
                r = a("Wbzz"),
                m = a("FWR3"),
                c = a("9eSz"),
                i = a.n(c),
                s = function() {
                    var e = Object(r.useStaticQuery)("3104684912").allContentfulAchievments.nodes;
                    return l.a.createElement("div", {
                        className: m.achievment
                    }, e.map((function(e) {
                        return l.a.createElement("div", {
                            className: m.card,
                            key: e.id
                        }, l.a.createElement("h2", null, e.emote), l.a.createElement("div", {
                            className: m.hero
                        }, l.a.createElement(i.a, {
                            fluid: e.hero.fluid
                        })), l.a.createElement("span", {
                            className: m.date
                        }, e.date), l.a.createElement("div", null, l.a.createElement("h3", {
                            className: m.title
                        }, e.title), l.a.createElement("p", {
                            className: m.body
                        }, e.body)))
                    })))
                };

            function d() {
                return l.a.createElement(o.a, null, l.a.createElement(s, null))
            }
        },
        oRNG: function(e, t, a) {
            e.exports = {
                layout: "layout-module--layout--gfSO1",
                content: "layout-module--content--1da59"
            }
        },
        yBb5: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                l = a.n(n),
                o = a("Wbzz"),
                r = a("F+iK"),
                m = a("9eSz"),
                c = a.n(m),
                i = a("ZbQX"),
                s = {
                    background: "var(--btn-text)",
                    transition: ".2s"
                },
                d = function() {
                    var e = Object(o.useStaticQuery)("2640770734");
                    return l.a.createElement("div", {
                        className: i.tabs
                    }, l.a.createElement(o.Link, {
                        className: i.tab,
                        to: "/",
                        exact: "true",
                        activeStyle: s
                    }, l.a.createElement("div", {
                        className: i.icon
                    }, l.a.createElement(c.a, {
                        fluid: e.blog.childImageSharp.fluid,
                        alt: "Blog"
                    })), l.a.createElement("span", null, "Blog")), l.a.createElement(o.Link, {
                        className: i.tab,
                        to: "/pencapaian",
                        activeStyle: s
                    }, l.a.createElement("div", {
                        className: i.icon
                    }, l.a.createElement(c.a, {
                        fluid: e.achievment.childImageSharp.fluid,
                        alt: "Pencapaian"
                    })), l.a.createElement("span", null, "Pencapaian")), l.a.createElement(o.Link, {
                        className: i.tab,
                        to: "/portofolio",
                        activeStyle: s
                    }, l.a.createElement("div", {
                        className: i.icon
                    }, l.a.createElement(c.a, {
                        fluid: e.portfolio.childImageSharp.fluid,
                        alt: "Portfolio"
                    })), l.a.createElement("span", null, "Portofolio")))
                },
                u = a("qhky"),
                h = (a("sykF"), a("oRNG"));
            t.a = function(e) {
                var t = e.children,
                    a = Object(o.useStaticQuery)("3100732401").banner;
                return l.a.createElement("div", {
                    className: h.layout
                }, l.a.createElement(u.a, {
                    htmlAttributes: {
                        lang: "id"
                    }
                }, l.a.createElement("meta", {
                    name: "google-site-verification",
                    content: "dQvIQjf3MbluGD75wW444KQ7V33Zpq-s-FMBhlFejBg"
                }), l.a.createElement("title", null, "Dimas Miftah"), l.a.createElement("meta", {
                    charset: "utf-8"
                }), l.a.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1,viewport-fit=cover"
                }), l.a.createElement("meta", {
                    "http-equiv": "x-ua-compatible",
                    content: "ie=edge"
                }), l.a.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.google.com ",
                    crossOrigin: !0
                }), l.a.createElement("link", {
                    rel: "dns-prefetch",
                    href: "https://www.google.com"
                }), l.a.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.google-analytics.com",
                    crossOrigin: !0
                }), l.a.createElement("link", {
                    rel: "dns-prefetch",
                    href: "https://www.google-analytics.com"
                }), l.a.createElement("meta", {
                    property: "og:site_name",
                    content: "Dimas Miftah"
                }), l.a.createElement("meta", {
                    property: "fb:admins",
                    content: "dimas.m.huda.9"
                }), l.a.createElement("meta", {
                    property: "og:locale",
                    content: "id_ID"
                }), l.a.createElement("meta", {
                    property: "og:locale:alternate",
                    content: "ms_MY"
                }), l.a.createElement("meta", {
                    property: "og:title",
                    content: "Dimas Miftah"
                }), l.a.createElement("meta", {
                    property: "og:description",
                    content: "Jurnal Mahasiswa Informatika | Dikelola oleh Dimas Miftahul Huda (Frontend Engineer di UNIKOM CodeLabs)"
                }), l.a.createElement("meta", {
                    property: "og:type",
                    content: "website"
                }), l.a.createElement("meta", {
                    property: "og:url",
                    content: "https://www.dimasmiftah.me/"
                }), l.a.createElement("meta", {
                    property: "og:image",
                    content: "http:" + a.file.url
                }), l.a.createElement("meta", {
                    property: "og:image:secure_url",
                    content: "https:" + a.file.url
                }), l.a.createElement("meta", {
                    property: "og:image:width",
                    content: "640"
                }), l.a.createElement("meta", {
                    property: "og:image:height",
                    content: "640"
                }), l.a.createElement("meta", {
                    property: "og:image:alt",
                    content: "Dimas Miftahul Huda"
                }), l.a.createElement("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), l.a.createElement("meta", {
                    name: "twitter:image",
                    content: "https:" + a.file.url
                }), l.a.createElement("meta", {
                    name: "twitter:title",
                    content: "Dimas Miftah"
                }), l.a.createElement("meta", {
                    name: "twitter:description",
                    content: "Jurnal Mahasiswa Informatika | Dikelola oleh Dimas Miftahul Huda (Frontend Engineer di UNIKOM CodeLabs)"
                }), l.a.createElement("meta", {
                    name: "twitter:site",
                    content: "@dimasmfth"
                }), l.a.createElement("meta", {
                    name: "twitter:creator",
                    content: "@dimasmfth"
                }), l.a.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.dimasmiftah.me"
                }), l.a.createElement("link", {
                    rel: "canonical",
                    href: "https://www.dimasmiftah.me"
                }), l.a.createElement("meta", {
                    name: "description",
                    content: "Jurnal Mahasiswa Informatika | Dikelola oleh Dimas Miftahul Huda (Frontend Engineer di UNIKOM CodeLabs)"
                }), l.a.createElement("meta", {
                    content: "index,follow",
                    name: "robots"
                }), l.a.createElement("meta", {
                    content: !0,
                    name: "copyright"
                }), l.a.createElement("meta", {
                    content: "Indonesian",
                    name: "language"
                }), l.a.createElement("meta", {
                    content: "index,follow",
                    name: "googlebot"
                }), l.a.createElement("meta", {
                    content: "follow, all",
                    name: "Googlebot-Image"
                }), l.a.createElement("meta", {
                    content: "follow, all",
                    name: "Scooter"
                }), l.a.createElement("meta", {
                    content: "follow, all",
                    name: "msnbot"
                }), l.a.createElement("meta", {
                    content: "follow, all",
                    name: "alexabot"
                }), l.a.createElement("meta", {
                    content: "follow, all",
                    name: "Slurp"
                }), l.a.createElement("meta", {
                    content: "follow, all",
                    name: "ZyBorg"
                }), l.a.createElement("meta", {
                    content: "follow, all",
                    name: "Scooter"
                }), l.a.createElement("meta", {
                    content: "true",
                    name: "MSSmartTagsPreventParsing"
                }), l.a.createElement("meta", {
                    content: "ALL",
                    name: "SPIDERS"
                }), l.a.createElement("meta", {
                    content: "ALL",
                    name: "WEBCRAWLERS"
                }), l.a.createElement("meta", {
                    content: "aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot",
                    name: "search engines"
                })), l.a.createElement(r.a, {
                    header: !0
                }), l.a.createElement("div", {
                    className: h.content
                }, l.a.createElement(d, null), t))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-pencapaian-js-c8397ba29ec0935fb4d5.js.map