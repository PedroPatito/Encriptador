
const inputTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

function encriptar(stringEncriptada){
let matrizCodigo = [["e","enter"],["i","imer"],["a","ai"],["o","over"],["u","ufat"]]
stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
}
return stringEncriptada;

}
// ----------Desencriptar----------

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

function desencriptar(stringDesencriptada){
let matrizCodigo = [["e","enter"],["i","imer"],["a","ai"],["o","over"],["u","ufat"]]
stringDesencriptada = stringDesencriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++){
    if (stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
    }
}
return stringDesencriptada;

}

// ----------copiar----------

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("texto copiado")
}