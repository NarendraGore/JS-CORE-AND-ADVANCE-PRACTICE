function removeSpace(sentence){
let remSpace = sentence.trim().replace(/\s+/g," ");
console.log(remSpace) 
}

removeSpace("Hello     world      good Morning           ")
removeSpace("Hello     1545      54 6455          654         654                654               654               546      good Morning           ")
