// richiede all'utente il nome
var nome = prompt("inserisci il tuo nome");

// richiede all'utente il cognome
var cognome = prompt("inserisci il tuo cognome");

// richiede all'utente il colore preferito
var colore = prompt("inserisci il tuo colore preferito");

// dichiarazione variabile
var numero = "19";

// stampa a video i precedenti dati richiesti + variabile
document.getElementById("text").innerHTML = nome + cognome + colore + numero;
