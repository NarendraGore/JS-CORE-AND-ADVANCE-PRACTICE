//Write a program to check whether a character is an alphabet, digit, or special character.

function checkCharType(ch){
  if(ch>="a"&& ch<="z" || ch>="A" && ch<="z"){
    console.log(`${ch} is a alphabet`)
  }else if(ch>="0" && ch<=9){
    console.log(`${ch} is a digit`)
  }else if(ch>"10"){
    console.log(`${ch} is a number`)
  }else{
    console.log(`${ch} is a special character`)
  }
}

checkCharType("98")
checkCharType("$")
checkCharType("a")
checkCharType("C")
checkCharType("/")
checkCharType("7")
checkCharType("110")

