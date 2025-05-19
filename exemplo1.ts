// Callbacks com setTimeout()

// setTimeout() é uma forma de chamar uma função em um tempo pré-definido

// Veja o exemplo abaixo;


const mensagem_teste = () => {
    console.log("Olá")
}

setTimeout(mensagem_teste, 4000) // Após ser chamada ela irá executar em 4 segundos

setTimeout(function(){
    console.log("Esse código vai executar em 2 segundos, que foi o tempo definido")
},2000)