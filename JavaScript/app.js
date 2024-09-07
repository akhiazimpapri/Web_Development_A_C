//QS 1
let num = 564570;

if(num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

//QS 2
let userName = prompt("Enter your user name :");
let age = prompt("Enter your age :");
console.log(`${userName} is ${age} years old.`);

//QS 3
let quarter = 1;
 switch(quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("Juiy, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Not A Quarter!");
 }

//QS 4
let str = "AkhiAzimPapri";
let length = str.length;

if((str[0] === 'A' || str[0] === 'a') && length > 5) {
    console.log("golden");
} else {
    console.log("not golden");
}

//QS 5
let a = 2;
let b = 3;
let c = 4;

if(a > b && a > c) {
    console.log(`${a} is largest.`);
} else if(b > c) {
    console.log(`${b} is largest.`);
} else {
    console.log(`${c} is largest.`);
}

//QS 6
let num1 = 32;
let num2 = 47852;

if((num1 % 10) === (num2 % 10)) {
    console.log("Numbers have the same last digit which is", num1 % 10);
} else {
    console.log("Numbers don't have the same last digit.");
}