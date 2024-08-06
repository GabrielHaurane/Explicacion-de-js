// const num1 = parseInt(prompt(`indique un numero`));
// const num2 = parseInt(prompt(`indique un numero`));

// // indique cual es mayor de los dos numeros que se ingresan

// if (num1 > num2) {
//     alert(`${num1} es mayor`)
// } else if (num1 < num2) {
//     alert(`${num2} es mayor`)

// }else {
//     alert(`${num1} y ${num2} son iguales`)
// }
// // ===, !==
const dia = parseInt(prompt(`indique un numero de la semana`));

switch (dia) {
  case 1:
    alert(`hoy es lunes`);
    break;
  case 2:
    alert(`hoy es martes`);
    break;
  case 3:
    alert(`hoy es miercoles`);
    break;
  default:
    document.write(`<p>usted no indico ningun dia disponible</p>`);
    // document.write(`<p>usted no indico ningun dia disponible</p>`);
    break;
}
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
