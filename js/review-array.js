var fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// add to end
fruits.push('blueberry');
console.log(fruits);

// add to beginning
fruits.unshift('pear');
console.log(fruits);

// replace banana
fruits.splice(2,1,'strawberry');
console.log(fruits);

// removed apple
fruits.splice(1,1);
console.log(fruits);

// copied array into another variable
var copyOfFruits = fruits.slice();
console.log(copyOfFruits);

// displays length of array
console.log(fruits.length);

// checks if fruits variable is an array
console.log(Array.isArray(fruits));