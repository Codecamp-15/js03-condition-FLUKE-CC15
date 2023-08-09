let i = prompt('Your score ?');
let score = i >= 80 && i <= 100 ? alert('A') :
    i >= 70 && i < 80 ? alert('B') :
    i >= 60 && i < 70 ? alert('C') : 
    i >= 50 && i < 60 ? alert('D') :
    i >= 0 && i < 50 ? alert('F')  :
    alert('invalid Range')