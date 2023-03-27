
const potenze = []
const limit = (7);
const h1 = document.querySelector('h1')

let potenzeDi2 = 2;

for (let i = 0; i <= limit; i++){
  potenzeDi2  *= 2;
  potenze.push(potenzeDi2);

}

h1.innerHTML = potenze;









