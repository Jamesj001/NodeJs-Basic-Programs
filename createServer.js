const http = require('http');
var server = http.createServer(function(req,res) {
  console.log('request was made from:'+req.url);
  res.writeHead(200,{'Content-type': 'text/plain'});
  res.end('Hey bros');

});

server.listen(3000,function(err,result) {
  console.log('you are listening to port 3000');  
});
