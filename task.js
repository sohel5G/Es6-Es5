//   Task 1

// const funcName = (a, b, c) => a * b *c;
// console.log( funcName(2, 3, 4) );

// task 2

// console.log(  `
// I am a  developer
// I love to code
// I love to eat biryani
// `  )

// Task 3

// const funcName = (x, y = 0) => x + y;
// console.log( funcName(6) );

// Task 4

// const evenLangthName = (array) => {
//     const evenNameArry = [];
//     for(names of array){
//         if( (names.length % 2) === 0 ){
//             evenNameArry.push(names);
//         }
//     }
//     return evenNameArry;
// }
// const myArray = ['Jamal', 'Ashik', 'Imrul', 'Sohel', 'Nila', 'Araf', 'Liza', 'Rana', 'Kamrul'];
// console.log( evenLangthName(myArray) );

// Task 5

const findMaxNum = (arry1, array2) => {
  const sumArray = [...arry1, ...array2];
  return Math.max(...sumArray);
};
const arr1 = [12, 32, 2, 34, 125, 65, 35, 76, 88];

const arr2 = [43, 45, 65, 31, 23, 78, 54, 99];
console.log(findMaxNum(arr1, arr2));
