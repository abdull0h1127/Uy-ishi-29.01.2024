function generateGreeting(name) {
  if (name === "Abdulloh") {
    return "Assalomu alaykum" + " " + name;
  } else if (name != "Abdulloh") {
    return "Siz Abdulloh kiritmadingiz";
  }
}

let result = generateGreeting("Abdulloh");
console.log(result);
