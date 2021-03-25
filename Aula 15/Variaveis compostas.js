/* -------->>Estudo de variáveis compostas*/ 
let num = [5,8,4] /*Variável composta do tipo vetor (array)*/
num.push(7) /*incrementa o valor (7) na próxima posição do vetor, no caso a posição [3]*/ 
num.length /*Atributo que mostra o comprimento do vetor, quantos elementos ele contem*/
num.sort() /*Método que ordena os elementos do vetor de forma crescente */


/* -------->>Mostrando um vetor na tela */
//Forma tradicional
let num = [8,1,7,4,2,9]

for (let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
//Forma simplificada
let num = [8,1,7,4,2,9]

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

/* -------->>Buscando valores dentro do vetor */
let num = [4,5,6,7,8]
num.indexOf(7) //Mostra qual é a posição do valor (7) dentro do vetor, nesse caso o (7) está na posição [3]

