import React from "react"
import {
    useStaticQuery,
    graphql
} from "gatsby"
import Card from "./Card"
import * as styles from "./blog.module.scss"

const getAllBlogs = graphql `
  {
    allContentfulBlogs(sort: { order: DESC, fields: createdAt }) {
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
  }
`

const Blog = () => {
    const {
        allContentfulBlogs: {
            nodes: blogs
        },
    } = useStaticQuery(getAllBlogs)
    return ( <
        div className = {
            styles.blog
        } > {
            blogs.map(blog => ( <
                Card key = {
                    blog.id
                }
                slug = {
                    blog.slug
                }
                hero = {
                    blog.hero.fluid
                }
                category = {
                    blog.category
                }
                createdAt = {
                    blog.createdAt
                }
                title = {
                    blog.title
                }
                subtitle = {
                    blog.subtitle
                }
                />
            ))
        } <
        /div>
    )
}

export default Blog