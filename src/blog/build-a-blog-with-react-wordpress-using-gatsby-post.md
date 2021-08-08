---
title: "Build a blog with React, Wordpress using Gatsby"
layout: "base.njk"
---

# Build a blog with React, Wordpress using Gatsby

Earlier this month I was thinking of building a static but want a blog on it, so I search online and found a new guy in the market is trending (Gatsby),

Initially, I thought I need to learn and implement will take a lot of time, but I got to a point, let's give a try. and found gatsby documentation is so good that it made my life super easy and it’s a lot easier to understand even if you are new to this.

So if you don’t know Gatsby, Gatsby is a static site generator, uses react and if you are a fan of React you will love Gatsby.

The important thing with Gatsby is you can connect with any data source and sync data locally, then you can use graphql local schema to query data and generate pages [Read More](https://www.gatsbyjs.org/)

Let’s come back to the point why I am writing this blog, Create a blog in 10 Step using Gatsby and data source as WordPress.

**Step 1 —**

Install [GatsbyCLI](https://www.gatsbyjs.org/docs/)

**Step 2 —**

Run

gatsby new gatsby-example-site

Which will create a folder with a set of Gatsby boilerplate code include basic page to start with and config files(gatsby-config.js, gatsby-node.js, gatsby-browser.js, gatsby-ssr.js), out of this we don’t need all, we will see more detail in next step, for now, keep all as it is.

**Step 3 —**

    cd gatsby-example-site
    gatsby develop

your site is up and running at — [http://localhost:8000/](http://localhost:8000/)

wow! let’s put some data in it.

**Step 4 —**

Next step is to fetch data from WordPress using WordPress JSON API

To enable JSON API — Go to [**https://developer.wordpress.com/apps/new/](https://developer.wordpress.com/apps/new/)**

Fill all fields and create an app

Go to [**https://developer.wordpress.com/apps](https://developer.wordpress.com/apps)**

Open your app and Go to the bottom of the page

**OAuth Information** section, you will find all auth info here, that we will use in next step.

**Step 5 —**

Create a .**env** file in the root of your directory, this to keep you auth info same and in common config file(Not going in details)

Add keys, you can use any key name this what I have used as per my preference.

    WORDPRESS_USERNAME= ‘your WordPress id’
    WORDPRESS_PASSWORD = ‘password’
    WORDPRESS_SECRET= ‘Copy **Client Secret **OAuth info section’
    WORDPRESS_CLIENTID = ‘copy **Client ID** OAuth info section’

Yo! you are now ready to pull data, let’s configure it.

**Step 6 —**

Add gatsby WordPress plugin and also image plugin, image plugin we will use later

    yarn add gatsby-image gatsby-plugin-sharp gatsby-transformer-sharp gatsby-source-wordpress

Once a plugin is added let's configure it

Open **gatsby-config.js**

You will find some code is already added in that,
> ‘gatsby-plugin-react-helmet’ (Use to create site metadata)
> ‘gatsby-plugin-manifest’ (Use to create a manifest.json file)
> ‘gatsby-plugin-offline’ (Use to add service worker, Now your site is PWA)

Keep this as it is, adds a new plugin in the list -

To get a value of env variable in js file you need to import
> yarn add dotenv

    //Add on top of gatsby-config.js file
    require('dotenv').config({

         path: '.env',

    });

    //Add in plugin blog of gatsby-config.js file

    {
          resolve: 'gatsby-source-wordpress',
          options: {
            baseUrl: 'nxdigital.wordpress.com',
            protocol: 'https',
            hostingWPCOM: true,
            useACF: false,
            auth: {
              wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
              wpcom_app_clientId: process.env.WORDPRESS_CLIENTID,
              wpcom_user: process.env.WORDPRESS_USERNAME,
              wpcom_pass: process.env.WORDPRESS_PASSWORD,
            },
            verboseOutput: false,
            searchAndReplaceContentUrls: {
              sourceUrl: '[https://nxdigital.wordpress.com'](https://nxdigital.wordpress.com'),
              replacementUrl: '[https://nxdigital.com.au'](https://nxdigital.com.au'),
            },
          },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'

I am not going in details of each field here you can find it out [here](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/)

But changes you need to make is as below -

1. Update base URL to your WordPress site URL, and also update same in **searchAndReplaceContentUrls**

If you have the same key in a .env file then you can keep everything else as it is, else replace with your keys

Now you are ready to fetch data, run

    gatsby develop

You will see some logs printed in your console as below, if not check auth info or other configs.

success onPreBootstrap — 0.012 s
⠐ source and transform nodes -> wordpress__wp_v2 fetched : 1
⠂ source and transform nodes -> wordpress__wp_nxdigital.wordpress.com fetched: 1
⠐ source and transform nodes -> wordpress__POST fetched : 3
⠈ source and transform nodes -> wordpress__PAGE fetched : 3
…more

**Step 7 —**

Let’s check, you got the correct data —

Go to — [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

If you are surprised what is this, it’s tool(GraphiQL) to write GraphQl Query and check out, it has a bunch of other features not going in details.

Sample Query —

    {
    allWordpressPost(sort: { fields: [date] }) {
          edges {
            node {
                 title
            content
            excerpt
            date(formatString: "DD, MMM")
            categories {
                id
                name
            }
            tags {
                id
                name     
            }
            author{
                name
                description
                avatar_urls{
                  wordpress_48
                }
            }
            slug
            }
          }
        }
    }

So if everything is fine now then let’s paint it.

**Step 8 —**

Next step is to create a blog page and post page

Add** a blog.js **file in the pages folder

Sample code for a blog page
> [https://github.com/mhjadav/wordpress-blog-gatsby/blob/master/src/pages/blog.js](https://github.com/mhjadav/wordpress-blog-gatsby/blob/master/src/pages/blog.js)

Create a **templates** folder inside **src**

Add a **post.js** file in templates

Sample code for post page
> [https://github.com/mhjadav/wordpress-blog-gatsby/blob/master/src/templates/post.js](https://github.com/mhjadav/wordpress-blog-gatsby/blob/master/src/templates/post.js)
> Now to create post page, we need to use createPages API gatsby-node.js, CreatePages API exposes graphql function which we can use to query data, Maybe you are wondering how you are getting data, In PreBootstrap call gatsby fetched data from word press and now you can run a query against local WordPress Graphql schema. (For more detail i will write another blog)

Sample code of gatsby-node.js
> [https://github.com/mhjadav/wordpress-blog-gatsby/blob/master/gatsby-node.js](https://github.com/mhjadav/wordpress-blog-gatsby/blob/master/gatsby-node.js)

If you are using the same HTML, then copy the style and other required code from —
> [https://github.com/mhjadav/wordpress-blog-gatsby](https://github.com/mhjadav/wordpress-blog-gatsby)

Run

    gatsby develop

Go to — [http://localhost:8000/blog/](http://localhost:8000/blog/)

Boom! Your blog is ready to go live,

Step 9 —

Let’s commit your code to git, If you are new to git follow this link

[https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

Now we host your blog on Netlify

If you are new to Netlify, create an account, Go to [https://app.netlify.com/](https://app.netlify.com/)

I use Github to log in, you can use any other method of your choice.

Now sync your code from git, you will find the new site button on top, click on it and link your git account

You will see your repo listed here, select a repo

Before clicking on deploy site you need to add env variable here

so click on an advance section and add all variable you have in .env file, you can add multiple variables here.

Now click on deploy site

Boom! your blog is live

Step 10 —

Now you may be wondering, what if I post a new blog on WordPress

We have a solution for that also -

Go to —

[https://app.netlify.com/sites/wordpress-gatsby/settings/deploys#build-hooks](https://app.netlify.com/sites/wordpress-gatsby/settings/deploys#build-hooks)

    settings > build & deploy

    build hooks

Click on add new build hook

Enter a name and create, you are done,

Copy the hook URL

Go To —

[https://mojaave.wordpress.com/wp-admin/options-general.php?page=webhooks](https://mojaave.wordpress.com/wp-admin/options-general.php?page=webhooks)

    settings > webhooks

Click on add new webhook

Select publish post

Select ID

Enter URL you have created on Netlify

And you are done, Now your site will be in complete sync with WordPress post.

I hope this is useful to you.

Github link — [https://github.com/mhjadav/wordpress-blog-gatsby](https://github.com/mhjadav/wordpress-blog-gatsby)

Demo Link — [https://wordpress-gatsby.netlify.com/blog/](https://wordpress-gatsby.netlify.com/blog/)

Follow me on twitter — [https://twitter.com/mhjadav](https://twitter.com/mhjadav)

I will write another blog for more detail on adding react-helmet to add meta info relevant to post, enable service worker, sitemap etc.

Thanks for reading

Published on [Medium](https://medium.com/@mjadav/build-a-blog-with-react-wordpress-using-gatsby-4cdfb6ce2004)