let jugador;
let pc;

function aleatoria() {
  return Math.ceil(Math.random() * 3);
}

function eleccion(jugada) {
  let resultado = '';
  if (jugada == 1) {
    resultado = 'PIEDRA';
  } else if (jugada == 2) {
    resultado = 'PAPEL';
  } else if (jugada == 3) {
    resultado = 'TIJERA';
  } else {
    resultado = 'TU ELECCION ES INCORRECTA';
  }
  return resultado;
}

let deseaVolverAJugar = true;

while (deseaVolverAJugar) {
  jugador = parseInt(prompt('Elija: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA'));

  // bucle
  while (isNaN(jugador) || jugador < 1 || jugador > 3) {
    jugador = parseInt(prompt('Elección inválida. Elija: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA'));
  }

  pc = aleatoria();
  console.log('Tu elegiste: ' + eleccion(jugador));

  if (eleccion(jugador) === 'TU ELECCION ES INCORRECTA') {
    console.log('Intenta nuevamente.');
  } else {
    console.log('PC eligió: ' + eleccion(pc));
    if (jugador === pc) {
      console.log('EMPATE');
    } else if (jugador === 1 && pc === 3) {
      console.log('GANASTE');
    } else if (jugador === 2 && pc === 1) {
      console.log('GANASTE');
    } else if (jugador === 3 && pc === 2) {
      console.log('GANASTE');
    } else {
      console.log('PERDISTE');
    }
  }

  // aca se preguntar al usuario si desea volver a jugar
  const respuesta = prompt('¿Deseas volver a jugar? (s/n)');
  deseaVolverAJugar = respuesta.toLowerCase() === 's';
}

console.log('Gracias por jugar. ¡Hasta luego!');

