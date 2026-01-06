function longWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  console.log(longest);
}

longWord("Hello world!!! Good Morning ");
