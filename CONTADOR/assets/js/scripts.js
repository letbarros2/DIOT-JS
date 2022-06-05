// console.log('hello world')
// criando variavel  ELEMENTO SPAN 
var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

//declarando função subtração
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
// declarando função
function increment(){
currentNumber = currentNumber + 1;
currentNumberWrapper.innerHTML = currentNumber;
}
//usando o evento listener para desafio
const element = document.getElementById("cliqueaqui");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = ("MÁGICA");
}

