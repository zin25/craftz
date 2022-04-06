(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        NXJO: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return u
            }));
            var n = a("q1tI"),
                l = a.n(n),
                o = a("yBb5"),
                r = a("Wbzz"),
                m = a("9eSz"),
                c = a.n(m),
                i = a("eroh"),
                s = function() {
                    var e = Object(r.useStaticQuery)("472252200").allContentfulPortfolios.nodes;
                    return l.a.createElement("div", {
                        className: i.portfolio
                    }, e.map((function(e) {
                        return l.a.createElement("div", {
                            key: e.id,
                            className: i.card
                        }, l.a.createElement("a", {
                            href: e.github,
                            target: "_blank",
                            rel: "noreferrer",
                            className: i.hero
                        }, l.a.createElement(c.a, {
                            fluid: e.hero.fluid
                        })), l.a.createElement("div", {
                            className: i.caption
                        }, l.a.createElement("a", {
                            href: e.github,
                            target: "_blank",
                            rel: "noreferrer",
                            className: i.title
                        }, e.title), l.a.createElement("p", {
                            className: i.subtitle
                        }, e.subtitle), l.a.createElement("div", {
                            className: i.tags
                        }, e.tags.map((function(e, t) {
                            return l.a.createElement("span", {
                                key: t,
                                className: i.tag
                            }, e)
                        })))))
                    })))
                };

            function u() {
                return l.a.createElement(o.a, null, l.a.createElement(s, null))
            }
        },
        ZbQX: function(e, t, a) {
            e.exports = {
                tabs: "tabs-module--tabs--2nN-H",
                tab: "tabs-module--tab--ubC2g",
                icon: "tabs-module--icon--1D_i-"
            }
        },
        eroh: function(e, t, a) {
            e.exports = {
                portfolio: "portfolio-module--portfolio--2bt1J",
                card: "portfolio-module--card--2V_cU",
                tag: "portfolio-module--tag--I83vo",
                hero: "portfolio-module--hero--2uvqW",
                caption: "portfolio-module--caption--3soj4",
                title: "portfolio-module--title--12A8e",
                subtitle: "portfolio-module--subtitle--1XZpX",
                tags: "portfolio-module--tags--wpjyO"
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
                u = function() {
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
                p = a("qhky"),
                d = (a("sykF"), a("oRNG"));
            t.a = function(e) {
                var t = e.children,
                    a = Object(o.useStaticQuery)("3100732401").banner;
                return l.a.createElement("div", {
                    className: d.layout
                }, l.a.createElement(p.a, {
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
                    className: d.content
                }, l.a.createElement(u, null), t))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-portofolio-js-a23395e20d553a7f0bd0.js.map