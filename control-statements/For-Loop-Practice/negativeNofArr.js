// Negative numbers of Array

let arr = [10,50,20,-10,-15,10,-23,-57,-88,35]
let negArr = []

for(let i =0; i<=arr.length; i++){
    if(arr[i]<0){
      negArr.push(arr[i])
    }
} 
console.log(negArr)