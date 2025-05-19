// Crie uma função que percorra um array com nomes de arquivos. A função deve verificar 
// se possui ao menos um arquivo com a extensão ".bat". Caso exista, deverá exibir a 
// mensagem "vírus detectado", caso contrário, deverá exibir a mensagem "nenhum vírus encontrado"

const files: string[] = ["music.mp3", "video.mp4", "unknown.bat", "photo.jpeg"]

function search_virus(files_list: string[]){
    const virus_detected = files_list.some(function(file){
        if (file.endsWith(".bat")){
            return true
        } else {
            return false
        }
    })
    if (virus_detected){
        console.log("Vírus detectado!")
    } else {
        console.log("Nenhum vírus encontrado!")
    }
}

search_virus(files)