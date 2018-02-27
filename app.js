const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var genreSimpleRouter = require('./routesSimple/genre');
const GenreMod = require('./models/genre');
var bookRouter = require('./route/book');
var genreRouter = require('./route/genre');
const config = require('./config/database');
var app = express();

mongoose.connect(config.database);
mongoose.connection.on('connected', function(){
	console.log('connected to db' + config.database);
});

//view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//bodyparser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//static folder
//

app.use('/simple', genreSimpleRouter);
app.use('/book', bookRouter);
app.use('/genre',genreRouter);


app.get('/test', function(req, res){
	res.send('testing');
});
app.use(express.static(path.join(__dirname, 'public')));
var port = 3000;
app.listen(port, function(){
	console.log('Server started on port: ' + port);
})


/*
var log1 = function(req, res, next){
	console.log('logging....');
};

app.use(log1);
*/