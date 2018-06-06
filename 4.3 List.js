function arrayToList(array) {
    array=array.reverse();

    let list = null;

    array.forEach(function(element, i) {
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

function listToArray(list, arr) {
    if(list.rest===null) {
        arr.push(list.value);
    } else {
        listToArray(list.rest, arr);
        arr.unshift(list.value);
    }
    return arr;
}

function prepend(value, list) {
    let node = {value: value, rest: list}
    return node;
}

function nth(list, number) {
    array = listToArray(list, []);
    if (number<0 || number>=array.length) {
        console.log("Incorrect number");
        return {};
    } else {
        return array[number];
    }

}

console.log(arrayToList([10, 20, 30, 40]));
console.log(arrayToListRecursive([10, 20, 30, 40]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]),[]));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
