/* ///////////////////////////////////////// ***ELEMENTOS***/////////////////////////////////////*/

/* >>>>>>>>>>>>>>>>>>>>>>> ***MAQUETADO*** >>>>>>>>>>>>>>>>>>>>>>*/

const linkBalance = document.querySelector(".-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");
const seccionPrincipal = document.querySelector("#principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector(".reportes");
const menuDesplegableMobile = document.querySelector("#menu-desplegable-mobile");
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const seccionNuevaOperacion = document.getElementById("formulario-nueva-operacion");
const seccionEditarCategoria = document.querySelector("#seccion-editar-categorias");
const contenedorFiltros = document.getElementById("contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");
const contenedorBalance = document.getElementById("balance");
const contenedorOperaciones = document.getElementById("operaciones");



/* >>>>>>>>>>>>>>>>>>>>>>> ***BALANCE*** >>>>>>>>>>>>>>>>>>>>>>*/

const numeroGananciaBalance = document.querySelector("#numero-ganancias");
const numeroGastosBalance = document.querySelector("#numero-gastos");
const numeroTotalBalance = document.querySelector("#numero-total");

/* >>>>>>>>>>>>>>>>>>>>>>> ***CATEGORIAS*** >>>>>>>>>>>>>>>>>>>>>>*/

const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const selectOrden = document.getElementById("select-orden");
const formAgregarCategoria = document.getElementById("form-agregar-categoria");
const inputAgregarCategoria = document.getElementById("input-agregar-categoria");
const botonAgregarCategoria = document.getElementById("boton-agregar-categoria");
const contenedorCategoriaAgregada = document.getElementById("contenedor-categorias-agregdas");
const seccionEditarCategorias = document.getElementById("seccion-editar-categorias");
const botonCancelarEditarCategoria = document.getElementById("#boton-cancelar-editar-categoria");
const inputEditarNombreCategoria = document.getElementById("input-editar-nombre-categoria");
const botonEditarCategoriaFormulario = document.getElementById("boton-editar-categoria-formulario");
const formEditarCategoria = document.getElementById("form-editar-categoria");

/* >>>>>>>>>>>>>>>>>>>>>>> ***OPERACIONES*** >>>>>>>>>>>>>>>>>>>>>>*/

const seccionSinOperaciones = document.getElementById("contenedor-sin-operaciones");
const seccionConOperaciones = document.getElementById("contenedor-titulos-nuevas-operaciones");
const contenedorNuevasOperaciones = document.getElementById("contenedor-listado-nuevas-operaciones");
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const botonCancelarNuevasOperaciones = document.getElementById("boton-cancelar-nuevas-operaciones");
const botonAgregarNuevaOperacion = document.getElementById("boton-agregar-nuevas-operaciones");
const formularioNuevaOperacion = document.getElementById("formulario-nueva-operacion");
const inputDescripcionNuevaOperacion = document.getElementById("descripción-nueva-operacion");
const inputMontoNuevaOperacion = document.getElementById("monto-nueva-operacion");
const selectTipoNuevaOperacion = document.getElementById("tipo-nueva-operacion");
const selectCategoriaNuevaOperacion = document.getElementById("categoria-nueva-operacion");
const inputFechaNuevaOperacion = document.getElementById("fecha-nueva-operacion");


/* >>>>>>>>>>>>>>>>>>>>>>> ***EDITAR OPERACIONES*** >>>>>>>>>>>>>>>>>>>>>>*/

const formularioEditarOperacion = document.getElementById("formulario-editar-operacion");
const inputDescripcionEditarOperacion = document.getElementById("descripcion-editar-operacion");
const inputMontoEditarOperacion = document.getElementById("monto-editar-operacion");
const selectTipoEditarOperacion = document.getElementById("tipo-editar-operacion");
const selectCategoriaEditarOperacion = document.getElementById("categoria-editar-operacion");
const inputFechaEditarOperacion = document.getElementById("fecha-editar-operacion");
const botonCancelarEditarOperaciones = document.getElementById("boton-cancelar-editar-operaciones");
const botonFormularioEditarOperaciones = document.getElementById("boton-formulario-editar-operaciones");

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ***FECHA*** >>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

const inputFecha = document.querySelector("#input-fecha");

/* >>>>>>>>>>>>>>>>>>>>>>> ***REPORTES*** >>>>>>>>>>>>>>>>>>>>>>*/

const contenedorTotalesMensuales = document.getElementById("contenedor-totales-mensuales");
const seccionReportesSinDatos = document.getElementById("reportes-sin-datos");
const seccionReportesConDatos = document.getElementById("reportes-con-datos");
const contenedorItemTotalesCategoria = document.getElementById("contenedor-item-totales-categoria");
const tagCategoriaMayorGanancia = document.getElementById("tag-categoria-mayor-ganancia");
const montoMayorGanancia = document.getElementById("monto-mayor-ganancia");
const tagCategoriaMayorGasto = document.getElementById("tag-categoria-mayor-gasto");
const montoMayorGasto = document.getElementById("monto-mayor-gasto");
const tagCategoriaMayorBalance = document.getElementById("tag-categoria-mayor-balance");
const montoMayorBalance = document.getElementById("monto-mayor-balance");
const fechaMayorGanancia = document.getElementById("fecha-mayor-ganancia");
const montoMesMayorGanancia = document.getElementById("monto-mes-mayor-ganancia");
const fechaMayorGasto = document.getElementById("fecha-mayor-gasto");
const montoMesMayorGasto = document.getElementById("monto-mes-mayor-gasto");

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* >>>>>>>>>>>>>>>>>>>>>>>***DARK MODE***>>>>>>>>>>>>>>>>>>>>>>>*/
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

function toggleDarkMode() {
	const html = document.documentElement;

	// Alternar la clase "dark" en el <html>
	html.classList.toggle("dark");

	// Guardar la preferencia del usuario en localStorage
	const isDarkMode = html.classList.contains("dark");
	localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Aplicar el modo oscuro al cargar la página, según la preferencia guardada
window.addEventListener("DOMContentLoaded", () => {
	const savedMode = localStorage.getItem("darkMode");
	if (savedMode === "enabled") {
		document.documentElement.classList.add("dark");
	}
});

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* >>>>>>>>>>>>>>>>>>>>>>>***MAQUETADO***>>>>>>>>>>>>>>>>>>>>>>>*/
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


//NAVEGACIÓN ENTRE SECCIONES
const arraySecciones = [
    seccionPrincipal,
    seccionCategorias,
    seccionReportes,
    seccionConOperaciones,
    formularioNuevaOperacion,
	contenedorOperaciones,
	seccionSinOperaciones
	]

const mostrarSeccion = (array, seccion) => {
    array.forEach((sec) => sec.classList.add("hidden")); // Oculta todas las secciones
    seccion.classList.remove("hidden"); // Muestra la sección deseada
};

document.querySelectorAll(".link-balance").forEach((link) => {
    link.onclick = (event) => {
        event.preventDefault();
        arraySecciones.forEach((sec) => sec.classList.add("hidden")); 
        seccionPrincipal.classList.remove("hidden");
        seccionConOperaciones.classList.remove("hidden"); 
    };
});

document.querySelectorAll(".link-categorias").forEach((link) => {
    link.onclick = (event) => {
        event.preventDefault();
        mostrarSeccion(arraySecciones, seccionCategorias);
    };
});

document.querySelectorAll(".link-reportes").forEach((link) => {
    link.onclick = (event) => {
        event.preventDefault();
        mostrarSeccion(arraySecciones, seccionReportes);
    };
});

//AGREGAR NUEVA OPERACIÓN 

// Funcionalidad del botón Nueva Operación
botonNuevaOperacion.addEventListener("click", () => {
    mostrarSeccion(arraySecciones, formularioNuevaOperacion);

});

// Funcionalidad para el botón Cancelar
botonCancelarNuevasOperaciones.addEventListener("click", () => {
    // Ocultar el formulario de nueva operación
    formularioNuevaOperacion.classList.add("hidden");

	location.reload();

});


//Funcionalidad Formulario Nueva Operación 

// Array para guardar las operaciones
let arrayOperaciones = [];

// Cargar operaciones desde el localStorage 
document.addEventListener("DOMContentLoaded", () => {
    const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
    
    if (operacionesGuardadas && operacionesGuardadas.length > 0) {
        arrayOperaciones = operacionesGuardadas;
        pintarOperaciones();  

        // Ocultar seccionSinOperaciones y mostrar seccionConOperaciones y seccionPrincipal
        seccionSinOperaciones.classList.add("hidden");
        seccionConOperaciones.classList.remove("hidden");
    } else {
    }
});

// Enviar del formulario
formularioNuevaOperacion.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturar los valores del formulario
    const descripcion = document.getElementById("descripción-nueva-operacion").value;
    const monto = document.getElementById("monto-nueva-operacion").value;
    const tipo = document.getElementById("tipo-nueva-operacion").value;
    const categoria = document.getElementById("categoria-nueva-operacion").value;
    const fecha = document.getElementById("fecha-nueva-operacion").value;

    // Validación de correcto llenado del formulario
    if (!descripcion || !monto || !tipo || !fecha) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Objeto con los datos de la nueva operación
    const nuevaOperacion = {
        descripcion: descripcion,
        monto: monto,
        tipo: tipo,
        categoria: categoria,
        fecha: fecha
    };

    // Agregar la nueva operación al array de operaciones
    arrayOperaciones.push(nuevaOperacion);

    // Guardar las operaciones en el localStorage
    localStorage.setItem("operaciones", JSON.stringify(arrayOperaciones));

    // Recargar la página 
    location.reload();
});

// Pintar las operaciones en el contenedor
function pintarOperaciones() {
    // Limpiar el contenedor
    contenedorNuevasOperaciones.innerHTML = '';

    // Mostrar las operaciones
    const contenedorTitulos = document.createElement("div");
    contenedorTitulos.classList.add("grid", "grid-cols-1", "md:grid-cols-5", "gap-4");

    contenedorTitulos.innerHTML = `
        <div class="col-span-3 md:col-span-1 text-left pt-4 md:pt-0">
            <p class="font-semibold">Descripción</p>
        </div>
        <div class="col-span-2 md:col-span-1 text-left md:text-center">
            <p class="font-semibold">Categoría</p>
        </div>
        <div class="col-span-2 md:col-span-1 text-left md:text-right">
            <p class="font-semibold">Fecha</p>
        </div>
        <div class="col-span-2 md:col-span-1 text-left md:text-right">
            <p class="font-semibold">Monto</p>
        </div>
        <div class="col-span-2 md:col-span-1 text-left md:text-right">
            <p class="font-semibold">Acciones</p>
        </div>
    `;
    
    contenedorNuevasOperaciones.appendChild(contenedorTitulos);

    // Recorrer el array de operaciones y agregar cada una al contenedor
    arrayOperaciones.forEach((operacion, index) => {
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
                <p>${operacion.monto}</p>
            </div>
            <div class="col-span-2 md:col-span-1 text-left md:text-right">
                <button class="btn-editar">Editar</button>
                <button class="btn-eliminar" onclick="eliminarOperacion(${index})">Eliminar</button>
            </div>
        `;

        // Agregar la nueva fila al contenedor
        contenedorNuevasOperaciones.appendChild(nuevaFila);
    });
}

// Función para eliminar una operación
function eliminarOperacion(index) {
    // Eliminar la operación del array
    arrayOperaciones.splice(index, 1);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("operaciones", JSON.stringify(arrayOperaciones));

    // Volver a pintar las operaciones
    pintarOperaciones();

    // Si no hay operaciones, mostrar la sección de "sin operaciones"
    if (arrayOperaciones.length === 0) {
        seccionSinOperaciones.classList.remove("hidden");
        seccionConOperaciones.classList.add("hidden");
    }
}
