function f1()
{
  console.log('hi');
}
f1();

var abc = function f2(){
  console.log('bye');
};
abc();

function callfunc(fun)
{
  fun();
}
callfunc(abc);
