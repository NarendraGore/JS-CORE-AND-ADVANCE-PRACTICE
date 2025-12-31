function palindrome(str){
  let reverse = ""

  for(let i= str.length-1; i>=0; i--){
    reverse = reverse+str[i]
  }

  if(reverse === str){
    console.log("string is palindrome")
  }else{
    console.log("string is not palindrome")
  }
}

palindrome("madam")
palindrome("mam")
palindrome("sir")
palindrome("college")
