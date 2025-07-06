// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(number => number ** 2);
// console.log(result);

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const result = array => array.flatMap(obj => obj.values);
// console.log(result(data));

// const res = data.flatMap(obj => obj.values);
// console.log(res);

//Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const age = array => array.some(obj => obj.age < 20);
// console.log(age(people));
// const age1 = people.some(obj => obj.age < 20);
// console.log(age1);

//Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const even = array => array.every(number => number % 2 === 0);
// console.log(even(numbers));
// const even1 = numbers.every(number => number % 2 === 0);
// console.log(even1);

//Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const odd = array => array.find(number => number % 2 !== 0);
// console.log(odd(numbers));
// const odd1 = numbers.find(number => number % 2 !== 0);
// console.log(odd1);

//Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sort = array => array.toSorted((a, b) => a - b);
// console.log(sort(numbersArray));
// const sort1 = numbersArray.toSorted((a, b) => a - b);
// console.log(sort1);

//Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sort = array => array.toSorted((a, b) => a.localeCompare(b));
// console.log(sort(stringArray));
// const sort1 = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(sort1);

//Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const sort = array => array.toSorted((a, b) => a.age - b.age);
// console.log(sort(users));
// const sort1 = users.toSorted((a, b) => a.age - b.age);
// console.log(sort1);

//Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const filtered = array => array.filter(user => user.age > 20);
// console.log(filtered(users));
// const filtered1 = users.filter(user => user.age > 20);
// console.log(filtered1);

//Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = array => array.reduce((total, number) => total + number, 0);
// console.log(sum(numbers));
// const sum1 = numbers.reduce((total, number) => total + number, 0);
// console.log(sum1);

//Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }
//   number(value) {
//     this.value = value;
//     return this;
//   }
//   getResult() {
//     return this.value;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   substract(value) {
//     this.value -= value;
//     return this;
//   }
//   divide(value) {
//     if (this.value !== 0) {
//       this.value = this.value / value;
//     } else {
//       `incorrect`;
//     }
//     return this;
//   }
//   multiply(value) {
//     this.value = this.value * value;
//     return this;
//   }
// }

// // Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .substract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

//Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get getLogin() {
//     return this.#login;
//   }
//   get getEmail() {
//     return this.#email;
//   }
//   set addLogin(newLogin) {
//     this.#login = newLogin;
//   }
//   set addEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client = new Client();
// client.addLogin = 'qwerty';
// console.log(client.getLogin);
// client.addEmail = 'fgh@fb.ghjk';
// console.log(client.getEmail);

//Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з
// зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.gender = params.gender;
//     this.email = params.email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }
// class Employee extends Person {
//   constructor(params) {
//     super(params);
//     this.salary = params.salary;
//     this.department = params.department;
//   }
//   getEmployeeDetails() {
//     return {
//       ...super.getDetails(), //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }
// const employee1 = new Employee({
//   name: 'Vasya',
//   age: 36,
//   gender: 'm',
//   email: 'as@default.jk',
//   salary: 1000,
//   department: 'qwerty',
// });
// console.log(employee1.getDetails());
// console.log(employee1.getEmployeeDetails());
