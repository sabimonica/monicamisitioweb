document.getElementById("btnProgreso").addEventListener("click", function () {
    // Obtener el contenedor de barras
    var containerBars = document.querySelector(".contenedor-barras");

    // Obtener los valores ingresados
    var values = Array.from(Array(5).keys()).map(i => parseInt(document.getElementById(`input${i + 1}`).value));

    // Validar que los valores estén entre 0 y 100
    if (values.every(value => value >= 0 && value <= 100)) {
        // Limpiar el contenedor de barras
        containerBars.innerHTML = "";

        // Crear y agregar una barra de progreso por cada número ingresado
        values.forEach(value => {
            var containerProgress = document.createElement("div");
            containerProgress.className = "barra-progresiva";

            var barProgress = document.createElement("div");
            barProgress.className = "bar-progre";
            barProgress.style.width = value + "%";

            var progreso = document.createElement("div");
            progreso.className = "progreso";
            progreso.innerText = value + "%";

            containerProgress.appendChild(barProgress);
            containerProgress.appendChild(progreso);
            containerBars.appendChild(containerProgress);
        });
    } else {
        alert("Ingrese valores entre 0 y 100 en cada campo.");
    }
});

