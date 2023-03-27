

const numbers = [
  '1', 
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

const cube = [];

const userLimit = parseInt( prompt ('Fino a che posizione faccio il cubo?'));

for (let i = 0; i <= userLimit - 1; i++ ){
   cube.push(Math.pow(numbers[i], 3)) ;
  }
  console.log(cube);