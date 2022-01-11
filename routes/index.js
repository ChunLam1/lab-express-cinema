const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.locals.movies = movies;
      res.render("movies");
    })
    .catch((err) => next(err));
});

router.get("/movie/:id", (req, res, next) => {
  const id = req.params.id;

  Movie.findById(id)
    .then((movie) => {
      res.locals.movie = movie;
      res.render("infoMovie");
    })
    .catch((err) => next(err));
});

module.exports = router;
