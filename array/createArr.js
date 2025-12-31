
// Create an array of 5 numbers and print it.

// Access the first and last elements of an array.

// Add an element to the end of an array.

// Add an element to the beginning of an array.

// Remove the last element from an array.

// Remove the first element from an array.

// Find the length of an array.

// Loop through an array using a for loop.

// Check whether a value exists in an array.

// Copy one array into another.

const arr = [10,20,50,30,40];
const arr1 = new Array(10,20,30,40,50);
console.log(arr);
console.log(arr1);

console.log(arr[0]);
console.log(arr[arr.length-1]);
console.log(arr1[0]);
console.log(arr1[arr1.length-1]);
arr.push(5);
console.log(arr.length-1);
arr1.push(10);
console.log(arr1.length-1);
arr.unshift(20);
console.log(arr[0]);
arr1.unshift(20);
console.log(arr1[0]);
console.log(arr);
console.log(arr1)
arr.pop();
console.log(arr);
arr1.pop();
console.log(arr1);
console.log(arr.length);
console.log(arr1.length);

for(let i = 0; i<arr.length; i++){
  console.log(arr[i])
}
let num = 50
for(let i = 0; i<arr1.length; i++){
  console.log(arr1[i])
}

if(arr.includes(num)){
  console.log("Value Exist");
}else{
  console.log("Value not exist")
}

let arr2 = [...arr]
console.log(arr2)
let arr3 = [...arr1];
console.log(arr3);