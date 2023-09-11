FizzBuzz
===
## Esercizio
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per:
- i multipli di 3 stampi “Fizz” al posto del numero 
- i multipli di 5 stampi “Buzz”
- i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

#### Bonus
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.  
Applica stili differenti agli elementi aggiunti al DOM, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## JavaScript
Procedimento:
1. Crea un counter che parte da 1 e ariva fino a 100
2. In base a se l'indice è multiplo di 3, è multiplo di 5 o è multiplo sia di 5 che di 3 stampa un stringa diversa. In tutti gli altri casi stampa un numero.
3. Come sopra, assegna un background color diverso a seconda del valore dell'indice.
4. Salva in una variabile il box container e i div generici da riempire
5. Collega il div generico al box container e assegna un contenuto e un background color