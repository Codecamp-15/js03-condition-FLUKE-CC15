let x = prompt("input 1");
let y = prompt('input 2');

if (x === null || y === null || x.trim() === '' || y.trim() === '' || isNaN(x) || isNaN(y)) { alert('Invalid number') }
else { alert(Number(x) + Number(y)); }