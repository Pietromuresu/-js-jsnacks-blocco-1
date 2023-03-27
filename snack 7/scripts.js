
const potenze = []
const limit = 512;
const h1 = document.querySelector('h1')

let potenzeDi2 = 2;

for (let i = 0; i <= 7; i++){
  potenzeDi2  *= 2;
  potenze.push(potenzeDi2);

}

h1.innerHTML = potenze;









