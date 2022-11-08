module.exports.add = add;
module.exports.multiply = multiply;
module.exports.subtract = subtract;
module.exports.divide = divide;
module.exports.power = power;
module.exports.factorial = factorial;
module.exports.modolo = modolo;
module.exports.check_odd_number = check_odd_number;
module.exports.even = even;

function add(...number) {
    let sum = 0;
    number.forEach(x => sum += x);
    return sum;
}

function multiply(...number) {
    sum = 1
    number.forEach(x => sum *= x);
    return sum
}

function subtract(number1, number2) {
    return number1 - number2
}

function divide(number1, number2) {
    return number1 / number2
}

function power(base, power) {
    return base ** power
}


function factorial(number) {
    sum = 1
    for (let i = number; i > 0 ; i--) {
        sum *= i
    }
    return sum
}

function modolo(number1, number2) {
	return number1 % number2;
}

function check_odd_number(number) {
    if (number % 2 != 0) {
	 console.log('odd');
        return true
    }
    return false
}

function even(number) {
	if(number % 2 == 0) {
    return "even"
}
}

