//CODE WARS HW
//PROBLEM 1

function makeNegative (num) {
    if (num <= 0) return num
    return num * -1
}


//PROBLEM 2

function positiveSum(arr) {
    let sum = 0
    
    for (let num of arr) {
      if (num > 0) sum += num
    }
  
    return sum
  }


  //PROBLEM 3

  function square(num){
    return num * num;
  }


  //PROBLEM 4

  function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }


  //PROBLEM 5

  function solution(str){
    return str.split('').reverse().join('');  
  }

  // Used the discussion board and the training on Codewars to help me with these problems