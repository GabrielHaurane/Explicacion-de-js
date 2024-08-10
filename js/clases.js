// Abstraccion: es las cosas que puede tener mi objeto (nombre, tipo, evolucion, numPokeDex)
class Pokemon {
    // propiedad privada
    #numPokeDex;

    constructor(nombreParam, tipo, evolucion, numPokeDex){
    // nombrePropiedad = nombreParametro
    // this hace referencia al objeto
    this.nombre = nombreParam;
    this._tipo = tipo;
    this.evolucion = evolucion;
    this.#numPokeDex = numPokeDex;
    this.estado = true;
    }

    // propiedades computadas get  y set 
    get numPokeDex(){
        return this.#numPokeDex
    }
    set numPokeDex(nuevoNumPokeDex){
        if (nuevoNumPokeDex > 0 && nuevoNumPokeDex <= 300) {
            this.#numPokeDex = nuevoNumPokeDex;
        } else {
            alert(`numero invalido`);
        }
    }

    // metodo
    mostrarDatos(){
        document.write(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Tipo: ${this._tipo} </li>
            <li>Evolucion: ${this.evolucion} </li>
            <li>Numero PokeDex: ${this.numPokeDex} </li>
            <li>Estado: ${(this.estado)? `habilitado`: `desabilitado`} </li>
            </ul>`)
    }
    // si (this.estado === true) entonces ? `habilitado` :(else/sino) `desabilitado`
}

class PokemonLegendario extends Pokemon{
#ataqueEspecial
constructor(nombreParam, tipo, evolucion, numPokeDex, ataqueEspecial, nivel){
    super(nombreParam, tipo, evolucion, numPokeDex)
    this.#ataqueEspecial = ataqueEspecial
    this.nivel = nivel;
}
get ataqueEspecial(){
    return this.#ataqueEspecial
}
set ataqueEspecial(nuevoAtaque){
    this.#ataqueEspecial = nuevoAtaque;
}
    mostrarDatos(){
        document.write(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Tipo: ${this._tipo} </li>
            <li>Evolucion: ${this.evolucion} </li>
            <li>Numero PokeDex: ${this.numPokeDex} </li>
            <li>Estado: ${(this.estado)? `habilitado`: `desabilitado`} </li>
            <li>Ataque Especial: ${this.ataqueEspecial} </li>
            <li>Nivel: ${this.nivel} </li>

            </ul>`)
    }

}


const pikachu = new Pokemon(`pikachu`, `Electrico`, `Raichu`, 25);
console.log(pikachu)

pikachu._tipo = `Agua`;
console.log(pikachu.numPokeDex)


const charmander = new Pokemon(`charmander`, `Fuego`, [`charmeleon`, `charizard`], 4);
console.log(charmander)

pikachu.mostrarDatos();
charmander.estado = false;
charmander.mostrarDatos();

const articuno = new PokemonLegendario(`Articuno`, `Hielo`, [], 144, `Congelar`, 100);
console.log(articuno)
articuno.mostrarDatos();