function safeNum(value){
let num  = Number(value);

let number = num? isFinite(num) :"Invalid";
console.log(number)
}

safeNum("abc")
safeNum("123")
safeNum("45.5")
safeNum("15")
safeNum(true)
safeNum(false)

