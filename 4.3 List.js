// Your code here.

function arrayToList(array) {
  array=array.reverse();
  
  let list = null;
  
  array.forEach(function(element, i) {
  	//console.log('Element', i, 'is', element);
    list = {
  		value: element,
  		rest: list
	};
  });
  return list;
}
function arrayToListRecursive(array) {
  if(array.length===1){
  	list = {
  		value: array[0],
  		rest: null
	};
  }else if(array.length>1) {
      arrayToListRecursive(array.slice(1, array.length))
      list = {
  		value: array[0],
  		rest: list
	};
  }
  return list;
}



console.log(arrayToList([10, 20, 30, 40]));
console.log(arrayToListRecursive([10, 20, 30, 40]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
