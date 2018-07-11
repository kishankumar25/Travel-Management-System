//node js lib
var mongoose=require('mongoose');

// custom user defined lib
var appconfig=require('../config/appconfig.js');
var config=appconfig.getConfig();

console.log("connecting to:"+config.mongodb_url);
var conn= mongoose.connect(config.mongodb_url);

var exports = module.exports ={};

var Schema= mongoose.Schema;
var travelmangementForm= new Schema({
	gstin1:{ type: String, required: true },
	gstin2:{ type: String, required: true },
	price:{ type: String, required: true },
	sdate:{ type: Date, required: true, default: Date.now },
	edate:{ type: Date, required: true, default: Date.now },
	stime:{ type: String, required: true },
	etime:{ type: String, required: true },
	duration:{ type: String, required: true }
    /*posteddate:{ type: String, required: true },
    filename:{ type: String, required: true },
    activityid:{ type: String, required: true },
    status:{ type: String, required: true } */ 
});
var Rform=mongoose.model('Rform',travelmangementForm);
exports.getRformTbl=function(){
	return Rform;
};