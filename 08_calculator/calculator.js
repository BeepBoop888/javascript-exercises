const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  let sum = 0;
  numArray.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function (numArray) {
  let sum = 1;
  numArray.forEach(element => {
    sum *= element;
  });
  return sum;
};

const power = function (num1, num2) {
  let sum = num1;
  for (let i = 1; i < num2; i++) {
    sum *= num1;
  }
  return sum;
};

const factorial = function (num1) {
  if (num1 === 0) {
    return 1;
  }
  let sum = num1;
  for (let i = num1 - 1; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
