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