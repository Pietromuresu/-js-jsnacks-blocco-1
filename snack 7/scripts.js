
const potenze = []
const limit = 1000;
let potenza = 1;
const h1 = document.querySelector('h1')



// for (let i = 0; i <= limit; i++){
//   potenzeDi2  *= 2;
//   potenze.push(potenzeDi2);

// }

while (potenza < limit) {
  h1.innerHTML = potenze;
  potenza *= 2;
  potenze.push(potenza)
}











