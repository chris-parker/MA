describe("fizzBuzz", function() {

  it("should print fizz for multiples of 3", function() {
    expect(fizzBuzz(1, 3)).toEqual([1, 2, "fizz"]);
  });

  it("should print buzz for multiples of 5", function() {
    expect(fizzBuzz(1, 5)).toEqual([1, 2, "fizz", 4, "buzz"]);
  });

  it("should print fizzbuzz for multiples of both 3 and 5", function() {
    expect(fizzBuzz(12, 16)).toEqual(["fizz", 13, 14, "fizzbuzz", 16]);
  });

});
