function freq(arr){
  let freq = {};

  for(let i=0; i<arr.length; i++){
    let num = arr[i];

    if(freq[num]){
      freq[num]++;
    }else{
      freq[num] = 1
    }
  }
  console.log(freq)
}

let arr = [10,10,20,35,0,56,65,6,5,98,89,98,98,15,25,65,625,625,45,45,45,45]
freq(arr)