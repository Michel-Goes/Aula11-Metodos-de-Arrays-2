// every() = Esse método recebe uma função que verifica se TODOS os elemnetos
//de um array atende ao requisito (AND)

let numeros: number[] = [82, 72, 71, 80]

const verificador = numeros.every(function (numero) {
    return numero > 70 // Aqui ele vai verificar se todos os elementos do arrays são maiores 
    // maiores que 70, se um dos elementos for menor que 70 ele retorna como false
})

console.log(verificador) // A saída será "true", pois todos os elementos são maiores que 70

//___________________________________________________________________________________________

const novos_numeros: number[] = [6, 54, 32, 88, 100]

const busca = novos_numeros.every((item) => {
    return item > 5
})

console.log(busca) // E a saída também será "true", pois TODOS os itens são maiores que 5

//___________________________________________________________________________________________

const outra_lista: number[] = [65, 44, 57, 96]

const pesquisar = outra_lista.every(function (elemento) {
    return elemento > 80 
})

console.log(pesquisar) // Porém esse o retorno será negativo, pois apenas o número
// 96 é maior que 80, os demais são menores


