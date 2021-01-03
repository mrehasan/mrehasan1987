var number1 = parseFloat(prompt('Enter first number: '));

var operator = prompt('Enter operator ( either +, -, * , %, or / ): ');

var number2 = parseFloat(prompt('Enter second number: '));


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}

else if (operator == '*') {
    result = number1 % number2;
}
else {
    result = number1 / number2;
}
document.write(`${number1} ${operator} ${number2} = ${result}`);