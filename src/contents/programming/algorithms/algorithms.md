# Algorithms

## Search
### Binary Search
- Usage: Finding an item from a sorted list of items.
- How: Repeatedly divide the list into halves until the item is located.
- Run Time (worst-case): log2n = x (base-2 logarithm 2 of n) or n = 2^x

#### Pseudocode
1. Let min = 0 and max = n-1.
2. Compute guess as the average of max and min, rounded down (so that it is an integer).
3. If array[guess] equals target, then stop. You found it! Return guess.
4. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
5. Otherwise, the guess was too high. Set max = guess - 1.
6. Go back to step 2.

#### Implementing pseudocode in JavaScript: 

```
/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var attempts = 0;
    while(min <= max) {
        guess = Math.floor((min + max)/2);
        attempts += 1;
        console.log(guess);
        if (array[guess] === targetValue) {
            console.log(attempts);
            return guess;
        } else if (array[guess] > targetValue){
            max = guess-1;
        } else {
            min = guess+1;
        }
    }
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);
```

### Linear Search
- Usage: Finding an item from a list.
- How: Search one-by-one in a list.
- Run Time (worst-case): n

#### Linear Search in JavaScript:
```
var doLinearSearch = function(array, targetValue) {
  for (var guess = 0; guess < array.length; guess++) {
    if (array[guess] === targetValue) { 
        return guess;  // found it!
    }
  }
  return -1;  // didn't find it
};
```

## Efficiency of Algorithms using Asymptotic Notation
We want to know how long algorithms will take (needed time). Running time of an algorithm depends on how long it takes a computer to run the lines of code of algorithm. 

#### Factors to Consider:
1. How long the algorithm takes depending on the size of the input.
2. How fast a function grows with the input size, the **rate of growth** of the running time.

#### Asymptotic Notation
Express the rate of growth of the running time by dropping the less significant terms and constant coefficants. 

Types of Asymptotic Notation:
- big-Θ (Theta) notation
- big-O notation
- big-Ω (Omega) notation

### Big O Notation
- Usage: Describe the worst case scenario of an algorithm (upper bound).
### Big Ω Omega Notation
- Usage: Describe the best case scenario of an algorithm (lower bound).
### Asymptotic Notation Questions:
1. What is the asymptotic relationship between the functions n^3log2n and 3nlog8n? 
    - n^3log2n is Ω(3nlog8n), because for a large enough input, n^3 always grow faster than 3n.
2. log2(n^(log2(17))) vs log2(17^(log2(n)))? 
    - log2(n^(log2(17))) is O(log2(17^(log2(n)))), Ω(log2(17^(log2(n)))), and Θ(log2(17^(log2(n)))), because two functions are equivalent.
    - log2(n^(log2(17))) = log2(n) * log2(17)
    - log2(17^(log2(n))) = log2(17) * log2(n)
3. n^k vs c^n? n^k is O(c^n)
4. log2 vs log8? log2 is O(log8), Ω(log8), and Θ(log8)

### Math
#### Log
- log2n = x (base-2 logarithm 2 of n) or n = 2^x
- log2(a^b) = b(log2a)
#### Graphs
- n^k polynomial fn always grow more slowly than c^n exponential function.
- Draw graph

## Sorting
Sorting a list items into ascending or descending order. *Note: JavaScript has a built-in sorting method (Array.sort()).

### Selection Sort [Best, Worst: O(N^2)]
Find the smallest item and swap it into the first position. Repeat this process for the remaining N-1 items.

#### Selection Sort Pseudocode
1. Find the smallest card. Swap it with the first card.
2. Find the second-smallest card. Swap it with the second card.
3. Find the third-smallest card. Swap it with the third card.
4. Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.

#### Selection Sort in JavaScript
```
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var minIndex = 0;
    for (var i=0; i < array.length; i++) {
        minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
```

### Bubble Sort [Best: O(N), Worst: O(N^2)]
Compare two adjacent items starting from the left. Keep "bubbling" and swap the larger number to the right. Repeat the left-to-right bubbling until the list is in order.

#### Bubble Sort JavaScript Implementation
```
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]
```

### Insertion Sort [Best: O(N), Worst: O(N^2)]
Sort by inserting an item from unsorted array to sorted array. Start with a sorted list of the first element and take and insert the first element from N-1 elements to the sorted list.

### Merge Sort

### Quicksort [Best: O(N Lg N), Avg: O(N Lg N), Worst: O(N^2)]
- One of the most popular sorting due to its speed.
- In practice, quicksort outperforms merge sort, selection sort, and insertion sort.
- Divide-and-conquer

#### Quicksort Step-By-Step
1. Pick a pivot
2. Rearrange the elements into "less than a pivot" and "greater than a pivot" sublists. This procedure is called **partitioning** (the orders in the sublists do not matter).
    - Tip: Choose the rightmost element in the subarray as the pivot.
3. Repeat this partitioning until the sublist size is 1 element.
4. Then, combine the list and the list will be sorted. (HOW?)

#### Quicksort in JavaScript

```
function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;

  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right - recursive - stops when left === right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

// pivot index is passed as arg
function partition(arr, pivot, left, right){
    // partition index is the index value that divides the less-than and greater-than values. Thus, when the less-than value is found, place the item at the partition index by swapping the less-than and current items.
    // set partitionIndex as the leftmost value
    var pivotValue = arr[pivot],
       partitionIndex = left;
    
    // scan left-to-right
    for(var i = left; i < right; i++){
       // i - 3; partitionIndex = 1
        // if the element is less than the pivot value, swap the less-than value with 
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j]; 
   arr[j] = temp;
}

quickSort([11,8,14,3,6,2,7],0,6); 
//[2, 3, 6, 7, 8, 11, 14]
quickSort([11,8,14,3,6,2,1, 7],0,7);
//[1, 2, 3, 6, 7, 8, 11, 14]
quickSort([16,11,9,7,6,5,3, 2],0,7);
//[2, 3, 5, 6, 7, 9, 11, 16]
```

## Graph Algorithms
### Graph Representation
### Breadth-first search
### Dijkstra's Algorithm
- Usage: Finding the shortest path (between nodes in a graph)

## References
- https://www.khanacademy.org
- https://github.com/kdn251/interviews
- https://betterexplained.com/articles/sorting-algorithms/
- https://khan4019.github.io/front-end-Interview-Questions/sort.html
- https://brilliant.org/wiki/sorting-algorithms/ - animations