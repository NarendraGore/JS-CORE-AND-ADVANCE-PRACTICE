// fibonacci series

let N = 10;
let a = 0,
  b = 1;
console.log(a);
console.log(b)
for (let i = 3; i <= N; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}
