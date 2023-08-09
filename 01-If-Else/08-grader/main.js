let i = prompt('score');

    if (i >= 0 && i <= 100) {
        if (i >= 80) { alert('A') }
        else if (i >= 70 && i < 80) { alert('B'); }
        else if (i >= 60 && i < 70) { alert('C'); }
        else if (i >= 50 && i < 60) { alert('D'); }
        else if (i >= 0 && i < 50) { alert('F'); }
    }
   else if (i === null || i.trim() === '' || isNaN(i)) {
        alert('ใส่เกรดดิน้องง อย่าใส่มั่ว');
    }

