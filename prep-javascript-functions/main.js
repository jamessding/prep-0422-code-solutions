function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('Juan', 'Martinez'));

function cube(number) {
  return number ** 3;
}

console.log(cube(5));
