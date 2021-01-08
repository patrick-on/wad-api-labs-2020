import './db';
import {loadUsers, loadMovies, loadUpcoming} from './seedData';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import upcomingRouter from './api/upcoming';
import session from 'express-session';
import passport from './authenticate';

dotenv.config();

const app = express();

const port = process.env.PORT;

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcoming();
}


const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));



//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(passport.initialize());
//update /api/Movie route
app.use('/api/movies', passport.authenticate('jwt', {session: false}) , moviesRouter);
//Users router
app.use('/api/users', usersRouter);
//Genres router
app.use('/api/genres', genresRouter);
//Upcoming router
app.use('/api/upcoming', upcomingRouter);
app.use(errHandler);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});