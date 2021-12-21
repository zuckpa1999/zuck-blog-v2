import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"

import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  margin: 0 auto ${rhythm(1)};
  width: 100%;
  height: 3rem;
  background: #fdfdfd;

  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }

  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`

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
        //   <div key={node.fields.slug} className="mb-10">
        //      <Link to={`/blog${node.fields.slug}`}>
        //     <h3
        //       style={{
        //         marginBottom: rhythm(1 / 4),
        //       }}
        //     >
        //       {/* className="text-3xl font-bold underline" */}
        //       <Link  className="text-2xl font-bold shadow-sm" to={`/blog${node.fields.slug}`}>
        //         {title}
        //       </Link>
        //     </h3>

        //     <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        //     <small>{node.frontmatter.date}</small>
        //     {/* className="text-3xl font-bold underline" */}
        //     <p className="text-base"
        //       dangerouslySetInnerHTML={{
        //         __html: node.frontmatter.description || node.excerpt,
        //       }}
        //     />
        // </Link>
        //   </div>
        <div class="max-w-full rounded overflow-hidden shadow hover:shadow-lg mt-10 ">
          <Link to={`/blog${node.fields.slug}`}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <div class="px-6 py-4">
              <div class="font-semibold text-2xl font-serif">{title}</div>
              <small className="font-sans ">{node.frontmatter.date}</small>
              <p className="text-gray-700 text-base font-sans mt-3"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
            <div class="px-6 pt-4 pb-2">
              <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-sans">#photography</span>
              <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-sans">travel</span>
              <span className="inline-block border border-gray-400 hover:border-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-sans">#winter</span>
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
      {/* <SearchBar>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search all posts"
          value={query}
          onChange={e => {
            navigate(
              e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
            )
            setQuery(e.target.value)
          }}
        />
      </SearchBar> */}
      {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
    </>
  )
}

export default SearchPosts
