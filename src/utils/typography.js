// import Typography from 'typography'
// // import Wordpress2016 from 'typography-theme-wordpress-2016'
// import doelgerTheme from 'typography-theme-doelger'

import Typography from 'typography'
import doelgerTheme from 'typography-theme-doelger'

const typography = new Typography(doelgerTheme)




// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     'a.gatsby-resp-image-link': {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

// const typography = new Typography(doelgerTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
