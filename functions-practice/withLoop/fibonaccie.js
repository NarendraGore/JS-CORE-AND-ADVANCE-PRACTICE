function fibonaci(N){
  let a = 0;
  let b = 1;
  console.log(a)
  console.log(b)
  for(let i =3; i<=N; i++){
    c = a + b;
    console.log(c);
    a = b; 
    b = c
  }
}

fibonaci(10)