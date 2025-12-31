function reverse(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(`Original String: ${str}`);
  console.log(`reverse String: ${reverse}`);
}

reverse("Narendra");
reverse("madam");
reverse("gore");
reverse("abc");
