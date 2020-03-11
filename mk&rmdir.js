const fs = require('fs');
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');
fs.mkdir('stuff',function(){
  fs.readFile('readme.txt','utf8',function(err,data) {
    fs.writeFile('./stuff/writeme.txt',data,function(err,result) {
      if(err)
      console.log('error',err);

    });

  });
});
