(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        RVJn: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                l = a.n(n),
                o = a("xsX3"),
                r = a("9eSz"),
                c = a.n(r),
                m = a("Wbzz");
            t.a = function(e) {
                var t = e.slug,
                    a = e.hero,
                    n = e.category,
                    r = e.createdAt,
                    i = e.title,
                    s = e.subtitle;
                return l.a.createElement("div", {
                    className: o.card
                }, l.a.createElement("div", {
                    className: o.blogpost
                }, l.a.createElement(m.Link, {
                    to: "/" + t,
                    className: o.hero
                }, l.a.createElement(c.a, {
                    fluid: a,
                    alt: i
                })), l.a.createElement("div", {
                    className: o.caption
                }, l.a.createElement("p", {
                    className: o.header
                }, l.a.createElement(m.Link, {
                    to: "/",
                    className: o.category
                }, n.name), " ", "• ", r), l.a.createElement(m.Link, {
                    to: "/" + t,
                    className: o.titles
                }, l.a.createElement("h2", {
                    className: o.title
                }, i), l.a.createElement("p", {
                    className: o.subtitle
                }, s)))), l.a.createElement("hr", {
                    className: o.line
                }))
            }
        },
        RXBc: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", (function() {
                return s
            }));
            var n = a("q1tI"),
                l = a.n(n),
                o = a("yBb5"),
                r = a("Wbzz"),
                c = a("RVJn"),
                m = a("mBpy"),
                i = function() {
                    var e = Object(r.useStaticQuery)("890283349").allContentfulBlogs.nodes;
                    return l.a.createElement("div", {
                        className: m.blog
                    }, e.map((function(e) {
                        return l.a.createElement(c.a, {
                            key: e.id,
                            slug: e.slug,
                            hero: e.hero.fluid,
                            category: e.category,
                            createdAt: e.createdAt,
                            title: e.title,
                            subtitle: e.subtitle
                        })
                    })))
                };

            function s() {
                return l.a.createElement(o.a, null, l.a.createElement(i, null))
            }
        },
        ZbQX: function(e, t, a) {
            e.exports = {
                tabs: "tabs-module--tabs--2nN-H",
                tab: "tabs-module--tab--ubC2g",
                icon: "tabs-module--icon--1D_i-"
            }
        },
        mBpy: function(e, t, a) {
            e.exports = {
                blog: "blog-module--blog--33sXJ"
            }
        },
        oRNG: function(e, t, a) {
            e.exports = {
                layout: "layout-module--layout--gfSO1",
                content: "layout-module--content--1da59"
            }
        },
        xsX3: function(e, t, a) {
            e.exports = {
                card: "card-module--card--21p37",
                line: "card-module--line--2Y4St",
                blogpost: "card-module--blogpost--1N5zi",
                caption: "card-module--caption--9OHWj",
                header: "card-module--header--39ZDa",
                category: "card-module--category--WSzKE",
                titles: "card-module--titles--3OTcZ",
                title: "card-module--title--1WJC9",
                subtitle: "card-module--subtitle--3cDsm",
                hero: "card-module--hero--19mwt"
            }
        },
        yBb5: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                l = a.n(n),
                o = a("Wbzz"),
                r = a("F+iK"),
                c = a("9eSz"),
                m = a.n(c),
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
                    }, l.a.createElement(m.a, {
                        fluid: e.blog.childImageSharp.fluid,
                        alt: "Blog"
                    })), l.a.createElement("span", null, "Blog")), l.a.createElement(o.Link, {
                        className: i.tab,
                        to: "/pencapaian",
                        activeStyle: s
                    }, l.a.createElement("div", {
                        className: i.icon
                    }, l.a.createElement(m.a, {
                        fluid: e.achievment.childImageSharp.fluid,
                        alt: "Pencapaian"
                    })), l.a.createElement("span", null, "Pencapaian")), l.a.createElement(o.Link, {
                        className: i.tab,
                        to: "/portofolio",
                        activeStyle: s
                    }, l.a.createElement("div", {
                        className: i.icon
                    }, l.a.createElement(m.a, {
                        fluid: e.portfolio.childImageSharp.fluid,
                        alt: "Portfolio"
                    })), l.a.createElement("span", null, "Portofolio")))
                },
                d = a("qhky"),
                p = (a("sykF"), a("oRNG"));
            t.a = function(e) {
                var t = e.children,
                    a = Object(o.useStaticQuery)("3100732401").banner;
                return l.a.createElement("div", {
                    className: p.layout
                }, l.a.createElement(d.a, {
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
                    className: p.content
                }, l.a.createElement(u, null), t))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-c4d96fe00683b4f27150.js.map