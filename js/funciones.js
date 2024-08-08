// function regla() {
//     document.write(`Hola mundo`);
// }
// regla();

function dados(){
    const tirada = Math.floor(Math.random() * 6) + 1
    return tirada;
}
function tabla(){
    for(let i = 1; i <= 50; i++){
    document.write(`<tr>`);
    document.write(`<td>${dados()} </td>`);
    document.write(`<td>${dados()} </td>`);
    document.write(`</tr>`);
}
}
/*
function saludar (nombre){
    document.write(`<p>hola ${nombre}</p>`)
}
    */
console.log(dados());
/*
document.write(`<table>`);
document.write(`<tr>`);
document.write(`<th>dado 1</th>`);
document.write(`<th>dado 2</th>`);
document.write(`</tr>`);
tabla();
document.write(`</table>`);
*/
// const nombre = prompt(`ingrese un nombre`);
// saludar(nombre);
