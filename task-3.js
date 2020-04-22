//GOIT javascript task 3
'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let answer = prompt('Enter password', '');

if (answer === null) message = 'Отменено пользователем!';
else if (answer === ADMIN_PASSWORD) message = 'Добро пожаловать!';
else message = 'Доступ запрещен, неверный пароль!';

console.log(message);
