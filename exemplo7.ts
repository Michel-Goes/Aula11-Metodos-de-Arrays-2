/*.filter() -> Retorna um novo array com os novo parâmetros determinados*/

const list_names: string[] = ["Michel", "Guilherme", "Ana Beatriz", "José"]

const get_names = list_names.filter((names) => {
    return names.length < 9
})

// console.log(get_names) -> Irá gerar um novo array somente com os nomes que tiverem menos de 9 letras

const users = [
    {
        name: "Jonatan",
        age: 30
    },
    {
        name: "Letícia",
        age: 37
    },
    {
        name: "João Vitor",
        age: 16
    },
    {
        name: "Miguel",
        age: 19
    },
    {
        name: "Maycon",
        age: 17
    }
]

type Tuser_list = {
    name: string
    age: number
}

function admission(users_list: Tuser_list[]){
    const new_list = users_list.filter((user) => {
        return user.age > 18
    })
    return new_list
}

console.log(admission(users))