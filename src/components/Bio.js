import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Icon } from 'antd'

import { rhythm } from '../utils/typography'

const oneLiner=null

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p>
            <span style={{marginBottom: '20em'}}>Cautious technophile. I write code and words. Sometimes, words about code too. </span>
            <br/>            
            <br/>            

            More often, I'll share commentary on technology's impact on humans and society. Oh and my learnings as a <i>chemical-turned- software engineer</i> in SF. 
            On special occasions, I'll bring you souvenirs from my previous lives - things like biotech and manufacturing. Or funny memes I catch on the interwebs. Yes, that's a terrible terrible pun.
             {/* souvenir from the many wanders my brain ventures on on the interwebs. */}
            <br />            
            <br />
            <a style={{backgroundImage: 'none'}} href={`https://twitter.com/${social.twitter}`}>
              <Icon style={{color: 'black'}} type="twitter"></Icon>        
            </a> 
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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

export default Bio
