# Prototyping the Progressive Web Sample App

## What is App shell
- a component that powers the UI of Progressive Web App
- consists of HTML / CSS / Javascript
- All of the UI and infrastructure is cached locally using a service worker so that on subsequent loads, the Progressive Web App only needs to retrieve the necessary data, instead of having to load everything.

## Why do we need App Shell
- You don't need of an app store because it allows instant loading / regular updates, using Service Worker while letting you focus on the speed

## Design the App Shell
- Three questions you need to ask are
  - What needs to be on screen immediately?
  - What other UI components are key to our app?
  - What supporting resources are needed for the app shell? (Javascript, styles, images, etc)

## Tips
- [Life saver](chrome://serviceworker-internals) allows you to stop and un-register existing service workers and start fresh.
- It would also give you the console of service worker

## Service worker to pre-cache the App Shell
- s

## Manifest.json set-up
- Benefits
  - Be launched in full-screen mode on Android with no URL bar
  - Define a "splash screen" launch experience and theme color for the site
  - Track whether you're launched from the home screen or URL bar
- An easy way to track how the app is launched is to add a query string to the start_url parameter and then use an analytics suite to track the query string. If you use this method, remember to update the list of files cached by the App Shell to ensure that the file with the query string is cached.
- Best Practices
  - Place the manifest link on all your site's pages
  - Define icon sets for different density screens. Chrome will attempt to use the icon closest to 48dp, for example, 96px on a 2x device or 144px for a 3x device.

## Extra Credits
- [Page Insight Rules](https://developers.google.com/speed/docs/insights/rules)
-
