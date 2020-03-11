var fs = require( 'fs');
// var readme = fs.readFileSync('readme.txt','utf8');
// console.log(readme);

fs.readFile('readme.txt','utf8',function(err,data){
  //fs.writeFile('writeme.txt');
  //fs.writeFile('writeme.txt',data);
  fs.writeFile('./public/wrt.txt',data);
});
