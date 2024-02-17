function filterArray(numbers, value) {
  const newArray = [];
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

// 2 - вариант

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (const item of numbers) {
//     if (item > value) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
