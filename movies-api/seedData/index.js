import {movies} from './movies.js';
import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import { upcoming } from './upcoming.js';
import upcomingMovieModel from '../api/upcoming/upcomingMovieModel';
import topratedMovieModel from '../api/toprated/topratedMovieModel';
import { toprated } from './toprated.js';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadUpcoming() {
  console.log('load seed data');
  console.log(upcoming.length);
  try {
    await upcomingMovieModel.deleteMany();
    await upcomingMovieModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadToprated() {
  console.log('load seed data');
  console.log(toprated.length);
  try {
    await topratedMovieModel.deleteMany();
    await topratedMovieModel.collection.insertMany(toprated);
    console.info(`${toprated.length} Toprated Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}