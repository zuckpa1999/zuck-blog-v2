import React from "react"
import { Link, graphql } from "gatsby"

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
        <Bio />



        {/* <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
              <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div class="flex items-center">
              <Img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
              <div class="text-sm">
                <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                <p class="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div> */}
        <SearchPosts
          posts={posts}
          data={data}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <div class="max-w-full rounded overflow-hidden shadow-lg mt-10">
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
        </div>
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
