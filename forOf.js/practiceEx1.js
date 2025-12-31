//Array
//String
//Map
//Set

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;

for (let num of arr) {
  sum += num;
}

console.log(sum);

let name = "ABCD";

for (let char of name) {
  console.log(char);
}

let unique = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]);

for (let i of unique) {
  console.log(i);
}

unique.add(30);
console.log(unique);
console.log(unique.size);
console.log(unique.has(10));

let user = new Map();
user.set("name","XYZ");
user.set("age",29);

for(let [key, value] of user){
  console.log(key," : ",value)
}

console.log(user.entries())
console.log(user.clear)
console.log(user)
console.log(user.delete("name"))
console.log(user)