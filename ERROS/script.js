//REALIZANDO TRATAMENTO DE ERROS
function validandoArray(arr,num){
    if(!arr && !num) throw new ReferenceError('Envie os parametros');

    if(typeof arr !=='object') throw new TypeError('Array precisa ser do tipo object');

    if(typeof arr !=='number') throw new TypeError('Array precisa ser do tipo number');

    if(arr.length !== 'num') throw new RangeError('Erro no tamanho');
}