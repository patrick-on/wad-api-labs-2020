# Assignment 2 - Web API.

Name: Patrick O Neill

## Features.
 
 + Feature 1 - Added Upcoming Movies page
 + Feature 2 - Added Top Rated Movies page
 + Feature 3 = Added Log In and Sign Up page
 + Feature 3 = Integrated API with Assignment 1 app

## Installation Requirements

Node and MongoDB must be configured on machine to run API.

Clone my repo:

```bat
git clone https://github.com/patrick-on/wad-api-labs-2020.git
```

followed by installation and start

```bat
npm install
npm start
```

## API Configuration

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
SEED_DB=true
SECRET=YourJWTSecret
```


## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/users | Gets a list of stored users | Log in as a stored user | N/A | N/A  
| /api/users?action=register | N/A | Creates a new user  | N/A  | N/A 
| /api/upcoming | Gets a list of upcoming movies | N/A  | N/A  | N/A 
| /api/toprated | Gets a list of toprated movies | N/A  | N/A  | N/A 

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

~~~

## Extra features


## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
