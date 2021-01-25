const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = express.Router();
const games = require("../../models/games");

//@ Get request to api/games
//@ desc Get all games
//@ access Private

router.get("/", (req, res) => {
  games
    .find()
    .sort({ date: -1 })
    .then((games) => res.json(games));
});

//@ POST request to api/games
//@ desc Get all pets
//@ access Private
router.post("/", (req, res, next) => {
  console.log(typeof req.body.Colors);
  //req.body.values = JSON.parse(req.body);
  let NewGame = new games({
    Colors: req.body.Colors,
  });
  NewGame.save();
});

router.get("/:id", (req, res) => {
  games
    .findById(req.params.id)

    .then((game) => res.json(game));
});

module.exports = router;
