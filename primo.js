// Escrevam um pequeno programa em PHP ou JavaScript que valide se um número é primo ou não.


//aqui utilizei o readline do node para ler o numero solicitado
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


//o numero inserido no input é armazenado na variavel numero, passando pelo parsInt para ser convertido a um numero inteiro
readline.question ('digite um número: ', (input) => {
    const numero = parseInt(input);

    if (ePrimo(numero)) {
        console.log (numero + ' É um número primo.');       
    } else {
        console.log ( numero + ' Não é um número primo.');
    }

    readline.close();
});

// agora na função ePrimo é chamado o numero para validação 
function ePrimo (numero){
    if(numero < 2){
        return false;
    }

    for (let i = 2; i < numero; i++){
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}


