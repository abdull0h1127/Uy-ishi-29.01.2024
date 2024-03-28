function printNumber3(son) {
  for (let i = 1; i <= son; i++) {
    if (i > 0) {
      console.log(i);
    } else if (i < 0) {
      break;
    }
  }
}

printNumber3(5);
