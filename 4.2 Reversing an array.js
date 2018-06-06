function reverseArray(arrayToReverse) {
    let reversedArray = [];
    for(let i of arrayToReverse) {
        reversedArray.unshift(i);
    }
    return reversedArray;
}
function reverseArrayInPlace(arrayValue) {
    for(let i=0;i<=(Math.floor(arrayValue.length/2)-1);i++){
        let first = arrayValue[i];
        arrayValue[i]=arrayValue[(arrayValue.length-1)-i];
        arrayValue[(arrayValue.length-1)-i]=first;
    }
    return arrayValue;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
