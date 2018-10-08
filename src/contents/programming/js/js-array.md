# JS Array
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

