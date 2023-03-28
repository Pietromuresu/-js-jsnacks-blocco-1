
const userNumber = prompt('inserisci un numero a 4 cifre')

// const numbers = []
// const splittedNumber = userNumber.split('');
// numbers.push(splittedNumber);

//   console.log(numbers);


//   const total = parseInt(splittedNumber[0]) + parseInt(splittedNumber[1]) + parseInt(splittedNumber[2]) + parseInt(splittedNumber[3]);  
//   console.log(total);
 

let sum = 0;

for (let i = 0; i < userNumber.length; i++ ){
  sum += parseInt(userNumber[i])
}
  console.log(sum);


 