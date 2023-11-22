// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, 2, 3, 4, '5', '6', '7', '8', true, false]

console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[6], arr1[7], arr1[8], arr1[9],)

console.log('________________________________')
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 1,
    pageCount: 2,
    genre: 3
}
let book2 = {
    title: 4,
    pageCount: 5,
    genre: 6
}
let book3 = {
    title: 7,
    pageCount: 8,
    genre: 9
}

console.log(book1, book2, book3)

console.log('________________________________')
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 1,
    pageCount: 2,
    genre: 3,
    authors: {
        name: 4,
        age: 5
    }
}
let book5 = {
    title: 1,
    pageCount: 2,
    genre: 3,
    authors: {
        name: 4,
        age: 5
    }
}
let book6 = {
    title: 1,
    pageCount: 2,
    genre: 3,
    authors: {
        name: 4,
        age: 5
    }
}

console.log(book4, book5, book6)

console.log('________________________________')
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = {
    user1: {
        name: 'lol',
        username: 'lulz',
        password: 'lolzXD'
    },
    user2: {
        name: 'kek',
        username: 'koks',
        password: 'kekich'
    },
    user3: {
        name: 'popo',
        username: 'papa',
        password: 'papo'
    },
    user4: {
        name: 'kik',
        username: 'khb',
        password: 'kjgh'
    },
    user5: {
        name: 'nabridlo',
        username: 'vidumuvat',
        password: 'fignu'
    },
    user6: {
        name: 'aaa',
        username: 'bbb',
        password: 'ccc'
    },
    user7: {
        name: 'efwe',
        username: 'fwefsd',
        password: 'fwedsv'
    },
    user8: {
        name: 'kmp',
        username: 'fqwf',
        password: 'XD'
    },
    user9: {
        name: 'efed',
        username: 'www',
        password: 'www'
    },
    user10: {
        name: 'qwwwwwww',
        username: 'wdsd',
        password: 'XC'
    }
}
console.log(users.user1.password)
console.log(users.user2.password)
console.log(users.user3.password)
console.log(users.user4.password)
console.log(users.user5.password)
console.log(users.user6.password)
console.log(users.user7.password)
console.log(users.user8.password)
console.log(users.user9.password)
console.log(users.user10.password)

console.log('________________________________')
// Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Ведіть число 1/0')
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

console.log('________________________________')
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Скільки зараз ХВИЛИН?')
if (time >= 0 && time < 16) {
    console.log('1/4 години')
} else if (time > 15 && time < 31) {
    console.log('2/4 години')
} else if (time > 30 && time < 46) {
    console.log('3/4 години')
} else if (time > 45 && time < 60) {
    console.log('4/4 години')
} else {
    console.log('Або твій годинник зламаний, або ти')
}

console.log('________________________________')
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Який день місяця?')
if (day > 0 && day < 11) {
    console.log('1 декада')
} else if (day > 10 && day < 21) {
    console.log('2 декада')
} else if (day > 20 && day < 32) {
    console.log('3 декада')
} else {
    console.log('Бачу тобі сьогодні зле, йди відпочинь')
}

console.log('________________________________')
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let c = +prompt('Введи день тижня')
switch (c) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday ')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Saturday')
        break
    default:
        console.log('Хтось запрацювався')
}

console.log('________________________________')
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = +prompt('2 числа, введи перше:')
let b = +prompt('2 числа, введи друге:')
if (a > b){
    console.log(`${a} більше за ${b}`)
} else if (b > a){
    console.log(`${b} більше за ${a}`)
} else if (a === b ){
    console.log('Числа рівні')
}else {
    console.log('Шо коїться? Т_т')
}

console.log('________________________________')
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let falsyX = prompt('Негативне значення:')
if (falsyX === `0` || falsyX === '' || falsyX === `null` || falsyX === `NaN` || falsyX === `undefined`){
    console.log('falsyX = default')
    falsyX = 'default'
} else {
    console.log(`falsyX = ${falsyX}`)
}
//не розумію...-_-
console.log('________________________________')
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//ХОЧУ ЗРОБИТИ ЧЕРЕЗ FOR, АЛЕ ЙОГО НЕ ПОКАЗУВАЛИ
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
} else {
    console.log('Не супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
} else {
    console.log('Не супер')
}

console.log('________________________________')