import React from "react"
import {
    graphql,
    useStaticQuery,
    Link
} from "gatsby"
import * as styles from "./Intro.module.scss"
import Image from "gatsby-image"

const getImages = graphql `
  {
    fluid: file(relativePath: { eq: "Dimas Miftahul Huda.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    github: file(relativePath: { eq: "GitHub.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instagram: file(relativePath: { eq: "Instagram.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    twitter: file(relativePath: { eq: "Twitter.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    linkedin: file(relativePath: { eq: "LinkedIn.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Intro = ({
    header
}) => {
    const data = useStaticQuery(getImages)
    return ( 
      <div className = {
            styles.intro
        } > {
            header && ( <
                Link to = "/"
                className = {
                    styles.webtitle
                } >
                Dimas Miftah <
                /Link>
            )
        }

        <
        div className = {
            styles.profile
        } >
        <
        Link to = "/"
        className = {
            styles.avatar
        } >
        <
        Image fluid = {
            data.fluid.childImageSharp.fluid
        }
        alt = "Home" / >
        <
        /Link> <
        div className = {
            styles.socials
        } >
        <
        a href = "https://github.com/dimasmiftah"
        target = "_blank"
        rel = "noreferrer"
        className = {
            styles.icon
        } >
        <
        Image fluid = {
            data.github.childImageSharp.fluid
        }
        alt = "GitHub Page" /
        >
        <
        /a> <
        a href = "https://instagram.com/dimas.mfth"
        target = "_blank"
        rel = "noreferrer"
        className = {
            styles.icon
        } >
        <
        Image fluid = {
            data.instagram.childImageSharp.fluid
        }
        alt = "Instagram Page" /
        >
        <
        /a> <
        a href = "https://twitter.com/dimasmfth"
        target = "_blank"
        rel = "noreferrer"
        className = {
            styles.icon
        } >
        <
        Image fluid = {
            data.twitter.childImageSharp.fluid
        }
        alt = "Twitter Page" /
        >
        <
        /a> <
        a href = "https://linkedin.com/in/dimas-miftahul-huda-374111163"
        target = "_blank"
        rel = "noreferrer"
        className = {
            styles.icon
        } >
        <
        Image fluid = {
            data.linkedin.childImageSharp.fluid
        }
        alt = "LinkedIn Page" /
        >
        <
        /a> <
        /div> <
        /div> <
        p className = {
            styles.bio
        } >
        Mahasiswa Teknik Informatika {
            " "
        } <
        a target = "_blank"
        rel = "noreferrer"
        href = "https://unikom.ac.id"
        className = {
            styles.highlight
        } >
        UNIKOM <
        /a>
        .Frontend Engineer {
            " "
        } <
        a target = "_blank"
        rel = "noreferrer"
        href = "https://codelabs.unikom.ac.id"
        className = {
            styles.highlight
        } >
        UNIKOM CodeLabs <
        /a>
        .Konten kreator {
            " "
        } <
        a target = "_blank"
        rel = "noreferrer"
        href = "https://www.tiktok.com/@dimasmiftah?lang=en"
        className = {
            styles.highlight
        } >
        TikTok <
        /a>, hobi {
            " "
        } <
        a target = "_blank"
        rel = "noreferrer"
        href = "https://instagram.com/standupindo_subang"
        className = {
            styles.highlight
        } >
        standup <
        /a>, dan gemar membuat {
            " "
        } <
        a target = "_blank"
        rel = "noreferrer"
        href = "https://dribbble.com/dimasmiftah"
        className = {
            styles.highlight
        } >
        desain interaksi <
        /a>
        . <
        /p> <
        a href = "mailto:dimas.mfth@gmail.com"
        className = {
            styles.hibutton
        } >
        Sapa saya!
        <
        /a> <
        /div>
    )
}

export default Intro