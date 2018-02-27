var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var genreModel = require('../models/genre');

router.get('/', function(req,res){
	mongoose.model('genre').find({},function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	}
	);
});		
router.get('/:ccid', function(request,response){ //link url in browser
  mongoose.model('genre').find({_id: request.params.ccid}, function(err,data){ //db.categories.find()
  
    if(err){
      throw err;
    }
    response.json(data);
  });
});
router.delete('/deletegenre/:pid', function(request,response){ //link url in browser
	mongoose.model('genre').remove({id: request.params.pid}, function(err,data){
		 if(err){
      throw err;
    }
	});
	
	   mongoose.model('genre').find({}, function(err,data){ //db.categories.find()
  
    if(err){
      throw err;
    }
    response.json(data);
  });
});
//npm install body-parser --save
router.put('/editgenre', function(request,response){ //link url in browser
	

	 mongoose.model('genre').update({id: request.body.cid},{name: request.body.genreName}, function(err,data){ //db.categories.find()
	    if(err){
	      throw err;
	    }
				     mongoose.model('genre').find({}, function(err,data){ //db.categories.find()
				
					    if(err){
					      throw err;
					    }
					     response.json(data);
				 		
				 			 }).sort({id: 1}); //filter
	     });


});



router.get('/decending', function(request,response){ //link url in browser
  mongoose.model('genre').find({}, function(err,data){ //db.categories.find()

    if(err){
      throw err;
    }
    response.json(data);
  }).sort({name: -1});
});

router.put('/addgenre', function(request,response){ //link url in browser
	var datalength;
	mongoose.model('genre').find({}, function(err,data){
		datalength =data.length;
		mongoose.model('genre').update({id: datalength},{name: request.body.genreName},{upsert:true}, function(err,data){ //db.categories.find()
		    if(err){
		      throw err;
		    }
					     mongoose.model('genre').find({}, function(err,data){ //db.categories.find()
					
						    if(err){
						      throw err;
						    }
						     response.json(data);
					 		
					 			 }).sort({id: 1}); //filter
		     });


		});
	});
module.exports = router;
	