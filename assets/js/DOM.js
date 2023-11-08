const animal = {
    nombre: "Carlos",
    tipo: "Chinchilla tactica",
    edad: "4",

    comer(){
        console.log(`${this.nombre} la ${this.tipo} esta comiendo`)
    },

    reproducir(){
        console.log(`${this.nombre} la ${this.tipo} no se reproduce, ya que juega el puto LOL`)
    },

    morir(){
        console.log(`${this.nombre} la ${this.tipo} murio, que envidia`)
    }


}


console.log(animal)
animal.comer()
animal.reproducir()
animal.morir()