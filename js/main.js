// Scrivi un programma che stampi i numeri da 1 a 100,

var numeri = 100

for(i = 1; i <= numeri; i++) {
    console.log(+i)
    if (i % 3 == 0) {

        console.log("Fizz")

    }
    else if (i % 5 == 0 ) {

        console.log("Buzz")

    }
    else if ((i % 3 == 0) && (i % 5 == 0)) {

        console.log("FizzBuzz")

    }
}


// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"