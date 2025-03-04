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