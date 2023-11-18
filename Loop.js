// Exercise// for loop. i++

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed')

for (var i = 1; i <= 5; i++) {
    console.log(i)
} console.log('Counting completed')

//------------------------------------
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

for (var i = 5; i > 0; i--) {
    console.log(i)
}; console.log('Counting Finished')


// while loop. i = i - 1

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

var i = 1;
while (i < 6) {
    console.log(i);
    i++
};
console.log('Counting completed');

//--------------------------------------------

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

var i = 5;
while (i > 0 ) {
    console.log(i);
    i = i - 1
};
console.log('Counting finished')

//----------------------------------------------

console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)

var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};
console.log('year finishing')
//-----------------------------------------------

// nested loops - one inside another 

for (var i = 2023; i < 2025; i++) {
    console.log(i);
    for (var j = 6; j < 9; j++) {
        console.log("------", j);
    }
}
//----------------------------------------------
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}
//---------------------------------------------

for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}
//----------------------------------------------

for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}