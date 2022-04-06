import React from "react"
import {
    useStaticQuery,
    graphql,
    Link
} from "gatsby"
import Image from "gatsby-image"
import * as styles from "./tabs.module.scss"

const getIcon = graphql `
  {
    blog: file(relativePath: { eq: "Blog.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    achievment: file(relativePath: { eq: "Achievment.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    portfolio: file(relativePath: { eq: "Portfolio.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const activeStyle = {
    background: "var(--btn-text)",
    transition: ".2s",
}

const Navbar = () => {
    const data = useStaticQuery(getIcon)
    return ( <
        div className = {
            styles.tabs
        } >
        <Link className = {
            styles.tab
        }
        to = "/"
        exact = "true"
        activeStyle = {
            activeStyle
        } >
        <
        div className = {
            styles.icon
        } >
        <
        Image fluid = {
            data.blog.childImageSharp.fluid
        }
        alt = "Blog" / >
        <
        /div> <span > Blog < /span> 
        </Link>

        <
        Link className = {
            styles.tab
        }
        to = "/pencapaian"
        activeStyle = {
            activeStyle
        } >
        <
        div className = {
            styles.icon
        } >
        <
        Image fluid = {
            data.achievment.childImageSharp.fluid
        }
        alt = "Pencapaian" /
        >
        <
        /div> <
        span > Pencapaian < /span> <
        /Link>

        <
        Link className = {
            styles.tab
        }
        to = "/portofolio"
        activeStyle = {
            activeStyle
        } >
        <
        div className = {
            styles.icon
        } >
        <
        Image fluid = {
            data.portfolio.childImageSharp.fluid
        }
        alt = "Portfolio" / >
        <
        /div> <
        span > Portofolio < /span> <
        /Link> <
        /div>
    )
}

export default Navbar