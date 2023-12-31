// Sum all numbers in a range
function sumAll(arr) {
  // We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
  // For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
  let sortedArr = arr.sort((a, b) => a - b);
  let sumRange = 0;
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sumRange += i;
  }
  return sumRange;
}
console.log(sumAll([4, 1]));

// Diff two arrays
function diffArray(arr1, arr2) {
  // Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  // Note: You can return the array with its elements in any order.
  let newArr = [];
  // I first filter arr1 by passing the function to check which of its element is not included in arr2
  let checkerArr1 = arr1.filter((element) => !arr2.includes(element));
  // I do the same to arr2
  let checkerArr2 = arr2.filter((element) => !arr1.includes(element));
  // concat both results in this newArr
  newArr = checkerArr1.concat(checkerArr2);
  return newArr;
}
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
