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
const contenedorFiltros = document.querySelector("#contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");



/* >>>>>>>>>>>>>>>>>>>>>>> ***BALANCE*** >>>>>>>>>>>>>>>>>>>>>>*/

const numeroGananciaBalance = document.querySelector("#numero-ganancias");
const numeroGastosBalance = document.querySelector("#numero-gastos");
const numeroTotalBalance = document.querySelector("#numero-total");

/* >>>>>>>>>>>>>>>>>>>>>>> ***CATEGORIAS*** >>>>>>>>>>>>>>>>>>>>>>*/

const selectTipo = document.getElementByld("select-tipo");
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
const botonNuevaOperacion = document.getElementById("boton-nueva-operaion");
const botonCancelarNuevasOperaciones = document.getElementById("boton-cancelar-nuevas-operaciones");
const botonAgregarNuevaOperacion = document.getElementById("boton-agregar-nuevas-operaciones");
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

