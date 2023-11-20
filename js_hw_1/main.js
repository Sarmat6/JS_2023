// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let a = 'hello';
console.log(a)
let b = 'owu';
console.log(b)
let c = 'com'
console.log(c)
let d = 'ua';
console.log(d)
let a1 = 1;
console.log(a1)
let b1 = 10;
console.log(b1)
let c1 = -999;
console.log(c1)
let d1 = 123;
console.log(d1)
let e1 = 3.14;
console.log(e1)
let f1 = 2.7;
console.log(f1)
let g1 = 16;
console.log(g1)
let a2 = true;
console.log(a2)
let b2 = false;
console.log(b2)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName ='Коверзнєв';
let middleName ='Андрій';
let lastName ='Володимирович';

console.log(person = firstName + ' '+ middleName + ' ' + lastName)
//або
console.log(person = `${firstName} ${middleName} ${lastName}`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let aa = 100;
let bb = '100';
let cc = true;
console.log(typeof aa)
console.log(typeof bb)
console.log(typeof cc)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Введіть ваше ім\'я:')
let last_name = prompt('Введіть вашу фамілію:')
let age = +prompt('Введіть ваш вік:')

console.log(name + ' ' + last_name + ' ' + age)