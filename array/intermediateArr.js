const arr = [10,20,30,40,50,60,70,90,5,10,50,40,50,60,70,80,90,100,5];
console.log("Largest number in array");
let largest = arr[0];
for(let i = 0; i<arr.length; i++){
if(arr[i]>=largest){
  largest = arr[i]
}
}
console.log(largest);

console.log("Smallest Number in Array");

let Smallest = arr[0];
for(let i = 0; i<arr.length; i++){
  if(arr[i]<=Smallest){
    Smallest = arr[i];
  }
}
console.log(Smallest);

console.log("Sum of elments of an Array");
let sum  = 0;

for(let i = 0; i<arr.length; i++){
   sum = sum+arr[i]
}
console.log(sum);

console.log("average of array elements")

let sum1 =0;
let avg = 0;

for(let i = 0; i<arr.length; i++){
  sum1= sum1+arr[i];
}
avg = sum/arr.length;
console.log(Math.floor(avg));

console.log("Even Odd check");
let even = 0;
let odd = 0;

for(let i = 0; i<arr.length; i++){
  if(arr[i]%2 === 0 ){
    even++;
  }else{
    odd++;
  }
  }
  console.log(`even : ${even}`)
  console.log(`odd : ${odd}`)

  console.log("Reverse an array");
  let arr1 = []

  for(let i = arr.length; i >=0; i--){
    arr1.push(arr[i])
  }
  console.log(arr1);

  console.log("Remove Duplicate Values");
  let unique = [];

  for(let  i = 0; i<arr.length; i++){
    if(!unique.includes(arr[i])){
      unique.push(arr[i])
    }
  }
  console.log(unique);
  console.log(unique.length);
  