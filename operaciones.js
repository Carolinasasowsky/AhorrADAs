/*/
// Array para almacenar operaciones
let datosTodasOperaciones = JSON.parse(localStorage.getItem("operaciones")) || [];

// Función para agregar una nueva operación
function agregarOperacion(objetoNuevaOperacion) {
    datosTodasOperaciones.push(objetoNuevaOperacion);
    localStorage.setItem("operaciones", JSON.stringify(datosTodasOperaciones));
}

// Función para renderizar las operaciones en el DOM
function pintarOperaciones(array) {
    contenedorNuevasOperaciones.innerHTML = '';

    if (array.length === 0) {
        seccionSinOperaciones.classList.remove("hidden");
        contenedorConOperaciones.classList.add("hidden");
        return;
    }

    seccionSinOperaciones.classList.add("hidden");
    contenedorConOperaciones.classList.remove("hidden");

    array.forEach((operacion, index) => {
        const nuevaFila = document.createElement("div");
        nuevaFila.classList.add("grid", "grid-cols-1", "md:grid-cols-5", "gap-4", "py-4");

        nuevaFila.innerHTML = `
            <div class="col-span-3 md:col-span-1 text-left">
                <p>${operacion.descripcion}</p>
            </div>
            <div class="col-span-2 md:col-span-1 text-left md:text-center">
                <p>${operacion.categoria}</p>
            </div>
            <div class="col-span-2 md:col-span-1 text-left md:text-right">
                <p>${operacion.fecha}</p>
            </div>
            <div class="col-span-2 md:col-span-1 text-left md:text-right">
                <p>$${operacion.monto}</p>
            </div>
            <div class="col-span-2 md:col-span-1 text-left md:text-right">
                <button class="btn-editar" data-index="${index}">Editar</button>
                <button class="btn-eliminar" data-index="${index}">Eliminar</button>
            </div>
        `;

        contenedorNuevasOperaciones.appendChild(nuevaFila);
    });
}

// Evento para mostrar el formulario de nueva operación y ocultar la vista de balance
botonNuevaOperacion.addEventListener("click", () => {
    mostrarSeccion([seccionNuevaOperacion]);
    ocultarSeccion([seccionPrincipal]);
});

// Evento para agregar una operación
formularioNuevaOperacion.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nuevaOperacion = {
        id: crypto.randomUUID(),
        descripcion: inputDescripcionNuevaOperacion.value,
        monto: Number(inputMontoNuevaOperacion.value),
        tipo: selectTipoNuevaOperacion.value,
        categoria: selectCategoriaNuevaOperacion.value,
        fecha: dayjs(inputFechaNuevaOperacion.value).format("DD-MM-YYYY"),
    };

    agregarOperacion(nuevaOperacion);
    pintarOperaciones(datosTodasOperaciones);
    formularioNuevaOperacion.reset();
    mostrarSeccion([seccionOperaciones]);
});

// Evento para eliminar operación
contenedorNuevasOperaciones.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-eliminar")) {
        const index = evento.target.dataset.index;
        datosTodasOperaciones.splice(index, 1);
        localStorage.setItem("operaciones", JSON.stringify(datosTodasOperaciones));
        pintarOperaciones(datosTodasOperaciones);
    }
});

// Cargar operaciones al inicio
pintarOperaciones(datosTodasOperaciones);
*/