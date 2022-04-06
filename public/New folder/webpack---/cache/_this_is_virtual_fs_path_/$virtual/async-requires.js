// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
    "component---src-pages-404-js": () =>
        import ("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */ ),
    "component---src-pages-index-js": () =>
        import ("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */ ),
    "component---src-pages-pencapaian-js": () =>
        import ("./../../../src/pages/pencapaian.js" /* webpackChunkName: "component---src-pages-pencapaian-js" */ ),
    "component---src-pages-portofolio-js": () =>
        import ("./../../../src/pages/portofolio.js" /* webpackChunkName: "component---src-pages-portofolio-js" */ ),
    "component---src-templates-blog-template-js": () =>
        import ("./../../../src/templates/blog-template.js" /* webpackChunkName: "component---src-templates-blog-template-js" */ )
}