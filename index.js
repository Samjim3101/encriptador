// Obtener referencia al elemento textarea
var textarea = document.getElementById("texto");

// Escuchar el evento input en el textarea
textarea.addEventListener("input", function() {
    // Convertir el texto a minúsculas y establecerlo nuevamente en el textarea
    this.value = this.value.toLowerCase();
});

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
    var boton = document.getElementsByClassName("btn-copiar")[0]; 
    var textArea = document.getElementById("texto");
    let mensajeEncriptado = document.getElementById("mensaje-encriptado"); 
    let textSalida = document.getElementById("mensajeSalida");
    let textoCifrado1 = texto

                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober") 
                        .replace(/u/gi, "ufat")

if (texto.length != 0) {
        document.getElementById("mensajeSalida").value = textoCifrado1;
        Swal.fire({
        title: "¡Listo!",
        text: "Tu texto se ha encriptado!",
        icon: "success"
      });
        document.getElementById("mensajeSalida").value = textoCifrado1
        parrafo.textContent = ""; 
        textArea.value = "";
        personas.style.display = "none";
        mensajeEncriptado.style.display = "none";
        tituloMensaje.style.display = "none";
        textSalida.style.display = "flex";
        boton.style.display = "inline-block";
        boton.getElementById("btn-copiar").style.display = "block";
        
} else {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes ingresar algún texto",
        footer: 'Recuerda que debe ser en minúsculas y sin acentos'
    });
    mensajeEncriptado.style.display = "block";
    mensajeEncriptado.style.left = "10%";
    tituloMensaje.style.padding = "0 0 3% 0";
    textSalida.style.display = "none";
    textArea.value = "";
    boton.style.display = "none";
    tituloMensaje.style.display = "block";
    personas.style.display = "block";
    parrafo.textContent = "Ingresa el  texto que deseas encriptar o desencriptar";
    boton.style.display = "none";
    document.getElementById('personas').style.display = 'block';
    tituloMensaje.style.display = "block";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
    var boton = document.getElementsByClassName("btn-copiar")[0]; 
    var textArea = document.getElementById("texto");
    let mensajeEncriptado = document.getElementById("mensaje-encriptado"); 
    let textSalida = document.getElementById("mensajeSalida");
    let textoCifrado2 = texto
    
        .replace(/ufat/gi, "u")
        .replace(/ober/gi, "o") 
        .replace(/ai/gi, "a")
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e")
        

if (texto.length != 0) {
    document.getElementById("mensajeSalida").value = textoCifrado2;
    Swal.fire({
        title: "¡Listo!",
        text: "Tu texto se ha desencriptado!",
        icon: "success"
      });
      document.getElementById("mensajeSalida").value = textoCifrado2;
      parrafo.textContent = ""; 
      textArea.value = "";
      personas.style.display = "none";
      mensajeEncriptado.style.display = "none";
      tituloMensaje.style.display = "none";
      textSalida.style.display = "flex";
      boton.style.display = "inline-block";
      boton.getElementById("btn-copiar").style.display = "block";mensajeEncriptado.style.display = "none";
        textSalida.style.display = "flex";
        textArea1.value = "";
        boton.style.display = "none";
        boton.getElementById("miBoton").style.display = "none";
        tituloMensaje.style.display = "none";
        personas.style.display = "none";
        parrafo.textContent = "";
        

} else {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes ingresar algún texto",
        footer: 'Recuerda que debe ser en minúsculas y sin acentos'
    } );
     textSalida.style.display = "none";
     personas.style.display = "block";
     

     tituloMensaje.style.display = "block";
     parrafo.textContent = "Ingresa el  texto que deseas encriptar o desencriptar";
     mensajeEncriptado.style.display = "block";
     mensajeEncriptado.style.left = "10%";
     tituloMensaje.style.padding = "0 0 3% 0";
     textArea.value = "";
     boton.style.display = "none";
     tituloMensaje.getElementById("tituloMensaje").value = "Ningún mensaje fue encontrado";
     
     
     boton.style.display = "none";
     document.getElementById('personas').style.display = 'block';
     tituloMensaje.style.display = "block";
        }
}

function copiarAlPortapapeles() {

    var input = document.getElementById("mensajeSalida");
            
    input.select();
            
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
//agregiue un codigo
// actualiza código
}