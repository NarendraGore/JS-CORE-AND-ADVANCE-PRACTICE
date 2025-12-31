function largestArray(arr){
  let largest = arr[0]

  for(let i = 1; i<arr.length; i++ ){
    if(arr[i]>largest){
      largest = arr[i]
    }
  }
  console.log(largest)
}

largestArray([10,20,30,45,25,32,98,15,89,65,5,6,5,50])