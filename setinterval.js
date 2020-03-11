
let t = 0;
var timerId = setInterval(function () {
  t+=2
  console.log(t+' seconds passed');

  if(t> 5)
  clearInterval(timerId);
}, 2000);
