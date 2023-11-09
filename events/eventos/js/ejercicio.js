/* evento básico
const button=document.getElementById("button")
button.addEventListener('click',() => {
	console.log('CLICK');
})*/

/*Eventos de mouse
click pulsar el boton izquierdo del mouse
dbclick:pulsar dos veces seguidas el boton izquierdo del mouse
mouseenter: entrar a la zona del evento pasar el mouse.
mouseleave: salir de a zona del evento.
mousedown: pulsar sin sltar el boton del mouse
mouseup: pulsamos y se suelta el boton del mouse
mousemove:al mover el mouse

Eventos de teclado

keydown:
keyup:
keypress:*/
/*dblclick
const button=document.getElementById("button")
button.addEventListener('dblclick',()=>{
	console.log('Doble Click');
})*/

/*const button=document.getElementById("button")
const caja=document.getElementById("caja")*/

/*caja.addEventListener('mouseenter',()=>{
	caja.style.background="green"

})
caja.addEventListener('mouseleave',()=>{
	caja.style.background="red"

})*/

const button=document.getElementById("button")
const caja=document.getElementById("caja")
const input=document.getElementById("input")

/*caja.addEventListener('mouseenter',()=>{
	caja.classList.replace('red','green')
})
caja.addEventListener('mouseleave',()=>{
	//caja.classList.remove('green')
	//caja.classList.add('red')
	caja.classList.replace('green','red')
	
})*/
/*caja.addEventListener('mousedown',()=>{
	console.log("Usted pulso en la caja");
})

caja.addEventListener('mouseup',()=>{
	console.log("Usted ya no esta pulsando la caja");
})*/

/*caja.addEventListener('mousemove',()=>{
	console.log("Usted esta moviendo el mouse");
})*/

/* eventos de teclado*/
/*input.addEventListener('keydown',()=>{
	console.log("Usted esta pulsando una letra");
})*/

input.addEventListener('keyup',()=>{
	console.log("Usted solto la tecla");
})

input.addEventListener('keypress',()=>{
	console.log("Usted esta pulsando tecla");
	
})
