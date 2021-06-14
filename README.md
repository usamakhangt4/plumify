# Plumify — VictoriaPlum.com front-end test.

## Brief

Create a music search app based on Deezer using their free developer API.  

## Setup

* Fork the git repository at https://github.com/VictoriaPlum-com/plumify.git to your own GitHub account.
* Once you're finished, host your code on GitHub Pages 
(see https://pages.github.com/) or Netlify (https://app.netlify.com/)

## Build

* Run `npm install` to fetch all the dependencies.
* Run `npm run dev` to spin up the development server.

## Guidelines

Please use the search api provided in `src/api/` to fetch the query results. 

The api documentation can be found at 
https://developers.deezer.com/api/search

The query results should be filtered into artist, album and track, and then 
rendered out in the UI.  

The app should match the `plumify-mockup.png` and use the following UI 
colors: 

```
* Purple: #4a1639
* Light grey: #6e4561
* Dark grey: #333333
* Grey: #c2c2c2
* Green: #6bb347
```

## Requirements

**Must**

* Be fully responsive.
* Use a CSS preprocessor (SCSS or Post CSS), add an appropriate loader 
  to the webpack.config file which will output a separate CSS file to the `dist/` directory.
* Use either vanilla JavaScript or a framework such as Vue, React or Angular.  
* Use semantic HTML tags.

**Must not**

* Do not use a CSS framework such as Bootstrap, Tailwind or Bulma
* Do not use jQuery

## Bonus points

* CSS Animations/transitions.
* Use the JavaScript Notification API to show a notification when the track changes.
* Enable an audio preview of the track using player controls using the preview URL returned from the
  search results. This could be using the `Web Audio API`, 
 `HTMLMediaElement` or `<audio>` HTML tag. 
