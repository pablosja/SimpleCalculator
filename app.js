function calc(num1, num2, oper) {
    switch (oper) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;

        default:
            return 'Operación no válida';
    }
}

function MakeMath(num1, num2, oper) {
    const result = calc(num1, num2, oper);
    console.log(`Resultado: ${result}`);
}

MakeMath(2, 3, '+');