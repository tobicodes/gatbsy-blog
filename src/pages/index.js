import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Divider } from 'antd'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const siteTitle = 'young tarantula'
    // const siteTitle = 'tobias'
    const siteTitle = 'the skeptical optimist'
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allMarkdownRemark.edges', [])

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title.toLowerCase() || node.fields.slug
          const synopsis = get(node, 'frontmatter.synopsis')
          const readingTime = get(node, 'fields.readingTime.text')

          console.log(node)
          
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title} 
                </Link>
              </h3>
              <small>{node.frontmatter.date}  |  <span style={{color: 'lightsalmon'}}>{`${readingTime}`} </span></small> 
              <p>{synopsis}</p>
              {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            synopsis
          }
        }
      }
    }
  }
`
