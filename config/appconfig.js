var appconfig = {
		"mongodb_url":"mongodb://localhost/travelManagementForm",
		"db_user":"user",
		"db_password":"password"
				
};

var exports = module.exports ={};

exports.getConfig = function(){
	return appconfig;
};