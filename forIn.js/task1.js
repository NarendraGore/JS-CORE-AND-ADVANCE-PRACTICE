let response = {
  status: 200,
  message: "Success",
  data: {
    id: 1,
    name: "User"
  }
};


// Task:
// ✔ Print all top-level keys
// ✔ Count total properties
// ✔ Detect nested objects


let totalprops = 0;
for(let key in response){
  console.log("All top level Properties:", key)
  totalprops++;

  if(typeof response[key] === "object" && response[key] !== null){
    console.log("Nested object found at key: ", key)
  }

}
console.log(totalprops)

