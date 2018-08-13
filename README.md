# https://mojaave.com
[![deploys by netlify](https://img.shields.io/badge/deploys%20by-netlify-00c7b7.svg)](https://www.netlify.com)

This is developed with ❤️ using [Bootstrap V4](https://getbootstrap.com/) & [Gatsby V2](https://www.gatsbyjs.org/) .  

## Live
See it in action [here](https://mojaave.com/).

## Lighthouse scores

![Lighthouse scores](https://lighthouse.now.sh/?perf=99&pwa=100&a11y=80&bp=100&seo=100)

## Installation
If you want to use this template
```
Installation
gatsby new gatsby-site https://github.com/mhjadav/mojaave
```
```
Start Editing
gatsby develop

```

## Features
- Designed as a minimalistic website
- Animation to make it little jazzy
- Font icons using `font-awesome`
- Google Analytics using `gatsby-plugin-google-analytics`
- Sitemap enabled `gatsby-plugin-sitemap`
- Robots.txt enabled `gatsby-plugin-robots-txt`
- Prerendered Open Graph tags for rich sharing
- Site config to add data
- Make your site ready now
- Offline support
- Web App Manifest support

## Customization
- Configure site meta data and add your GA tracking ID in `gatsby-config.js`
- Add your details at data/site-config.js
```js
module.exports = {
    name:"Mahipat Jadav",
    siteTitle: "Mahipat Jadav,Full stack developer,Javascript,ReactJs,India", // Site title.
    siteLogo: `${__dirname}/../src/static/images/mahipat.jpg`,
    siteUrl: "https://www.mojaave.com", // Domain of your website without pathPrefix.
    siteKeyword:"mahipat Jadav, full stack developer, javascript developer, reactjs developer, Angular, nodejs developer, graphql, jquery, lodash, typescript, software engineer, web developer, front-end developer, responsive web design",
    siteDescription: "Full stack developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby", // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: "", // GA tracking ID.
    userName: "Mahipat Jadav", // Username to display in the author segment.
    userTwitter: "mhjadav", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Ahmedabad, Gujarat, India", // User location to display in the author segment.
    userAvatar: "../static/images/mahipat.jpg", // User avatar to display in the author segment.
    favicon32:`../static/images/mahipat32.jpg`,
    favicon16:`../static/images/mahipat16.jpg`,
    ogImage: `../static/images/mahipat250.jpg`,
    userDescription: "Full stack developer, I have designed and developed fast and responsive web applications using Javascript, ReactJS, Redux, NodeJs, GraphQl, Bootstrap, Gatsby", // Website description used for RSS feeds/meta description tag.
    userPhone:"+91-9898226919",
    userEmail:"mj@mojaave.com",
    copyright: "Copyright © 2018. @mahipat", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#5a76b9", // Used for setting manifest and progress theme colors.
    backgroundColor: "#fff" // Used for setting manifest background color.
  };
```

