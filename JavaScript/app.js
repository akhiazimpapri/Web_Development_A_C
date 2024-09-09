//Qs 1

let arr = [7, 9, 0, -2];
console.log(arr.slice(0,3));

//QS 2
let n = 3; 

let ans = arr.slice(arr.length-n); 
console.log(ans);

//QS 3

let str = prompt("please enter a string");
if(str.length==0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}

//QS 4
if(str[n] == str[n].toLowerCase()) {
    console.log("It is lower case.")
} else {
    console.log("not lower case");
}

//QS 5
let stri = prompt("please enter a string");
console.log(`original string = ${stri}`); 
console.log(`string without spaces = ${stri.trim()}`);

//QS 6
                   
let arri = ['hello', 'a', 23, 65, 99, -6];
let item = 65;

if(arri.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("elementdoesn'texistinarray");
}