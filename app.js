let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//Conexion entre js y html es document, h1 es el encabezado, atribuyendo a la variable titulo
//No es un texto es un objeto


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

//Aqui se declara la funcion
function verificarIntento () { 
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    /*console.log (typeof(numeroDeUsuario));
    console.log (numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto == numeroDeUsuario);
    */
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //El Usuario no acertó 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p','El numero secreto es menor')
        } else {
            asignarTextoElemento ('p', 'El numero secreto es mayor')
        }
        intentos++;
        console.log(intentos);
        limpiarCaja();
    }
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //Si el numero generado esta incluido en la lista hacemos algo si no pues se mantiene
    //Significa que nos va a devolver un numero aleatorio
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //verificar que numeros estan sorteados
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya han sido sorteados todos los numeros')

    } else {
    //Vericar si los numeros estan en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else { 
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesiniciales() {
    asignarTextoElemento('h1', 'Juego del numero de secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar juego
    limpiarCaja();
    //indicar mensaje intervalo numeros
    //Generar numero aletatorio
    //Inicializar numero de intetos
    condicionesiniciales();
    //Deshabilitar el boton de reinicio}
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesiniciales();
