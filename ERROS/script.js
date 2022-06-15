//REALIZANDO TRATAMENTO DE ERROS
function validandoArray(arr,num){
    if(!arr && !num) throw new ReferenceError('Envie os parametros');

    if(typeof arr !=='object') throw new TypeError('Array precisa ser do tipo object');

    if(typeof arr !=='number') throw new TypeError('Array precisa ser do tipo number');

    if(arr.length !== 'num') throw new RangeError('Erro no tamanho');
}

function validandoArray2(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parametros');

        if(typeof arr !=='object') throw new TypeError('Array precisa ser do tipo object');
    
        if(typeof arr !=='number') throw new TypeError('Array precisa ser do tipo number');
    
        if(arr.length !== 'num') throw new RangeError('Erro no tamanho');
    return arr;    
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um referenceErro')
            console.log(e.message)
            }
            else if (e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message)
        
    }else if (e instanceof RangeError){
    console.log('Este erro é um RangerError')
    console.log(e.message)
    }else{
        console.log("Tipo de erro não esperado:"+ e);
    }
}
}
console.log(validandoArray2());
