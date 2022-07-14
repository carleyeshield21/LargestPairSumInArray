// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum (numbers) {
  let newnum = new Array(...numbers)
  numbers.sort(function(a, b){return b-a});
  console.log(`The largest pair in the array [${newnum}] are:\n${numbers[0]} and ${numbers[1]}\nsum: ${numbers[0] + numbers[1]}`)
}
largestPairSum([10, 14, 2, 23, 19])
console.log('========')
largestPairSum([99, 2, 2, 23, 19])
console.log('========')
largestPairSum([-100,-29,-24,-19,19])
console.log('========')
largestPairSum([1,2,3,4,6,-1,2])
console.log('========')
largestPairSum([-10, -8, -16, -18, -19])