var siguiente = false;
var contador = 0;
var terminado = false;

let tiempo = 180; // 3 minutos en segundos
let intervalo;
let temporizadorIniciado = false; // False = tempo no iniciado

//Click en el botón
function turno(boton) {

    if (!temporizadorIniciado) {
        iniciarTemporizador(); // Iniciar el temporizador al primer clic
    }

    boton.disabled = true; //Disabled cuando click

    var imagen = cambiarPersonaje();

    //Cambiar imagen dependiendo del select-imagen
    if (!siguiente) {

        boton.value = imagen.nombreImg1;

        verificarCeldasValue();

        boton.style.cssText = `
                                background-image: url("${imagen.img1}");
                                background-repeat: no-repeat;
                                background-position: 50%;
                            `;

    } else {

        boton.value = imagen.nombreImg2;

        verificarCeldasValue();

        console.log(imagen.nombreImg2);
        boton.style.cssText = `
                                background-image: url("${imagen.img2}");
                                background-repeat: no-repeat;
                                background-position: 50%;
                            `;
    }

    var imgSig = document.getElementById("img-sig");

    var turnoTag = document.getElementById("turno");

    //Cambiar imagen del turno sig - depende del select-img
    if (!siguiente) {
        turnoTag.innerHTML = "Turno Siguiente: "
        imgSig.src = imagen.img2;

    } else {
        turnoTag.innerHTML = "Turno Siguiente: "
        imgSig.src = imagen.img1;
    }

    siguiente = !siguiente;

    boton.style.cursor = "default";

    verificar();

}

//Cambiar imagen ya puesta - depende del select-img
function verificarCeldasValue() {

    var imagen = cambiarPersonaje();

    var botones = document.querySelectorAll("input[type='button']");

    for (let i = 0; i < botones.length; i++) {

        var botonActual = botones[i];

        //console.log(botones[i]);
        if (botonActual.value === "Freddy" || botonActual.value === "Hachi" || botonActual.value === "Minun") {
            botonActual.value = imagen.nombreImg1;
        }

        if (botonActual.value === "Bonnie" || botonActual.value === "Nana" || botonActual.value === "Plusle") {
            botonActual.value = imagen.nombreImg2;
        }
    }
}

var estilo = "";

//Verificar si se ganó la partida o no

function verificar() {
    var botones = document.querySelectorAll("input[type='button']");

    var selectDis = document.getElementById("imagenes");

    var imgSig = document.getElementById("img-sig");

    estilo = document.createElement("style");

    var rootStyles = getComputedStyle(document.documentElement);

    var valorGana = rootStyles.getPropertyValue('--gana').trim();

    //Despues de 9 clicks, se bloquea la partida
    if (++contador == 9) {
        document.getElementById("turno").innerHTML = `Empate`;
        bloquear();
        var imgSig = document.getElementById("img-sig");
        imgSig.src = "";
        detenerTemporizador();
        terminado = true;

    }

    //horizontales
    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[0].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `tr:nth-child(1)::after {
                                content: "";
                                position: absolute;
                                top: 50%;
                                right: 5px;
                                left: 0;
                                height: 5px;
                                background-color: ${valorGana};
                                z-index: 1;
                                pointer-events: none;
                            }`;
        cursorDefaultGana();
    }

    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[3].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        imgSig.src = "";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `tr:nth-child(2)::after {
                                content: "";
                                position: absolute;
                                top: 50%;
                                right: 5px;
                                left: 0;
                                height: 5px;
                                background-color: ${valorGana};
                                z-index: 1;
                                pointer-events: none;
                            }`;
        cursorDefaultGana();
    }

    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[6].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        imgSig.src = "";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `tr:nth-child(3)::after {
                                content: "";
                                position: absolute;
                                top: 50%;
                                right: 5px;
                                left: 0;
                                height: 5px;
                                background-color: ${valorGana};
                                z-index: 1;
                                pointer-events: none;
                            }`;
        cursorDefaultGana();
    }

    //verticales
    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[0].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        imgSig.src = "";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `td:nth-child(1)::after {
                                content: "";
                                position: absolute;
                                top: -1px;
                                bottom: -1px;
                                left: 50%;
                                width: 5px;
                                background-color: ${valorGana};
                                z-index: 1;
                                pointer-events: none;

                            }`;
        cursorDefaultGana();
    }

    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[1].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        imgSig.src = "";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `td:nth-child(2)::after {
                                content: "";
                                position: absolute;
                                top: -1px;
                                bottom: -1px;
                                left: 50%;
                                width: 5px;
                                background-color: ${valorGana};
                                z-index: 1;
                                pointer-events: none;
                            
                            }`;
        cursorDefaultGana();
    }

    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[2].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        imgSig.src = "";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `td:nth-child(3)::after {
                                content: "";
                                position: absolute;
                                top: -1px;
                                bottom: -1px;
                                left: 50%;
                                width: 5px;
                                background-color: ${valorGana};
                                z-index: 1;
                                pointer-events: none;
                            
                            }`;
        cursorDefaultGana();
    }

    //Diagonales
    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[0].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        imgSig.src = "";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `table::after {
                                content: "";
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: calc(100% * 1.4);
                                height: calc(100% * 1.4);
                                border-top: 5px solid ${valorGana};
                                transform: rotate(45deg);
                                transform-origin: top left;
                                z-index: 1;
                                pointer-events: none;
                            }`;
        cursorDefaultGana();
    }

    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[2].value}`;
        selectDis.disabled = true;
        selectDis.style.cursor = "default";
        imgSig.src = "";
        bloquear();
        terminado = true;
        imgSig.src = "";
        clearInterval(intervalo);
        estilo.textContent = `table::before {
                                content: "";
                                position: absolute;
                                top: 0;
                                right: 0;
                                width: calc(100% * 1.4);
                                height: calc(100% * 1.4);
                                border-top: 5px solid ${valorGana};
                                transform: rotate(-45deg);
                                transform-origin: top right;
                                z-index: 1;
                                pointer-events: none;
                            }`;
        cursorDefaultGana();

    }

    document.head.appendChild(estilo); //meterlo al css

}

//Bloquear toda la tabla
function bloquear() {
    var botones = document.querySelectorAll("input[type='button']");
    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }
}

//Seleccionar imagen con la que se juega el tic tac toe - select
function cambiarPersonaje() {

    var imagenes = document.getElementById("imagenes");

    var imagenSeleccionada = imagenes.value;

    var imagentxt = { img1: "", img2: "", nombreImg1: "", nombreImg2: "" };

    switch (imagenSeleccionada) {
        case "fnaf":
            imagentxt.img1 = "./img/freddy.png"
            imagentxt.img2 = "./img/bonnie.png"
            imagentxt.nombreImg1 = "Freddy";
            imagentxt.nombreImg2 = "Bonnie";
            break;

        case "nana":
            imagentxt.img1 = "./img/hachi.png"
            imagentxt.img2 = "./img/nana.png"
            imagentxt.nombreImg1 = "Hachi";
            imagentxt.nombreImg2 = "Nana";
            break;

        case "pkm":
            imagentxt.img1 = "./img/minun.png"
            imagentxt.img2 = "./img/plusle.png"
            imagentxt.nombreImg1 = "Minun";
            imagentxt.nombreImg2 = "Plusle";
            break;

        default:
            imagentxt.img1 = "./img/freddy.png"
            imagentxt.img2 = "./img/bonnie.png"
            imagentxt.nombreImg1 = "Freddy";
            imagentxt.nombreImg2 = "Bonnie";
            break;
    }

    //Cambiar la imagen aunque ya haya imagenes puestas
    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => {
        const currentBackgroundImage = window.getComputedStyle(celda).backgroundImage;

        // Si la celda tiene img1 como fondo, actualízala con el nuevo img1
        if (currentBackgroundImage.includes("freddy") || currentBackgroundImage.includes("hachi") || currentBackgroundImage.includes("minun")) {
            celda.style.backgroundImage = `url(${imagentxt.img1})`;
        }

        // Si la celda tiene img2 como fondo, actualízala con el nuevo img2
        if (currentBackgroundImage.includes("bonnie") || currentBackgroundImage.includes("nana") || currentBackgroundImage.includes("plusle")) {
            celda.style.backgroundImage = `url(${imagentxt.img2})`;
        }
    });

    // Si la celda tiene img le cambia el value
    var imgSig = document.getElementById("img-sig");

    if (imgSig.src.endsWith("freddy.png") || imgSig.src.endsWith("hachi.png") || imgSig.src.endsWith("minun.png")) {
        imgSig.src = imagentxt.img1;
    }

    if (imgSig.src.endsWith("bonnie.png") || imgSig.src.endsWith("nana.png") || imgSig.src.endsWith("plusle.png")) {
        imgSig.src = imagentxt.img2;
    }

    return imagentxt;

}

//Cambiar color del tablero en base a la selección de color
function colorImpar() {
    var colorImpar = document.getElementById("color-impar");

    colorImpar.addEventListener("click", actualizarColImpar(colorImpar));
    colorImpar.addEventListener("input", actualizarColImpar(colorImpar));

}

function colorPar() {
    var colorPar = document.getElementById("color-par");

    colorPar.addEventListener("click", actualizarColPar(colorPar));
    colorPar.addEventListener("input", actualizarColPar(colorPar));

}

function actualizarColPar(colorPar) {
    var color = colorPar.value;
    par(color);
}

function actualizarColImpar(colorImpar) {
    var color = colorImpar.value;
    impar(color);
}

//Cambiar color en el css de las celdas del tablero impar
function impar(color) {
    document.documentElement.style.setProperty('--impar', color);
}

//Cambiar color en el css de las celdas del tablero par
function par(color) {
    document.documentElement.style.setProperty('--par', color);
}

//Cambiar linea de ganador
function cambiarColorGanador() {
    var colorGanador = document.getElementById("color-ganador");
    colorGanador.addEventListener("click", actualizarColGanador(colorGanador));
    colorGanador.addEventListener("input", actualizarColGanador(colorGanador));
    if (terminado) {
        verificar();
    }
}

function actualizarColGanador(colorGanador) {
    var color = colorGanador.value;
    col(color);

}

function col(color) {
    document.documentElement.style.setProperty('--gana', color);
}

//--Temporizador--

function actualizarTemporizador() {
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    // Formatear el tiempo con dos dígitos
    if (segundos < 10) segundos = '0' + segundos;
    if (minutos < 10) minutos = '0' + minutos;

    // Mostrar el tiempo actualizado
    document.getElementById('temporizador').textContent = `${minutos}:${segundos}`;
}

function iniciarTemporizador() {
    var turno = document.getElementById("turno");

    if (!temporizadorIniciado) {
        // Iniciar el temporizador
        intervalo = setInterval(function () {
            tiempo--;
            actualizarTemporizador();

            if (tiempo <= 0) {
                clearInterval(intervalo); // Detener el temporizador
                turno.textContent = "NADIE GANA";
                bloquear();
                imagenNadieGana();
            }
        }, 1000);

        temporizadorIniciado = true; // Marcar que el temporizador ha comenzado
    }
}

//Si hay empate, se ponen X en las imagenes puestas
function imagenNadieGana() {
    var selectDis = document.getElementById("imagenes");
    selectDis.disabled = true;
    selectDis.style.cursor = "default";

    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => {
        celda.style.cursor = "default";
        const currentBackgroundImage = window.getComputedStyle(celda).backgroundImage;

        // Si la celda tiene img1 como fondo, actualízala con el nuevo img1
        if (currentBackgroundImage.includes("freddy") || currentBackgroundImage.includes("hachi") || currentBackgroundImage.includes("minun")) {
            celda.style.backgroundImage = `url(./img/x.png)`;
        }

        // Si la celda tiene img2 como fondo, actualízala con el nuevo img2
        if (currentBackgroundImage.includes("bonnie") || currentBackgroundImage.includes("nana") || currentBackgroundImage.includes("plusle")) {
            celda.style.backgroundImage = `url(./img/x.png)`;
        }
    });
}


//Boton reiniciar
function limpiarTodo() {

    var selectDis = document.getElementById("imagenes");
    selectDis.style.cursor = "pointer";

    terminado = false;

    contador = 0;

    detenerTemporizador();

    borrarImg();

    quitarDisable();

    quitarLineasGana();

    turnoVacio();

    cursorPointerReiniciar();

}

//Quitar estilos y reiniciar todo
function cursorPointerReiniciar() {
    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => {
        celda.style.cursor = "pointer";
    });
}

function cursorDefaultGana() {
    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => {
        celda.style.cursor = "default";
    });
}

function turnoVacio() {
    var turno = document.getElementById("turno");
    turno.textContent = "Turno: "

    var imgSig = document.getElementById("img-sig");
    imgSig.src = "";
}

function detenerTemporizador() {
    if (temporizadorIniciado) { // Solo detener si está en marcha
        clearInterval(intervalo); // Detener el temporizador
        temporizadorIniciado = false; // Marcar que el temporizador ha sido detenido
    }
    var textoTemp = document.getElementById("temporizador");
    textoTemp.textContent = "03:00"
    tiempo = 180;

}

function quitarLineasGana() {

    var rootStyles = getComputedStyle(document.documentElement);

    var valorGana = rootStyles.getPropertyValue('--gana').trim();

    col(valorGana);

    var estilos = document.querySelectorAll('head style');

    estilos.forEach((estiloo, index) => {
        if (index !== 0) {
            estiloo.remove();
        }

    });
}

function quitarDisable() {
    var selectDis = document.getElementById("imagenes");

    var botones = document.querySelectorAll("input[type='button']");

    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = false;
        botones[i].value = "";
    }

    selectDis.disabled = false;

}

function borrarImg() {

    var celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => {
        var currentBackgroundImage = window.getComputedStyle(celda).backgroundImage;

        if (currentBackgroundImage.includes("x") || currentBackgroundImage.includes("freddy") || currentBackgroundImage.includes("hachi") ||
            currentBackgroundImage.includes("minun") || currentBackgroundImage.includes("bonnie") || currentBackgroundImage.includes("nana") ||
            currentBackgroundImage.includes("plusle")) {
            celda.style.backgroundImage = "none";
        }

        celda.disabled = false;
    });

}