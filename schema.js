var config = require("./config.js");
module.exports = function(mongoose){
	config.schemas.users.userId = ObjectId;
		var userSchema 	= 	mongoose.Schema(config.schemas.users);				
		return {
			User:mongoose.model('users', userSchema)
		}
}