import React from "react"
import {
    useStaticQuery,
    graphql
} from "gatsby"
import * as styles from "./achievment.module.scss"
import Image from "gatsby-image"

const getAllAchievments = graphql `
  {
    allContentfulAchievments(sort: { fields: date, order: DESC }) {
      nodes {
        emote
        hero {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        date(locale: "ID", formatString: "D MMMM, YYYY")
        title
        body
        id
      }
    }
  }
`
const Achievment = () => {
    const {
        allContentfulAchievments: {
            nodes: achievments
        },
    } = useStaticQuery(getAllAchievments)
    return ( <
        div className = {
            styles.achievment
        } > {
            achievments.map(achievment => ( <
                div className = {
                    styles.card
                }
                key = {
                    achievment.id
                } >
                <
                h2 > {
                    achievment.emote
                } < /h2> <
                div className = {
                    styles.hero
                } >
                <
                Image fluid = {
                    achievment.hero.fluid
                }
                /> <
                /div> <
                span className = {
                    styles.date
                } > {
                    achievment.date
                } < /span> <
                div >
                <
                h3 className = {
                    styles.title
                } > {
                    achievment.title
                } < /h3> <
                p className = {
                    styles.body
                } > {
                    achievment.body
                } < /p> <
                /div> <
                /div>
            ))
        } <
        /div>
    )
}

export default Achievment