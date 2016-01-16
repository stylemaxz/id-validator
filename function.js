
var printFn = function print(value) {
  console.log('Value =',value);
}


function add(x,y){
  return x+y;
}
function multiply(x,y) {
  return x*y;
}

function compute(x,y,operationFn) {
  var result = operationFn(x,y);
  printFn(result);
  return result;
}

resultAdd = compute(2,4,add);
resultMultiply = compute(2,4,multiply);
console.log('Add      2+4 =',resultAdd);
console.log('multiply 2*4 =',resultMultiply);
