const arr = [10,20,30,50,98,6,0,654,4,50,65,4,54,5546,6,1,29,941,64,64,15,15];

let largest = -Infinity;
let second = -Infinity;
for(let i = 0; i<arr.length; i++){
  if(arr[i]>largest){
    second = largest; 
    largest = arr[i];
  }else if(arr[i]>second && arr[i] !== largest){
    second = arr[i]
  }
}
console.log(largest);
console.log(second)