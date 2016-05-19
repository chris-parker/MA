def fizzbuzz(number)
  answer = ""
  if number % 3 == 0
    answer << "fizz"
  end
  if number % 5 == 0
    answer << 'buzz'
  end
  if number % 3 != 0 && number % 5 != 0
    return number
  end
  answer
end
