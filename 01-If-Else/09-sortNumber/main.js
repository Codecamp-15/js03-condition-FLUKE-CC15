let max;
let mid;
let min;
let x = Number(prompt('Enter number 1'));
let y = +prompt('Enter number 2');
let z = prompt('Enter number 3') * 1;

if (x >= y && x >= z && y >= z) {
    // x,y,z
    max = x;
    mid = y;
    min = z;
} else if (x >= y && x >= z && y < z) {
    max = x;
    mid = z;
    min = y;
} else if (y >= x && y >= z && x >= z) {
    max = y;
    mid = x;
    min = z;
} else if (y >= x && y >= z && x < z) {
    max = y;
    mid = z;
    min = x;
} else if (z >= x && z >= y && x >= y) {
    max = z;
    mid = x;
    min = y;
} else {
    max = z;
    mid = y;
    min = x;
}

console.log(`${max} : ${mid} : ${min}`);