const bilangan = angka => {
    let bilanganAngka = '';
    let satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

    if (angka < 1 || angka > 100) {
        bilanganAngka = 'silahkan masukkan bilangan 1-100';
    } else {
        if (angka <= 11) {
            bilanganAngka = satuan[angka];
        }
        if (angka > 11) {
            bilanganAngka = satuan[angka%10] + " belas";
        }
        if (angka >= 20) {
            bilanganAngka = satuan[Math.floor(angka/10)] + " puluh " + satuan[angka%10];
        }
        if (angka === 100) {
            bilanganAngka = "seratus";
        }
    }

    return bilanganAngka;
}