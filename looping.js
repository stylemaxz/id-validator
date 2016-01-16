//console.log('This is looping');

var array  = [ 1,2,4,5,'six' ];
var dictionary = { 'thailand':'Bangkok', 'japan':'Tokyo', 'USA':'DC' }
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


// array.forEach(function(value) {
//   console.log(value);
// })


// console.log(dictionary.USA);

var key = Object.keys(dictionary);
console.log('key =',key);

key.forEach(function (value){
  console.log(value);
  console.log(dictionary[value]);
})
