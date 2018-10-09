# JS Array

## Reduce
Example: Find average of numbers in an array
```
Array.prototype.average = function() {
  // calculate sum
  var sum = this.reduce(function(prev, cur) { return prev + cur; });
  // return sum divided by number of elements
  return sum / this.length;
}

var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg); // => 3
```
## Swap the positions in an array
```
// final array should be ["Orange", "Apple", "Banana"]
var arr = ["Apple", "Orange", "Banana"];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
```

## Copy array to new array
```
var oldArr = ["Apple", "Orange", "Banana"];
var newArr = oldArr.slice(0);
// ES6
var newArr = [...oldArr];
```

## Reference
1. https://coderbyte.com/algorithm/10-common-javascript-interview-questions
