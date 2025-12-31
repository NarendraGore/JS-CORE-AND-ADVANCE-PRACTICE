let CP = 100;
let SP = 80;

if(SP>CP){
  console.log(`Profit: ${SP-CP} RS`)
}else if(CP>SP){
  console.log(`Loss : ${CP-SP} RS`)
}else{
  console.log(`No Profit No Loss`)  
}