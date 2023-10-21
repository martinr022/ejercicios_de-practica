function numerosAsumar(num1, num2, callback){
    const result= num1 + num2;
    callback(result)
    
}

function mostrarResultado(result){
    console.log(result);
};

numerosAsumar(1,3,mostrarResultado);