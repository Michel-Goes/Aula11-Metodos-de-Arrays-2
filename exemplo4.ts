/*some() = Esse método recebe uma função que verifica se um dos elemnetos
de um array atende ao requisito (OR)*/

const list: number[] = [65, 44, 57, 96]

const get_number = list.some((element) => {
    return (element % 2) == 1
})

// console.log(get_number)

const people = [
    {
        name: "Michel",
        color: "Branco",
        age: 26
    },
    {
        name: "João",
        color: "Pardo",
        age: 16     
    },
    {
        name: "Maria",
        color: "Negra",
        age: 53    
    }
]

var age_required
var name_required

const search = people.some(function(get_item) {
    age_required = get_item.age
    name_required = get_item.name
    return get_item.age < 21
})

if (search == true){
    console.log(`Existe uma pessoa, que é o(a) ${name_required} que tem ${age_required} anos de idade`)
} else{
    console.log("Não há nenhuma pessoa menor que 18 anos")
}