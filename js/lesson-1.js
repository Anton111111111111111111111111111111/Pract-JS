// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt(`Enter number`));
// console.log(number);
// if (number === 10) {
//   alert(`Вірно`);
// } else {
//   alert(`Не вірно`);
// }
//АБО:
// number === 10 ? alert(`Вірно`) : alert(`Не вірно`);

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);
// if (min <= 14) {
//   alert(`${min} входить в першу чверть`);
// } else if (min <= 29) {
//   alert(`${min} входить в другу чверть`);
// } else if (min <= 44) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt(`Enter mumber from 1 to 4`));
// let result;
// switch (num) {
//   case 1:
//     result = `Winter`;
//     break;
//   case 2:
//     result = `Spring`;
//     break;
//   case 3:
//     result = `Summer`;
//     break;
//   case 4:
//     result = `Autumт`;
//     break;
//   default:
//     result = `Incorrect number`;
// }
// console.log(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const num = Number(prompt(`Enter minutes`));

// let min = String(num % 60);
// let hour = String((num - min) / 60);
// min = min.padStart(2, `0`);
// hour = hour.padStart(2, `0`);
// console.log(`${hour}:${min}`);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін", то prompt запитує пароль .
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt(`Enter login`);
// if (login == false) {
//   alert(`Canceled`);
// } else if (login !== `Admin`) {
//   alert(`Unknown login`);
// } else {
//   const pass = prompt(`Enter password`);
//   if (pass === `I'm admin`) {
//     alert(`Hello`);
//   } else {
//     alert(`Incorrect password`);
//   }
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }

// console.log(`sum: ${getNumbers(1, 13)}`);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   const aType = typeof a;
//   const bType = typeof b;
//   if (aType !== 'number') {
//     return `${a} is not a number`;
//   } else if (bType !== 'number') {
//     return `${b} is not a number`;
//   } else if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(8, `hjk`));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else return confirm(`Are you adult?`);
// }
// console.log(isAdult(17));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} - fizzbuzz`);
//       return;
//     }
//     if (i % 3 === 0) {
//       console.log(`${i} - fizz`);
//     }
//     if (i % 5 === 0) {
//       console.log(`${i} - buzz`);
//     }
//   }
// }
// fizzBuzz(17);
