var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title: String,
    genre: String,
    author: String,
    image_url: String,
    created_date: {
    	type: Date,
    	default: Date.now
    }
});

var Book = module.exports = mongoose.model('book', bookSchema);

module.exports.getBooks = function(callback, limit){
	Book.find({},callback).limit(limit); //mongoose method
}

module.exports.getBookById = function(ccid, callback){
	Book.findById({_id: ccid}, callback); //mongoose method
}

module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}

