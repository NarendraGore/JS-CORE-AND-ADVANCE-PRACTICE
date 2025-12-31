function smalletArray(arr){
  let smallest = arr[0];

  for(let i = 1; i<arr.length; i++){
    if(arr[i]<smallest){
      smallest = arr[i]
    }
  }
  console.log(smallest)
}

smalletArray([10,15,20,35,2,15,1,0,98,0,9,8,8,980,8,9,9,-1,-10])