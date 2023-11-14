
// Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

// creo un elemento che devo ripetere
const ul = document.querySelector('ul.lista');

for (let i = 0, index >= 6, index++) {
    const elemento = <li class="box box--$(index)">${index}</li>;
    ul.innerHTML += elemento;

}