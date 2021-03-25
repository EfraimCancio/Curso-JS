/*Fuções são ações executadas assim que são chamadas ou em decorrência de algum evento.
/* Uma função pode receber um parâmetro e retornar um resultado.
/*Funções são algorítimo classicamente composto por uma chamada, um parâmetro, uma acão e um retorno.*/

//Funçaõ par ou impar
function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
var res = parimpar(4)
console.log(res)

//Função soma
function soma(n1,n2) {
    return n1 + n2
}
console.log(soma(3,4))

//Jogar uma função dentro de uma variavel
let v = function(x) {
    return x * 2
}
console.log(v(5))




