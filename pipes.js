const fs = require('fs');
const http = require('http');


var server = http.createServer(function(req,res) {
  console.log('request was made from:'+req.url);
  res.writeHead(200,{'Content-type': 'text/html'});

  var myReadStream = fs.createReadStream(__dirname+'/digi-school-free-website-template/index.html','utf8');
  myReadStream.pipe(res);

});

server.listen(3000,function(err,result) {
  console.log('you are listening to port 3000');
});
