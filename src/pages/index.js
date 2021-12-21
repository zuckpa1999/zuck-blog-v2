import React from "react"
import { Link, graphql } from "gatsby"
import Social from "../components/social"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import NavBar from "../components/navbar"
import SearchPosts from "../components/searchPosts"
import Header from "../components/header"
import "typeface-montserrat"
import Img from "gatsby-image"

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
        {/* <Social /> */}
        {/* <div class="max-w-full rounded overflow-hidden shadow-lg mt-10">
          <img src={require("../../content/blog/images/uploads/IMG_0759.jpeg")} />
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-1 font-serif">The Coldest Sunset</div>
            <p class="text-gray-700 text-base font-sans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-sans">#photography</span>
            <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-sans">travel</span>
            <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-sans">#winter</span>
          </div>
        </div> */}
        {/* <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link> */}
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
          }
        }
      }
    }
  }
`
