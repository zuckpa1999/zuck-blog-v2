import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"
import Header from "../components/header"
import "typeface-montserrat"

class Blog extends React.Component {




  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <NavBar/> */}
        <SEO title="All posts" />
        {/* <Header/> */}
        <Header />


        <SearchPosts
          posts={posts}
          data={data}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <Bio />
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tag  
          }
        }
      }
    }
  }
`
