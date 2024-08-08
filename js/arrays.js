const pelicula = [`titulo`, `duracion`, `idioma`, 2000, true];

const vacio = [];

console.log(pelicula.length);
console.log(pelicula);

// document.write(`<p>${pelicula[0]} </p>`)
// document.write(`<p>${pelicula[1]} </p>`)

function mostrarpelicula() {
  document.write(
    `<h2>el pelicula tiene la candidad de ${pelicula.length} elementos</h2> `
  );

  document.write(`<ul>`);
  for (let i = 0; i < pelicula.length; i++) {
    document.write(`<li>`);
    document.write(`<p>${pelicula[i]} </p>`);
    document.write(`</li>`);
  }
  document.write(`</ul>`);
}
mostrarpelicula();

const mostrarArray = (vacio, titulo)=>{
  document.write(`<h3>${titulo}, elementos:${vacio.length} </h3>`)
  document.write(`<ol>`);
  // for(let i = 0; i < arrys.length; i++){
  //   document.write(`<li>${arrys[i]}</li>`);
  // }

  vacio.map((nada)=> document.write(`<li>${vacio}</li>`))
  document.write(`</ol>`);
}


// unshift sirve para agrgar un elemento al inicio del array
pelicula.unshift(`nombre`, `edad`);
mostrarpelicula();
// push sirve para agregar un elemento al final del array
pelicula.push(`🎈`);
mostrarpelicula();
// splice sirve para agregar un elemento en el medio del array
pelicula.splice(3, 0, `avatar`);
mostrarpelicula();
// shift sirve para eliminar el primero del array
pelicula.shift();
mostrarpelicula();
// shift sirve para eliminar el ultimo del array
pelicula.pop();
mostrarpelicula();
// splice utilizado para eliminar elementos del medio
pelicula.splice(3, 1);
mostrarpelicula();
pelicula.splice(2, 2);
mostrarpelicula();
// modicar un elemento
pelicula[3] = false;
mostrarpelicula();

console.log(pelicula);



// // otro array
// vacio.push(`marvel 1`, `marvel 2`, `marvel 3`, `marvel 4`,`DC 1`,`DC 2`,`DC 3`);

// console.log(vacio)

// // Buscar un elemento específico en el array

// const existeTitulo = vacio.find((nada) => nada === `marvel 1`);
// const existeSubtitulo = vacio.find((nada) => nada === `marvel 2`);
// const existeDuracion = vacio.find((nada) => nada.includes(`marvel`));
// console.log(existeTitulo);
// console.log(existeSubtitulo);
// console.log(existeDuracion);

// const prueba = `hola mundo`;
// console.log(prueba.includes(`hola`));
// console.log(prueba.includes(`js`));
// console.log(pelicula.includes(`marvel 1`))
// const listaMarvel = vacio.filter((nada) => nada.includes(`dc`))
// console.log(listaMarvel);

// // nuevo array
// mostrarArray(listaMarvel, `lista de marvel`);

