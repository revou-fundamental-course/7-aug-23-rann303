document.addEventListener('DOMContentLoaded', function() {
    const buttonHitung = document.getElementById('luas');
    const buttonReset = document.getElementById('reset');
    const inputAlas = document.getElementById('alas');
    const inputTinggi = document.getElementById('tinggi');
    const hasilArea = document.getElementById('hasil');

    buttonHitung.addEventListener('click', function() {
        const alas = parseFloat(inputAlas.value);
        const tinggi = parseFloat(inputTinggi.value);

        if (isNaN(alas) || isNaN(tinggi)) {
            hasilArea.textContent = 'Mohon masukkan nilai yang valid';
        } else {
            const luas = (alas * tinggi) / 2;
            hasilArea.textContent = `Luas segitiga adalah ${luas} cm²`;
        }
    });

    buttonReset.addEventListener('click', function() {
        inputAlas.value = '';
        inputTinggi.value = '';
        hasilArea.textContent = '';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttonkeliling = document.getElementById('keliling');
    const buttonhapus = document.getElementById('hapus');
    const inputsisia = document.getElementById('sisia');
    const inputsisib = document.getElementById('sisib');
    const inputsisic = document.getElementById('sisic');
    const outputArea = document.getElementById('output');

    buttonkeliling.addEventListener('click', function() {
        const sisia = parseFloat(inputsisia.value);
        const sisib = parseFloat(inputsisib.value);
        const sisic = parseFloat(inputsisic.value);

        if (isNaN(sisia) || isNaN(sisib) || isNaN(sisic)) {
            ouputArea.textContent = 'Mohon masukkan nilai yang valid';
        } else {
            const keliling = sisia+sisib+sisic;
            outputArea.textContent = `Keliling segitiga adalah ${keliling} cm`;
        }
    });
    buttonhapus.addEventListener('click', function() {
        inputsisia.value = '';
        inputsisib.value = '';
        inputsisic.value = '';
        outputArea.textContent = '';
    });
})