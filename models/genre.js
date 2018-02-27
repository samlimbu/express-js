var mongoose = require('mongoose');
//schema
var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	created_date:{
		type: Date,
		default: Date.now	
	}

});

var GenreM = module.exports = mongoose.model('genre', genreSchema);

//get genres
module.exports.getGenres= function(callback, limit){
	GenreM.find(callback).limit(limit);
}

module.exports.getGenreById = function(id, callback){
	GenreM.findById(id ,callback);
}

module.exports.addGenre = function(genre, callback){
	GenreM.create(genre, callback);
}

module.exports.updateGenre = function(id, genre, options, callback){
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	GenreM.findOneAndUpdate(query, update, options, callback);
}