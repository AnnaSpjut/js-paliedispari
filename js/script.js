// PALINDROMA


// const parola = prompt('Scrivi una parola')


// function palindroma(parola){
//   for(let i = 0; i < parola.length / 2; i++){
//     if(parola[i] !== parola[parola.length - i - 1]){
//       return false;
//     }
//   }
//   return true;
// }

// if(palindroma(parola)){
//   output.innerHTML = parola + ' ' + 'è una parola palindroma!';
// }else{
//   output.innerHTML = parola + ' ' + ' non è una parola palindroma!';
// }


// PARI E DISPARI

const pariDispari = prompt('Scegli e scrivi pari o dispari')
const numUser = prompt('Inserisci un numero tra 1 e 5')
console.log(pariDispari, numUser)

const numComputer = getRandomNumber('min, max');
const somma = numUser + numComputer;
console.log(numComputer)

function getRandomNumber(min, max){
  return Math.floor(Math.random() *5);
}

function somma(numUser, numComputer){
  if(somma % 2 === 0){
      result = 'pari'
    }else{
      result = 'dispari';
    }
    
    if(result === pariDispari){
      output2 = 'Hai vinto!'
    }else{
      output3 = 'Ha vinto il computer!'
    }
};



