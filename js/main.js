let jugador;
let pc;

function aleatoria(){
  return Math.ceil(Math.random()*3)
}

function eleccion(jugada){
    let resultado = ''
    if (jugada == 1){
      resultado = 'PIEDRA'
    }
    else if (jugada == 2){
      resultado = 'PAPEL'
    }
    else if (jugada == 3){
      resultado = 'TIJERA'
    }
    else{
      resultado = 'TU ELECCION ES INCORRECTA';
    }
    return resultado
  }

jugador = prompt('elija: 1 - PIEDRA, 2 - PAPEL, 3 - TIJERA')
pc = aleatoria();
console.log('tu elejiste: '+ eleccion(jugador))


if ( eleccion(jugador) == 'TU ELECCION ES INCORRECTA'){
    
} else {
    console.log('pc elijio: '+ eleccion(pc))
    if(jugador == pc){
        console.log('EMPATE')
      }
      else if(jugador ==1 && pc ==3){
        console.log('GANASTE')
      }
      else if(jugador ==2 && pc ==1){
        console.log('GANASTE')
      }
      else if(jugador ==3 && pc ==2){
        console.log('GANASTE')
      }
      else {
        console.log('PERDISTE')
      }
}
