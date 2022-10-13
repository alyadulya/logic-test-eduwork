const eduwork = angka => {
    let eduworkLoop = ''
    for (i = 1; i <= angka; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            eduworkLoop += 'EduWork';
        } else if (i % 3 === 0) {
            eduworkLoop += 'Edu';
        } else if (i % 5 === 0) {
            eduworkLoop += 'Work';
        } else {
            eduworkLoop += i;
        }
        eduworkLoop += '<br>';
    }

    return eduworkLoop
}