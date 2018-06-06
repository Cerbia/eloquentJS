function range(start,end,step) {
  let numbers =[];
  if(typeof(step) === 'number') {
    if(step<0) {
      for(let i=start ;i>=end ;i += step){
        numbers.push(i);
    }
}else {
    for(let i=start ;i<=end ;i += step){
        numbers.push(i);
    }
}

}else {
    for(let i=start ;i<=end ;i++){
        numbers.push(i);
    }
}
return numbers;
}
function sum(numbers) {
  let sum =0;
  for(let i of numbers){
    sum+=i;
}
return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
