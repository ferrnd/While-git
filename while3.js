let f = 0;
let soma = 1;

while (soma <= 30) {
    soma += f;
    f++;
    console.log(`Números: ${soma + f} , Número usado: ${f}`)
} console.log(`soma final: ${soma + f}`)