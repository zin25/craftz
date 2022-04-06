import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Intro from "../Intro/Intro"
import Tabs from "../Tabs/Tabs"
import {Helmet} 
from "react-helmet"
import "../../assets/css/global.scss"
import * as styles from "./layout.module.scss"

const getBanner = graphql `
  {
    banner: contentfulAsset(title: { eq: "Dimas Miftah" }) {
      file {
        url
      }
    }
  }
`

const Layout = ({
    children
}) => {
    const {
        banner
    } = useStaticQuery(getBanner)
    return ( <
        div className = {
            styles.layout
        } >
        <
        Helmet htmlAttributes = {
            {
                lang: "id",
            }
        } >
        <
        meta name = "google-site-verification"
        content = "dQvIQjf3MbluGD75wW444KQ7V33Zpq-s-FMBhlFejBg" /
        >
        <
        title > Dimas Miftah < /title> <
        meta charset = "utf-8" / >
        <
        meta name = "viewport"
        content = "width=device-width,initial-scale=1,viewport-fit=cover" /
        >
        <
        meta http - equiv = "x-ua-compatible"
        content = "ie=edge" / >
        <
        link rel = "preconnect"
        href = "https://www.google.com "
        crossOrigin / >
        <
        link rel = "dns-prefetch"
        href = "https://www.google.com" / >
        <
        link rel = "preconnect"
        href = "https://www.google-analytics.com"
        crossOrigin /
        >
        <
        link rel = "dns-prefetch"
        href = "https://www.google-analytics.com" / >
        <
        meta property = "og:site_name"
        content = "Dimas Miftah" / >
        <
        meta property = "fb:admins"
        content = "dimas.m.huda.9" / >
        <
        meta property = "og:locale"
        content = "id_ID" / >
        <
        meta property = "og:locale:alternate"
        content = "ms_MY" / >
        <
        meta property = "og:title"
        content = "Dimas Miftah" / >
        <
        meta property = "og:description"
        content = "Jurnal Mahasiswa Informatika | Dikelola oleh Dimas Miftahul Huda (Frontend Engineer di UNIKOM CodeLabs)" /
        >
        <
        meta property = "og:type"
        content = "website" / >
        <
        meta property = "og:url"
        content = "https://www.dimasmiftah.me/" / >
        <
        meta property = "og:image"
        content = {
            `http:${banner.file.url}`
        }
        /> <
        meta property = "og:image:secure_url"
        content = {
            `https:${banner.file.url}`
        }
        /> <
        meta property = "og:image:width"
        content = "640" / >
        <
        meta property = "og:image:height"
        content = "640" / >
        <
        meta property = "og:image:alt"
        content = "Dimas Miftahul Huda" / >
        <
        meta name = "twitter:card"
        content = "summary_large_image" / >
        <
        meta name = "twitter:image"
        content = {
            `https:${banner.file.url}`
        }
        /> <
        meta name = "twitter:title"
        content = "Dimas Miftah" / >
        <
        meta name = "twitter:description"
        content = "Jurnal Mahasiswa Informatika | Dikelola oleh Dimas Miftahul Huda (Frontend Engineer di UNIKOM CodeLabs)" /
        >
        <
        meta name = "twitter:site"
        content = "@dimasmfth" / >
        <
        meta name = "twitter:creator"
        content = "@dimasmfth" / >
        <
        link rel = "preconnect"
        href = "https://www.dimasmiftah.me" / >
        <
        link rel = "canonical"
        href = "https://www.dimasmiftah.me" / >
        <
        meta name = "description"
        content = "Jurnal Mahasiswa Informatika | Dikelola oleh Dimas Miftahul Huda (Frontend Engineer di UNIKOM CodeLabs)" /
        >
        <
        meta content = "index,follow"
        name = "robots" / >
        <
        meta content name = "copyright" / >
        <
        meta content = "Indonesian"
        name = "language" / >
        <
        meta content = "index,follow"
        name = "googlebot" / >
        <
        meta content = "follow, all"
        name = "Googlebot-Image" / >
        <
        meta content = "follow, all"
        name = "Scooter" / >
        <
        meta content = "follow, all"
        name = "msnbot" / >
        <
        meta content = "follow, all"
        name = "alexabot" / >
        <
        meta content = "follow, all"
        name = "Slurp" / >
        <
        meta content = "follow, all"
        name = "ZyBorg" / >
        <
        meta content = "follow, all"
        name = "Scooter" / >
        <
        meta content = "true"
        name = "MSSmartTagsPreventParsing" / >
        <
        meta content = "ALL"
        name = "SPIDERS" / >
        <
        meta content = "ALL"
        name = "WEBCRAWLERS" / >
        <
        meta content = "aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
        name = "search engines" /
        >
        <
        /Helmet> <
        Intro header = {
            true
        }
        /> <
        div className = {
            styles.content
        } >
        <
        Tabs / > {
            children
        } <
        /div> <
        /div>
    )
}

export default Layout