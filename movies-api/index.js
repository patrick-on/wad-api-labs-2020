import './db';
import {loadUsers} from './seedData'
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import usersRouter from './api/users';


dotenv.config();

const app = express();

const port = process.env.PORT;

if (process.env.SEED_DB) {
  loadUsers();
}

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use('/api/movies', moviesRouter);
//Users router
app.use('/api/users', usersRouter);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});