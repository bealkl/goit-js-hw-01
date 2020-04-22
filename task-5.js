//GOIT javascript task 5
'use strict';

let credits;
let answer = prompt('В какую страну доставлять? (возможны варианты: Австралия, Индия, Китай, Чили, Ямайка');

answer = answer.toUpperCase();

switch (answer) {
  case 'КИТАЙ':
    credits = 100;
    break;
  case 'ЧИЛИ':
    credits = 250;
    break;
  case 'АВСТРАЛИЯ':
    credits = 170;
    break;
  case 'ИНДИЯ':
    credits = 80;
    break;
  case 'ЯМАЙКА':
    credits = 120;
    break;
  default:
    credits = 0;
}
if (credits === 0) {
  console.log('В вашей стране доставка не доступна');
} else {
  console.log(`Доставка в ${answer} будет стоить ${credits} кредитов`);
}
