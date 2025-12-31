function vowelsCount(str){
  let count = 0;
  let vowels = "aeiouAEIOU"

  for(let i = 0; i<str.length; i++){
    if(vowels.includes(str[i])){
      count++;
    }
  }
  console.log(`string contains ${count} vowels`)
}


vowelsCount("abc divide phone")