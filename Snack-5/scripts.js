
const oddNumbers = []

let number;
const ul = document.querySelector('ul')


for (let i = 0; i < 6; i++){
  const number = parseInt(prompt('inserisci un numero'));
  if ((number % 2 != 0)){
    oddNumbers.push(number);
  }

  ul.innerHTML = `
  questi sono i numeri dispari: <br>
  <li> ${oddNumbers} </li>
`
}

