var express 		= require('express');
//var router			= express.Router();	 
var fs 				= require("fs");	
var request			= require('request');
var config			= require('./config.js');
var path			= require("path");	
var url 			= require('url');	

//console.log(config,'mongodb://'+config.mongoDB.user+':'+config.mongoDB.pass+'@ds135061.mlab.com:35061/testdb_hari');

module.exports = function(router, mongoose){

	router.post('/createCollection',function(req, res){
		var schemas = Object.keys(req.body);
		var l = schemas.length;
		for(i=0;i<=l;i++){
			var schema 	= 	mongoose.Schema({name:String});
			var model	=	mongoose.model(schemas[i], schema);
			schema.methods.speak = function () {
			  var greeting = this.name
				? "Collection name is " + this.name
				: "I don't have a name";
				console.log(greeting);
			}		
		}		
		res.send('create collectied');
		res.end();
	})

	router.post('/create',function(){
		
	});


	router.post('/update',function(){
		
	});


	router.post('/find',function(){
		
	});

	router.post('/delete',function(){
		
	});

};
  
//module.exports = router;



			