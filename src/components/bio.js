/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
// import '../styles/global.css'
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Barameerak Koonmongkon, Full-time software engineer, part-time data analyst
              {` `}
              <a href={`https://github.com/zuckpa1999?tab=repositories`}>
                Follow me on Github
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
query BioQuery {
  avatar: file(absolutePath: { regex: "uploads/IMG_0759.jpeg/" }) {
    childImageSharp {
      fixed(width: 79, height: 62) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  site {
    siteMetadata {
      author
      social {
        twitter
      }
    }
  }
}
`

const Container = styled.div`
  display: flex;
`

export default Bio
