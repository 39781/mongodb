var config = require("./config.js");
module.exports = function(mongoose){
	//const Schema = mongoose.Schema,
    //ObjectId = Schema.ObjectId;	
	//config.schemas.users._id = ObjectId;
		var userSchema 	= 	mongoose.Schema(config.schemas.users);				
		return {
			User:mongoose.model('users', userSchema)
		}
}