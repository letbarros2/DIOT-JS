const alunos=[
   {
    nome:'Leticia',
    nota: 9,
    turma: '1B',
},
{
    nome:'Liandra',
    nota: 6,
    turma: '2B',

},
{ 
    nome:'ROSA',
    nota: 4,
    turma: '1B',
},
{ 
    nome:'a',
    nota: 3,
    turma: '1B',
},
];

function Aprovados(arr, media){
    let passar = [];
    for (let i = 0; i < arr.length; i++){
        const {nota,nome} = arr[i];


        if(nota >= media){
            passar.push(nome);
        }
    }
    return passar;
}
console.log(Aprovados(alunos,5));