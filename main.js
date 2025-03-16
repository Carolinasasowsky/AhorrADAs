// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<<<< ELEMENTOS <<<<<<<<<<<<<<<<<<<<<<<<<

const body = document.body;

// <<<<<<<<<< contenedores <<<<<<<<<<
const containerBalanceYFiltros = document.getElementById(
	"container-balance-filtros"
);
const contenedorImgOperaciones = document.getElementById(
	"contenedor-img-operaciones"
);
const contenedorTablaOperaciones = document.getElementById(
	"contenedor-tabla-operaciones"
);
const contenedorFiltros = document.getElementById("contenedor-filtros");

//<<<<<<<<<< enlaces <<<<<<<<<<
const enlaceReportes = document.getElementById("enlace-reporte");
const enlaceBalance = document.getElementById("enlace-balance");
const enlaceCategoria = document.getElementById("enlace-categoria");

//<<<<<<<<<< secciones <<<<<<<<<<
const seccionPrincipal = document.getElementById("seccion-principal");
const seccionEditar = document.getElementById("seccion-editar");
const seccionCategoria = document.getElementById("seccion-categoria");
const seccionReportes = document.getElementById("seccion-reportes");
const seccionNuevaOperacion = document.getElementById(
	"seccion-nueva-operacion"
);

//<<<<<<<<<< ventanas modales <<<<<<<<<<
const ventanaModalEditarOp = document.getElementById(
	"advertencia-editar--operaciones"
);
const ventanaModalEditar = document.getElementById("advertencia-editar");
const ventanaModalEliminarOp = document.getElementById(
	"advertencia-eliminar--operaciones"
);
const ventanaModalEliminar = document.getElementById("advertencia-eliminar");
const ventanaModalNoEliminar = document.getElementById(
	"advertencia-no-eliminar"
);
const modalCategoria = document.getElementById("advertencia-categoria");
const modalEliminarCategoria = document.getElementById(
	"eliminar-advertencia-categoria"
);

// <<<<<<<<<< botones <<<<<<<<<<
const btnMenuHamburguesa = document.getElementById("btn-menu-hamburguesa");
const btnOperacion = document.getElementById("btn-operacion");
const btnCancelarNueva = document.getElementById("btn-cancelar--nueva");
const btnCancelarEditar = document.getElementById("btn-cancelar--editar");
const btnModoOscuro = document.getElementById("btn-modo-oscuro");
const btnAgregarOperacion = document.getElementById("btn-agregar-operacion");
const btnAgregarCategoria = document.getElementById("btn-agregar-categoria");
const btnOcultarFiltros = document.getElementById("btn-ocultar-filtros");
const btnEditar = document.getElementById("btn-aceptar-editar");
const btnAdvertenciaAceptarEditar = document.querySelector(
	".btn-advertencia-editar--aceptar"
);
const btnAdvertenciaCancelarEditar = document.getElementById(
	"btn-advertencia-editar--cancelar"
);
const btnGuardarCambios = document.getElementById("editar-btn-agregar");
const btnAdvertenciaCancelarEditarOP = document.getElementById(
	"btn-advertencia-editar--cancelar-op"
);
const btnAceptarEliminar = document.querySelector(
	".btn-advertencia-eliminar--aceptar"
);
const btnAdvertenciaCancelarEliminar = document.getElementById(
	"btn-advertencia-eliminar--cancelar"
);
const btnAdvertenciaEliminarOp = document.querySelector(
	".btn-advertencia-eliminar--aceptar-op"
);
const btnAdvertenciaCancelarEliminarOp = document.getElementById(
	"btn-advertencia-eliminar--cancelar-op"
);
const btnAdvertenciaNoEliminar = document.getElementById(
	"btn-advertencia-no-eliminar"
);

// <<<<<<<<<< menues <<<<<<<<<<
const menuNav = document.getElementById("menu-nav");

//<<<<<<<<<< inputs y select <<<<<<<<<<
const inputDescripcion = document.getElementById("input-descripcion");
const inputMonto = document.getElementById("input-monto");
const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const inputFecha = document.getElementById("input-fecha");
const inputNombre = document.getElementById("nombre");
const inputEditarCategoria = document.getElementById("label-editar");

//<<<<<<<<<< input y select de filtros <<<<<<<<<<
const filtroTipo = document.getElementById("filtro-tipo");
const filtroCategoria = document.getElementById("filtro-categoria");
const filtroOrdenar = document.getElementById("filtro-ordenar");
const inputFiltroFecha = document.getElementById("filtro-fecha");

// <<<<<<<<<< iconos <<<<<<<<<<
const iconoHamburguesa = document.getElementById("icono-hamburguesa");
const iconoX = document.getElementById("icono-x");

//<<<<<<<<<< tablas <<<<<<<<<<
const caberecaTablaOperaciones = document.getElementById(
	"cabecera-tabla-operaciones"
);
const cuerpoTablaTotalesCategorias = document.getElementById(
	"cuerpo-tabla-totales-categorias"
);
const cuerpoTablaTotalesMes = document.getElementById(
	"cuerpo-tabla-totales-mes"
);

//<<<<<<<<<< div de balance <<<<<<<<<<
const balanceGanancia = document.getElementById("balance-ganancia");
const balanceGasto = document.getElementById("balance-gasto");
const balanceTotal = document.getElementById("balance-total");

//<<<<<<<<<< div de reportes <<<<<<<<<<
const tablasReportes = document.getElementById("tabla-reportes");
const containerImgReportes = document.getElementById("container-img-reportes");

//<<<<<<<<<< elementos de edicion <<<<<<<<<<
const seccionEditarOp = document.getElementById("editar-nueva-operacion");
const editarDescripcion = document.getElementById("editar-input-descripcion");
const editarMonto = document.getElementById("editar-input-monto");
const editarTipo = document.getElementById("editar-select-tipo");
const editarSelectCategoria = document.getElementById(
	"editar-select-categoria"
);
const editarFecha = document.getElementById("editar-input-fecha");
const btnAdvertenciaAceptarEditarOp = document.querySelector(
	".btn-advertencia-editar--aceptar-op"
);

//<<<<<<<<<< containes de los elementos de reportes <<<<<<<<<<
const containerCategoriaMayorGanancia = document.getElementById(
	"container-categoria-mayor-ganancia"
);
const containerMayorGanaciaCategoria = document.getElementById(
	"container-mayor-ganacia-categoria"
);
const containerCategoriaMayorGasto = document.getElementById(
	"container-categoria-mayor-gasto"
);
const containerMayorGastoCategoria = document.getElementById(
	"container-mayor-gasto-categoria"
);
const containerCategoriaMayorBalance = document.getElementById(
	"container-categoria-mayor-balance"
);
const containerMayorBalanceCategoria = document.getElementById(
	"container-mayor-balance-categoria"
);
const containerMesMayorGanacia = document.getElementById(
	"container-mes-mayor-ganacia"
);
const containerMayorGananciaMes = document.getElementById(
	"container-mayor-ganancia-mes"
);
const containerfechaMayorGasto = document.getElementById(
	"container-mes-mayor-gasto"
);
const containerMayorGastoMes = document.getElementById(
	"container-mayor-gasto-mes"
);
//<<<<<<<<<< formularios <<<<<<<<<<
const formEditarOperacion = document.getElementById("form-editar-operacion");
const formEditarCategoria = document.getElementById("form-editar-categoria");
const formAgregarCategoria = document.getElementById("form-agregar-categoria");

//<<<<<<<<<< mensajes de error de validaciones de input <<<<<<<<<<
const mensajeError = document.getElementById("mensaje-error");
const mensajeError2 = document.getElementById("mensaje-input-vacio");
const errorEditar = document.getElementById("editar-mensaje-error");
const error2Editar = document.getElementById("editar-mensaje-input-vacio");
const errorTipo = document.querySelector(".mensaje-input-vacio");
const errorDescripcion = document.getElementById("error-descripcion");

//<<<<<<<<<< ventana modal categoria ya existe<<<<<<<<<<
const modalAdvertenciaGeneral = document.getElementById("modal-advertencia-general");
const modalMensajeGeneral = document.getElementById("modal-mensaje-general");
const btnCerrarModalGeneral = document.getElementById("btn-cerrar-modal-general");

// ///////////////////////////////////////////// FIN DE ELEMENTOS ///////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<< FUNCIONES GENERALES <<<<<<<<<<<<<<<<<<<<<<<

//<<<<<<<<<< Función para capitalizar texto<<<<<<<<<<
const capitalizar = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

//<<<<<<<<<< Funcionalidad menú hamburguesa <<<<<<<<<<
btnMenuHamburguesa.addEventListener("click", () => {
	menuNav.classList.toggle("hidden");
	iconoHamburguesa.classList.toggle("hidden");
	iconoX.classList.toggle("hidden");
});

//<<<<<<<<<< funcion para vaciar el input despues de agregar nombre <<<<<<<<<<
const vaciarInputNombre = () => (inputNombre.value = "");

//<<<<<<<<<< funcion para aparecer y ocultar secciones <<<<<<<<<<
const mostrarSeccion = (seccion, ...contenedores) => {
	seccion.classList.remove("hidden");
	contenedores.forEach((contenedor) => {
		contenedor.classList.add("hidden");
	});
};

enlaceBalance.addEventListener("click", () => {
	vaciarInputNombre(),
		mostrarSeccion(
			seccionPrincipal,
			seccionCategoria,
			seccionReportes,
			seccionNuevaOperacion,
			seccionEditar,
			ventanaModalEditar,
			seccionEditarOp,
			ventanaModalEditarOp,
			ventanaModalEliminar,
			ventanaModalEliminarOp
		);
});
enlaceCategoria.addEventListener("click", () =>
	mostrarSeccion(
		seccionCategoria,
		seccionPrincipal,
		seccionReportes,
		seccionNuevaOperacion,
		seccionEditar,
		ventanaModalEditar,
		seccionEditarOp,
		ventanaModalEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	)
);
enlaceReportes.addEventListener("click", () => {
	vaciarInputNombre(),
		mostrarSeccion(
			seccionReportes,
			seccionPrincipal,
			seccionCategoria,
			seccionNuevaOperacion,
			seccionEditar,
			ventanaModalEditar,
			seccionEditarOp,
			ventanaModalEditarOp,
			ventanaModalEliminar,
			ventanaModalEliminarOp
		);
});
btnOperacion.addEventListener("click", () =>
	mostrarSeccion(
		seccionNuevaOperacion,
		seccionPrincipal,
		seccionCategoria,
		seccionReportes,
		seccionEditar,
		ventanaModalEditar,
		seccionEditarOp,
		ventanaModalEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	)
);
formEditarCategoria.addEventListener("submit", (e) => {
	e.preventDefault();
	mostrarSeccion(
		ventanaModalEditar,
		seccionPrincipal,
		seccionCategoria,
		seccionReportes,
		seccionNuevaOperacion,
		seccionEditar,
		seccionEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	);
});

body;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<< DARK MODE <<<<<<<<<<<<<<<<<<<<<<<
function toggleDarkMode() {
	const html = document.documentElement;

	//<<<<<<<<<< Alternar la clase "dark" en el <html> <<<<<<<<<<
	html.classList.toggle("dark");

	//<<<<<<<<<< Guardar la preferencia del usuario en localStorage <<<<<<<<<<
	const isDarkMode = html.classList.contains("dark");
	localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

//<<<<<<<<<< Aplicar el modo oscuro al cargar la página, según la preferencia guardada<<<<<<<<<<
window.addEventListener("DOMContentLoaded", () => {
	const savedMode = localStorage.getItem("darkMode");
	if (savedMode === "enabled") {
		document.documentElement.classList.add("dark");
	}
});
//<<<<<<<<<< funcion para botones cancelar<<<<<<<<<<
const cancelar = (contenedor, seccion) => {
	contenedor.classList.add("hidden");
	seccion.classList.remove("hidden");
};

btnCancelarNueva.addEventListener("click", () => {
	cancelar(seccionNuevaOperacion, seccionPrincipal);
	vaciarInput();
	quitarErrorYColor(
		inputMonto,
		mensajeError,
		mensajeError2,
		inputDescripcion,
		errorDescripcion
	);
});
btnCancelarEditar.addEventListener("click", () => {
	vaciarInputNombre();
	cancelar(seccionEditar, seccionCategoria);
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<< INICIO SECCION OPERACIONES <<<<<<<<<<<<<<<<<<<<<<<

//<<<<<<<<<< objeto y variable para tabla operaciones<<<<<<<<<<
const datos = [];
let operacionesGuardadas;

//<<<<<<<<<< funcion para ver si algun usuario ingreso algun dato en local storage<<<<<<<<<<
const evaluarLocalStorage = (nombre, variable, objeto) => {
	if (localStorage.getItem(nombre) !== null) {
		variable = JSON.parse(localStorage.getItem(nombre));
		return variable;
	} else {
		localStorage.setItem(nombre, JSON.stringify(objeto));
	}
};

//<<<<<<<<<< funcionalidades de la seccion balance<<<<<<<<<<
let resultadoGanacia = 0;
let resultadoGasto = 0;
let resultadoTotal = 0;

//<<<<<<<<<< funcion para sumar ganancias o gastos generales <<<<<<<<<<
const sumarGananciaOGasto = (tipo, monto) => {
	if (tipo === "ganancia") {
		resultadoGanacia += parseInt(monto);
	} else {
		resultadoGasto += parseInt(monto);
	}
};

//<<<<<<<<<< funcion para calcular el resultado total entre gasto y ganancia generales<<<<<<<<<<
const calcularTotal = () => {
	if (resultadoGanacia > resultadoGasto) {
		resultadoTotal = resultadoGanacia - resultadoGasto;
	} else if (resultadoGanacia < resultadoGasto) {
		resultadoTotal = resultadoGasto - resultadoGanacia;
	} else {
		resultadoTotal = 0;
	}
};

// <<<<<<<<<< funcion para agregar gif aleatorio a los resultados de gastos y ganancias <<<<<<<<<<
const contenedorGif = document.getElementById("contenedor-gif");

let chanchitosGanancias = [
	"imagenes/pig_good.gif",
	"imagenes/pig_dinero.gif",
	"imagenes/pig_cien.gif",
	"imagenes/pig_alcancia"
];
let chanchitosPerdidas = [
	"imagenes/pig_ninja.gif",
	"imagenes/pig_reloj.gif",
	"imagenes/pig_llanto.gif",
	"imagenes/pig_fuego.gif",
];

//<<<<<<<<<< funcion para que agregue gif <<<<<<<<<<
const agregarGif = (array) => {
	mostrarSeccion(contenedorGif, contenedorFiltros);
	btnOcultarFiltros.innerText = "Mostrar filtros";
	let gif = Math.floor(Math.random() * array.length);
	contenedorGif.style.background = `url(${array[gif]}) center center no-repeat`;
	contenedorGif.style.backgroundSize = "cover";
};

//<<<<<<<<<< para que se oculte el gif <<<<<<<<<<
const ocultarGif = () => {
	setTimeout(() => {
		mostrarSeccion(contenedorFiltros, contenedorGif);
		btnOcultarFiltros.innerText = "Ocultar filtros";
	}, 3000);
};

//<<<<<<<<<< funcion para actualizar el DOM de los balances generales <<<<<<<<<<
const actualizarBalance = () => {
	balanceGanancia.innerText = `+$${resultadoGanacia}`;
	balanceGasto.innerText = `-$${resultadoGasto}`;

	calcularTotal();
	if (resultadoGanacia > resultadoGasto) {
		balanceTotal.innerText = `+$${resultadoTotal}`;
		balanceTotal.classList.add("text-green-700");
		balanceTotal.classList.remove("text-red-500");
		agregarGif(chanchitosGanancias);
		ocultarGif();
	} else if (resultadoGanacia < resultadoGasto) {
		balanceTotal.innerText = `-$${resultadoTotal}`;
		balanceTotal.classList.remove("text-green-500");
		balanceTotal.classList.add("text-red-700");
		agregarGif(chanchitosPerdidas);
		ocultarGif();
	} else {
		balanceTotal.innerText = `$${resultadoTotal}`;
		btnOcultarFiltros.innerText = "Ocultar filtros";
		balanceTotal.classList.remove("text-green-500");
		balanceTotal.classList.remove("text-red-500");
		mostrarSeccion(contenedorFiltros, contenedorGif);
	}
};

// <<<<<<<<<< funcion para añadir eventos a los btns de editar operaciones <<<<<<<<<<
const eventosBtnsEditarOp = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			mostrarSeccion(seccionEditarOp, seccionPrincipal);
			const operacionAEditar = obtenerId(
				evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
				btnSeleccionado.id.slice(9)
			);
			if (operacionAEditar) {
				editarDescripcion.value = operacionAEditar.descripcion;
				editarMonto.value = operacionAEditar.monto;
				editarTipo.value = operacionAEditar.tipo;
				editarSelectCategoria.value = operacionAEditar.categoria.toLowerCase();
				editarFecha.value = operacionAEditar.fecha
					.split("/")
					.reverse()
					.join("-");
				quitarErrorYColor(
					editarMonto,
					errorEditar,
					error2Editar,
					editarDescripcion,
					errorDescripcion
				);
			}
			btnAdvertenciaAceptarEditarOp.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(9)}`
			);
			cargarSelect(editarSelectCategoria);
		});
	});
};

//<<<<<<<<<< aparece ventana advertencia editar operacion <<<<<<<<<<
formEditarOperacion.addEventListener("submit", (e) => {
	e.preventDefault();
	mostrarSeccion(ventanaModalEditarOp, seccionEditarOp);
});

//<<<<<<<<<< btn cancelar modal de editar operacion <<<<<<<<<<
btnAdvertenciaCancelarEditarOP.addEventListener("click", () =>
	cancelar(ventanaModalEditarOp, seccionPrincipal)
);

// <<<<<<<<<< funcion para añadir eventos a los botones de eliminar <<<<<<<<<<
const eventosBtnsEliminarOp = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			confirmarEliminarOperacion(
				evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
				obtenerId(
					evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
					btnSeleccionado.id.slice(11)
				)
			);
			mostrarSeccion(ventanaModalEliminarOp, seccionPrincipal);
			btnAdvertenciaEliminarOp.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(11)}`
			);
		});
	});
};

// <<<<<<<<<<funcion confirmar elimar operacion<<<<<<<<<<
const confirmarEliminarOperacion = (array, operacionId) => {
	const operacionesFiltradas = array.filter(
		(operacionAEliminar) => operacionAEliminar.id !== operacionId
	);
	localStorage.setItem("operaciones", JSON.stringify(operacionesFiltradas));
	generarTabla(operacionesFiltradas);
	mostrarImg(operacionesFiltradas);
	let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
	resultadoGanacia = 0;
	resultadoGasto = 0;
	resultadoTotal = 0;
	for (let operacion of operacionesGuardadas) {
		sumarGananciaOGasto(operacion.tipo, operacion.monto);
	}
	actualizarBalance();
};

//<<<<<<<<<<  funcion para que vuelva a verse la imagen cuando esten vacias las operaciones <<<<<<<<<<
const mostrarImg = (array) => {
	if (array.length <= 0) {
		mostrarSeccion(contenedorImgOperaciones, contenedorTablaOperaciones);
	}
};

//<<<<<<<<<< evento confirmar eliminar operacion <<<<<<<<<<
btnAdvertenciaEliminarOp.addEventListener("click", () => {
	confirmarEliminarOperacion(
		evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
		btnAdvertenciaEliminarOp.id.slice(10)
	);

	mostrarSeccion(seccionPrincipal, ventanaModalEliminarOp);
	mostrarSeccion(containerImgReportes, tablasReportes);
});

//<<<<<<<<<< btn cancelar modal de eliminar operacion<<<<<<<<<<
btnAdvertenciaCancelarEliminarOp.addEventListener("click", () =>
	cancelar(ventanaModalEliminarOp, seccionPrincipal)
);

// <<<<<<<<<< Ajustar visibilidad de la cabecera de la tabla dependiendo del tamaño de la pantalla <<<<<<<<<<
const ajustarVisibilidadCabecera = () => {
	if (window.innerWidth > 767) {
		caberecaTablaOperaciones.classList.remove("hidden");
	} else {
		caberecaTablaOperaciones.classList.add("hidden");
	}
};

//<<<<<<<<<< Función para generar tabla de operaciones si hay datos en local storage <<<<<<<<<<
const generarTabla = (operaciones) => {
	const cuerpoTablaOperaciones = document.getElementById(
		"cuerpo-tabla-operaciones"
	);
	cuerpoTablaOperaciones.innerHTML = "";

	if (operaciones && operaciones.length > 0) {
		resultadoGanacia = 0;
		resultadoGasto = 0;

		for (let operacion of operaciones) {
			const obtenerSigno = operacion.tipo === "ganancia" ? "+$" : "-$";
			const obtenerColor =
				operacion.tipo === "ganancia" ? "text-green-500" : "text-red-500";

			sumarGananciaOGasto(operacion.tipo, operacion.monto);

			cuerpoTablaOperaciones.innerHTML += `
				<div class="flex text-center flex-col md:flex-row" id="${operacion.id}">
    <div class="flex md:flex-row md:w-[40%]">
        <div class="flex-1 py-2 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
            <span>${operacion.descripcion}</span>
        </div>
        <div class="flex-1 py-2 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
            <span>${operacion.categoria}</span>
        </div>
    </div>
    <div class="flex md:w-[60%]">
        <div class="hidden flex-1 py-2 md:flex justify-center items-center"> <!-- Agrega justify-center y items-center aquí -->
            <span>${operacion.fecha}</span>
        </div>
        <div class="flex-1 py-2 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
            <span class="${obtenerColor}">${obtenerSigno}${operacion.monto}</span>
        </div>
        <div class="flex-1 py-2 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
            <button class="btn-editar-op" id="editar-op${operacion.id}"><img src="imagenes/editar.png" alt="logo-editar" class="w-[35px]"/></button>
            <button class="btn-eliminar-op" id="eliminar-op${operacion.id}"><img src="imagenes/eliminar.png" alt="logo-eliminar" class="w-[30px]"/></button>
        </div>
    </div>
</div>
			`;
		}
		//<<<<<<<<<< llamando a mi nodeList de btns <<<<<<<<<<
		eventosBtnsEditarOp(document.querySelectorAll(".btn-editar-op"));
		eventosBtnsEliminarOp(document.querySelectorAll(".btn-eliminar-op"));
		calcularTotal();
		actualizarBalance();
		mostrarSeccion(seccionPrincipal, contenedorImgOperaciones);
		ajustarVisibilidadCabecera();
		window.addEventListener("DOMContentLoaded", ajustarVisibilidadCabecera);
		window.addEventListener("resize", ajustarVisibilidadCabecera);
	}
};

generarTabla(evaluarLocalStorage("operaciones", operacionesGuardadas, datos));





const editarSeccionOperaciones = (array, operacionId) => {
	const operacionesEditadas = array.map((operacionAEditar) => {
		if (operacionAEditar.id === operacionId) {
			return {
				...operacionAEditar,
				descripcion: capitalizar(editarDescripcion.value),
				categoria: capitalizar(editarSelectCategoria.value),
				fecha: editarFecha.value.split("-").reverse().join("/"),
				monto: editarMonto.value,
				tipo: editarTipo.value,
			};
		} else {
			return {
				...operacionAEditar,
			};
		}
	});
	
	localStorage.setItem("operaciones", JSON.stringify(operacionesEditadas));
	generarTabla(operacionesEditadas);
};


//<<<<<<<<<< evento para imprimir la tabla editada <<<<<<<<<<
btnAdvertenciaAceptarEditarOp.addEventListener("click", () => {
	editarSeccionOperaciones(
		evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
		btnAdvertenciaAceptarEditarOp.id.slice(10)
	);
	mostrarSeccion(seccionPrincipal, ventanaModalEditarOp);
});

//<<<<<<<<<< cancelar seccion editar operacion <<<<<<<<<<
document
	.getElementById("editar-btn-cancelar--nueva")
	.addEventListener("click", () => {
		cancelar(seccionEditarOp, seccionPrincipal);
	});

// <<<<<<<<<< evento para agregar y actualizar operacion <<<<<<<<<<
document
	.getElementById("form-nueva-operacion")
	.addEventListener("submit", (e) => {
		e.preventDefault();
		contenedorTablaOperaciones.classList.remove("hidden");
		const nuevaOperacion = {
			id: uuidv4(),
			descripcion:
				inputDescripcion.value.charAt(0).toUpperCase() +
				inputDescripcion.value.slice(1),
			categoria:
				selectCategoria.value.charAt(0).toUpperCase() +
				selectCategoria.value.slice(1),
			fecha: fechaFormateada.split("-").reverse().join("/"),
			monto: inputMonto.value,
			tipo: selectTipo.value,
		};

		

		let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
		operacionesGuardadas.push(nuevaOperacion);
		localStorage.setItem("operaciones", JSON.stringify(operacionesGuardadas));
		seccionNuevaOperacion.classList.add("hidden");
		generarTabla(
			evaluarLocalStorage("operaciones", operacionesGuardadas, datos)
		);

		vaciarInput();
		aparecerReportes();
		actualizarResumen();

		actualizarTotalesPorPropiedad(
			cuerpoTablaTotalesCategorias,
			"categoria",
			obtenerGananciasOGastosPorCategoria("ganancia"),
			obtenerGananciasOGastosPorCategoria("gasto"),
			obtenerBalancePorPropiedad(
				"categoria",
				obtenerGananciasOGastosPorCategoria("ganancia"),
				obtenerGananciasOGastosPorCategoria("gasto")
			)
		);

		actualizarTotalesPorPropiedad(
			cuerpoTablaTotalesMes,
			"fecha",
			obtenerGananciasOGastosPorMes("ganancia"),
			obtenerGananciasOGastosPorMes("gasto"),
			obtenerBalancePorPropiedad(
				"fecha",
				obtenerGananciasOGastosPorMes("ganancia"),
				obtenerGananciasOGastosPorMes("gasto")
			)
		);
	});

//<<<<<<<<<< función para que aparezca los input vacios después de generar una nueva operación. <<<<<<<<<<
const vaciarInput = () => {
	inputDescripcion.value = "";
	inputMonto.value = "";
	inputFecha.value = fechaActualFormateada;
};

//<<<<<<<<<< validación para que input monto no este vacia y no escriban de 10 números <<<<<<<<<<
const validarMonto = (input, error, error2) =>
	input.addEventListener("input", () => {
		if (/^\d{1,10}$/.test(input.value)) {
			input.classList.remove("border-red-500");
			error.classList.add("hidden");
			error2.classList.add("hidden");
		} else if (input.value.length === 0) {
			error2.classList.remove("hidden");
			input.classList.add("border-red-500");
		} else if (input.value < 0) {
			input.value = 0;
		} else {
			input.classList.add("border-red-500");
			error.classList.remove("hidden");
		}
	});

validarMonto(inputMonto, mensajeError, mensajeError2);
validarMonto(editarMonto, errorEditar, error2Editar);

//<<<<<<<<<< validación para que input descripcion no este vacia <<<<<<<<<<
const validarDescripcion = (input, error) => {
	input.addEventListener("input", () => {
		if (/^\d{a,z}$/.test(input.value)) {
			input.classList.remove("border-red-500");
			error.classList.add("hidden");
		} else if (input.value < 0) {
			input.value = 0;
		} else if (input.value.length === 0) {
			input.classList.add("border-red-500");
			error.classList.remove("hidden");
		} else {
			input.classList.remove("border-red-500");
			error.classList.add("hidden");
		}
	});
};

validarDescripcion(inputDescripcion, errorTipo);
validarDescripcion(editarDescripcion, errorDescripcion);

// <<<<<<<<<< funcion quitar error <<<<<<<<<<
const quitarErrorYColor = (input, error, error2, input2, error3) => {
	input.classList.remove("border-red-500");
	error.classList.add("hidden");
	error2.classList.add("hidden");
	input2.classList.remove("border-red-500");
	error3.classList.add("hidden");
};
// ///////////////////////////////////////////// FIN SECCION OPERACIONES ///////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<< INICIO SECCION CATEGORIAS <<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<< objeto y variable para tabla categorias<<<<<<<<<<
const categorias = [
	{
		id: uuidv4(),
		nombreCategoria: "Comida",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Servicio",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Salidas",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Educación",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Transporte",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Trabajo",
	},
];

let categoriasGuardadas;

// <<<<<<<<<< función para poner la categoría en la ventana de advertencia (ya capitalizada) <<<<<<<<<<
const CategoriaVentanaModal = (span) =>
	(span.innerHTML = capitalizar(inputEditarCategoria.value));

//<<<<<<<<<< función para añadir eventos a los botones de editar <<<<<<<<<<
const eventosBtnsEditar = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			mostrarSeccion(seccionEditar, seccionCategoria);
			vaciarInputNombre();
			//<<<<<<<<<< funcion para capitalizas la categoría al ponerla en el input de edición <<<<<<<<<<
			inputEditarCategoria.value = capitalizar(
				obtenerId(
					evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
					btnSeleccionado.id.slice(7)
				).nombreCategoria
			);
			// <<<<<<<<<< funcion para capitalizar cuando aparece en la ventana de advertencia <<<<<<<<<<
			btnAdvertenciaAceptarEditar.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(7)}`
			);
			CategoriaVentanaModal(modalCategoria);
		});
	});
};


// <<<<<<<<<< funcion para añadir eventos a los botones de eliminar <<<<<<<<<<
const eventosBtnsEliminar = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			mostrarSeccion(ventanaModalEliminar, seccionCategoria);
			vaciarInputNombre();
			confirmarEliminarCategoria(
				evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
				obtenerId(
					evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
					btnSeleccionado.id.slice(9)
				)
			);
			btnAceptarEliminar.setAttribute(
				"id",
				`confirm-${btnSeleccionado.id.slice(9)}`
			);
			inputEditarCategoria.value = obtenerId(
				evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
				btnSeleccionado.id.slice(9)
			).nombreCategoria;

			CategoriaVentanaModal(modalEliminarCategoria);
		});
	});
};

//<<<<<<<<<< funcion para cargar los select de categorias <<<<<<<<<<
const cargarSelect = (select) => {
	const array = evaluarLocalStorage(
		"categoria",
		categoriasGuardadas,
		categorias
	);
	const selects = document.querySelectorAll(".select-categoria");

	if (array && array.length >= 0) {
		for (select of selects) {
			if (select.classList.contains("filtro")) {
				select.innerHTML = "";
				select.innerHTML = `<option value="todas">Todas</option>`;
			} else {
				select.innerHTML = "";
			}

			for (option of array) {
				const { nombreCategoria } = option;
				const nombreMinuscula = nombreCategoria.toLowerCase();
				select.innerHTML += `
             <option value="${nombreMinuscula}">${nombreCategoria}</option>
             `;
			}
		}
	}
};

cargarSelect(filtroCategoria);

// <<<<<<<<<< función para generar tabla de categorias si hay datos en local storage <<<<<<<<<<
const generarTablaCategorias = (categorias) => {
	const tablaCategorias = document.getElementById("tabla-categorias");
	tablaCategorias.innerHTML = "";

	if (categorias && categorias.length > 0) {
		for (let categoria of categorias) {
			const { id, nombreCategoria } = categoria;
			tablaCategorias.innerHTML += `
            <div class="flex justify-between" id="${id}">
            <p class="p-categorias dark:text-[#f5f5f5]">${nombreCategoria}</p>
            <div class="flex gap-x-4 text-[darkturquoise]">			
            <button class="btn-editar" id="editar-${id}"><img src="imagenes/editar.png" alt="logo-editar" class="w-[40px]"/></button>
            <button class="btn-eliminar" id="eliminar-${id}"><img src="imagenes/eliminar.png" alt="logo-eliminar" class="w-[35px]"/></button>							
            </div>			
            </div>
            `;
		}
		// <<<<<<<<<< llamando a mi nodeList de btns <<<<<<<<<<
		eventosBtnsEditar(document.querySelectorAll(".btn-editar"));
		eventosBtnsEliminar(document.querySelectorAll(".btn-eliminar"));

		cargarSelect(filtroCategoria);
	}
};

generarTablaCategorias(
	evaluarLocalStorage("categoria", categoriasGuardadas, categorias)
);

//<<<<<<<<<< función para identificar categoria en función del id <<<<<<<<<<
const obtenerId = (array, categoriaId) =>
	array.find((elemento) => categoriaId === elemento.id);

//<<<<<<<<<< función para editar el nombre de la categoria <<<<<<<<<<
const editarInput = (array, categoriaId) => {
	const categoriasEditadas = array.map((categoriaAEditar) => {
		if (categoriaAEditar.id === categoriaId) {
			return {
				...categoriaAEditar,
				nombreCategoria: capitalizar(inputEditarCategoria.value),
			};
		} else {
			return categoriaAEditar;
		}
	});
	localStorage.setItem("categoria", JSON.stringify(categoriasEditadas));
	generarTablaCategorias(categoriasEditadas);
};
// <<<<<<<<<< Función para actualizar las operaciones con la categoría editada <<<<<<<<<<
const actualizarOperacionesConCategoriaEditada = (
	operaciones,
	categoriaEditada
) => {
	return operaciones.map((operacion) => {
		if (operacion.categoria === categoriaEditada.nombreCategoria) {
			operacion.categoria = inputEditarCategoria.value;
		}
		return operacion;
	});
};

//<<<<<<<<<<  evento para aceptar la edición de la categoría <<<<<<<<<<
btnAdvertenciaAceptarEditar.addEventListener("click", () => {
	const categoriaEditada = obtenerId(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
		btnAdvertenciaAceptarEditar.id.slice(10)
	);
	const operacionesActualizadas = actualizarOperacionesConCategoriaEditada(
		evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
		categoriaEditada
	);
	localStorage.setItem("operaciones", JSON.stringify(operacionesActualizadas));
	generarTabla(operacionesActualizadas);
	const categoriasActualizadas = evaluarLocalStorage(
		"categoria",
		categoriasGuardadas,
		categorias
	).map((categoria) => {
		if (categoria.id === categoriaEditada.id) {
			return {
				...categoria,
				nombreCategoria: capitalizar(inputEditarCategoria.value),
			};
		}
		return categoria;
	});

	localStorage.setItem("categoria", JSON.stringify(categoriasActualizadas));
	generarTablaCategorias(categoriasActualizadas);
	cancelar(ventanaModalEditar, seccionPrincipal);
});

// <<<<<<<<<< evento para cancelar modal editar <<<<<<<<<<
btnAdvertenciaCancelarEditar.addEventListener("click", () =>
	cancelar(ventanaModalEditar, seccionCategoria)
);
//<<<<<<<<<< funcion para confirmar elimar categoria <<<<<<<<<<
const confirmarEliminarCategoria = (array, categoriaId) => {
	let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	let operacionesAsociadas = operacionesGuardadas.some((operacion) => {
		return operacion.categoria === categoriaId.nombreCategoria;
	});

	if (operacionesAsociadas) {
		cancelar(ventanaModalEliminar, ventanaModalNoEliminar);
	} else {
		const arrayFiltrado = array.filter(
			(categoriaAEliminar) => categoriaAEliminar.id !== categoriaId
		);
		localStorage.setItem("categoria", JSON.stringify(arrayFiltrado));
		generarTablaCategorias(arrayFiltrado);
	}
};

//<<<<<<<<<< evento confirmar elimar categoria <<<<<<<<<<
btnAceptarEliminar.addEventListener("click", () => {
	confirmarEliminarCategoria(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
		btnAceptarEliminar.id.slice(8)
	);
	mostrarSeccion(seccionCategoria, ventanaModalEliminar);
});

//<<<<<<<<<< evento cancelar modal eliminar <<<<<<<<<<
btnAdvertenciaCancelarEliminar.addEventListener("click", () =>
	cancelar(ventanaModalEliminar, seccionCategoria)
);

//<<<<<<<<<< evento aceptar no eliminar categroia si hay operaciones asociadas <<<<<<<<<<
btnAdvertenciaNoEliminar.addEventListener("click", () =>
	cancelar(ventanaModalNoEliminar, seccionPrincipal)
);  

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <<<<<<<<<< funcion para condicion de agrgar categoria repetida <<<<<<<<<<
const noRepetir = () => {
	const pCategorias = document.querySelectorAll(".p-categorias");
	for (p of pCategorias) {
		if (
			p.innerHTML ===
			inputNombre.value.charAt(0).toUpperCase() + inputNombre.value.slice(1)
		)
			inputNombre.value = "";
	}
};

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <<<<<<<<<< evento para agregar y actualizar categorias <<<<<<<<<<
formAgregarCategoria.addEventListener("submit", (e) => {
	e.preventDefault();

	// <<<<<<<<<< Capitalizar el nombre antes de cualquier cosa <<<<<<<<<<
	const nuevaCategoriaNombre = capitalizar(inputNombre.value);

	// <<<<<<<<<< funcion para verificar si el nombre de la categoria ya existe <<<<<<<<<<
	if (categoriaExiste(nuevaCategoriaNombre)) {
		alert("La categoría ya existe, ingresa otra diferente."); // Puedes poner un mensaje en pantalla también
		inputNombre.value = ""; // Limpiar input si querés
		return; // Salir de la función, NO agregar
	}

	//<<<<<<<<<< Si no existe, crear la nueva categoría <<<<<<<<<<
	const nuevaCategoria = {
		id: uuidv4(),
		nombreCategoria: nuevaCategoriaNombre,
	};

	let categoriasGuardadas = JSON.parse(localStorage.getItem("categoria")) || [];
	categoriasGuardadas.push(nuevaCategoria);
	localStorage.setItem("categoria", JSON.stringify(categoriasGuardadas));

	generarTablaCategorias(categoriasGuardadas);
	vaciarInputNombre();
});


formAgregarCategoria.addEventListener("submit", (e) => {
	e.preventDefault();
	noRepetir();

	const nuevaCategoria = {
		id: uuidv4(),
		nombreCategoria: capitalizar(inputNombre.value),
	};

	let categoriasGuardadas = JSON.parse(localStorage.getItem("categoria"));
	categoriasGuardadas.push(nuevaCategoria);
	localStorage.setItem("categoria", JSON.stringify(categoriasGuardadas));

	generarTablaCategorias(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias)
	);

	vaciarInputNombre();
});

// ///////////////////////////////////////////// FIN SECCION CATEGORIAS ///////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<< INICIO SECCION FILTROS <<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<< ocultar filtros <<<<<<<<<<
btnOcultarFiltros.addEventListener("click", () => {
	contenedorFiltros.classList.toggle("hidden");
	if (contenedorFiltros.classList.contains("hidden")) {
		btnOcultarFiltros.innerHTML = "Mostrar filtros";
	} else {
		btnOcultarFiltros.innerHTML = "Ocultar filtros";
	}
});

// <<<<<<<<<< Filtrar las operaciones según TIPO y CATEGORIA  y generar la tabla <<<<<<<<<<
const filtrarPorTipoOCategoria = (
	filtroSeleccionado,
	propiedad,
	operaciones
) => {
	let operacionesFiltradas;

	if (filtroSeleccionado !== "todos" && filtroSeleccionado !== "todas") {
		operacionesFiltradas = operaciones.filter((operacion) => {
			return (
				operacion[propiedad].toLowerCase() === filtroSeleccionado.toLowerCase()
			);
		});
	} else {
		operacionesFiltradas = operaciones;
	}

	return operacionesFiltradas;
};
const filtrarPorFecha = (fecha, operaciones) => {
	let operacionesFiltradas;
	operacionesFiltradas = operaciones.filter((operacion) => {
		const operacionDate = new Date(
			operacion.fecha.split("/").reverse().join("-")
		);
		return operacionDate >= fecha;
	});
	return operacionesFiltradas;
};

// <<<<<<<<<< filtro ordenar por mayor/ menor monto y de a/z , z/a y mas/menos reciente <<<<<<<<<<
const ordenarTabla = (operaciones) => {
	if (filtroOrdenar.value === "menor") {
		return operaciones.sort((a, b) => a.monto - b.monto);
	} else if (filtroOrdenar.value === "mayor") {
		return operaciones.sort((a, b) => b.monto - a.monto);
	} else if (filtroOrdenar.value === "Z/A") {
		return operaciones.sort((a, b) => {
			if (a.descripcion < b.descripcion) return 1;
			if (a.descripcion > b.descripcion) return -1;
			return 0;
		});
	} else if (filtroOrdenar.value === "A/Z") {
		return operaciones.sort((a, b) => {
			if (a.descripcion > b.descripcion) return 1;
			if (a.descripcion < b.descripcion) return -1;
			return 0;
		});
	} else if (filtroOrdenar.value === "mas") {
		return operaciones.sort(
			(a, b) =>
				new Date(b.fecha.split("/").reverse().join("/")) -
				new Date(a.fecha.split("/").reverse().join("/"))
		);
	} else if (filtroOrdenar.value === "menos") {
		return operaciones.sort(
			(a, b) =>
				new Date(a.fecha.split("/").reverse().join("/")) -
				new Date(b.fecha.split("/").reverse().join("/"))
		);
	}
	return operaciones;
};

// <<<<<<<<<< filtros acumulativos <<<<<<<<<<
const aplicarFiltrosAcumulativamente = () => {
	let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
	let operacionesFiltradas = [...operacionesGuardadas];

	operacionesFiltradas = filtrarPorTipoOCategoria(
		filtroTipo.value,
		"tipo",
		operacionesFiltradas
	);
	operacionesFiltradas = filtrarPorTipoOCategoria(
		filtroCategoria.value,
		"categoria",
		operacionesFiltradas
	);

	let fechaFiltro = "";
	if (inputFiltroFecha.value) {
		fechaFiltro = new Date(inputFiltroFecha.value);
	}

	operacionesFiltradas = filtrarPorFecha(fechaFiltro, operacionesFiltradas);

	operacionesFiltradas = ordenarTabla(operacionesFiltradas);

	if (operacionesFiltradas.length > 0) {
		generarTabla(operacionesFiltradas);
		contenedorTablaOperaciones.classList.remove("hidden");
		contenedorImgOperaciones.classList.add("hidden");
	} else {
		contenedorTablaOperaciones.classList.add("hidden");
		contenedorImgOperaciones.classList.remove("hidden");
	}
};

filtroTipo.addEventListener("change", aplicarFiltrosAcumulativamente);
filtroCategoria.addEventListener("change", aplicarFiltrosAcumulativamente);
filtroOrdenar.addEventListener("change", aplicarFiltrosAcumulativamente);
inputFiltroFecha.addEventListener("change", aplicarFiltrosAcumulativamente);

// ///////////////////////////////////////////// FIN SECCION FILTROS ///////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<<INICIO FORMATEAR FECHAS <<<<<<<<<<<<<<<<<<<<<<<

let fechaFormateada;

// <<<<<<<<<< estabalece fecha actual formateada por defecto al input <<<<<<<<<<
let fechaActual = new Date();
let fechaActualFormateada = new Date(
	fechaActual.getTime() - fechaActual.getTimezoneOffset() * 60000
)
	.toISOString()
	.split("T")[0];
inputFecha.value = fechaActualFormateada;
if (inputFecha.value === fechaActualFormateada) {
	fechaFormateada = fechaActualFormateada;
}
// <<<<<<<<<< formatea fechas seleccionadas en el input <<<<<<<<<<
inputFecha.addEventListener("change", () => {
	let fechaSeleccionada = new Date(inputFecha.value);
	fechaFormateada = fechaSeleccionada.toISOString().split("T")[0];
});

// ///////////////////////////////////////////// FIN FORMATEAR FECHAS ///////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <<<<<<<<<<<<<<<<<<<<<<< INICIO SECCION REPORTES <<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<< aparecer tablas de reportes cuando hay operaciones cargadas <<<<<<<<<<
const aparecerReportes = () => {
	const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	if (operacionesGuardadas && operacionesGuardadas.length > 0) {
		tablasReportes.classList.remove("hidden");
		containerImgReportes.classList.add("hidden");
	} else {
		tablasReportes.classList.add("hidden");
		containerImgReportes.classList.remove("hidden");
	}
};

aparecerReportes();

// <<<<<<<<<< funcion para obtener las ganacias o gastos por categorias <<<<<<<<<<
const obtenerGananciasOGastosPorCategoria = (tipo) => {
	const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	const gananciasOGastosPorCategoria = operacionesGuardadas.reduce(
		(total, operacion) => {
			if (operacion.tipo === tipo) {
				total[operacion.categoria] = total[operacion.categoria] || 0;
				total[operacion.categoria] += parseInt(operacion.monto);
			} else {
				total[operacion.categoria] = total[operacion.categoria] || 0;
			}

			return total;
		},
		{}
	);
	return gananciasOGastosPorCategoria;
};

// <<<<<<<<<< funcion para obtener las ganacias o gastos por mes <<<<<<<<<<
const obtenerGananciasOGastosPorMes = (tipo) => {
	const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	const gananciasOGastosPorMes = operacionesGuardadas.reduce(
		(total, operacion) => {
			if (operacion.tipo === tipo) {
				const fechaDividida = operacion.fecha.split("/");
				const mes = fechaDividida[1];
				const año = fechaDividida[2];

				const periodo = `${mes}/${año}`;
				total[periodo] = total[periodo] || 0;
				total[periodo] += parseInt(operacion.monto);
			} else {
				const fechaDividida = operacion.fecha.split("/");
				const mes = fechaDividida[1];
				const año = fechaDividida[2];

				const periodo = `${mes}/${año}`;
				total[periodo] = total[periodo] || 0;
			}
			return total;
		},
		{}
	);
	return gananciasOGastosPorMes;
};

// <<<<<<<<<< funcion para obtener la categoria o el mes de mayor ganancia o mayor gasto o mayor balance <<<<<<<<<<
const obtenerMayorPropiedad = (tipo, propiedad) => {
	let mayor;
	for (let propiedad in tipo) {
		if (!mayor) {
			mayor = propiedad;
		} else if (tipo[propiedad] > tipo[mayor]) {
			mayor = propiedad;
		}
	}
	return mayor;
};

// <<<<<<<<<< funcion para obtener el balance de la categoria o del fecha <<<<<<<<<<
const obtenerBalancePorPropiedad = (propiedad, ganancias, gastos) => {
	const balance = {};

	for (let propiedad in ganancias) {
		const ganancia = ganancias[propiedad];
		const gasto = gastos[propiedad] || 0;
		balance[propiedad] = Math.abs(ganancia - gasto);
	}
	for (let propiedad in gastos) {
		if (!ganancias[propiedad]) {
			balance[propiedad] = gastos[propiedad];
		}
	}
	return balance;
};

// <<<<<<<<<< funcion para que aparezca el resumen en reportes <<<<<<<<<<
const actualizarResumen = () => {
	const textoBalance =
		obtenerGananciasOGastosPorCategoria("ganancia")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("ganancia"),
				"categoria"
			)
		] >
		obtenerGananciasOGastosPorCategoria("gasto")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("gasto"),
				"categoria"
			)
		]
			? `+$${
					obtenerBalancePorPropiedad(
						"categoria",
						obtenerGananciasOGastosPorCategoria("ganancia"),
						obtenerGananciasOGastosPorCategoria("gasto")
					)[
						obtenerMayorPropiedad(
							obtenerBalancePorPropiedad(
								"categoria",
								obtenerGananciasOGastosPorCategoria("ganancia"),
								obtenerGananciasOGastosPorCategoria("gasto")
							),
							"categoria"
						)
					]
			  }`
			: `-$${
					obtenerBalancePorPropiedad(
						"categoria",
						obtenerGananciasOGastosPorCategoria("ganancia"),
						obtenerGananciasOGastosPorCategoria("gasto")
					)[
						obtenerMayorPropiedad(
							obtenerBalancePorPropiedad(
								"categoria",
								obtenerGananciasOGastosPorCategoria("ganancia"),
								obtenerGananciasOGastosPorCategoria("gasto")
							),
							"categoria"
						)
					]
			  }`;
	const colorBalance =
		obtenerGananciasOGastosPorCategoria("ganancia")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("ganancia"),
				"categoria"
			)
		] >
		obtenerGananciasOGastosPorCategoria("gasto")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("gasto"),
				"categoria"
			)
		]
			? "text-green-500"
			: "text-red-500";

	containerCategoriaMayorGanancia.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorCategoria("ganancia"),
		"categoria"
	);

	containerMayorGanaciaCategoria.innerText = `+$${
		obtenerGananciasOGastosPorCategoria("ganancia")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("ganancia"),
				"categoria"
			)
		]
	}`;

	containerMayorGanaciaCategoria.classList.add("text-green-500");
	containerCategoriaMayorGasto.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorCategoria("gasto"),
		"categoria"
	);
	containerMayorGastoCategoria.innerText = `-$${
		obtenerGananciasOGastosPorCategoria("gasto")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("gasto"),
				"categoria"
			)
		]
	}`;
	obtenerGananciasOGastosPorCategoria("gasto")[
		obtenerMayorPropiedad(
			obtenerGananciasOGastosPorCategoria("gasto"),
			"categoria"
		)
	];
	containerMayorGastoCategoria.classList.add("text-red-500");
	containerCategoriaMayorBalance.innerText = obtenerMayorPropiedad(
		obtenerBalancePorPropiedad(
			"categoria",
			obtenerGananciasOGastosPorCategoria("ganancia"),
			obtenerGananciasOGastosPorCategoria("gasto")
		),
		"categoria"
	);
	containerMayorBalanceCategoria.innerText = textoBalance;
	containerMayorBalanceCategoria.classList.add(colorBalance);
	containerMesMayorGanacia.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorMes("ganancia"),
		"fecha"
	);
	containerMayorGananciaMes.innerText = `+$${
		obtenerGananciasOGastosPorMes("ganancia")[
			obtenerMayorPropiedad(obtenerGananciasOGastosPorMes("ganancia"), "fecha")
		]
	}`;
	containerMayorGananciaMes.classList.add("text-green-500");
	containerfechaMayorGasto.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorMes("gasto"),
		"fecha"
	);
	containerMayorGastoMes.innerText = `-$${
		obtenerGananciasOGastosPorMes("gasto")[
			obtenerMayorPropiedad(obtenerGananciasOGastosPorMes("gasto"), "fecha")
		]
	}`;
	containerMayorGastoMes.classList.add("text-red-500");
};
actualizarResumen();

const actualizarTotalesPorPropiedad = (
	tabla,
	propiedad,
	ganancias,
	gastos,
	balance
) => {
	tabla.innerHTML = "";
	const todasPropiedades = new Set([
		...Object.keys(ganancias),
		...Object.keys(gastos),
	]);

	for (let propiedad of todasPropiedades) {
		const ganancia = ganancias[propiedad] || 0;
		const gasto = gastos[propiedad] || 0;
		const balancePropiedad = balance[propiedad] || 0;

		const textoGanancia = ganancia !== 0 ? `+$${ganancia}` : "$0";
		const textoGasto = gasto !== 0 ? `-$${gasto}` : "$0";

		const textoBalance =
			balancePropiedad !== 0
				? ganancia > gasto
					? `+$${balancePropiedad}`
					: `-$${balancePropiedad}`
				: "$0";
		const colorBalance =
			balancePropiedad !== 0
				? ganancia > gasto
					? "text-green-500"
					: "text-red-700"
				: "text-green-500";
		tabla.innerHTML += `
            <div class="flex">            
                <div class="w-[25%] sm:text-left">${propiedad}</div>
                <div class="w-[25%] text-center text-green-700 border-l border-l-teal-600 dark:border-l-gray-300 md:border-none">${textoGanancia}</div>
                <div class="w-[25%] text-center text-red-700 border-l border-l-teal-600 dark:border-l-gray-300 md:border-none">${textoGasto}</div>
                <div class="w-[25%] text-center ${colorBalance}  border-l border-l-teal-600 dark:border-l-gray-300 md:border-none"">${textoBalance}</div>
            </div>         
        `;
	}
};

actualizarTotalesPorPropiedad(
	cuerpoTablaTotalesCategorias,
	"categoria",
	obtenerGananciasOGastosPorCategoria("ganancia"),
	obtenerGananciasOGastosPorCategoria("gasto"),
	obtenerBalancePorPropiedad(
		"categoria",
		obtenerGananciasOGastosPorCategoria("ganancia"),
		obtenerGananciasOGastosPorCategoria("gasto")
	)
);
actualizarTotalesPorPropiedad(
	cuerpoTablaTotalesMes,
	"fecha",
	obtenerGananciasOGastosPorMes("ganancia"),
	obtenerGananciasOGastosPorMes("gasto"),
	obtenerBalancePorPropiedad(
		"fecha",
		obtenerGananciasOGastosPorMes("ganancia"),
		obtenerGananciasOGastosPorMes("gasto")
	)
);
