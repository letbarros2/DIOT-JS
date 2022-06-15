function calcularIdade(anos){
    return `Daqui á ${anos} anos, ${this.name} 
    terá ${this.idade +anos
    } anos de idade.`;
}
const p1 ={
    name:'Leticia',
    idade:23
}
const p2 ={
    name:'Liandra',
    idade:19
}
const p3 ={
    name:'Rosa',
    idade:46
}
const animal ={
    name:'Lobinha',
    idade: 3,
    reaca:'vira-lata'
};
console.log(calcularIdade.call(animal,30));