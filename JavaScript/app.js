//QS 1
let arr = [1,2,3,4,5,6,2,3];

let num = 2;

for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1);
    }
}

//QS 2 
let number = 287152;
let count = 0;
let copy = number;
 while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);


//QS 3
let numberr = 287152;
let sum = 0;
let copyy = numberr;

 while(copyy > 0) {
    digit = copyy % 10;
    sum = sum + digit;
    copy = Math.floor(copy/10);
}
console.log(sum);

//QS 4
let numb = 7;
let fact = 1
while(numb > 0) {
    fact = fact * numb;
    numb--;
}
console.log(fact);

//QS 5

let array = [2, 5, 10, 4, 2, 7, 1, 9];

let largest = 0;

for(let i=0; i<array.length; i++) {
    if(largest < array[i]) {
        largest = array[i];
    }
}

console.log(largest);