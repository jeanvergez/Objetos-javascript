let Automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    kilometraje: 15000,
    ActualizarKilometraje: function(kilometrajeNuevo){
        this.kilometraje = kilometrajeNuevo;
        console.log(`${this.marca} ${this.modelo} ahora tiene ${kilometrajeNuevo} kilómetros`);
    }
}

Automovil.ActualizarKilometraje(20000);
