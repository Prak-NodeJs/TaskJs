/*1. Print all even numbers from 0 – 10 done
2. Print a table containing multiplication tables /done
3. Create a length converter function  /done
4. Calculate the sum of numbers within an array /done
5. Create a function that reverses an array /done
6. Create a function that filters out negative numbers in an array /done
7. Remove the spaces found in a string   /done
8. Return a Boolean if a number is divisible by 10 /done
9. Return the number of vowels in a string
// 10. Sort an array from lowest to highest and vice versa **/

//1 All even number from 0- 100;

// const startNum = 0
// const endNum = 100l
// console.log('Even number between 0 to 100')
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

//2) printing tables containing multification table

// for (var n = 1; n <= 10; n++) {
//   for (var i = 1; i <= 10; i++) {
//     result = n + '*' + i + '=' + n * i
//     console.log(result)
//   }
// }

//3) Create length function converter

// function lengthCoverter(string) {
//   return string.length
// }
// const length = lengthCoverter('Prakash')
// console.log(`length of your string is : ${length}`)

//4) Calculate the sum of numbers within an array

// const arrs = [1, 2, 4, 5, 6]
// let sum = 0
// arrs.forEach((num) => {
//   return (sum += num)
// })
// console.log(`Sum of number is: ${sum}`)

//5 Create a function that reverses an array

// function reverseArray(array) {
//   let reverse = []
//   for (let i = array.length - 1; i >= 0; i--) {
//     reverse.push(array[i])
//   }
//   return reverse
// }
// const g = reverseArray([1, 2, 34, 4])
// console.log(g)

//6)Create a function that filters out negative numbers in an array

// function negative(array) {
//   const negativeNumber = array.filter((number) => {
//     return number < -1
//   })
//   return negativeNumber
// }
// let array = negative([1, 2, -3, -4])
// console.log(array)

//7. Remove the spaces found in a string
var str = '   Praksh '
console.log(str.trim())
// 8)Return a Boolean if a number is divisible by 10

// const num = 32
// const diviby8 = true
// const notdivi = false
// if (num % 8 == 0) {
//   console.log(`${diviby8}`)
// } else {
//   console.log(`${notdiviby8}`)
// }

//9. Return the number of vowels in a string
// function countNumbersOfVowels(str) {
//   var numOfvowels = 0
//   for (var i = 0; i <= str.length; i++) {
//     var ch = str.charAt(i)
//     if (
//       ch == 'e' ||
//       ch == 'i' ||
//       ch == 'o' ||
//       ch == 'a' ||
//       ch == 'u' ||
//       ch == 'A' ||
//       ch == 'I' ||
//       ch == 'O' ||
//       ch == 'U' ||
//       ch == 'E'
//     ) {
//       numOfvowels += 1
//     }
//   }
//   return numOfvowels
// }

// var str = countNumbersOfVowels('ABCU')
// console.log(str)

//  10) sorting Array;

// var array = [1, 2, 4, 3]

// for (i = 0; i < array.length; i++) {
//   if (array[i - 1] > array[i]) {
//     var result = array[i - 1]
//     array[i - 1] = array[i]
//     array[i] = result
//   }
// }
// let reverse = []
// for (let i = array.length - 1; i >= 0; i--) {
//   reverse.push(array[i])
// }

// console.log('from lower to highest', array)
// console.log('from highest to lowes', reverse)
