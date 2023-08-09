let login = prompt("Enter username");
let message =   login == "Employee" ? alert("Hello")     :
                login == "Director" ? alert("Greetings") : 
                login == "" ? alert("No login")          :
                "";