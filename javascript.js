function add7(num1) {
    return num1 + 7;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function capitalize(word) {
    let uchar = word.slice(0,1);
    let rest = word.slice(1);
    uchar = uchar.toUpperCase();
    rest = rest.toLowerCase();

    return uchar + rest;
}

function lastLetter(word) {
    return word.slice(-1);
}

console.log(add7(243));
console.log(multiply(12, 12));
console.log(capitalize("bEyOndSTuPID"));
console.log(lastLetter("gigachad"));