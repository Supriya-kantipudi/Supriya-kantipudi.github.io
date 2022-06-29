var express = require('express');
var router = express.Router();
var path = require('path')
var mysql=require('../database/db')


/* GET home page. */
/* to read from the user --> req */
// to send response to the user --> res
router.get('/re', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.resolve("public/reg.html"))
// res.sendFile(path.resolve("public/login.html"))
});

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("HELLO This is express developed by  <h2>Supriya</h2>");
  
  
  
  // res.sendFile(path.resolve("public/login.html"))
});
router.get('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("HELLO This is express developed by  <h2>Supriya</h2>");
  res.sendFile(path.resolve("public/login.html"))
});
router.get('/signup', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("HELLO This is express developed by  <h2>Supriya</h2>");
  res.sendFile(path.resolve("public/signup.html"))
});
router.get('/contact', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("HELLO This is express developed by  <h2>Supriya</h2>");
  res.sendFile(path.resolve("public/contact.html"))
});
router.post('/loginsubmit', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // var output = "username" + req.body.loginid + "<br>password"+req.body.pwd;
  var output = '<table border = 2>'
  for(var i in req.body){
    output += '<tr><td>' + i + '<td>'
    output += '<td>' + req.body[i] + '</td></tr>'
  }
  output += '</table>'
  res.send(output);
  
});
router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Embeded javascript code demo' ,name:"Supriya"});
  // res.send("HELLO This is express developed by  <h2>Supriya</h2>");
  // res.sendFile(path.resolve("public/login.html")
});
router.get('/fbposts', function(req, res, next) {
  var posts = [
    {title:"HBD",message:"Happy Birthday to you"},
    {title:"Casual",message:"hello how are you?"},
    {title:"Announcement",message:"Bahubali movie is releasing on"},
    {title:"Greetings",message:"Greetings of the day"},
    {title:"Events",message:"Half Saree Event"}
  ];

  res.render('datadisplay', { title: "Facebook posts" ,posts:posts});
  // res.send("HELLO This is express developed by  <h2>Supriya</h2>");
  // res.sendFile(path.resolve("public/login.html")
});
router.get('/selectqry', function(req, res, next) {
  
  mysql.getConnection((err, connection) => {
   if(err) throw err;
  connection.query('SELECT * from practice limit 2', (err, rows)=> {
  connection.release();
  if(err) throw err;
  res.render('index', {title:"student information",posts:rows});
  //res.send(rows);
   });
  });
});
router.post('/regno', function(req, res, next) {
 var  Reg = req.body.Regno;
  //res.send(Reg);
  mysql.getConnection((err, connection) => {
    if(err) throw err;
   connection.query('SELECT * from practice where RegNo ="'+Reg+'"', (err, rows)=> {
   connection.release();
   if(err) throw err;
   res.render('index', {title:"student information",posts:rows});
   //res.send(rows);
    });
   });
  
});

module.exports = router;
