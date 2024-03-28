function convertToCelsius(F) {
  let C;
  return (C = ((F - 32) * 5) / 9);
}

let result = convertToCelsius(50);
console.log(result);
