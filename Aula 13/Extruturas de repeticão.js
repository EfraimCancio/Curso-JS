/* ESTRUTURA DE REPETICÃO COM TESTE LÓGICO NO INÍCIO
-> É a estrutura de repetição mais simples do JS.
-> Primeiro ela testa para depois resolver o bloco 
*/

var c = 1

    while (c < 6) {
        console.log('hello Word')
        c++
    }
}

/* ESTRUTURA DE REPETICÃO COM TESTE LÓGICO NO FIM
-> Essa estrutura primeiro executa os comandos do bloco, depois realiza o teste
*/

var c = 1
    do {
        console.log('hello Word')
        c++
    } while (c < 6)


/* ESTRUTURA DE REPETIÇÃO COM VARIÁVEL DE CONTROLE
-> Essa extrutura contem a inicialização, o teste lógico e o incremento.
*/

for(var c = 1; c <= 6; c++) {
    console.log('hello Word')
} 
