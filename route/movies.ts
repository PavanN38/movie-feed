import express from 'express';
import {
  validatePage,
  validateYear,
  validateGenre,
  validateMovieId,
  validateOrder,
} from '../util/validation';
const router = express.Router();
const moviesController = require('../controller/movieController');

//all the 4 routers are listed below with the paths
router.get('/', validatePage, moviesController.listAllMovies);

router.get(
  '/year/:year',
  validateYear,
  validateOrder,
  validatePage,
  moviesController.moviesByYear
);


router.get(
  '/genre/:genre',
  validateGenre,
  validatePage,
  moviesController.moviesByGenre
);


router.get('/:id', validateMovieId, moviesController.movieDetails);

module.exports = router;