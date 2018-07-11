var express 		= require('express');
var router			= express.Router();	 
var fs 				= require("fs");	
var request			= require('request');
var config			= require('./config.js');
var path			= require("path");	
var url 			= require('url');	
var mongoose = require('mongoose');
console.log(config,'mongodb://'+config.mongoDB.user+':'+config.mongoDB.pass+'@ds135061.mlab.com:35061/testdb_hari');

mongoose.connect('mongodb://'+config.mongoDB.user+':'+config.mongoDB.pass+'@ds135061.mlab.com:35061/testdb_hari',{ useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', function(err){
	console.log(err);
});
db.once('open', function() {
	console.log('mongoDB connecter');
});
router.post('/create',function(){
	
});


router.post('/update',function(){
	
});


router.post('/find',function(){
	
});

router.post('/delete',function(){
	
});


  
module.exports = router;



			