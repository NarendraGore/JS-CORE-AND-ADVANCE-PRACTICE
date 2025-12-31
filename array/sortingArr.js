const arr = [10,20,30,50,98,6,0,654,4,50,65,4,54,5546,6,1,29,941,64,64,15,15];

arr.sort((a,b)=>(b-a));
console.log(arr);

for(let i = 0; i<arr.length; i++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i]>arr[j]){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp
    }
  }
} 
console.log(arr)