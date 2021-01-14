# Assignment 2 - Web API.

Name: Patrick O Neill

## Features.
 
 + Feature 1 - Added Upcoming Movies page
 + Feature 2 - Added Top Rated Movies page
 + Feature 3 = Added Log In and Sign Up page
 + Feature 3 = Integrated API with Assignment 1 app

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/patrick-on/wad-api-labs-2020.git
```

followed by installation

```bat
npm install
npm start
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
SEED_DB=true
SECRET=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/upcoming | Gets a list of upcoming movies | N/A  | N/A  | N/A 
| /api/toprated | Gets a list of toprated movies | N/A  | N/A  | N/A 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

React App Link: https://github.com/patrick-on/wad-api-labs-2020 

~~~Javascript
export const getMovies = () => {
    return fetch(
        '/api/movies', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    ).then(res => res.json());
};

export const getUpcomingMovies = () => {
    return fetch(
        '/api/upcoming', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    ).then(res => res.json());
};

export const getTopratedMovies = () => {
    return fetch(
        '/api/toprated', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    ).then(res => res.json());
};

export const getMoviesNowPlaying = () => {
    return fetch(
        '/api/nowplaying', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    ).then(res => res.json());
};

~~~

## Extra features


## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
