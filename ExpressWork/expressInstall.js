const express = require('express');

var app = express();
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));//MiddleWare k/a code or task between request,that is,get and response,that is,res

// app.get('/',function(req,res){
//   res.send('this is the homepage');
// });
//
// app.get('/contact',function(req,res) {
//   res.send('this is contacts page');
// });
// app.get('/',function(req,res){
//   res.sendFile(__dirname+'/homepage.html');
// });
//
// app.get('/contact',function(req,res) {
//   res.sendFile(__dirname+'/contact.html');
// });
app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res) {
  res.render('contact');
});

var data = {age:29,job:'coder',hobbies:['eating','singing','fishing']};
app.get('/profile/:name',function(req,res) {
  res.render('profile',{person:req.params.name,data:data});
});
// app.get('/profile/:name',function(req,res) {
//   res.send('you requested to see profile with id :'+req.params.name);
// });

app.listen(4242,function(err,result) {
  console.log('server is running');

});
