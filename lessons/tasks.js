// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");
// console.log(hobbies);

// hobbies.pop();
// console.log(hobbies);

// hobbies.unshift("Coding");
// console.log(hobbies);

// hobbies.shift();
// console.log(hobbies);

// hobbies.splice(1, 1, "Good Food");
// console.log(hobbies);

// hobbies.splice(1, 0, "Shooting");
// console.log(hobbies);

// hobbies.splice(1, 0);
// console.log(hobbies);

// hobbies.splice(2);
// console.log(hobbies);

// // Reverse String
// let str = "Hello";
// let myArr = Array.from(str).reverse().join('');
// console.log(myArr);

// // Check if the string is Palindrome
// const checkPalindrome = (str) => {
//   let currentStr = str.toLowerCase();
//   const reversedStr = Array.from(currentStr).reverse().join('');
//   return reversedStr === currentStr;
// };

// console.log(checkPalindrome("Able was I ere I saw Elba"));

// // Find the Factorial
// const fact = (num) => {
//   let result = 1;

//   if (num === 0) {
//     return result;
//   }

//   result *= num;
//   return result * fact(num - 1);
// };

// console.log(fact(7));

// // FizzBuzz
// // Write a JavaScript function that prints numbers from 1 to n. But for multiples of 3, 
// // print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". 
// // For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// const fizzBuzz = (num) => {
//   const fizz = "Fizz";
//   const buzz = "Buzz";
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     if(i % 3 === 0) {
//       if(i % 5 === 0) {
//         result.push(fizz + buzz);
//       } else {
//         result.push(fizz);
//       }
//     } else if(i % 5 === 0) {
//       result.push(buzz);
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(fizzBuzz(15));

// // Prime Numbers
// // Write a JavaScript function that determines whether a given number is a prime number. 
// // A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// const primeNumber = (num) => {
//   if(num <= 1) {
//     return false;
//   }
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(primeNumber(5));

// // Sum of Digits
// // Write a JavaScript function that calculates the sum of the digits of a given positive integer.

// const allNumSum = (num) => {
//   let strNum = String(num);
//   let sum = 0;
//   for(let i = 0; i < strNum.length; i++) {
//     sum += Number(strNum[i]);
//   }
//   return sum;
// };

// console.log(allNumSum(456));

// // Find the Largest Element in an Array

// const maxNum = (arr) => {
//   let largest = arr[0];
//   for(let i = 1; i < arr.length; i++) { 
//     if(arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// };

// console.log(maxNum([-3, 0, -8, -2, -1]));

// // Remove Duplicates from an Array

// const uniqueArr = (arr) => {
//   // let uniqueArray = [];
//   // for(let i = 0; i < arr.length; i++) { 
//   //   if(!uniqueArray.includes(arr[i])) {
//   //     uniqueArray.push(arr[i]);
//   //   }
//   // }
//   // return uniqueArray;
//   return Array.from(new Set(arr));
// };

// console.log(uniqueArr([1, 2, 3, 4, 2, 1, 5]));

// // Capitalize Words

// const capWords = (str) => {
//   const words = str.split(' ');
//   for(let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   return words.join(' ');
// };

// console.log(capWords("hello world"));

// // Check for Anagrams
// // Write a JavaScript function that takes two strings as input and determines 
// // if they are anagrams of each other. Anagrams are words or phrases formed by 
// // rearranging the letters of another.

// const isAnagram = (str1, str2) => { 
//   if(str1.length !== str2.length) { 
//     return false;
//    }
//    const sortedStr1 = str1.split('').sort().join('');
//    const sortedStr2 = str2.split('').sort().join('');
//    return sortedStr1 === sortedStr2;
//  };

//  console.log(isAnagram("listen", "silent"));
 
// // Rotate Array
// // Write a JavaScript function that rotates an array to the right by a given number of steps. 
// // For example, if the array is [1, 2, 3, 4, 5] and the number of steps is 2, the rotated array 
// // should be [4, 5, 1, 2, 3].

// const rotateArray = (arr, steps) => {
//   let size = arr.length - steps;
//   for(let i = size; i < arr.length; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// };

// console.log(rotateArray([1, 2, 3, 4, 5], 2));

// // Calculate the Power
// // Write a JavaScript function that calculates the power of a given base raised to a given exponent. 
// // Implement the function without using the built-in Math.pow() function.

// const calcPow = (base, exp) => {
//   // return base ** exp;
//   let result = 1;
//   for(let i = 0; i < exp; i++) {
//     result *= base;
//   }
//   return result;
// };

// console.log(calcPow(2, 3));

// // Implement a Stack
// // Write a JavaScript class or function that implements a basic stack. Your stack should have methods push, 
// // pop, and peek (return the top element without removing it). You can use an array to store the stack elements.

// class Stack {
//   constructor() {
//     this.arr = [];
//   }

//   push(element) {
//     this.arr.push(element);
//   }

//   pop() {
//     if(this.arr.length === 0) {
//       return "Underflow";
//     }
//     return this.arr.pop();
//   }

//   peek() {
//     return this.arr[this.arr.length - 1];
//   }
// }

// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);

// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.peek());

// // Implement a Queue
// // Write a JavaScript class or function that implements a basic queue. 
// // Your queue should have methods enqueue (add element to the queue), 
// // dequeue (remove and return the front element), and peek (return the 
// // front element without removing it). You can use an array to store the queue elements.

// class MyQueue {
//   constructor() { 
//     this.arr = [];
//    }

//   enqueue(element) {
//     this.arr.push(element);
//   }

//   dequeue() {
//     return this.arr.shift();
//   }

//   peek() {
//     return this.arr[0];
//   }
// }

// const myQueue = new MyQueue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);

// console.log(myQueue.peek());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.peek());

// // Reverse a Linked List

// class ListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const reverseLinkedList = (head) => {
//   let prev = null;
//   let current = head;

//   while (current !== null) {
//     const nextNode = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextNode;
//   }

//   return prev;
// };

// // Example usage
// const originalList = new ListNode(1,
//   new ListNode(2,
//     new ListNode(3,
//       new ListNode(4, null)
//     )
//   )
// );

// const reversedList = reverseLinkedList(originalList);

// // Output the reversed list
// let current = reversedList;
// while (current !== null) {
//   console.log(current.value);
//   current = current.next;
// }

// // Bubble Sort

// const bubbleSort = (arr) => {
//   for(let i = 0; i < arr.length; i++) {
//     let swapped = false;
//     for(let j = 0; j < arr.length - i - 1; j++) {
//       if(arr[j] > arr[j + 1]) {
//         // Swap elements
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         // Mark as swapped so we can exit loop early
//         swapped = true;
//         }
//       }
//     }
//   return arr;
// };

// console.log("Bubble sorted array:");
// console.log(bubbleSort([5, 3, 8, 4, 1]));

// // Merge Sort

// const mergeSort = (arr) => {
//   if(arr.length <= 1) {
//     return arr;
//   }

//   // Split the array into two halves
//   let middleArr = Math.floor(arr.length / 2);
//   let firstHalf = arr.slice(0, middleArr);
//   let secondHalf = arr.slice(middleArr);

//   // Recursively sort each half
//   let sortedLeft = mergeSort(firstHalf);
//   let sortedRight = mergeSort(secondHalf);

//   // Merge the sorted halves
//   return merge(sortedLeft, sortedRight);
// };

// const merge = (left, right) => {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Compare elements from both halves and merge them
//   while(leftIndex < left.length && rightIndex < right.length) {
//     if(left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Add remaining elements from left and right halves (if any)
//   return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// };

// const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(unsortedArray));

// // Quick Sort

// const quickSort = (arr) => {
//   if(arr.length <= 1) {
//     return arr;
//   }
//   let pivot = arr[0];
//   let left = [];
//   let right = [];

//   for(let i = 1; i < arr.length; i++) {
//     if(arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat(pivot, quickSort(right));
// };

// const unsortedQuickArray = [38, 27, 43, 3, 9, 82, 10];
// console.log(quickSort(unsortedQuickArray));

// // Implement a Function to Find the First Non-Repeated Character
// const firstNonRepeatedCharacter = (str) => {
//   let arr = Array.from(str);
//   let nonReapeatingChar = null;
//   for(let i = 0; i < arr.length; i++) {
//     if(!arr.includes(arr[i], i+1)) {
//       nonReapeatingChar = arr[i];
//       break;
//     }
//   }
//   return nonReapeatingChar;
// };

// console.log(firstNonRepeatedCharacter("programming")); // Output: "p"
// console.log(firstNonRepeatedCharacter("abacabad"));    // Output: "c"
// console.log(firstNonRepeatedCharacter("hello"));       // Output: "h"

// // Implement a Function to Find the Intersection of Two Arrays

// const findIntersection = (arr1, arr2) => {
//   arr1.sort();
//   arr2.sort();
//   let commonArr = [];
//   for(let i = 0; i < arr1.length; i++) {
//     if(arr2.includes(arr1[i])) {
//       commonArr.push(arr1[i]);
//     }
//   }
//   return commonArr;
// };

// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));        // Output: [3, 4]
// console.log(findIntersection(['a', 'b', 'c'], ['b', 'c', 'd']));  // Output: ['b', 'c']
// console.log(findIntersection([1, 2, 3], [4, 5, 6]));              // Output: []

// const a = { c: 5 };
// const b = JSON.parse(JSON.stringify(a));
// console.log(a == b, b.c);

const determineNumberOfDays = (D, X) => {
  let size = D.length;
  let days = 1;
  let missionsNum = X;
  for(let i = 0; i < size - 1; i++) {
    let diff = Math.abs(D[i] - D[i + 1]);
    if(diff > X || missionsNum < diff) {
      days++;
      missionsNum = X;
    } else {
      missionsNum -= diff;
    }
  }
  return days;
}

console.log(determineNumberOfDays([5, 8, 2, 7], 3));
console.log(determineNumberOfDays([2, 5, 9, 2, 1, 4], 4));
console.log(determineNumberOfDays([1, 12, 10, 10, 5, 2], 2));
