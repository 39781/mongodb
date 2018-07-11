var express 		= require('express');
//var router			= express.Router();	 
var fs 				= require("fs");	
var request			= require('request');
var config			= require('./config.js');
var path			= require("path");	
var url 			= require('url');	

//console.log(config,'mongodb://'+config.mongoDB.user+':'+config.mongoDB.pass+'@ds135061.mlab.com:35061/testdb_hari');

module.exports = function(router, mongoose){
	const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
	
	router.post('/createUser',function(req, res){
		config.schemas.users.userId = ObjectId;
		var schema 	= 	mongoose.Schema(config.schemas.users);
		var model	=	mongoose.model('users', schema);
		var doc		=	new model(req.body);
		doc.save(function (err, fluffy) {
			if (err){
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


	router.post('/find',function(){
		
	});

	router.post('/delete',function(){
		
	});

};
  
//module.exports = router;



			