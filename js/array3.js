const pelicula = [`marvel 1`,`marvel 2`,`marvel 3`,`marvel 4`,`dc 1`,`dc 2`];
function arrayPelicula(){
    document.write(`<ol>`)
    // for(let i = 0; i < pelicula.length; i++){
    //     document.write(`<li>${pelicula[i]}</li>`)
    // }
    pelicula.map((nombreElem, posicionElem) => document.write(`<li>${nombreElem} y su posicion es ${posicionElem} </li>`))
    document.write(`</ol>`)


}
// arrayPelicula();

// find encontrar un elemento
const pelicula1 = pelicula.find((item) => item === `Marvel 1`);
console.log(pelicula1);

// includes encontrara varios elementos

const peli = pelicula.filter((item) => item.includes(`marvel`));
const peliDC = pelicula.filter((item) => item.includes(`dc`));

console.log(peli)
console.log(peliDC)

arrayPelicula(peli, `peliculas marvel`)