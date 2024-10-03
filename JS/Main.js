document.addEventListener("DOMContentLoaded", () => {
    
    const pantalla = document.getElementById("Pantalla");
    const botones = document.querySelectorAll("input[type='button']");

    let operacionActual = "";
    let resultado = false;

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const valor = boton.value;

            if (valor === "AC") {
                operacionActual = "";
                pantalla.value = "";
                resultado = false;
                return;
            }

            if (valor === "=") {
                try {
                    operacionActual = eval(operacionActual);
                    pantalla.value = operacionActual;
                    resultado = true;
                } catch (e) {
                    pantalla.value = "Error";
                    operacionActual = "";
                }
                return;
            }

            if (resultado) {
                operacionActual = valor;
                resultado = false;
            } else {
                operacionActual += valor;
            }

            pantalla.value = operacionActual;
        });
    });
});
