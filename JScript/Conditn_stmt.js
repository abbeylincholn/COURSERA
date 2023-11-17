// if else
var result = 50;
if(result > 40) {
    console.log('You pass the test')
} else {
    console.log ('You did not pass the test')
}

// if, else if, else

var place = 'first';

if (place == 'first') {
    console.log ('Gold')
} else if (place == 'second') {
    console.log ('Silver')
} else if (place == 'third') {
    console.log ('Bronze')
} else {
    console.log ('No medals')
}

// switch statement

var place = 'first';

switch (place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log ('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}

// practice

var age = 10

if (age >= 65) {
    console.log ('You get your income from your pension')
} else if (age < 65 && age >= 18) {
    console.log('Each month you get a salary')
} else if (age < 18) {
    console.log('You get an allowance')
} else { 
    console.log('The value of the age variable is not numerical')
}

