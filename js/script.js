/* 
-------------------------------------------

  1. Crea un counter che parte da 1 e ariva fino a 100
  2. In base a se l'indice è multiplo di 3, è multiplo di 5 o è multiplo sia di 5 che di 3 stampa un stringa diversa. In tutti gli altri casi stampa un numero.
  3. Come sopra, assegna un background color diverso a seconda del valore dell'indice.
  4. Salva in una variabile il box container e i div generici da riempire
  5. Collega il div generico al box container e assegna un contenuto e un background color

------------------------------------------- 
*/


// 1.
for (let i = 1; i <= 100; i++ ) {

  const fizz = 'Fizz';
  const buzz = 'Buzz';
  
  let message;
  let boxColor;
  
  // 2.
  // 3.
  if ( i % 3 === 0 & i % 5 === 0 ) {
    message = fizz + buzz;
    boxColor = 'bg-fizzbuzz';
  } 
  else if ( i % 3 === 0 ) {
    message = fizz;
    boxColor = 'bg-fizz';
  }
  else if ( i % 5 === 0) {
    message = buzz;
    boxColor = 'bg-buzz';
  }
  else {
    message = i;
    boxColor = 'bg-number';
  }

  // 4.
  const boxContainer = document.querySelector('.box-container');
  const boxItem = document.createElement('div');  
  
  // 5.
  boxContainer.append(boxItem);
  
  boxItem.classList.add('box-item', boxColor);

  boxItem.append(message);

}
