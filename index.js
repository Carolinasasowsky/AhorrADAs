// /* ///////////////////////////////////////// ***ELEMENTOS***/////////////////////////////////////*/

// /* >>>>>>>>>>>>>>>>>>>>>>> ***MAQUETADO*** >>>>>>>>>>>>>>>>>>>>>>*/

const botonHome = document.querySelector("#boton-home")
const linkBalance = document.querySelector("#link-balance");
const linkCategorias = document.querySelector("#link-categorias");
const linkReportes = document.querySelector("#link-reportes");
const seccionPrincipal = document.querySelector("#principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector("#seccion-reportes");
// const menuDesplegableMobile = document.querySelector("#menu-desplegable-mobile");
// const botonHamburguesa = document.getElementById("boton-hamburguesa");
const formularioNuevaOperacion = document.getElementById("formulario-nueva-operacion");
const seccionEditarCategoria = document.querySelector("#seccion-editar-categorias");
const contenedorFiltros = document.getElementById("contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");
const contenedorBalance = document.getElementById("balance");
const contenedorOperaciones = document.getElementById("operaciones");


// /* >>>>>>>>>>>>>>>>>>>>>>> ***BALANCE*** >>>>>>>>>>>>>>>>>>>>>>*/

const numeroGananciaBalance = document.querySelector("#numero-ganancias");
const numeroGastosBalance = document.querySelector("#numero-gastos");
const numeroTotalBalance = document.querySelector("#numero-total");

// /* >>>>>>>>>>>>>>>>>>>>>>> ***FILTROS*** >>>>>>>>>>>>>>>>>>>>>>*/

const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const selectOrden = document.getElementById("select-orden");
const inputFecha = document.querySelector("#input-fecha");

// /* >>>>>>>>>>>>>>>>>>>>>>> ***CATEGORIAS*** >>>>>>>>>>>>>>>>>>>>>>*/
// const formAgregarCategoria = document.getElementById("form-agregar-categoria");
// const inputAgregarCategoria = document.getElementById("input-agregar-categoria");
// const botonAgregarCategoria = document.getElementById("boton-agregar-categoria");
// const contenedorCategoriaAgregada = document.getElementById("contenedor-categorias-agregdas");
// const seccionEditarCategorias = document.getElementById("seccion-editar-categorias");
// const botonCancelarEditarCategoria = document.getElementById("#boton-cancelar-editar-categoria");
// const inputEditarNombreCategoria = document.getElementById("input-editar-nombre-categoria");
// const botonEditarCategoriaFormulario = document.getElementById("boton-editar-categoria-formulario");
// const formEditarCategoria = document.getElementById("form-editar-categoria");

// /* >>>>>>>>>>>>>>>>>>>>>>> ***OPERACIONES*** >>>>>>>>>>>>>>>>>>>>>>*/

const seccionSinOperaciones = document.getElementById("contenedor-sin-operaciones");
const seccionConOperaciones = document.getElementById("contenedor-titulos-nuevas-operaciones");
const contenedorNuevasOperaciones = document.getElementById("contenedor-listado-nuevas-operaciones");
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const botonCancelarNuevasOperaciones = document.getElementById("boton-cancelar-nuevas-operaciones");
const botonAgregarNuevaOperacion = document.getElementById("boton-agregar-nuevas-operaciones");
// const inputDescripcionNuevaOperacion = document.getElementById("descripción-nueva-operacion");
// const inputMontoNuevaOperacion = document.getElementById("monto-nueva-operacion");
// const selectTipoNuevaOperacion = document.getElementById("tipo-nueva-operacion");
// const selectCategoriaNuevaOperacion = document.getElementById("categoria-nueva-operacion");
// const inputFechaNuevaOperacion = document.getElementById("fecha-nueva-operacion");


// /* >>>>>>>>>>>>>>>>>>>>>>> ***EDITAR OPERACIONES*** >>>>>>>>>>>>>>>>>>>>>>*/

const formularioEditarOperacion = document.getElementById("formulario-editar-operacion");
const inputDescripcionEditarOperacion = document.getElementById("descripcion-editar-operacion");
const inputMontoEditarOperacion = document.getElementById("monto-editar-operacion");
const selectTipoEditarOperacion = document.getElementById("tipo-editar-operacion");
const selectCategoriaEditarOperacion = document.getElementById("categoria-editar-operacion");
const inputFechaEditarOperacion = document.getElementById("fecha-editar-operacion");
const botonCancelarEditarOperaciones = document.getElementById("boton-cancelar-editar-operaciones");
const botonFormularioEditarOperaciones = document.getElementById("boton-formulario-editar-operaciones");


// /* >>>>>>>>>>>>>>>>>>>>>>> ***REPORTES*** >>>>>>>>>>>>>>>>>>>>>>*/

// const contenedorTotalesMensuales = document.getElementById("contenedor-totales-mensuales");
// const seccionReportesSinDatos = document.getElementById("reportes-sin-datos");
// const seccionReportesConDatos = document.getElementById("reportes-con-datos");
// const contenedorItemTotalesCategoria = document.getElementById("contenedor-item-totales-categoria");
// const tagCategoriaMayorGanancia = document.getElementById("tag-categoria-mayor-ganancia");
// const montoMayorGanancia = document.getElementById("monto-mayor-ganancia");
// const tagCategoriaMayorGasto = document.getElementById("tag-categoria-mayor-gasto");
// const montoMayorGasto = document.getElementById("monto-mayor-gasto");
// const tagCategoriaMayorBalance = document.getElementById("tag-categoria-mayor-balance");
// const montoMayorBalance = document.getElementById("monto-mayor-balance");
// const fechaMayorGanancia = document.getElementById("fecha-mayor-ganancia");
// const montoMesMayorGanancia = document.getElementById("monto-mes-mayor-ganancia");
// const fechaMayorGasto = document.getElementById("fecha-mayor-gasto");
// const montoMesMayorGasto = document.getElementById("monto-mes-mayor-gasto");

// /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// /* >>>>>>>>>>>>>>>>>>>>>>>***DARK MODE***>>>>>>>>>>>>>>>>>>>>>>>*/
// /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// function toggleDarkMode() {
// 	const html = document.documentElement;

// 	// Alternar la clase "dark" en el <html>
// 	html.classList.toggle("dark");

// 	// Guardar la preferencia del usuario en localStorage
// 	const isDarkMode = html.classList.contains("dark");
// 	localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
// }

// // Aplicar el modo oscuro al cargar la página, según la preferencia guardada
// window.addEventListener("DOMContentLoaded", () => {
// 	const savedMode = localStorage.getItem("darkMode");
// 	if (savedMode === "enabled") {
// 		document.documentElement.classList.add("dark");
// 	}
// });

// /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// /* >>>>>>>>>>>>>>>>>>>>>>>***MAQUETADO***>>>>>>>>>>>>>>>>>>>>>>>*/
// /* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

//LOCAL STORAGE
    //Función para leer datos del local storage
    function leerLocalStorage(key) {
        const datos = JSON.parse(localStorage.getItem(key))
        return datos
    }

    //Función para guardar datos en local storage
    function guardarLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    }
    //Array para guardar todas las operaciones
    let datosTodasOperaciones = leerLocalStorage("operaciones") || [];

    window.onload = () => {
        datosTodasOperaciones = leerLocalStorage("operaciones") || [];
        pintarOperaciones(datosTodasOperaciones);
    };

//NAVEGACIÓN ENTRE SECCIONES

const mostrarSeccion = (selectors) => {
    for (const selector of selectors) {
        selector.classList.remove("hidden");
    }
}

const ocultarSeccion = (selectors)=> {
    for (const selector of selectors) {
        selector.classList.add("hidden");
    }
}
 
// Mostrar sección principal
botonHome.addEventListener("click", () => {
    mostrarSeccion([seccionPrincipal, seccionSinOperaciones, contenedorOperaciones]);
    ocultarSeccion([seccionCategorias, seccionReportes, formularioNuevaOperacion]);
});

// Mostrar sección balance
linkBalance.addEventListener("click", () => {
    mostrarSeccion([seccionPrincipal, seccionSinOperaciones, contenedorOperaciones]);
    ocultarSeccion([seccionCategorias, seccionReportes, formularioNuevaOperacion]);
});

// Mostrar sección categorias
linkCategorias.addEventListener("click", () => {
    mostrarSeccion([seccionCategorias]);
    ocultarSeccion([seccionReportes, formularioNuevaOperacion, seccionPrincipal, contenedorOperaciones, contenedorNuevasOperaciones]);
});

// Mostrar sección reportes
linkReportes.addEventListener("click", () => {
    mostrarSeccion([seccionReportes]);
    ocultarSeccion([seccionCategorias, formularioNuevaOperacion, seccionPrincipal, contenedorOperaciones, contenedorNuevasOperaciones]);
});

//Mostrar formulario
botonNuevaOperacion.addEventListener("click", () => {
    mostrarSeccion([formularioNuevaOperacion]);
    ocultarSeccion([seccionReportes, seccionCategorias, seccionPrincipal, contenedorOperaciones, contenedorNuevasOperaciones]);
});

//Mostrar operaciones
botonAgregarNuevaOperacion.addEventListener("click", () => {
    mostrarSeccion([seccionPrincipal, seccionConOperaciones, contenedorNuevasOperaciones, contenedorOperaciones]);
    ocultarSeccion([seccionReportes, seccionCategorias, formularioNuevaOperacion, ]);
});

//Actulizar vista 
const actualizarVistaOperaciones = () => {
    if (datosTodasOperaciones.length > 0) {
        seccionSinOperaciones.classList.add("hidden");
        seccionConOperaciones.classList.remove("hidden");
    } else {
        seccionSinOperaciones.classList.remove("hidden");
        seccionConOperaciones.classList.add("hidden");
    }
};

//OPERACIONES

    //Evento de creacón de una nueva operación

    function agregarOperacion(objetoNuevaOperacion) {
        datosTodasOperaciones.push(objetoNuevaOperacion)
    }
    
    function pintarOperaciones(array) {
        
        contenedorNuevasOperaciones.innerHTML = '';
    
        // Crear el contenedor de títulos
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
    
        
        const fragmento = document.createDocumentFragment();
    
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
                    <p>${operacion.monto}</p>
                </div>
                <div class="col-span-2 md:col-span-1 text-left md:text-right">
                    <button class="btn-editar" data-index="${index}">Editar</button>
                    <button class="btn-eliminar" onclick="eliminarOperacion(${index})">Eliminar</button>
                </div>
            `;
    
            fragmento.appendChild(nuevaFila);
        });
    
        contenedorNuevasOperaciones.appendChild(fragmento);

    }
    
    
    formularioNuevaOperacion.addEventListener("submit", (evento) => {
        evento.preventDefault();
        
        // Obtener los valores de los campos
        const descripcion = evento.target[0].value;
        const monto = evento.target[1].value;
        const tipo = evento.target[2].value;
        const categoria = evento.target[3].value;
        const fecha = evento.target[4].value;
    
        // Crear el objeto de la nueva operación
        const objetoNuevaOperacion = {
            id: crypto.randomUUID(),
            descripcion: descripcion,
            monto: Number(monto),
            tipo: tipo,
            categoria: categoria,
            fecha: dayjs(fecha).format("DD-MM-YYYY"),
        };
    
        // Si los campos están completos, agregamos la operación
        agregarOperacion(objetoNuevaOperacion);
        guardarLocalStorage("operaciones", datosTodasOperaciones);
    
        // Pintar las operaciones
        pintarOperaciones(datosTodasOperaciones);

        actualizarVistaOperaciones();
    });

    contenedorNuevasOperaciones.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("btn-editar")) {
            const index = evento.target.dataset.index;
            cargarDatosOperacion(index);
        }
    });
    
    //Funcionalidad botón cancelar nueva operación 
    botonCancelarNuevasOperaciones.addEventListener("click", () => {
        mostrarSeccion([seccionPrincipal, seccionSinOperaciones, contenedorOperaciones]);
        ocultarSeccion([seccionCategorias, seccionReportes, formularioNuevaOperacion]);
    });

    //Funcionalidad botón eliminar
    const eliminarOperacion = (index) => {
        
        datosTodasOperaciones.splice(index, 1);
    
        
        localStorage.setItem("operaciones", JSON.stringify(datosTodasOperaciones));
    
        
        pintarOperaciones(datosTodasOperaciones); 
        actualizarVistaOperaciones();
    };

    //Funcionalidad botón editar
    let currentOperacionIndex = null;

    const botonesEditar = document.querySelectorAll(".btn-editar");
    botonesEditar.forEach((boton, index) => {
        boton.addEventListener("click", () => cargarDatosOperacion(index));
    });
    
    function cargarDatosOperacion(index) {
        currentOperacionIndex = index;
        const operacion = datosTodasOperaciones[index];

        
        mostrarSeccion([formularioEditarOperacion]);
        ocultarSeccion([formularioNuevaOperacion, seccionPrincipal, seccionCategorias, seccionReportes, contenedorOperaciones, seccionConOperaciones]);

        // Cargar los valores de la operación 
        inputDescripcionEditarOperacion.value = operacion.descripcion;
        inputMontoEditarOperacion.value = operacion.monto;
        selectTipoEditarOperacion.value = operacion.tipo;
        selectCategoriaEditarOperacion.value = operacion.categoria;
        inputFechaEditarOperacion.value = dayjs(operacion.fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
    }


    formularioEditarOperacion.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (currentOperacionIndex !== null) {
            datosTodasOperaciones[currentOperacionIndex].descripcion = inputDescripcionEditarOperacion.value;
            datosTodasOperaciones[currentOperacionIndex].monto = inputMontoEditarOperacion.value;
            datosTodasOperaciones[currentOperacionIndex].tipo = selectTipoEditarOperacion.value;
            datosTodasOperaciones[currentOperacionIndex].categoria = selectCategoriaEditarOperacion.value;
            datosTodasOperaciones[currentOperacionIndex].fecha = inputFechaEditarOperacion.value;

            guardarLocalStorage("operaciones", datosTodasOperaciones);
            pintarOperaciones(datosTodasOperaciones);

           
            mostrarSeccion([seccionPrincipal, contenedorOperaciones]);
            ocultarSeccion([formularioEditarOperacion]);

            currentOperacionIndex = null;
        }
    });

    // Botón cancelar en el formulario de edición
    botonCancelarEditarOperaciones.addEventListener("click", () => {
        ocultarSeccion([formularioEditarOperacion]);
        mostrarSeccion([seccionPrincipal, contenedorOperaciones]);
    });

//FILTRAR OPERACIONES
const filtrarOperaciones = () => {
    let operacionesFiltradas = [...datosTodasOperaciones];

    // Filtrar por tipo (Gasto / Ganancia)
    if (selectTipo.value !== "Todos") {
        operacionesFiltradas = operacionesFiltradas.filter(op => op.tipo === selectTipo.value);
    }


    // Filtrar por categoría solo si el valor no es "Todos"
    if (selectCategoria.value && selectCategoria.value !== "Todos") {
        operacionesFiltradas = operacionesFiltradas.filter(op => op.categoria === selectCategoria.value);
    }

    // Filtrar por fecha
    if (inputFecha.value) {
        // Convierte la fecha de entrada a formato 'DD-MM-YYYY' si es necesario
        const fechaFiltro = dayjs(inputFecha.value).isValid() ? dayjs(inputFecha.value) : null;
        
        if (fechaFiltro) {
            console.log("Fecha filtro:", fechaFiltro.format("DD-MM-YYYY"));
            
            operacionesFiltradas = operacionesFiltradas.filter(op => {
                // Convierte la fecha de la operación a formato 'DD-MM-YYYY'
                const fechaOperacion = dayjs(op.fecha, "DD-MM-YYYY");
                console.log("Fecha operación:", fechaOperacion.isValid() ? fechaOperacion.format("DD-MM-YYYY") : "Fecha inválida");
                
                // Compara si la fecha de la operación es igual o posterior a la fecha del filtro
                return fechaOperacion.isValid() && (fechaOperacion.isSame(fechaFiltro, 'day') || fechaOperacion.isAfter(fechaFiltro, 'day'));
            });
        }
    }


    // Ordenar operaciones
    switch (selectOrden.value) {
        case "Mas reciente":
            operacionesFiltradas.sort((a, b) => dayjs(b.fecha, "DD-MM-YYYY").diff(dayjs(a.fecha, "DD-MM-YYYY")));
            break;
        case "Menos reciente":
            operacionesFiltradas.sort((a, b) => dayjs(a.fecha, "DD-MM-YYYY").diff(dayjs(b.fecha, "DD-MM-YYYY")));
            break;
        case "Mayor monto":
            operacionesFiltradas.sort((a, b) => b.monto - a.monto);
            break;
        case "Menor monto":
            operacionesFiltradas.sort((a, b) => a.monto - b.monto);
            break;
        case "A/Z":
            operacionesFiltradas.sort((a, b) => a.descripcion.localeCompare(b.descripcion));
            break;
        case "Z/A":
            operacionesFiltradas.sort((a, b) => b.descripcion.localeCompare(a.descripcion));
            break;
    }

    
};


selectTipo.addEventListener("change", filtrarOperaciones);
selectCategoria.addEventListener("change", filtrarOperaciones);
inputFecha.addEventListener("input", filtrarOperaciones);
selectOrden.addEventListener("change", filtrarOperaciones);

//BALANCE
const calcularBalance = (datosTodasOperaciones) => {
    const { ganancia, gasto } = datosTodasOperaciones.reduce(
        (acc, operacion) => {
            if (operacion.tipo === "ganancia") {
                acc.ganancia += operacion.monto;
            } else if (operacion.tipo === "gasto") {
                acc.gasto += operacion.monto;
            }
            return acc;
        },
        { ganancia: 0, gasto: 0 }
    );

    // Actualizar los valores en el DOM
    numeroGananciaBalance.textContent = `$${ganancia}`;
    numeroGastosBalance.textContent = `$${gasto}`;
    numeroTotalBalance.textContent = `$${ganancia - gasto}`;
};

calcularBalance(datosTodasOperaciones);

console.log(numeroGananciaBalance, numeroGastosBalance, numeroTotalBalance);