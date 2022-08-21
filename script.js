function calcularNota() {
    // registra as notas nas variáveis;
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    let nota4 = document.getElementById('nota4').value;

    if (nota1 > 10 || /^[a-zA-Z ]+$/.test(nota1) || nota1 < 0 || nota1 == '') {
        return
    }

    if (nota2 > 10 || /^[a-zA-Z ]+$/.test(nota2) || nota2 < 0 || nota2 == '') {
        return
    }

    if (nota3 > 10 || /^[a-zA-Z ]+$/.test(nota3) || nota3 < 0 || nota3 == '') {
        return
    }

    if (nota4 > 10 || /^[a-zA-Z ]+$/.test(nota4) || nota4 < 0 || nota4 == '') {
        return
    }

    // faz os cálculos avançados 
    let media = ((nota1 * 2) + (nota2 * 2) + (nota3 * 3) + (nota4 * 3)) / 10;

    // apresenta na tela os cálculos
    let mostrarMedia = document.getElementById('media');
    mostrarMedia.innerHTML = 'Sua média final é: ' + media.toFixed(1);
    console.log(media);
}