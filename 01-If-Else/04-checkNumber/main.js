let num = prompt('Enter number 1');
if (num === null || num.trim() === '' || isNaN(num)) {
    alert('Invalid Number');
} else if (+num > 0) {
    alert('Positive Number');
} else if (+num == 0) {
    alert('Zero');
} else if (+num < 0) {
    alert('Negative Number');
}