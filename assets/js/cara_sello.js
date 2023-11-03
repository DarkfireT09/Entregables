function jugar(){
    let nombre = prompt('Como te llamas: ');
    let dinero = parseInt(prompt('Cuanto dinero vas a recargar: '));
    let seguir;

    while (true){
        if (seguir == 'no' || dinero <= 1)
        {
            return dinero;
        }
        let apuesta = parseInt(prompt('Cuanto dinero vas a apostar: ')); 
        dinero = dinero - apuesta;  
        let des = prompt('¿cara o sello?: ');

        let res = lanzar();

        dinero = (res==des)
        ? ganaste(dinero, apuesta)
        : perdiste(dinero, apuesta);

        seguir = prompt(`Tu dinero actual es ${dinero}, ¿desea seguir?, si o no: `);
    }    
}

function lanzar(){
    return (Math.random() <= 0.5) ? 'cara' : 'sello' ;
}

function ganaste(dinero,apuesta){
    console.log('Ganaste');
    return dinero + apuesta*2;

}

function perdiste(dinero,apuesta){
    console.log('Perdiste');
    return dinero + apuesta/2;
}

console.log('Tu dinero final es: ' + jugar())