// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world'
let lorem = 'lorem ipsum'
let javascript = 'javascript is cool'

console.log(hello.length)
console.log(lorem.length)
console.log(javascript.length)
console.log('______________________________________________')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(hello.toUpperCase())
console.log(lorem.toUpperCase())
console.log(javascript.toUpperCase())
console.log('______________________________________________')
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(hello.toLowerCase())
console.log(lorem.toLowerCase())
console.log(javascript.toLowerCase())
console.log('______________________________________________')
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirty = ' dirty string   '
console.log(dirty.trim())
console.log('______________________________________________')
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

function strToArr(arr) {
    return arr.split(' ')
}

console.log(strToArr(str));
console.log('______________________________________________')
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let arrMap = arr.map(value => value.toString())
console.log(arrMap)
console.log('______________________________________________')
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sort = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((n1, n2) => n1 - n2)
    } else if (direction === 'descending') {
        nums.sort((n1, n2) => n2 - n1)
    }
    return nums
}
console.log(sort(nums, 'ascending'));
console.log(sort(nums, 'descending'));
console.log('______________________________________________')
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((n1, n2) => n2.monthDuration - n1.monthDuration));
console.log('______________________________________________')
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
console.log('______________________________________________')
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCoursesAndDurationArray = coursesAndDurationArray.map((value,index) => {
    return {id: index + 1, title: value.title, monthDuration:value.monthDuration}
})
console.log(newCoursesAndDurationArray);
console.log('______________________________________________')
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
];
// - знайти піковий туз
console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));
console.log('______________________________________________')
// - всі шістки
console.log(cards.filter(value => value.value === '6'));
console.log('______________________________________________')
// - всі червоні карти
console.log(cards.filter(value => value.color === 'red'));
console.log('______________________________________________')
// - всі буби
console.log(cards.filter(value => value.cardSuit === 'diamond'));
console.log('______________________________________________')
// - всі трефи від 9 та більше
console.log(cards.filter(value => value.cardSuit === 'clubs' && value.value >= '9' || value.cardSuit === 'clubs' && value.value === '10'));
console.log('______________________________________________')
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let reduce = cards.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit === 'spade'){
        previousValue.spades.push(currentValue)
    }else if (currentValue.cardSuit === 'diamond'){
        previousValue.diamonds.push(currentValue)
    }else if (currentValue.cardSuit === 'heart'){
        previousValue.hearts.push(currentValue)
    }else {previousValue.clubs.push(currentValue)}
    return previousValue
},
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduce)
console.log('______________________________________________')
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(value => value.modules.find(value => value === 'sass')));

console.log('______________________________________________')
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(value => value.modules.find(value => value === 'docker')));
