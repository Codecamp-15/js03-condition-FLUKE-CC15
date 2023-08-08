let a = prompt("username");
let b = prompt("password");
// let x = {id:admin,pass:1234};
// let y = {id:john,pass:4321};
if(a === null || a.trim() === '' || isNaN(a)) { alert("username is required") }
else if(b === null || b.trim() === '' || isNaN(b)){ alert("password is required")}
// else if(a === x){alert("Hello admin")}
// else if(b === y){alert("Hello John")}