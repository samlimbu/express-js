var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Booksmodel = require('../models/book');

router.get('', function(req, res){
	Booksmodel.getBooks(function(err, data){
		if(err){
			throw err;
		}
		res.json(data);
	});
		
});
router.get('/:ccid', function(req, res){
	Booksmodel.getBookById(req.params.ccid ,function(err, data){
		if(err){
			throw err;
		}
		res.json(data);
	});
		
});
router.post('', function(req,res){
	var book = req.body;
	Booksmodel.addBook(book, function(err, data){
		if(err){
			throw err;
		}

		res.json(data);
	})

})

module.exports = router;