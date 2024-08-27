// Expresión regular
function validateInput(textarea) {
    textarea = document.getElementById("ind__textarea");
    textarea.value = textarea.value.replace(/[^a-z\s]/g, '');
}

// Función para validar si el textarea está vacío
function validateTextarea(action) {
    let inputText = document.getElementById("ind__textarea").value.trim();
    if (inputText === "") {
        alert(`Por favor, ingresa texto para ${action}.`);
        return false;
    }
    return true;
}

// Función para limpiar y focus
function resetTextarea() {
    let textarea = document.getElementById("ind__textarea");
    textarea.value = "";
    textarea.focus();
}

document.getElementById("encryptButton").addEventListener("click", function () {
    if (!validateTextarea("Encriptar")) return;

    let inputText = document.getElementById("ind__textarea").value;
    // Encriptar el texto
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("processedMessage").textContent = encryptedText;
    document.getElementById("sideRightOriginal").style.display = "none";
    document.getElementById("sideRightNew").style.display = "block";
    resetTextarea();
});

document.getElementById("decryptButton").addEventListener("click", function () {
    if (!validateTextarea("Desencriptar")) return;

    let inputText = document.getElementById("ind__textarea").value;
    // Desencriptar el texto
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");


    document.getElementById("processedMessage").textContent = decryptedText;
    document.getElementById("sideRightOriginal").style.display = "none";
    document.getElementById("sideRightNew").style.display = "block";
    resetTextarea();
});

// Función para copiar el texto al portapapeles
document.getElementById("copyButton").addEventListener("click", function () {
    let textToCopy = document.getElementById("processedMessage").textContent;
    navigator.clipboard.writeText(textToCopy).then(function () {
        alert("Texto copiado al portapapeles: " + textToCopy);
    }, function (err) {
        alert("Error al copiar el texto: ", err);
    });
});