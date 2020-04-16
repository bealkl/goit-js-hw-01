//GOIT javascript task 4
'use strict';

let credits = 23580;
let totalPrice;

const procePerDroid = 3000;

let answer = prompt('How many droids do you want to buy', '');

if (answer == null) message = 'Отменено пользователем!';
else {
  totalPrice = procePerDroid * Number(answer);
  if (totalPrice > credits) console.log('Недостаточно средств на счету!');
  else console.log('Вы купили ' + answer + ' дроидов, на счету осталось ' + (credits - totalPrice) + ' кредитов.');
}
