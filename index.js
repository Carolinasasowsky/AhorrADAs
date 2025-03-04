/* ///////////////////////////////////////// ***ELEMENTOS***/ ////////////////////////////////////*/

/* >>>>>>>>>>>>>>>>>>>>>>> ***MAQUETADO*** >>>>>>>>>>>>>>>>>>>>>>*/

const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");
const seccionPrincipal = document.querySelector("#principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector("#seccion-reportes");
const seccionOperaciones = document.querySelector("#operaciones");

const menuDesplegableMobile = document.querySelector(
	"#menu-desplegable-mobile"
);
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const seccionNuevaOperacion = document.getElementById(
	"formulario-nueva-operacion"
);
const seccionEditarCategoria = document.querySelector(
	"#seccion-editar-categorias"
);
const contenedorFiltros = document.querySelector("#contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");

/* >>>>>>>>>>>>>>>>>>>>>>> ***BALANCE*** >>>>>>>>>>>>>>>>>>>>>>*/

const numeroGananciaBalance = document.querySelector("#numero-ganancias");
const numeroGastosBalance = document.querySelector("#numero-gastos");
const numeroTotalBalance = document.querySelector("#numero-total");

/* >>>>>>>>>>>>>>>>>>>>>>> ***CATEGORIAS*** >>>>>>>>>>>>>>>>>>>>>>*/

const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const selectOrden = document.getElementById("select-orden");
const formAgregarCategoria = document.getElementById("form-agregar-categoria");
/*const inputAgregarCategoria = document.getElementById(
	"input-agregar-categoria"
);
//const botonAgregarCategoria = document.getElementById(
	"boton-agregar-categoria"
);
//const contenedorCategorias = document.getElementById(
	"contenedor-categorias-agregadas"
);*/

const botonGrabarEditarCategoria = document.getElementById(
	"boton-editar-categoria"
);
/*>>>>>>>>>>>>>>>>>>>>>>> ***referencia a los elementos de VENTANA MODAL*** >>>>>>>>>>>>>>>>>>>>>>  */ 
const $contVentanaModal = document.getElementById("cont-ventana-modal");

const seccionEditarCategorias = document.getElementById(
	"seccion-editar-categorias"
);
const botonCancelarEditarCategoria = document.getElementById(
	"boton-cancelar-editar-categoria"
);
const inputEditarNombreCategoria = document.getElementById(
	"input-editar-nombre-categoria"
);
const botonEditarCategoriaFormulario = document.getElementById(
	"boton-editar-categoria-formulario"
);
const formEditarCategoria = document.getElementById("form-editar-categoria");

const $modalEditarCategorias = document.getElementById("cont-ventana-modal");
const $seccionEditarCategorias = document.getElementById(
	"seccion-editar-categorias"
);
const $botonCancelarEditar = document.getElementById(
	"boton-cancelar-editar-categoria"
);
const $botonGuardarEditar = document.getElementById(
	"boton-editar-categoria-formulario"
);
const $inputNombreEditar = document.getElementById(
	"input-editar-nombre-categoria"
);
let indiceEdicion = null;

/* >>>>>>>>>>>>>>>>>>>>>>> ***OPERACIONES*** >>>>>>>>>>>>>>>>>>>>>>*/

const seccionSinOperaciones = document.getElementById(
	"contenedor-sin-operaciones"
);
const seccionConOperaciones = document.getElementById(
	"contenedor-titulos-nuevas-operaciones"
);
const contenedorNuevasOperaciones = document.getElementById(
	"contenedor-listado-nuevas-operaciones"
);
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");

const botonCancelarNuevasOperaciones = document.getElementById(
	"boton-cancelar-nuevas-operaciones"
);
const botonAgregarNuevaOperacion = document.getElementById(
	"boton-agregar-nuevas-operaciones"
);
const inputDescripcionNuevaOperacion = document.getElementById(
	"descripción-nueva-operacion"
);
const inputMontoNuevaOperacion = document.getElementById(
	"monto-nueva-operacion"
);
const selectTipoNuevaOperacion = document.getElementById(
	"tipo-nueva-operacion"
);
const selectCategoriaNuevaOperacion = document.getElementById(
	"categoria-nueva-operacion"
);
const inputFechaNuevaOperacion = document.getElementById(
	"fecha-nueva-operacion"
);

const contenedorSinOperaciones = document.getElementById(
	"contenedor-sin-operaciones"
);
const contenedorConOperaciones = document.getElementById(
	"contenedor-titulos-nuevas-operaciones"
);
const contenedorOperaciones = document.getElementById(
	"contenedor-listado-nuevas-operaciones"
);
/* >>>>>>>>>>>>>>>>>>>>>>> ***EDITAR OPERACIONES*** >>>>>>>>>>>>>>>>>>>>>>*/

const formularioEditarOperacion = document.getElementById(
	"formulario-editar-operacion"
);
const inputDescripcionEditarOperacion = document.getElementById(
	"descripcion-editar-operacion"
);
const inputMontoEditarOperacion = document.getElementById(
	"monto-editar-operacion"
);
const selectTipoEditarOperacion = document.getElementById(
	"tipo-editar-operacion"
);
const selectCategoriaEditarOperacion = document.getElementById(
	"categoria-editar-operacion"
);
const inputFechaEditarOperacion = document.getElementById(
	"fecha-editar-operacion"
);
const botonCancelarEditarOperaciones = document.getElementById(
	"boton-cancelar-editar-operaciones"
);
const botonFormularioEditarOperaciones = document.getElementById(
	"boton-formulario-editar-operaciones"
);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ***FECHA*** >>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

const inputFecha = document.querySelector("#input-fecha");

/* >>>>>>>>>>>>>>>>>>>>>>> ***REPORTES*** >>>>>>>>>>>>>>>>>>>>>>*/

const contenedorTotalesMensuales = document.getElementById(
	"contenedor-totales-mensuales"
);
const seccionReportesSinDatos = document.getElementById("reportes-sin-datos");
const seccionReportesConDatos = document.getElementById("reportes-con-datos");
const contenedorItemTotalesCategoria = document.getElementById(
	"contenedor-item-totales-categoria"
);
const tagCategoriaMayorGanancia = document.getElementById(
	"tag-categoria-mayor-ganancia"
);
const montoMayorGanancia = document.getElementById("monto-mayor-ganancia");
const tagCategoriaMayorGasto = document.getElementById(
	"tag-categoria-mayor-gasto"
);
const montoMayorGasto = document.getElementById("monto-mayor-gasto");
const tagCategoriaMayorBalance = document.getElementById(
	"tag-categoria-mayor-balance"
);
const montoMayorBalance = document.getElementById("monto-mayor-balance");
const fechaMayorGanancia = document.getElementById("fecha-mayor-ganancia");
const montoMesMayorGanancia = document.getElementById(
	"monto-mes-mayor-ganancia"
);
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

/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* >>>>>>>>>>>>>>>>>>>>>>>***MENÚ HAMBURGUESA***>>>>>>>>>>>>>>>>>>>>>>>*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

botonHamburguesa.addEventListener("click", function () {
	menuDesplegableMobile.classList.toggle("hidden"); // Alterna visibilidad
});

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* >>>>>>>>>>>>>>>>>***NAVEGACIÓN ENTRE SECCIONES***>>>>>>>>>>>>>>>>>>*/
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/*
const arraySecciones = [
	seccionPrincipal,
	seccionCategorias,
	seccionReportes,
	seccionNuevaOperacion,	
	seccionSinOperaciones,
	seccionConOperaciones,
	seccionOperaciones,
];

const mostrarSeccion = (array, seccion) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] != seccion) {
			array[i].classList.add("hidden");
		} else if (array[i] === seccion) {
			array[i].classList.remove("hidden");
		}
	}
};

// Links del NAV
linkReportes.onclick = (event) => {
	event.preventDefault();	
	mostrarSeccion(arraySecciones, seccionReportes); 
};

linkCategorias.onclick = (event) => {
	event.preventDefault();
	mostrarSeccion(arraySecciones, seccionCategorias);
};
linkBalance.onclick = (event) => {
	event.preventDefault();
	mostrarSeccion(arraySecciones, seccionPrincipal);
};
*/

const arraySecciones = [
	seccionPrincipal,
	seccionCategorias,
	seccionReportes,
	seccionOperaciones,
	seccionNuevaOperacion,
	//seccionEditarCategorias, // Agregamos la sección de editar categorías
];

const mostrarSeccion = (array, seccion) => {
	array.forEach((sec) => sec.classList.add("hidden")); // Oculta todas
	seccion.classList.remove("hidden");
};

document.querySelectorAll(".link-balance").forEach((link) => {
	link.onclick = (event) => {
		event.preventDefault();
		arraySecciones.forEach((sec) => sec.classList.add("hidden")); // Oculta todas
		seccionPrincipal.classList.remove("hidden");
		seccionOperaciones.classList.remove("hidden"); // Muestra también la sección de operaciones
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




/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* >>>>>>>>>>>>>>>>>>>>>***AGREGAR CATEGORÍAS***>>>>>>>>>>>>>>>>>>>>>>*/
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


// Referencias a elementos clave
const inputAgregarCategoria = document.getElementById(
	"input-agregar-categoria"
);
const botonAgregarCategoria = document.getElementById(
	"boton-agregar-categoria"
);
const contenedorCategorias = document.getElementById(
	"contenedor-categorias-agregadas"
);

// Función para iniciar la edición de una categoría
const iniciarEdicionCategoria = (index) => {
	const categorias = obtenerCategoriasDesdeLocalStorage();
	inputEditarNombreCategoria.value = categorias[index]; // Cargar nombre de la categoría

	// Guardar índice de la categoría a editar
	indiceEdicion = index;

	// Mostrar la ventana modal y su contenido sin afectar las secciones
	$contVentanaModal.classList.remove("hidden");
	seccionEditarCategorias.classList.remove("hidden");
};

// >>>>>>>>>>>>>>>>>>>>>>> Volver de Edición a Categorías <<<<<<<<<<<<<<<<<<<<<<<<

botonCancelarEditarCategoria.addEventListener("click", (e) => {
	e.preventDefault(); // Evita cualquier comportamiento por defecto

	// Cerrar la ventana modal sin afectar la sección de categorías
	$contVentanaModal.classList.add("hidden");
	seccionEditarCategorias.classList.add("hidden");
});

// >>>>>>>>>>>>>>>>>>>>>>> Guardar Edición de Categoría <<<<<<<<<<<<<<<<<<<<<<<<

botonEditarCategoriaFormulario.addEventListener("click", (e) => {
	e.preventDefault(); // Evitar recarga de página

	let categorias = obtenerCategoriasDesdeLocalStorage();
	let nuevoNombre = inputEditarNombreCategoria.value.trim();

	if (nuevoNombre === "") {
		alert("El nombre de la categoría no puede estar vacío.");
		return;
	}

	categorias[indiceEdicion] = capitalizar(nuevoNombre);
	guardarCategoriasEnLocalStorage(categorias);
	renderizarCategorias(); // Refrescar la lista

	// Cerrar la ventana modal sin afectar la sección de categorías
	$contVentanaModal.classList.add("hidden");
	seccionEditarCategorias.classList.add("hidden");
});

// Función para capitalizar texto
const capitalizar = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Obtener categorías desde localStorage
const obtenerCategoriasDesdeLocalStorage = () => {
	return JSON.parse(localStorage.getItem("categorias")) || [];
};

// Guardar categorías en localStorage
const guardarCategoriasEnLocalStorage = (categorias) => {
	localStorage.setItem("categorias", JSON.stringify(categorias));
};

// Función para agregar una nueva categoría a la lista y mostrar botones después de hacer clic
const agregarCategoria = () => {
	let nuevaCategoria = inputAgregarCategoria.value.trim();

	if (nuevaCategoria === "") {
		alert("Por favor, ingresa un nombre de categoría válido.");
		return;
	}

	nuevaCategoria = capitalizar(nuevaCategoria);
	const categorias = obtenerCategoriasDesdeLocalStorage();

	// Evitar duplicados
	if (categorias.includes(nuevaCategoria)) {
		alert("Esta categoría ya existe.");
		return;
	}

	categorias.push(nuevaCategoria);
	guardarCategoriasEnLocalStorage(categorias);

	inputAgregarCategoria.value = ""; // Limpiar input
	renderizarCategorias(); // Refrescar la vista
};

// Evento para agregar categoría al hacer clic en el botón
botonAgregarCategoria.addEventListener("click", (e) => {
	e.preventDefault();
	agregarCategoria();
});

// Función para renderizar categorías (solo muestra botones después de agregar)
const renderizarCategorias = () => {
	const categorias = obtenerCategoriasDesdeLocalStorage();
	contenedorCategorias.innerHTML = ""; // Limpiar contenedor antes de agregar nuevas categorías

	categorias.forEach((categoria, index) => {
		const categoriaElemento = document.createElement("div");
		categoriaElemento.classList.add(
			"flex",
			"justify-between",
			"items-center",
			"p-2",
			"rounded",
			"mb-2",
			"mt-2"
		);

		categoriaElemento.innerHTML = `
            <span class="mb-2">${categoria}</span>
            <div class="botones flex justify-end space-x-2">
                <button type:"button" class="btn-editar h-8 px-4 rounded-lg bg-indigo-200 hover:bg-indigo-300" data-index="${index}">
                    <i class="fa-solid fa-pencil w-5 dark:text-black"></i>
                </button>
                <button class="btn-eliminar h-8 px-4 rounded-lg bg-fuchsia-200 hover:bg-fuchsia-400" data-index="${index}">
                    <i class="fa-solid fa-trash w-5 dark:text-black"></i>
                </button>
            </div>
        `;

		contenedorCategorias.appendChild(categoriaElemento);
	});

	// Agregar eventos a los botones de editar y eliminar
	document.querySelectorAll(".btn-editar").forEach((boton) => {
		boton.addEventListener("click", (e) => {
			const index = e.currentTarget.dataset.index;
			iniciarEdicionCategoria(index);
		});
	});

	document.querySelectorAll(".btn-eliminar").forEach((boton) => {
		boton.addEventListener("click", (e) => {
			const index = e.currentTarget.dataset.index;
			eliminarCategoria(index);
		});
	});
};

// Función para eliminar categoría
const eliminarCategoria = (index) => {
	const categorias = obtenerCategoriasDesdeLocalStorage();
	categorias.splice(index, 1);
	guardarCategoriasEnLocalStorage(categorias);
	renderizarCategorias(); // Refrescar la vista
};

// Asegurar que las categorías se carguen al inicio

document.addEventListener("DOMContentLoaded", () => {
	renderizarCategorias();
});


/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* >>>>>>>>>>>>>>>>>>>>>***SECCION OPERACIONES***>>>>>>>>>>>>>>>>>>>>>>*/
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ***FECHA*** >>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const date = () => {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	return `${year}-${month < 10 ? "0" + month : month}-${
		day < 10 ? "0" + day : day
	}`;
};

document.getElementById("fecha-nueva-operacion").value = date();
console.log("boton-nueva-operacion");
document.getElementById("fecha-editar-operacion").value = date();
console.log("fecha-editar-operacion");


//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Generador de ID único
const generateId = () => {
	let p1 = Math.floor(Math.random() * 0x10000);
	let p2 = new Date().getTime();
	return `${p1}${p2}`;
};


// Categorías
let categories = ["Servicios", "Transporte", "Educación", "Trabajo", "Comida"];

const resetForm = () => {
	inputDescripcionNuevaOperacion.value = "";
	inputMontoNuevaOperacion.value = 0;
	selectTipoNuevaOperacion.value = "gasto";
	selectCategoriaNuevaOperacion.value = categories[0];
	inputFechaNuevaOperacion.value = date();
};

const toggleTable = () => {
	if (operaciones.length === 0) {
		contenedorSinOperaciones.classList.remove("hidden");
		contenedorOperaciones.classList.add("hidden");
		console.log("contenedorOperaciones");
	} else {
		contenedorSinOperaciones.classList.add("hidden");
		contenedorOperaciones.classList.remove("hidden");
	}
};

let operaciones = JSON.parse(localStorage.getItem("operacionesStorage")) || [];



// Botón nueva operación
botonNuevaOperacion.addEventListener("click", () => {
  formularioNuevaOperacion.classList.remove("hidden");
  seccionOperaciones.classList.add("hidden");
  contenedorSinOperaciones.classList.add("hidden");
});

// Botón agregar operación
botonAgregarNuevaOperacion.addEventListener("click", () => {
  const nuevaOperacion = {
    id: generateId(),
    descripcion: inputDescripcionNuevaOperacion.value,
    monto: Number(inputMontoNuevaOperacion.value),
    tipo: selectTipoNuevaOperacion.value,
    categoria: selectCategoriaNuevaOperacion.value,
    fecha: inputFechaNuevaOperacion.value,
  };

  if (nuevaOperacion.tipo === "gasto") {
    nuevaOperacion.monto *= -1;
  }

  operaciones.push(nuevaOperacion);
  localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
  escribirOperacion(operaciones);
  operacionResetearFormulario();
  checkearOperaciones(operaciones);

  formularioNuevaOperacion.classList.add("hidden");
  seccionOperaciones.classList.remove("hidden");
});


botonNuevaOperacion.addEventListener("click", () => {
	seccionNuevaOperacion.classList.remove("hidden");

	seccionPrincipal.classList.add("hidden");
});

document
	.getElementById("boton-cancelar-nuevas-operaciones")
	.addEventListener("click", () => {
		seccionNuevaOperacion.classList.add("hidden");
		console.log("seccionNuevaOperacion");
		seccionPrincipal.classList.remove("hidden");
	});

botonAgregarNuevaOperacion.addEventListener("click", () => {
	console.log(botonAgregarNuevaOperacion);
	const newOp = {
		id: generateId(),
		descripcion: inputDescripcionNuevaOperacion.value,
		monto: Number(inputMontoNuevaOperacion.value),
		tipo: selectTipoNuevaOperacion.value,
		categoria: selectCategoriaNuevaOperacion.value,
		fecha: inputFechaNuevaOperacion.value,
	};


	if (newOp.tipo === "gasto") newOp.monto *= -1;

	operaciones.push(newOp);
	localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
	updateUI();
	resetForm();
	seccionNuevaOperacion.classList.add("hidden");
	seccionPrincipal.classList.remove("hidden");
});

// Escribir operación en el DOM
const escribirOperacion = (operaciones) => {
  contenedorOperaciones.innerHTML = "";
  checkearOperaciones(operaciones);
  operaciones.forEach((op) => {
    let div = document.createElement("div");
    div.classList.add("flex", "justify-between", "items-center", "p-2", "border-b");
    div.innerHTML = `
      <p>${op.descripcion}</p>
      <span class="text-sm px-2 py-1 rounded bg-blue-200">${op.categoria}</span>
      <p>${op.fecha}</p>
      <p class="${op.tipo === "ganancia" ? "text-green-500" : "text-red-500"}">$${op.monto}</p>
      <button onclick="eliminarOperacion('${op.id}')">🗑️</button>
    `;
    contenedorOperaciones.appendChild(div);
  });
};

const updateUI = () => {
	contenedorOperaciones.innerHTML = "";
	toggleTable();

	operaciones.forEach((op) => {
		let div = document.createElement("div");
		div.classList.add(
			"flex",
			"justify-between",
			"items-center",
			"p-2",
			"border-b"
		);
		div.innerHTML = `
      <p>${op.descripcion}</p>
      <span class="text-sm px-2 py-1 rounded bg-blue-200">${op.categoria}</span>
      <p>${op.fecha}</p>
      <p class="${
				op.tipo === "ganancia" ? "text-green-500" : "text-red-500"
			}">$${op.monto}</p>
      <button onclick="deleteOperation('${op.id}')">🗑️</button>
    `;
		contenedorOperaciones.appendChild(div);
	});
};

// Eliminar operación
const eliminarOperacion = (id) => {
  operaciones = operaciones.filter((o) => o.id !== id);
  localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
  escribirOperacion(operaciones);
  checkearOperaciones(operaciones);
};

// Cargar operaciones al inicio
escribirOperacion(operaciones);
checkearOperaciones(operaciones);

// Cancelar nueva operación
botonCancelarNuevasOperaciones.addEventListener("click", () => {
  formularioNuevaOperacion.classList.add("hidden");
  seccionOperaciones.classList.remove("hidden");
});


const deleteOperation = (id) => {
	operaciones = operaciones.filter((o) => o.id !== id);
	localStorage.setItem("operacionesStorage", JSON.stringify(operaciones));
	updateUI();
};

updateUI();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
