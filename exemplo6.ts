/*findIndex() -> Retorna o índice caso encontrar o elemento no array, ou -1 caso não encontrar*/

const folks_list = [
    {
        name: "John",
        age: 27
    },
    {
        name: "Kelvin",
        age: 32
    },
    {
        name: "Bryan",
        age: 25
    }
]

const search_Bryan = folks_list.findIndex((someone) => {
    return someone.name == "Bryan"
})

const search_Mary = folks_list.findIndex((someone) => {
    return someone.name == "Mary"
})

console.log(search_Bryan) // A saída será 2, pois o nome "Bryan" foi encontrado no índice 2"

console.log(search_Mary) // A saída será -1, pois não foi encontrado o nome "Mary" no array