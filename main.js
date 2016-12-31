// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

/*

1. Write a JavaScript function to remove a specific element from an array.

  * Sample input: removeArrayElement([2, 5, 9, 6], 5))
  * Sample output: [2, 9, 6]


function removeArrayElement (arr, elem) {
var indexOfElem = arr.indexOf(elem)
console.log(indexOfElem);
var newArray = arr.splice((indexOfElem), 1)
console.log(arr);
return arr
}

helper.test(removeArrayElement([7, 23, 4, 8, 16], 8), [7,23,4,16])
*/

// Write your own tests and then write code to pass the tests!
// helper.test(myFunc(intput), expectedOutput)

/*
2. Write a JavaScript function to get nth largest element from an unsorted array.

  * Sample input: nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)
  * Sample output: 89


function nthlargest (arr, n) {
var sortArray = arr.sort(function(a, b){return a-b })
console.log(sortArray);
var largestNumIndex = sortArray.length - 1;
console.log(sortArray[largestNumIndex - (n-1)]);
return sortArray[largestNumIndex - (n-1)];

}

helper.test(nthlargest([200, 56, 99, 343, 80, 24], 2), 200)
*/

/*
3. Write a JavaScript function to get a random item from an array.
  * Sample input: randomItem(['hello', 'hi', 'bye'])
  * Sample output: 'hello' // or 'hi', or 'bye'!

function randomItem(arr) {
var randomIndex = Math.floor(Math.random() * (arr.length - 1));
var randomString = arr[randomIndex];
console.log(randomString);
return randomString;
}

randomItem(['hey', 'sorry', 'delicious', 'hi'])
*/
/*
4. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by a specific step from starting position.

  * Sample input: arrayRange(1, 4, 1))
  * Sample output: [1, 2, 3, 4]

  * Sample input: arrayRange(-6, 5, 2)
  * Sample output: [-6, -4, -2, 0, 2]
*/

function arrayRange(start, length, increment) {
var newArray = [];
var values = start
newArray.push(values);
for (var i = 1; i < length; i++) {
  values = values + increment;
  newArray.push(values);
}
console.log(newArray);
return newArray;
}

helper.test(arrayRange(-6, 5, 2), [-6, -4, -2, 0, 2])
