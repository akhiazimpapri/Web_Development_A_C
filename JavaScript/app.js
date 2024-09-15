//QS 1
let arr = [1,2,3,4,5,6,7,8,9,10];
let num = 6;

function longer(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > n) {
            console.log(arr[i]);
        }
    }
}

longer(arr, num);

//QS 2
let str = "abcdabcdefgggh";

function uniqueChar(str) {
    let ans = '';
    for(i = 0; i < str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) === -1) {
            ans = ans + currChar;
        }

    }
    return ans;
}

console.log(uniqueChar(str));

//QS 3
let country = ["Australia", "Germany", "United States of America"];

function longestCountry(country) {
    let ansIdx = 0;
    for(let i=0; i<country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(longestCountry(country));

//QS 4

let stri = "apnacollege";
function countVowels(stri) {
    let count = 0;
    for (let i = 0; i < stri.length; i++) {
        if (stri.charAt(i) == "a" || stri.charAt(i) == "e" || stri.charAt(i) == "i" || stri.charAt(i) == "o" || stri.charAt(i) == "u") {
            count++;
        }
    }
return count;
}

console.log(countVowels(stri));

//QS 5
let start = 100;
let end = 200;

function randomNum(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(randomNum(start, end));