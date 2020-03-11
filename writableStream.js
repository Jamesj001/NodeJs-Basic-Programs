const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/write.txt');

myReadStream.on('data',function (chunk) {
  console.log('new chunk recieved');
  myWriteStream.write(chunk);

});
