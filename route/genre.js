var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var GenreMod = require('../models/genre');

router.get('', function(req, res){
	GenreMod.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	})
});
router.get('/:_id', function(req, res){
	GenreMod.getGenreById(req.params._id, function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	})
});
router.post('/', function(req, res){  //same uri ok for different requests
	var genre = req.body;
	GenreMod.addGenre(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});
router.put('/update/:_id', function(req, res){  //same uri ok for different requests
	var id = req.params._id;
	var genre = req.body;
	GenreMod.addGenre(id, genre,{}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});
module.exports = router;