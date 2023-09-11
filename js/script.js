/*
  1. Crea un counter che parte da 1 e ariva fino a 100
  2. Per ogni multiplo sia di 3 che di 5 stampa buzzfizz
     Per ogni multiplo di 3 stampa fizz
     Per ogni multiplo di 5 stampa buz
     Altrimenti stampa un numero
  3. Inserisci i valori delle delle box
*/

const fizz = 'Fizz';
const buzz = 'Buzz';


for (let i = 1; i <= 100; i++ ) {

  if ( i % 3 === 0 & i % 5 === 0 ) {
    console.log(fizz + buzz);
  } 
  else if ( i % 3 === 0 ) {
    console.log(fizz);
  }
  else if ( i % 5 === 0) {
    console.log(buzz);
  }
  else {
    console.log(i);
  }


}