//////////////////////////////////OBJETO WINDOW//////////////////////////////////////////
//Objeto de mas grande jerarquia en js y todo depende de el.
//Hereda las propiedades de EventTarget

//////////////////////////////////Propiedades y metodos//////////////////////////////

//abrir y cerrar ventanas = .open() / .close()

//let youtubeURL = "https://youtube.com"

//let ventana = window.open(youtubeURL);

//ventana.close();

// .closed()  verifica si la ventana referenciada esta cerrada o no

//ventana.closed();

// .stop() detiene la ejecucion de la pagina, osea hace que deje de cargar

// .alert("rancio") ya la conocemos

// .print() literalmente para que podamos imprimir la pagina(vemos como se configura mas adelante)

// .prompt() nos pide un dato y siempre nos duelve ese dato en forma de string, por mas que sea un numero

// .confirm() una ventana para responder si o no y si es si, devuelve true, y si es no, devuelve false

//confirm("sos trolo?");


///////////////////////// SCREEN (adelante se ve mejor) /////////////////////
// sirve para trabajar con el objeto screen y acceder a sus propiedades

//const screen = window.screen;

//console.log(screen)
//document.write(screen.availWidth);

// window.screenLeft => mide la distancia entre el borde izquierdo de la ventana y el borde izquierdo del monitor
// window.screenTop => mida la distancia entre el borde superior de la ventana y el borde superior del monitor

//const screenLeft = window.screenLeft;
//const screenTop = window.screenTop;

//document.write(`Left: ${screenLeft}<br>
//                Top: ${screenTop}
//`);

//son propiedades de solo lectura.

// window.scrollY => mide la distancia que se scrolleo en el eje X en toda la ventana
// window.scrollX => mide la distancia que se scrolleo en el eje Y en toda la ventana
// window.scroll(0,400) =>  nos direcciona a los pixeles en el X e Y que le pidamos  y es absoluto, no relativo


// window.resizeBy() => cambia el tamaño de la ventana actual a una cantidad especifica
// window.resizeTo() => redimensiona dinamicamente la ventana


// window.moveBy() => mueve la ventana actual a una cantidad especifica (casi ni se usan)
// window.moveTo() => mueve dinamicamente la ventana (casi ni se usan)


//Obejetos barprop : verificamos si una propiedad de estas es visible y si es visible devuelve true y si no es visible devuelve false (casi ni se usa)
// locationbar, menubar, personalbar, scrollbars, statusbar, toolbar.




/////////////////////////////////////////////LOCATION///////////////////////////////////////

//window.location.href; Nos muestra la localizacion completa 
                                                                    /*
const href = window.location.href;

document.write(href);

                                                                    
//window.location.hostname; nos devuele el nombre del dominio del sitio web

const href = window.location.hostname;

document.write(href);
                                                                     
//window.location.pathname; nos muestra donde estamos desde el origen

const href = window.location.pathname;

document.write(href);
                                                                         
//window.location.protocol; nos muestra el protocolo (si es http no es seguro y si es https es seguro)

const href = window.location.protocol;

document.write(href);
                                                                   
//window.location.assign; Crea un nuevo documento que le asignemos

const href = window.location.assign("https://youtube.com");

document.write(href);
                                                                      */


///////////////////////////////////////////PROBLEMA A////////////////////////////////////////////////
     
                                                                 /*
let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

respuesta = confirm(`El alto es: ${alto}, y el ancho es: ${ancho}. Desea realizar la compra?`);

if (respuesta) {
    alert("Compra realizada exitosamente");
} else {
    alert("Compra cancelada");
}
   
                                                                 */


//////////////////////////////////////////PROBLEMA B///////////////////////////////////////////////

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocol: ${protocol}<br>`;
html += `Hostname: ${hostname}<br>`;
html += `Pathname: ${pathname}<br>`;
html += `Href: ${href}`;

document.write(html);
