// Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.

const newArray = [];

for (let i = 1; i <= 100; i++){
    if (i % 7 ===0 || i % 8 === 0){
    newArray.push(i)
    }
}

console.log(newArray)
