var express 		= require('express');
//var router			= express.Router();	 
var fs 				= require("fs");	
var request			= require('request');
var config			= require('./config.js');
var path			= require("path");	
var url 			= require('url');	

//console.log(config,'mongodb://'+config.mongoDB.user+':'+config.mongoDB.pass+'@ds135061.mlab.com:35061/testdb_hari');

module.exports = function(router, mongoose, models){		
	router.post('/createUser',function(req, res){
		//const Schema = mongoose.Schema,
	//	ObjectId = Schema.ObjectId;
		console.log(req.body);
		//req.body._id = mongoose.Types.ObjectId(req.body._id)
		console.log(req.body);
		var doc	=	new models.User(req.body);
		doc.save(function (err, doc) {
			if (err){
				console.log(err);
				res.status(400);
				res.send('user creation failed');			
			}else{
				res.status(200);
				res.send('user creation success');			
			}
			res.end();
		});
	});


	router.post('/update',function(){
		
	});


	router.post('/findUser',function(req, res){
		var doc	=	new models.User();
		var cursor = doc.find(req.body).cursor();
		cursor.on('data', function(doc) {
			res.json(doc).end();
		});
		cursor.on('close', function() {
		  console.log('cursor closed');
		});
	});

	router.post('/delete',function(){
		
	});

};
  
//module.exports = router;



			