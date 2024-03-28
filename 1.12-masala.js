function generateGreeting(name) {
  if (name === "Abdulloh") {
    return `Assalomu alaykum ${name}`;
  } else name != "Abdulloh";
  return `Siz Abdulloh kiritmadingiz`;
}

let result = generateGreeting("Abdulloh");
console.log(result);
