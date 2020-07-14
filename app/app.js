// ESERCIZIO LISTA COGNOMI
var cognomi = ["Bianchi", "Rossi", "Verdi"];
var cognome = prompt("inserisci il cognome");
// Controllare Le Maiuscole
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
// Inserire il cognome
cognomi.push(cognome);
// Ordinarlo
cognomi.sort();

var elemento = " ";
for (var i = 0; i < cognomi.length; i++) {
    // elemento = document.getElementById('stampa').innerHTML;
    document.getElementById('stampa').innerHTML +=  "<li>" + cognomi[i] + "</li>";
}
// esercizio con do while

// var cognomi = ["Bianchi", "Rossi", "Verdi"];

//
// do {
// var cognome = prompt("inserisci il cognome");
// } while (cognome.length < = 0);

// var cognome = prompt("inserisci il cognome");




// // // Controllare Le Maiuscole
// cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
// // // Inserire il cognome
// cognomi.push(cognome);
// // // Ordinarlo
// cognomi.sort();
//
// // stampa la lista
// var posizione;
// for (var i = 0; i < cognomi.length; i++) {
// //     // elemento = document.getElementById('stampa').innerHTML;
// document.getElementById('stampa').innerHTML +=  "<li>" + cognomi[i] + "</li>";
//
//
// }


// Calcola la somma e la media dei primi 10 numeri.

// var somma = 0;
// var media;
//
//
// for (var i = 0; i <= 10; i++) {
//     somma += i;
//
// }
//
// media = somma/(i-1);
//
// console.log(i);
// console.log(somma);
// console.log(media);


// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// 1. chiedere un numero di 4 cifre
// 2. calcolo somma della 4 cifre


// var numero;
// do {
// numero = prompt("inserisci un numero di 4 cifre");
// } while (numero.length != 4);
//
//
//
// var somma = 0;
// for (var i = 0; i < numero.length; i++) {
//
//     somma += parseInt(numero[i]);
//
// }
//  console.log(somma);


// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
//
// var numeriInteri = [1,2,3,4,5,6,7,8,9,10];
// var somma = 0;
// for (var i = 0; i < numeriInteri.length; i++) {
//     if (i % 2 !=0) {
//      somma += numeriInteri[i]
//     }
//
//
// }
// console.log(somma);
