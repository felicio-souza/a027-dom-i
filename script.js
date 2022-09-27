const frutas = ["laranja", "limão", "uva"];

let mudarIten1 = document.getElementById("fruta-1")
mudarIten1.innerHTML = frutas[0]

let mudarIten2 = document.getElementById("fruta-2")
mudarIten2.innerHTML = frutas[1]

let mudarIten3 = document.getElementById("fruta-3")
mudarIten3.innerHTML = frutas[2]


let imprimi = ""
let capturar = () => {
    imprimi = document.getElementById("adicionar").value;
    console.log(imprimi)
}

let add = () =>{
let adicionaIten = document.getElementById("fruta-4")
adicionaIten.innerHTML = imprimi

}
