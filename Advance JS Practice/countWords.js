function countWord(sentence){
  let count = sentence.trim().split(/\s+/).length;
  console.log(count)
}
countWord("Hello World ! Good morning")
