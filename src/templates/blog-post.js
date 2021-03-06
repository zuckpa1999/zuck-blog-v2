import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
// import './testcss.css'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {/* <div className="mt-11"> */}
        {/* <Header /> */}
        {/* </div> */}
        {/* styling top part of the blog */}
        <h1 className="font-normal text-4xl text-center">{post.frontmatter.title}</h1>
        {/* <p
          style={{
            // ...scale(-1 / 25),
            fontSize: 20,
            display: `block`,
            marginBottom: rhythm(2),
            // marginTop: rhythm(-),
          }}
        > */}
        <p className="font-serif text-xs text-center font-thin">
          {post.frontmatter.date}
        </p>
        {/* <h1>blabla</h1> */}
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        {/* <h1>blabla</h1> */}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginTop: 30
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout >
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
