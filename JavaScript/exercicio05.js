function calculadora(primeiroNumero, segundoNumero, operacao) {
    if(operacao === '+'){
        console.log("A soma dos números é :"+ (primeiroNumero + segundoNumero));
    }else if(operacao === '-'){
        console.log("A subtração dos números é :" + (primeiroNumero - segundoNumero));
    }else if(operacao === '*'){
        console.log("A multiplicação dos números é :" + (primeiroNumero * segundoNumero));
    }else if(operacao === '/'){
        console.log("A divisão dos números é :" + (primeiroNumero / segundoNumero));
    }else{
        console.log("operação inválida");
    }
}

calculadora(10,20,'+');
calculadora(40, 50,'-');
calculadora(80, 2,'*');
calculadora(50, 5, '/');