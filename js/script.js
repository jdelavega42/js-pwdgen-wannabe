// chiedi all'utente il suo nome
const userName = prompt("Benvenuto! Come ti chiami?");
console.log(userName, typeof userName);

// poi chiedi il suo cognome
const userSurname = prompt("Scrivi il tuo cognome");
console.log(userSurname, typeof userSurname);

// poi chiedi il suo colore preferito
const userColor =prompt("Qual é il tuo colore preferito?")
console.log(userColor, typeof userColor);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("password").innerHTML = `Password Generator consiglia di provare questa nuova password: ${userName+userSurname+userColor}21`