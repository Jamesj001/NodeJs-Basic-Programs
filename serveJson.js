const fs = require('fs');
const http = require('http');


var server = http.createServer(function(req,res) {
  console.log('request was made from:'+req.url);
  res.writeHead(200,{'Content-type': 'application/json'});

  var myObj = {
    name : 'Nik',
    age : '21',
    job : 'student'
  };
res.end(JSON.stringify(myObj));
});

server.listen(3000,function(err,result) {
  console.log('you are listening to port 3000');
});
