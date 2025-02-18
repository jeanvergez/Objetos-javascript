let Jugador = {
nombre: "Lucas",
edad: 20,
equipo: "Oklahoma",
PuntosporPartido: 40,
 ActualizarPuntos: function(PuntosNuevos){
    this.PuntosporPartido = PuntosNuevos
    console.log(`${this.nombre} ahora tiene ${PuntosNuevos}`)
 }

}

Jugador.ActualizarPuntos(78)
