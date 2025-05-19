/*.map() -> Este método cria uma função para manipular objetos*/

const users = [
    {
        name: "Michel",
        last_name: "Góes",
        age: 26
    },
    {
        name: "Isabela",
        last_name: "Fernandes",
        age: 25
    },
    {
        name: "Gabriela",
        last_name: "Góes",
        age: 30
    }
]

const fix_list = users.map(function(element) {
    return {
        full_name: `${element.name} ${element.last_name}`,
        age: `${element.age}`
    }
})

console.log(fix_list)