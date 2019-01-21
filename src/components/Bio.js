import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Icon } from 'antd'

import { rhythm } from '../utils/typography'


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        
        return (
          <div
            style={{
              // backgroundColor: 'peachpuff',
              // border: '1px solid peachpuff',
              // borderRadius: '6px',
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
            <p style={{textAlign: 'justify'}}>
            {/* <span style={{marginBottom: '20em'}}>cautious (sketpical) technophile. I write code and words. Sometimes, words about code too. </span> */}
            {/* <span style={{marginBottom: '20em'}}>I write words and code. Sometimes, words about code. Your favourite tech-loving, tech-building, tech critic. </span> */}
            
            <span style={{marginBottom: '20em'}}>former toddler. skeptical optimist. I write code and essays.</span>
            {/* code and words */}
            <br />
            <br />
            {/* <span>I'll bring you treasures such as an optimistic outlook on tech. critical outlook on tech. ethics. designer babies. what chemical engineering even is. 
              </span> */}
            <span>designer babies. tech addiction. free speech. nutrition fads. Gwyneth Paltrow diets. I'm coming for you. 
              </span>

              <br />

              <span>come because I guilted you to check my blog. stay for the self-deprecating humor and hopefully intelligent quips</span>
            {/* <span style={{marginBottom: '20em'}}>Writer of words and code. Your favourite tech-loving, tech critic. No, that's not hypocritical. </span>
            <span> note to self - use picture from Insta that Fiyin made of me as the profile pic for this blog </span>
            Sometimes, words about code. Your favourite tech-loving, tech-building, tech critic.  */}

{/* expect commentary on the impact of tech, big issues we need to solve and random things. I promise to bring you souvenirs from my former lives (chocolate manufacturing, chemical engineering, living in the UK/ Nigeria.)  */}
            
            {/* <br />
            <br /> */}
            {/* I explore the relationship between tech and humans - what we are doing with tech. what tech is doing to us. and why you Gen Z's can't open PDFs */}
            {/* <blockquote>we criticise the things and people we love for we see the immense potential they have to do good even great things - Anonymous quote</blockquote> */}
            
            {/* Other times, I explore the human relationship with tech - what are we doing with tech? what is it doing to us?  how do you win at Tinder?  </span> */}

             {/* what tech is doing to us - you, me and yes, your little nuggets too. Take it from me, I'm an engineer  */}
            {/*the good and the bad */}
            
            {/* Here, I'll bring you commentary on technology's impact on the things that really matter - humans, love, relationships, careers . Commentary from a professional software engineer who did not attend Stanford, but works in "big tech". </span> */}
            {/* Like a loving parent, I berate tech because I know we can do much better </span> */}
            {/* <br/>            
            <br/> 

            software engineer. <i>ex-chemical engineer. yes, there's a huge difference.</i>. cautious technophile. previous lives include manufacturing🏭 and biotech🔬.  */}

            {/* More often, I'll share commentary on technology's impact on humans and society. Oh and my learnings as a <i>chemical-turned- software engineer</i> in SF. 
            On special occasions, I'll bring you souvenirs from my previous lives - things like biotech and manufacturing. Or funny memes I catch on the interwebs. Yes, that's a terrible terrible pun. */}
             
             {/* but not like a blind fanboy. */}
             
             {/* souvenir from the many wanders my brain ventures on on the interwebs. */}
            <br />            
            <br />
            <a style={{backgroundImage: 'none'}} target='_blank' rel="noopener noreferrer" href={`https://twitter.com/${social.twitter}`}>
              <Icon style={{color: 'moccasin'}} type="twitter"></Icon>        
              <Icon style={{color: 'lightsalmon'}} type="twitter"></Icon>        
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
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
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
