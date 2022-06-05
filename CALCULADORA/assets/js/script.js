function calculadora(){
    const operacao = prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão ( / ) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)');
    // console.log(operacao);
    if(!operacao || operacao >= 7){
        alert('Erro - Operação Invalida')
        calculadora();
    }else{
        let n1= Number (prompt('Insira o primeiro valor: \n'));
        let n2= Number (prompt('Insira o segundo valor: \n'));
        let resultado;

        if(!n1 || !n2){
            alert('Erro - favor realizar operação novamente')   
            calculadora();         
        }else{
            function soma(){
                resultado =n1+n2;
                alert(` A soma de: ${n1} + ${n2} é  igual a  ${resultado}`)
                fechamento();
            }
            
            function subtracao(){
                resultado =n1-n2;
                alert(` A Subtracao de: ${n1} - ${n2} é  igual a  ${resultado}`)
                fechamento();
            }
            function multiplicacao(){
                resultado =n1*n2;
                alert(` A Multiplicacao de: ${n1} * ${n2} é  igual a  ${resultado}`)
                fechamento();
            }
            function divisao(){
                resultado =n1/n2;
                alert(` A Divisao de: ${n1} / ${n2} é  igual a  ${resultado}`)
                fechamento();
            }
            function divisaointeira(){
                resultado =n1%n2;
                alert(` O resto da divisao Inteira entre: ${n1} e ${n2} é  igual a  ${resultado}`)
                fechamento();
            }
            function potenciacao(){
                resultado =n1**n2;
                alert(` A Potenciacao de: ${n1} e ${n2} é  igual a  ${resultado}`)
                fechamento();
            }
            
            function fechamento(){
                let opcao = prompt('Deseja realizar nova operacao \n 1 - Sim \n 2 - Não');
                if (opcao ==1){
                    calculadora();
                }else if (opcao ==2){
                    alert ("Até mais, volte sempre!")
                }else{
                    alert('Por favor digite uma opção válida')
                    fechamento();
                }
            }
            
        }
        
        if(operacao ==1){
            soma();
        }else if(operacao ==2){
            subtracao();
        }else if(operacao ==3){
            multiplicacao();
        }else if(operacao ==4){
            divisao();
        }else if(operacao ==5){
            divisaointeira();
        }else if(operacao ==6){
            potenciacao();
        }
        
        }
       
        
    }

    calculadora();