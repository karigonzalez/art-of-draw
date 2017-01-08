/*---------------------------PARA HACER PAINT-COMENTARIO-MUÑECO----------------------*/
window.addEventListener("load", function () {
    var boton = document.getElementById("resultado");
    var textArea = document.getElementById("texto");

    var contar = document.getElementById("contar");
    
    function agregarMensaje(texto) {
        var nuevoItem = document.createElement("div");
        var hora = document.createElement("div");
        var fechaHora = new Date();
        var horas = fechaHora.getHours();
        var minutos = fechaHora.getMinutes();
        var segundos = fechaHora.getSeconds();

        if (horas < 10) {
            horas = "0" + horas;
        }

        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        hora.textContent = horas + ":" + minutos + ":" + segundos;

        nuevoItem.classList.add("texto");
        hora.classList.add("hora");
        nuevoItem.innerHTML = texto;

        var lista = document.getElementById("comentario");
        lista.insertBefore(hora, comentario.childNodes[0]);
        lista.insertBefore(nuevoItem, comentario.childNodes[0]);
        document.getElementById("texto").value = "";
    }

    textArea.addEventListener("keyup", function () {
        var longitud = 140;
        var caracter = textArea.value.length;
        contar.innerText = longitud - caracter;
        textArea.style.height = "10px";
        textArea.style.height = (25 + textArea.scrollHeight) + "px";

        if (parseInt(contar.innerText) <= 0) {
            boton.disabled = true;
        } else {
            boton.disabled = false;
        }

        if (parseInt(contar.innerText) <= 20) {
            contar.style.color = "#B80D57";
        } else {
            contar.style.color = "#000000";
        }

        if (parseInt(contar.innerText) <= 10) {
            contar.style.color = "#986EAD";
        }
    });
    
});
