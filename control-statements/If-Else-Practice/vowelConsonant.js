function isVowel(ch) {
  ch = ch.toLowerCase();

  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log(`${ch} is a vowel`);
  } else if (ch > "a" && ch < "z") {
    console.log(`${ch} is a consonant`);
  } else {
    console.log(`Not an alphabet Char`);
  }
}

isVowel("a");
isVowel("e");
isVowel("b");
isVowel("f");
isVowel("8");
isVowel("10");
