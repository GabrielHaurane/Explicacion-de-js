const vacio = [`marvel 1`, `marvel 2`, `marvel 3`, `marvel 4`,`DC 1`,`DC 2`,`DC 3`];

const mostrarArray = (vacio, titulo)=>{
    document.write(`<h3>${titulo}, elementos:${vacio.length} </h3>`)
    document.write(`<ol>`);
    // for(let i = 0; i < arrys.length; i++){
    //   document.write(`<li>${arrys[i]}</li>`);
    // }
  
    vacio.map((nada, posicion)=> document.write(`<li>${nada}, su posicion es: ${posicion}</li>`))
    document.write(`</ol>`);
  }
console.log(vacio);

// Buscar un elemento específico en el array

const existeTitulo = vacio.find((nada) => nada === `marvel 1`);
const existeSubtitulo = vacio.find((nada) => nada === `marvel 2`);

console.log(existeTitulo);
console.log(existeSubtitulo);

// buscar varios elementos del array

const existeDuracion = vacio.find((nada) => nada.includes(`marvel`));
console.log(existeDuracion);

// prueba del includes
const prueba = `hola mundo`;
console.log(prueba.includes(`hola`));
console.log(prueba.includes(`js`));


// buscar varios elementos del array

const listaMarvel = vacio.filter((nada) => nada.includes(`marvel`))
console.log(listaMarvel);

// nueva funcion de un array
mostrarArray(listaMarvel, `lista de marvel`);

vacio.forEach((item )=> console.log('forEach - '+ item) )
