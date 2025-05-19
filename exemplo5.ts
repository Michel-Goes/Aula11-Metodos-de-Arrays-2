/*.find() -> Localiza e retorna o elemento dentro de um array caso exista*/

const folks_list = [
    {
        name: "John",
        age: 27
    },
    {
        name: "Mary",
        age: 21
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

const search_person = folks_list.find((someone) => {
    return someone.name == "Mary"
})


const numbers: number[] = [12, 44, 51, 37, 26]

const search_number = numbers.find((number) => {
    return number < 20
})

console.log(search_number) // A saída será 12