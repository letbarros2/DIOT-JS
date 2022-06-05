
let n1 = Number (prompt('Insira o primeiro valor: \n'));
let n2 = Number (prompt('Insira o segundo valor: \n'))
function comparaNumeros(n1, n2) {
	const primeiraFrase = criaPrimeiraFrase(n1, n2);
	const segundaFrase = criaSegundaFrase(n1, n2);

	return (`${primeiraFrase} ${segundaFrase}`);
}

function criaPrimeiraFrase(n1, n2) {
	let primeiraFrase = `Os números ${n1} e ${n2}`;
	let simNao = 'não';

	if (n1 === n2) {
		simNao = '';
	}

	return(`${primeiraFrase} ${simNao} são iguais.`);
}

function criaSegundaFrase(n1, n2) {
	const soma = n1 + n2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}
    alert(` A soma de: ${n1} + ${n2} é igual a ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`);
}

console.log(comparaNumeros(n1, n2));