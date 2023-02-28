function operationBetweenNumbers(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operater = input[2];

    let operation = 0;
    let evenorodd = '';

    if(operater === "+"){
        operation = number1 + number2;
    }else if(operater === "-"){
        operation = number1 - number2;
    }else if(operater === "*"){
        operation = number1 * number2;
    }else if(operater === "/" && number2 === 0){
            console.log(`Cannot divide ${number1} by zero`);
            return
    }else if(operater === "/" && number2 !== 0){
        operation = (number1 / number2).toFixed(2);
    }else if(operater === "%" && number2 === 0){
        console.log(`Cannot divide ${number1} by zero`);
        return
    }
    else if(operater === "%" && number2 !== 0){
        operation = number1 % number2;
    }
    
    if (operation % 2 === 0 && operater !== "/" && operater !== "%"){
        evenorodd = 'even';
    }else if (operation % 2 !== 0 && operater !== "/" && operater !== "%"){
        evenorodd = "odd"
    }
    console.log(`${number1} ${operater} ${number2} = ${operation}`);
}
operationBetweenNumbers (["123","12","/"]);