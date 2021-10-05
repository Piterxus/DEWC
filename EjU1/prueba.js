let a = 5;
let b = 98;
let c = 120;
let d = 98;
let e = 120;
let max;

if (a >= b) {
    max = a;
} else {
    max = b;
}

if (c >= max) {
    max = c;
}

if (d >= max) {
    max = d;
}

if (e >= max) {
    max = e;
}

if (a === max) {
    console.log("Ma: " + a);
}

if (b === max) {
    console.log("Mb: " + b);
}


if (c === max) {
    console.log("Mc: " + c);
}


if (d === max) {
    console.log("Md: " + d);
}
if (e === max) {
    console.log("Me: " + e);
}

console.log("Max: " + max);