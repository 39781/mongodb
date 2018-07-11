var express 	= require('express');
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var redirect 	= require("express-redirect");
var app 		= express();
var config		= require('./config.js');
var session 	= require('express-session');
var port 		= process.env.PORT || 3000;

app.use(session({ secret: 'this-is-a-secret-token',resave: true, saveUninitialized: true, cookie: { maxAge: 60000 }}));
redirect(app);
//global.recentInput = "";
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json());
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
global.loggedUsers = {};

var server = app.listen(port,function(){
	
	mongoose.connect('mongodb://'+config.mongoDB.user+':'+config.mongoDB.pass+'@ds135061.mlab.com:35061/testdb_hari',{ useNewUrlParser: true });
	var db = mongoose.connection;
	db.once('open', function() {
		console.log('mongoose connected');
		var routes = require('./routes')(mongoose);
		app.use(routes);		
	});
	db.on('error', function(err){
		console.log(err);
	});
	console.log("Application started listening port "+port);		
});


