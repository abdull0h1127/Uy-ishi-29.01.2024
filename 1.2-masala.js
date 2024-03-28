function checkNumber(num) {
  if (num > 0) {
    console.log("Musbat");
  } else if (num < 0) {
    console.log("Manfiy");
  } else if (num == 0) {
    console.log("0");
  }
  return num;
}

let result = checkNumber(2);
console.log(result);
