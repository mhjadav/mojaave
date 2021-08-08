---
title: "E2E testing with Cypress & Bitbucket Pipelines"
layout: "base.njk"
---

# E2E testing with Cypress & Bitbucket Pipelines

A look into my experience with setting up cypress, writing assertion, running test, fixing issues, fixing test config, setting up pipeline and deploying successfully in production.

![](https://cdn-images-1.medium.com/max/6440/1*bQwN2blu47CtIhD5RhXhfQ.png)

At **Noon**, we are a fast moving team with an always evolving product and rapid experiments. As a result, building new features and fixing existing issues go hand in hand. While unit tests help us handle specific components and modules, there is always a possibility that changes in another modules end up affecting others. It becomes a problem if these get missed in regression.

This is where **End to End testing** comes into the picture. With the help of a tool like Cypress, E2E testing helps developers progress forward without breaking existing feature and makes QA’s life easy. It is specially important for us at Noon as it helps us move quick experiments as well as important features quickly and safely.

## What is E2E testing, (feat. Cypress)?

As a refresher, let’s see what E2E testing does. Most basically, E2E test cases written with Cypress are,
> *a set of commands that programmatically simulates an environment and executes a set of steps that tests a feature end to end*

For example, to validate Noon login, we can define a test case which will do the following,

1. Open [https://noonacademy.com/login**](https://noonacademy.com/login**)

1. Select county (if the country code for the number test is going to enter does not match the default selected country)

1. Enter phone number

1. Enter OTP

1. Select profile

1. Should redirect to discovery page

The test goes through each step as defined to make sure everything is working fine. If there is a breaking change or error anywhere, then test cases fails, and i get to know before deploying code changes.

Let’s say next week a new feature comes up; adding **Login With Google.** If I have already have an E2E test for the normal login flow, I don’t have to worry about multiple flows now, I can just add another one and it will be taken care of.

## Getting started with Cypress

Setting up cypress is as easy as just typing in the add command. I’ll be using yarn throughout this article, but you can do the same with npm,

    yarn add cypress

This will add cypress package and it’s dependencies in your node_modules folder in your root. Once that is done, you can go ahead and add the following commands to your package.json scripts object,

    yarn cypress:open
    yarn cypress:run
    yarn cypress run --record --key PRODUCT_KEY

The first command is used to open the cypress GUI
The second command is used to run cypress in the command line
The third records test result on cypress dashboard, for this you need to add productId in cypress.json

When you run cypress for the first time, cypress adds the required boilerplate (Folder and cypress.json) by default.

Here are the folders that it generates,

1. **Fixtures **— is to set data, intercept API request to avoid connection with the server

1. **Integration** — Cypress test cases hide in here

1. **Plugins** — helps you run some operations when cypress loads. Plugins run on load

1. **Support** — is for helper commands and helper events

By default, the **cypress.json** file empty ({}), you can fill it up with this minimal configuration

    {
      chromeWebSecurity: false,
      baseUrl: '<http://localhost:2020>',
      userAgent: 'testing',
      blockHosts: ['*.google.com'],
      projectId: '',
    }

This is what each line above means,
1. Disable security to validate third party iframe, read value from element inside iframe
2. root url of the app
3. useful when you want to not run piece of code if it’s e2e test
4. block third party host, like analytics library or error tracking library
5. Copy value from cypress dashboard, useful if you want to record test result on cypress dashboard

That’s it! Cypress is up and running! 🎉🎉

## Writing test cases

Now it’s time to start adding test cases. But I am not going to focus on that here. Instead, here is a helpful link to Cypress’s list of examples that are posted on Github. They are comprehensive and very helpful, do check them out.

[https://github.com/cypress-io/cypress-example-recipes.git](https://github.com/cypress-io/cypress-example-recipes.git)

## Challenges I faced, and Solutions

What I am going to focus on are the problems/issues that I faced while working with Cypress and how I resolved them. Starting with the config,

### 1. Separate environment config (local dev, qa, dev remote)

1. Create config file for each environment

1. Add plugin to read config file

1. Update cypress environment config with value in config file Use this plugin to update config

    module.exports = (on, config) => {
      const file = config.env.configFile || 'development';
      return readConfigFile(file);
    };

### 2. Testing third party iFrames

To validate element inside third party iframe is a security issue, but if you want to write E2E tests, then you can do it in chromium based browsers. To do that,

1. Set chromeWebSecurity: false

1. Install **cypress-iframe** — has method to check **iframeLoaded** and find element inside iframe

1. If you are writing test case for multiple browsers(Firefox, chrome, IE), then use **skipOn** method to not run test case in non chromium browser

Example to find input and enter value

    cy.iframe('#cardNumber').find('#checkout-frames-card-number').type('1234567890123456').should('have.value', '1234 5678 9012 3456');

### 3. Testing multiple flow on same page

To validate multiple features on the same page, you will have to write separate assertions. For instance, to validate cash and credit card payments, you will have to write two assertions.

What cypress does here is clear browser storage between each assertion. When that happens, login token also gets cleared and you need to login again.

To overcome this, you have to define a cypress command to save and restore localStorage. For example, add command in **cypress/support/commands.js**

    beforeEach(() => {
        cy.restoreLocalStorage();
      });  afterEach(() => {
        cy.saveLocalStorage();
      });

You should now be able to persist login between two assertions.

### 4. Login details, page input value repeated in multiple test files

Fixtures are a really helpful way to avoid this kind of duplication. For our use case, we are just using [basic fixtures function](https://docs.cypress.io/api/commands/fixture#Arguments).

To avoid duplicate values like phone number to login

1. Create JSON file inside fixtures folder
{ phone_number: '1234567890' }

1. Read fixtures json file content inside assertion

1. Open **cypress/fixtures/phone-number.json**

    cy.fixture(‘phone-number’).then((phoneNumber) => {
     console.log(phoneNumber);
    });

Now you don’t have to duplicate phoneNumber in multiple assertions. Just import using fixtures as use.

### 5. Registering service worker

Service worker registration and code exec throwing error and breaking app when running cypress. At Noon, as we are simply testing major feature flows as of now, we don’t need service worker in End to End testing.

We fix this by not running serviceWorker register code block

1. Add **userAgent** in **cypress.json**

1. Use navigator.userAgent to not execute service worker code

    if (navigator.userAgent.indexOf('testing-mode') > -1) {
      console.log('execute me');
    } else {
      console.log("i don't like e2e testing");
    }

### 6. Handling exceptions

To avoid app crashes in case of any exceptions, this event in cypress is quite helpful. It returns false if there is any exception when you run the tests,

Open **cypress/support/index.js**

    Cypress.on('uncaught:exception', (err, runnable) =>
      false,
    );

### 7. Validate Audio Input With Cypress

Noon Academy is all about classroom experience, and classroom is driven by audio, it’s very important for us that classroom feature run successfully. 
But how to simulate audio in your tests? Well, there is a browser flag which can trigger a fake audio input.

To do that, open **cypress/plugin/index.js**, and add this code

    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--use-fake-device-for-media-stream');
          launchOptions.args.push('--use-fake-ui-for-media-stream');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--use-file-for-fake-audio-capture=cypress/fixtures/classroom-audio.wav');
        }
        return launchOptions;
      });

## How to setup bitbucket pipeline for cypress

This is super easy and very useful. Once up and running

1. Use cypress docker image
image: cypress/base:10

1. Add config for caches (do not miss out cypress cache folder)
caches:
- yarn
- cypress
- node

1. Cache is added but this cache config doesn’t know where to find cache, so to define cache folder, add
definitions:
caches:
yarn: $HOME/.cache
cypress: $HOME/.cache/Cypress

1. Do not forgot to add yarn install --frozen-lockfile, this config does not update yarn.lock

Now it’s time to add script to run cypress but to run cypress, cypress needs web server up and running. To do that,

1. Install start-server-and-test

1. Finally, command to start server, run cypress and upload test result to cypress dashboard
yarn start-server-and-test start [<http://localhost:2020>](<http://localhost:2020/>) cypress run --record --key PRODUCT_KEY

It’s done. Now you have pipeline up and running

Sample bitbucket config

    image: cypress/base:10pipelines:
      pull-requests:
        '**': 
          - step:
              name: "E2E (Cypress) test"
              caches:
                - yarn
                - cypress
                - node
              script: 
                - yarn install --frozen-lockfile
                - yarn start-server-and-test start [<http://localhost:2020>](<http://localhost:2020/>) cypress run --record --key PRODUCT_KEY
    definitions:
      caches:
        yarn: $HOME/.cache
        cypress: $HOME/.cache/Cypress

## End notes

We have just recently started working on E2E testing within our team at Noon Academy, but we can already see the benefits and the time it saves us in debugging issues. Time we can use to create interesting and cool features.

I hope you were able to learn and take something away from this post. Good luck on your E2E journey. Thank for reading!

We at Noon Academy believe in being bold, original, and ambitious. If you are passionate about education and love solving problems then email us at hrindia@noonacademy.com / ping me on [LinkedIn](https://linkedin.com/in/mhjadav) Or [Twitter](https://twitter.com/mhjadav)

Follow Noon Academy @ [Twitter](https://twitter.com/NoonEdu) Or [Facebook](https://facebook.com/Noon.Academy.All)

Published on [Medium](https://medium.com/noon-academy/e2e-testing-with-cypress-bitbucket-pipelines-4ae19aca4d32)
