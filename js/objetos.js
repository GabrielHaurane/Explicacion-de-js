const cancion = {
    titulo: `Cant stop`,
    banda: `Red hot`,
    duracion: `4:29`,
    fecha: 2003,
    productor: `Rick`,
    play: function () {
        console.log(this)
        document.write(`<p>Inicio de video</p>`)
    },
    stop: () => {
        console.log(this)
        document.write(`<p>Pausa de video</p>`)
    }
}
console.log(cancion)
document.write(`<p>Titulo: ${cancion.titulo}</p>`)
document.write(`<p>Banda: ${cancion.banda}</p>`)

cancion.play();
cancion.stop();
console.log(this);

cancion.duracion = `4:06`;
console.log(cancion);

delete cancion.fecha
console.log(cancion);

console.log(cancion.hasOwnProperty(`titulo`))
console.log(cancion.hasOwnProperty(`fecha`))
