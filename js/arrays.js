const arreglo = [`titulo`, `duracion`, `idioma`, 2000, true];
const vacio = [];

console.log(arreglo.length);
console.log(arreglo);

// document.write(`<p>${arreglo[0]} </p>`)
// document.write(`<p>${arreglo[1]} </p>`)

function mostrarArreglo() {
  document.write(
    `<h2>el arreglo tiene la candidad de ${arreglo.length} elementos</h2> `
  );

  document.write(`<ul>`);
  for (let i = 0; i < arreglo.length; i++) {
    document.write(`<li>`);
    document.write(`<p>${arreglo[i]} </p>`);
    document.write(`</li>`);
  }
  document.write(`</ul>`);
}
mostrarArreglo();

// unshift sirve para agrgar un elemento al inicio del array
arreglo.unshift(`nombre`, `edad`);
mostrarArreglo();
// push sirve para agregar un elemento al final del array
arreglo.push(`🎈`);
mostrarArreglo();
// splice sirve para agregar un elemento en el medio del array
arreglo.splice(3, 0, `avatar`);
mostrarArreglo();
// shift sirve para eliminar el primero del array
arreglo.shift();
mostrarArreglo();
// shift sirve para eliminar el ultimo del array
arreglo.pop();
mostrarArreglo();
// splice utilizado para eliminar elementos del medio
arreglo.splice(3, 1);
mostrarArreglo();
arreglo.splice(2, 2);
mostrarArreglo();
// modicar un elemento
arreglo[3] = false;
mostrarArreglo();

console.log(arreglo);

arreglo.push(
  "Harry Potter y la piedra filosofal",
  "Rambo 1",
  "Rambo 2",
  "Harry Potter y la cámara secreta",
  "Rambo 3",
  "Harry Potter y el prisionero de Azkaban",
  "Harry Potter y la Orden del Fénix"
);
mostrarArreglo();
// toma el primer elemento que cumple la funcion

// Buscar un elemento específico en el array
// const harryPotter = arreglo.find((item) => item === 'Harry Potter y la cámara secreta');
// const vengadores = arreglo.find((item) => item === 'Vengadores: Infinity War');
// const harryPotter2 = arreglo.find((item) => item.toLowerCase().includes('harry potter'));

// // Imprimir los resultados de la búsqueda en la consola
// console.log(harryPotter); // 'Harry Potter y la cámara secreta'
// console.log(vengadores);  // 'Vengadores: Infinity War'
// console.log(harryPotter2); // 'Harry Potter y la piedra filosofal' (primer elemento que contiene 'harry potter')

// // Mostrar el resultado de la búsqueda en el documento HTML
// document.write(`<p>Peli buscada: ${harryPotter}</p>`);

// const sagaRambo = arreglo.filter((elemento)=> elemento.includes('Rambo'));
// console.log(sagaRambo)

// document.write(`<h2>Array de Rambo: cantidad de elementos ${sagaRambo.length}</h2>`
// );

// document.write(`<ol>`);
// sagaRambo.map((item, posicion)=> document.write(`<li>${item} - posicion: ${posicion}</li>`) )
// document.write(`</ol>`);

// //forEach
// series.forEach((item )=> console.log('forEach - '+ item) )
