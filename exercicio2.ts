// De acordo com o array de professores abaixo, com suas respectivas stacks, faça o seguinte:
// a) filtrar todos os professores de backend
// b) filtrar todos os professores de frontend

const teachers = [
  { name: "Guido", stack: "backend" },
  { name: "José", stack: "backend" },
  { name: "Ana", stack: "frontend" },
  { name: "Paulo", stack: "frontend" },
  { name: "Beatriz", stack: "backend" },
  { name: "Joana", stack: "frontend" },
];

function backends(teachers_list){
    const get_backends = teachers_list.filter((instrutors) => {
        return instrutors.stack == "backend"
    })

    return get_backends
}

console.log(backends(teachers))

function frontends(teachers_list){
    const get_frontends = teachers_list.filter((instrutors) => {
        return instrutors.stack == "frontend"
    })
    return get_frontends
}

console.log(frontends(teachers))