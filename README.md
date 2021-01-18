# Angular 10 Movie-Recommender application

## Prerequisite 
- Java
- Node
- MongoDB
- Intellij/eclipse

## How to setup?
- Open databse.db file located in *src/assets* and run given two query is mongo shell or mongo GUI
- Start spring boot java server
- Start UI application with following commands
    - npm install
    - npm start

## Screenshots

Login
![alt text](https://github.com/pnjha29/MovieRecomender/blob/main/src/assets/login.png?raw=true)
Register
![alt text](https://github.com/pnjha29/MovieRecomender/blob/main/src/assets/registration.png?raw=true)
Creating Watch list while register
![alt text](https://github.com/pnjha29/MovieRecomender/blob/main/src/assets/selectWatchlistWhileSignup.png?raw=true)
Movie recommendation
![alt text](https://github.com/pnjha29/MovieRecomender/blob/main/src/assets/MovieRecommendation.png?raw=true)
All movies
![alt text](https://github.com/pnjha29/MovieRecomender/blob/main/src/assets/allMovies.png?raw=true)

## API Doc

For JWT – Token based Authentication with Web API, we’re gonna call 2 endpoints:
- POST `api/auth/signup` for User Registration
- POST `api/auth/signin` for User Login

For Movie - List all movies (unAuthenticated)
-  GET `/api/auth/movie/list`
  
For history/watchlist - APIS for handling movie watchlist of user and given recommendation geners accordingly
-  GET `/api/history/recommendation` (authenticated)
-  GET `/api/history/getLast10` (authenticated)
-  POST `/api/history/add` (authenticated)
  
 ## Future enhancement

- Video playbility with real url
- Image can be stream from movie db
- Flter can be added for Genere and movie name
- Tracking dashboard for user can be created
- Application can be hosted on https://www.heroku.com/

