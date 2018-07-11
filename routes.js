var express 		= require('express');
var router			= express.Router();	 
var fs 				= require("fs");	
var request			= require('request');
var config			= require('./config.js');
var path			= require("path");	
var url 			= require('url');	

//console.log(config,'mongodb://'+config.mongoDB.user+':'+config.mongoDB.pass+'@ds135061.mlab.com:35061/testdb_hari');

module.exports = function(router, mongoose){

	router.post('/createCollection',function(req, res){
		//var Kitten = mongoose.model('Kitten', kittySchema);
		res.send('create collection');
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



			