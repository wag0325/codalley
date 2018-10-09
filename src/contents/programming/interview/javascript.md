# JavaScript

### What is JavaScript?
JavaScript is a client-side and a server-side scripting language that can be inserted in HTML and understood by the browsers. It is a Object based programming language. 

### Basic Groups of Data Types
1. Primitive - i.e. Number, Boolean
2. Reference Types - i.e. String, Object

### Supported Data Types
- Undefined
- Null
- Boolean
- String
- Symbol
- Number
- Object

### What is Closures?

### What is JavaScript Event Delegation Model? Need more info
Allow the implmentation of one single handler to many elements at the same time. Add event listeners to one parent instead of specified nodes.

### What is function hoisting? 
A JavaScript behavior that allows a function to be called prior to function creation/declaration. 

JavaScript allows two ways to create a function.
1. Function Declaration
    - allows function hoisting
```
hoisted(); // logs "foo"

function hoisted() {

  console.log('foo');

}
```
2. Function Expression
```
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {

   console.log('bar');

};
```

### Fibonacci numbers
Fibonacci numbers are a sequence of numbers where each value is the sum of the previous two, starting with 0 and 1.

Calculating Fibonacci in JavaScript
```
function fib(n) {
	var a=0, b=1;
	for (var i=0; i < n; i++) {
		var temp = a+b; 
		a = b;
		b = temp;
	}
	return a;
}
```
### What is the difference between let and var?
The 'let' and 'var' are used for variable/method declaration. The 'var' is function scoped, whereas 'let' is block scoped.

### What is the difference between let and const? 

## Numbers
Q: How would you check if a number an integer?
A: See if there is remainder when divided by 1. 
```
function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
```

### What is a callback function? 
A function that is passed to another function as an argument and executed after the operation has completed.

## Equality 
### What is 0.1 + 0.2 === 0.3? 
False. 0.1 + 0.2 does not equal to 0.3, since the sum of two values is 0.30000004. 
### Is { key: 'value' } == { key: 'value' }?
False. When comparing two objects, JS will compare the internal references. Although they have the same properties and values, they are two different objects in memory. 
### strange simple equality results
```
[2] == 2 // true

// weird results
[] == ![]     // true
[] == false   // true

// Non transitive relation
"1" == true   // true
"01" == true  // true
"01" == "1"   // false
```

### Cloning an array
```
var x = ["Apple", "Orange"];
var y = x.slice(0);
```
### Cloning an object
```
var x = {key: "value"};
var y = Object.assign({}, x);
```
### 4 ways to empty an array
1. By assigning an empty array
2. By assigning array length to 0
3. By popping the elements from the array
4. By using slice()

### Delete Operator
Delete property and its value.
```
var student= {age:20, batch:"ABC"};
delete student.age;
```

### Cookies
Cookies are a small text files stored in a computer to hold information used in websites.

### Session Variable


## Reference
1. https://coderbyte.com/algorithm/10-common-javascript-interview-questions
2. https://www.maxpou.fr/js-exercises-explained/
3. https://www.onlineinterviewquestions.com/advanced-javascript-interview-questions/
4. https://www.guru99.com/javascript-interview-questions-answers.html
