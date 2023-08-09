let a = prompt("username");
let b = prompt("password");

if(a === null || a.trim() === '' ) { alert("username is required") }
else if(b === null || b.trim() === '' ){ alert("password is required")}
else if(a =="admin" && b == "1234"){alert('Hello Admin')}
else if(a =="john" && b == "qwerty"){alert('Hello John')}
else {alert('อย่าพิมมั่วดิน้องง')}