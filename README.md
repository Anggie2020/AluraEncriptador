﻿# AluraEncriptador

# Encriptación y Desencriptación de Textos

Este proyecto es una aplicación básica de encriptación y desencriptación de textos, creada como parte de un reto de aprendizaje de programación. Utiliza HTML, CSS y JavaScript puro para lograr su funcionalidad.

## Descripción

La aplicación permite al usuario ingresar un texto en un `<textarea>`, encriptarlo con un conjunto de reglas específicas, y luego desencriptarlo para recuperar el texto original. Las reglas de encriptación son simples transformaciones de letras, como convertir la "e" en "enter" o la "i" en "imes".

## Funcionalidad

1. **Encriptación**:
   - El usuario ingresa un texto en el área de texto.
   - Al hacer clic en "Encriptar", el texto es procesado siguiendo las reglas de encriptación predefinidas.
   - El texto encriptado se muestra en un área de resultados y el campo de entrada se limpia automáticamente para que el usuario pueda ingresar un nuevo texto.

2. **Desencriptación**:
   - Similar a la encriptación, pero en reversa. El usuario ingresa el texto encriptado, hace clic en "Desencriptar", y se muestra el texto original.

3. **Copiar Texto**:
   - Un botón adicional permite copiar el texto encriptado o desencriptado al portapapeles, facilitando su uso posterior.

## Reglas de Encriptación

- La letra "e" se convierte en "enter".
- La letra "i" se convierte en "imes".
- La letra "a" se convierte en "ai".
- La letra "o" se convierte en "ober".
- La letra "u" se convierte en "ufat".

Por ejemplo:
- **Texto Original**: `gato`
- **Texto Encriptado**: `gaitober`

## Validación y Usabilidad

- El campo de texto solo acepta letras minúsculas y no permite acentos ni caracteres especiales.
- Si el usuario intenta encriptar o desencriptar un campo vacío, se mostrará una alerta indicándole que debe ingresar texto.
- Después de cada operación, el campo de texto se limpia y se enfoca automáticamente para mejorar la experiencia del usuario.
