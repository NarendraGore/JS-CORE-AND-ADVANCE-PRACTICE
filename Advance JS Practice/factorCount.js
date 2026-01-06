function factorCount(num) {
  let count = 0;
  let factors = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      count++;
      factors.push(i);
    }
  }
  console.log(factors);
  console.log("factor count:" + count);
}
factorCount(6);
factorCount(125);
factorCount(15);
factorCount(5);
factorCount(250);
factorCount(266);
