// Callbacks com setInterval()


/*Já o setInterval() também executa uma função em um tempo determinado,
porém ele executa de forma repitida, conforme o exemplo abaixo;*/

const alarm = () => {
    console.log("beep-beep-beep")
}

// console.log(setInterval(alarm, 3*1000))

// Também possui clearInterval() para parar essa repetição, conforme exemplo

let contar = 0

const alarme = setInterval(() => {
    console.log("beep-beep-beep")
    contar++
    if (contar == 3){
        clearInterval(alarme)
    }
}, 3* 1000)

