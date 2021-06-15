# Plumify — VictoriaPlum.com front-end test

## Brief

Create a music search app based on Deezer using their free developer API.  

## Setup

* Fork the git repository at https://github.com/VictoriaPlum-com/plumify.git to your own GitHub account.
* Once you're finished, host your code on GitHub Pages 
(see https://pages.github.com/) or Netlify (https://app.netlify.com/)

## Build

* Run `npm install` to fetch all the dependencies.
* Run `npm run dev` to spin up the development server.

## Requirements

**Base acceptance criteria**

- Create a mobile-only version of the design which can be found at -
  https://www.figma.com/file/CAVdAV2p29b76OoNQdgqhK/Music-player?node-id=0%3A55
  
(You will need to sign up for a free account to inspect the design)

- Use the SVG icons provided in the assets folder

- Use the search api provided in `src/api/` to fetch the search results.
(The api documentation can be found at https://developers.deezer.com/api/search)

- The search bar should allow the user to search for songs. 

- The song results should be displayed as list 

- The user should be able to click on one of the results, and the UI should update to 
display the album cover image, title of the track and artist name.

## Guidelines 

* Use a CSS preprocessor (SCSS or Post CSS), add an appropriate loader 
  to the webpack.config file which will output a separate CSS file to the `dist/` directory.
* Use either vanilla JavaScript or a framework such as Vue, React or Angular.  
* Use semantic HTML tags.
* Do not use a CSS framework such as Bootstrap, Tailwind or Bulma
* Do not use jQuery

## Bonus points

* CSS Animations/transitions.
* Make the player controls functional so that the user can play, pause, and seek forwards/backwards. 
* Enable an audio preview of the track using player controls using the preview URL returned from the
  search results. This could be using the `Web Audio API`, 
 `HTMLMediaElement` or `<audio>` HTML tag. 
