function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
    var boton = document.getElementById("miBoton");
    var textArea = document.getElementById("texto")
    
    let textoCifrado1 = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober") 
                        .replace(/u/gi, "ufat")

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado1;
    Swal.fire({
        title: "¡Listo!",
        text: "Tu texto se ha encriptado!",
        icon: "success"
      });  
      document.getElementById("tituloMensaje").value = textoCifrado1
    //   tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    // personas.src = "./img/desencriptado.jpg";
    personas = "";
    document.getElementById("personas").style.display = "none";
    document.getElementById("tituloMensaje").style.textAlign  = "center";
    document.getElementById("tituloMensaje").style.fontSize = "20px";
    document.getElementById("tituloMensaje").style.padding = "10px";
    document.getElementById("tituloMensaje").style.position = "10%";
    boton.style.display = "flex";
    textArea.value = "";
    
    
} else {
    // alert("Debes ingresar algún texto")
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes ingresar algún texto",
        footer: 'Recuerda que debe ser en minúsculas y sin acentos'
    });
    personas.src = img/Muñeco.png;
    tituloMensaje.value = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el  texto que deseas encriptar o desencriptar";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
    var boton = document.getElementById("miBoton");
    var textArea = document.getElementById("texto")
    
    let textoCifrado2 = texto
        .replace(/ufat/gi, "u")
        .replace(/ober/gi, "o") 
        .replace(/ai/gi, "a")
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e")
        

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado2;
    Swal.fire({
        title: "¡Listo!",
        text: "Tu texto se ha desencriptado!",
        icon: "success"
      });
    document.getElementById("tituloMensaje").value = textoCifrado2
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    personas.src = "";
    document.getElementById("personas").style.display = "none";
    document.getElementById("tituloMensaje").style.textAlign  = "center";
    document.getElementById("tituloMensaje").style.fontSize = "20px";
    document.getElementById("tituloMensaje").style.padding = "10px";
    document.getElementById("tituloMensaje").style.position = "10%";
    boton.style.display = "flex";
    textArea.value = "";
    
} else {
    // alert("Debes ingresar algún texto")
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes ingresar algún texto",
        footer: 'Recuerda que debe ser en minúsculas y sin acentos'
    } );
    personas.src = "img/Muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el  texto que deseas encriptar o desencriptar";
        }

}

function copiarAlPortapapeles() {

    var input = document.getElementById("tituloMensaje");
            
    input.select();
            
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
//agregiue un codigo
// actualiza código
}