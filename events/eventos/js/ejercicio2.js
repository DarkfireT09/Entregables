/*const form=document.getElementById('form')
const input=document.getElementById('input')
const button=document.getElementById('button')*/
//enviarlo como parametro de la funcion
/*input.addEventListener('keyup',(e)=>{
	//console.log(input.value)
	//console.log(event);//no funciona en todos los navegadores
	console.log(e.target.attributes[0].name);
})*/

/*window.addEventListener('click',(e)=>{
	//console.log(e.key) // mostrar letra que se pulsa

})*/
/*button.addEventListener('click',(e)=>{
	console.log(e.target)
})*/

/*const gallery=document.getElementById("gallery")

gallery.addEventListener('click',(e)=>{
	console.log(e.target.textContent);
	e.target.classList.add('red');

})*/
const form=document.getElementById('form')
const input=document.getElementById('input')
const button=document.getElementById('button')
const link=document.getElementById("link")
link.addEventListener('click',(e)=>{
	e.preventDefault()
	button.click()
})
form.addEventListener('submit',(e)=>{
	// decirle al evento que no se ejecute por defecto
	e.preventDefault()
	console.log("Se envio la Información")
// se obliga a que el evento suceda
	
})

//form.submit()
button.addEventListener('click',()=>{
	// decirle al evento que no se ejecute por defecto
	input.value="Envio la Información"
})
//button.click();