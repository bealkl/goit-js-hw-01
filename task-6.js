//GOIT javascript task 6

'use strict';

let input;
let total = 0;

do {
  input = prompt('Enter the number to add. Click "Cancel" to complete.');
  if (input === null) {
    continue;
  } else {
    input = Number(input);
    if (!isNaN(input)) {
      total += input;
    } else {
      alert('Было введено не число, попробуйте еще раз');
    }
  }
  console.log(`total=${total} input=${input}`);
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
