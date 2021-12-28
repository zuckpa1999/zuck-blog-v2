import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"

import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

// let featuredImgFluid
const SearchedPosts = ({ results }) =>
  results.length > 0 ? (
    results.map(node => {
      const date = node.date
      const title = node.title || node.slug
      const description = node.description
      const excerpt = node.excerpt
      const slug = node.slug
      //  let post = data.markdownRemark
      //  featuredImgFluid = results.post.frontmatter.featuredImage.childImageSharp.fluid
      return (
        <div key={slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={`/blog${slug}`}>
              {title}
            </Link>
          </h3>
          <small>{date}</small>

          <p
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
          />
        </div>
      )
    })
  ) : (
    <p style={{ textAlign: "center" }}>
      Sorry, couldn't find any posts matching this search.
    </p>
  )

const AllPosts = ({ posts }) => (
  <div style={{ margin: "20px 0 40px" }}>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div class="max-w-full rounded overflow-hidden shadow hover:shadow-lg mt-10 ">
          <Link to={`/blog${node.fields.slug}`}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <div class="px-6 py-4">
              <div class="font-medium text-2xl font-serif">{title}</div>
              <small className="font-sans font-thin">{node.frontmatter.date}</small>
              <p className="text-gray-700 text-base font-sans mt-3"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
            <div class="px-6 pt-4 pb-2">
              <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2 font-sans">#photography</span>
              <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2 font-sans">travel</span>
              <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2 font-sans">#winter</span>
            </div>
          </Link>
        </div>


      )
    })}
  </div>
)

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    JSON.parse(localSearchBlog.store)
  )

  return (
    <>

      {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
    </>
  )
}

export default SearchPosts


// - implement tag?
// - add color / wow factor
// - buy domain
