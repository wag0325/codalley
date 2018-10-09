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

### Selection Sort
- Worst-Case Complexity: O(n^2)

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
### Insertion Sort
- A simple yet inefficient sorting algorithm.

### Merge Sort
### Quick Sort

## Graph Algorithms
### Graph Representation
### Breadth-first search
### Dijkstra's Algorithm
- Usage: Finding the shortest path (between nodes in a graph)

## Reference
- https://www.khanacademy.org
- https://github.com/kdn251/interviews