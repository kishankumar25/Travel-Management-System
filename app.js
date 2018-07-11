
/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var db=require('./db/mongodb.js');
var  path = require('path');
var router=express.Router();

var app = express(); 
app.listen(5000);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); //support json encoded bodies.
console.log("server is runnng on port 5000");

app.get("/", login);

function login(req, res){
	res.sendFile(path.join(__dirname, 'views', 'login.htm'));

}

app.get("/dashboard.htm", dashboard);
function dashboard(req, res){
	res.sendFile(path.join(__dirname, 'views', 'dashboard.htm'));
}
app.get("/claim.htm", claim);
function claim(req, res){
	res.sendFile(path.join(__dirname, 'views', 'claim.htm'));
}
app.get("/notification.htm", notification);
function notification(req, res){
	res.sendFile(path.join(__dirname, 'views', 'notification.htm'));
}
app.use(express.static(__dirname + '/public'));

var rForm = db.getRformTbl();
app.post('/form', function(req, res) {

var form = new rForm({
    //need to add an email here 
	gstin1: req.body.gstin1,
	gstin2: req.body.gstin2,
	price: req.body. price,
	sdate: req.body.sdate,
	edate: req.body.edate,
	stime: req.body.stime,
	etime: req.body.etime,
    duration: req.body.duration
   /* posteddate: req.body.posteddate,
    filename: req.body.filename,
    activityid: req.body.activityid,
    status: req.body.status */
    
    
  });
  

form.save(function(err, resp) {
    if (err) {
      console.log(err);
      res.send({
        message: 'something went wrong'
      });
    } else {
      res.send({
        message: 'the credentials has been saved'
      });
    }

  });
});
