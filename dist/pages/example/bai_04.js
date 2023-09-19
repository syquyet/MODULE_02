"use strict";
function handle_bai04() {
    const string = prompt("nhập vào một chuỗi") || "";
    const newString = string.toLowerCase();
    const dataArray = [];
    for (const char of newString) {
        if (/[a-z0-9]/.test(char)) {
            dataArray.push(char);
        }
    }
    console.log(2222, newString);
    console.log(11111, dataArray);
    const isPalindrome = checkPalindrome(dataArray);
    isPalindrome
        ? console.log("/" + string + "/ la một chuỗi palidrom")
        : console.log("/" + string + "/ không la một chuỗi palidrom");
}
function checkPalindrome(data) {
    for (let index = 0; index < data.length / 2; index++) {
        if (data[index] !== data[data.length - 1 - index]) {
            return false;
        }
    }
    return true;
}
