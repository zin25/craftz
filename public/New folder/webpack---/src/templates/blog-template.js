import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import * as propTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import Intro from '../components/Intro/Intro'
import Card from '../components/Content/Blog/Card'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'
import '../assets/css/global.scss'
import * as styles from './blog-template.module.scss'

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <Image
        className={styles.img}
        alt={node.data.target.title}
        {...node.data.target}
      />
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={styles.p}> {children} </p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className={styles.heading1}> {children} </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className={styles.heading2}> {children} </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className={styles.heading3}> {children} </h3>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className={styles.url}
      >
        {children}{' '}
      </a>
    )
  },
  renderMark: {
    [MARKS.CODE]: children => (
      <code className={styles.code}> {children.trim()} </code>
    )
  }
}

const BlogTemplate = ({ data }) => {
  const isIpadPro = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const {
    blog: {
      title,
      subtitle,
      published,
      category,
      brief: { brief },
      updatedAt,
      createdAt,
      keywords,
      slug,
      tags,
      hero,
      body
    },
    allContentfulBlogs: { nodes: blogs },
    back
  } = data

  return (
    <div className={styles.post}>
      <Helmet
        htmlAttributes={{
          lang: 'id'
        }}
      >
        <meta name="generator" content="Gatsby" />
        <title> {title} | Dimas Miftah </title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://www.google.com " crossOrigin />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta itemprop="name" content="Dimas Miftah" />
        <meta itemprop="description" content={brief} />
        <meta itemprop="datePublished" content={createdAt} />
        <meta itemprop="dateModified" content={updatedAt} />
        <meta itemprop="image" content={hero.file.url} />
        <meta itemprop="keywords" content={keywords} />
        <meta property="og:site_name" content="Azzin Maharil" />
        <meta property="fb:admins" content="azzin2420" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={'https://www.azzinmaharil.me/' + slug}
        />
        <meta property="og:image" content={hero.file.url} />
        <meta
          property="og:image:secure_url"
          content={`https:${hero.file.url}`}
        />
        <meta property="og:image:width" content={hero.fixed.width} />
        <meta property="og:image:height" content={hero.fixed.height} />
        <meta property="og:image:alt" content={hero.title} />
        <meta property="article:author" content="Azzin Maharil" />
        <meta property="article:publisher" content="Azzin Maharil " />
        <meta property="article:published_time" content={createdAt} />
        <meta property="article:modified_time" content={updatedAt} />
        <meta property="article:section" content="post" />
        {tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@azin2420" />
        <meta name="twitter:creator" content="@azin2420" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content={`https:${hero.file.url}`} />
        <meta name="twitter:image:alt" content={hero.title} />
        <link rel="preconnect" href="https://www.azzinmaharil.me" />
        <link rel="canonical" href={'https://www.azzinmaharil.me/' + slug} />
        <meta name="description" content={brief} />
        <meta content="index,follow" name="robots" />
        <meta content name="copyright" />
        <meta content="Indonesian" name="language" />
        <meta content="index,follow" name="googlebot" />
        <meta content="follow, all" name="Googlebot-Image" />
        <meta content="follow, all" name="Scooter" />
        <meta content="follow, all" name="msnbot" />
        <meta content="follow, all" name="alexabot" />
        <meta content="follow, all" name="Slurp" />
        <meta content="follow, all" name="ZyBorg" />
        <meta content="follow, all" name="Scooter" />
        <meta content="true" name="MSSmartTagsPreventParsing" />
        <meta content="ALL" name="SPIDERS" />
        <meta content="ALL" name="WEBCRAWLERS" />
        <meta
          content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
          name="search engines"
        />
      </Helmet>{' '}
      {!isIpadPro && (
        <Link to="/" className={styles.nav}>
          <div className={styles.back}>
            <Image fluid={back.childImageSharp.fluid} />{' '}
          </div>{' '}
          <p className={styles.navTitle}> {title} </p>{' '}
        </Link>
      )}{' '}
      <div className={styles.blogPost}>
        <div className={styles.titles}>
          <h1 className={styles.title}> {title} </h1>{' '}
          <h2 className={styles.subtitle}> {subtitle} </h2>{' '}
        </div>{' '}
        <p className={styles.meta}>
          <Link to={'/' + category.slug} className={styles.category}>
            {' '}
            {category.name}{' '}
          </Link>{' '}
          • Dipublikasikan pada {published}{' '}
        </p>{' '}
        <div className={styles.figure}>
          <div className={styles.hero}>
            <Image fluid={hero.fluid} />{' '}
          </div>{' '}
          <span className={styles.caption}> {hero.title} </span>{' '}
        </div>{' '}
        <div className={styles.body}> {renderRichText(body, options)} </div>{' '}
        {blogs.length > 0 && (
          <div className={styles.recommendation}>
            <h3 className={styles.readmore}> Baca lainnya </h3>{' '}
            <div className={styles.cards}>
              {' '}
              {blogs.map(item => (
                <Card
                  key={item.id}
                  slug={item.slug}
                  hero={item.hero.fluid}
                  category={item.category}
                  createdAt={item.createdAt}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}{' '}
            </div>{' '}
          </div>
        )}{' '}
      </div>
      {isIpadPro ? <Intro header={true} /> : <Intro />}{' '}
    </div>
  )
}

export const query = graphql`
  query getSingleBlogAndRecommendation($slug: String, $id: String) {
    blog: contentfulBlogs(slug: { eq: $slug }) {
      title
      subtitle
      published: createdAt(locale: "ID", formatString: "D MMM, YYYY")
      brief {
        brief
      }
      createdAt
      updatedAt
      keywords
      slug
      tags
      category {
        name
        slug
      }
      hero {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        fixed {
          height
          width
        }
        file {
          url
        }
        title
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            # contentful_id is required to resolve the references
            contentful_id
            __typename
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
            title
          }
        }
      }
    }
    allContentfulBlogs(
      sort: { order: DESC, fields: createdAt }
      limit: 2
      filter: { id: { ne: $id } }
    ) {
      nodes {
        hero {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        category {
          name
        }
        createdAt(locale: "ID", formatString: "D MMM, YYYY")
        title
        subtitle
        slug
        id
      }
    }
    back: file(relativePath: { eq: "Back.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

BlogTemplate.propTypes = {
  data: propTypes.object.isRequired
}

export default BlogTemplate
