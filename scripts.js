// EXERCÍCIO 01
let notas = [3, 4, 7, 9];

function calcularMedia(notas) {
    let soma = 0;
    
    for(i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;
    return media;
}

let media = calcularMedia(notas);
console.log(media);

// EXERCÍCIO 02
function validarMedia(media) {
    media > 7 ?  document.write("Parabéns você passou na média!") : document.write("Infelizmente você está de recuperação.");
    
    /* OUTRA FORMA DE FAZER A MESMA COISA:
    if(media > 7) {
        document.write("Parabéns você passou na média!");
    } else {
        document.write("Infelizmente você está de recuperação.");
    } */
}

let comunicarMedia = validarMedia(media);