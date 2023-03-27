
const userNumber = prompt('inserisci un numero a 4 cifre')

const numbers = []
const splittedNumber = userNumber.split('');
numbers.push(splittedNumber);

  console.log(numbers);


  const total = parseInt(splittedNumber[0]) + parseInt(splittedNumber[1]) + parseInt(splittedNumber[2]) + parseInt(splittedNumber[3]);  
  console.log(total);

