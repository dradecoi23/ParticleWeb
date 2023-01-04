// PRELOADER PAGE HOME 
window.addEventListener("load", function(){
    document.getElementById("loading").classList.toggle("loader2")
})

// TYPETEXT CONFIGURATION
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 35, // Velocidad en mlisegundos para poner una letra,
	startDelay: 3100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

  });

  var typed2 = new Typed('#typed2', {
    stringsElement: '#typed-strings2',
    typeSpeed: 35, // Velocidad en mlisegundos para poner una letra,
	startDelay: 3100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

  });















//otros metodos

// var typed = new Typed('.type', {
//     strings: ['prueba', ''],
//     typeSpeed: 0,
//     backSpeed:0,
//     loop: true,
//     loopCount: 2,
//     showCursor: true,
//     cursorChar: '_ ',
//     startDelay: 300,
    
// });

// var typed2 = new Typed('.type2', {
//     strings: ['prueba2', ''],
//     typeSpeed: 60,
//     backSpeed:60,
//     loop: true,
//     loopCount: false,
//     showCursor: true,
//     cursorChar: '_ ',
// });

// var typed3 = new Typed('.type3', {
//     strings: ['prueba3', ''],
//     typeSpeed: 60,
//     backSpeed:60,
//     loop: true,
//     loopCount: false,
//     showCursor: true,
//     cursorChar: '_ ',
// });

// var typed4 = new Typed('.type4', {
//     strings: ['prueba4', ''],
//     typeSpeed: 60,
//     backSpeed:60,
//     loop: true,
//     loopCount: 3,
//     showCursor: true,
//     cursorChar: '_ ',
// });

// var typed5 = new Typed('.type5', {
//     strings: ['prueba5', ''],
//     typeSpeed: 60,
//     backSpeed:60,
//     loop: true,
//     loopCount: false,
//     showCursor: true,
//     cursorChar: '_ ',
// });