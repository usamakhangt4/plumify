# plumify - VictoriaPlum.com Frontend Test.

## Brief

Create a music search app based on Deezer using their free developer API.  

## Setup

* Clone the repo
* Run `npm install` to fetch all of the dependencies
* Run `npm run dev` to spin up the development server

## Guidelines

Please use the search api provided in `src/api/` to fetch the query results. 

The api documentation can be found at 
https://developers.deezer.com/api/search

The query results should be filtered into artist, album and track, and then 
rendered out in the UI.    

The app should match the `plumify-mockup.png` and use the following UI 
colours: 

* Purple #4a1639
* Light gray: #6e4561
* Dark grey: #333333
* Grey: #c2c2c2
* Green: #6bb347

## Requirements

**Must**

* Be fully responsive.
* Use a CSS preprocessor (SCSS or PostCSS), add appropriate loader to webpack.config
  to output a separate CSS file to the `dist/` directory
* Use either vanilla javascript or a framework such as Vue, React or Angular.  
* Must use semantic HTML tags

**Must not**

* Do not use a CSS framework such as Bootstrap, Tailwind or Bulma
* Do not use jQuery

## Bonus points

* CSS Animations/transitions
* Use the Javascript Notification API to show notification of track changes
  (include track details and the album art)
* Make the player controls work using one of the MP3 preview urls 
  returned for track results. This could be using the `Web Audio API`, 
  `HTMLMediaElement` or `<audio>` html tag. 
