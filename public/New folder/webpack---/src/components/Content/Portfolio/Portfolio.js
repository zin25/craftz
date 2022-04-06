import React from "react"
import {
    useStaticQuery,
    graphql
} from "gatsby"
import Image from "gatsby-image"
import * as styles from "./portfolio.module.scss"

const getAllPortfolios = graphql `
  {
    allContentfulPortfolios(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        tags
        title
        subtitle
        github
        hero {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

const Portfolio = () => {
    const {
        allContentfulPortfolios: {
            nodes: portfolios
        },
    } = useStaticQuery(getAllPortfolios)
    return ( <
        div className = {
            styles.portfolio
        } > {
            portfolios.map(portfolio => ( <
                div key = {
                    portfolio.id
                }
                className = {
                    styles.card
                } >
                <
                a href = {
                    portfolio.github
                }
                target = "_blank"
                rel = "noreferrer"
                className = {
                    styles.hero
                } >
                <
                Image fluid = {
                    portfolio.hero.fluid
                }
                /> <
                /a> <
                div className = {
                    styles.caption
                } >
                <
                a href = {
                    portfolio.github
                }
                target = "_blank"
                rel = "noreferrer"
                className = {
                    styles.title
                } >
                {
                    portfolio.title
                } <
                /a> <
                p className = {
                    styles.subtitle
                } > {
                    portfolio.subtitle
                } < /p> <
                div className = {
                    styles.tags
                } > {
                    portfolio.tags.map((tag, index) => ( <
                        span key = {
                            index
                        }
                        className = {
                            styles.tag
                        } > {
                            tag
                        } <
                        /span>
                    ))
                } <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div>
    )
}

export default Portfolio