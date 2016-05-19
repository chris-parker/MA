function fizzBuzz(x, y) {
  var array = []
  while (x <= y) {
    if (x % 3 == 0 && x % 5 == 0) {
      array.push("fizzbuzz");
    } else if (x % 3 == 0) {
      array.push("fizz");
    } else if (x % 5 == 0) {
        array.push("buzz");
    } else {
      array.push(x);
    }
    x += 1;
  }
  console.log(array)
}
