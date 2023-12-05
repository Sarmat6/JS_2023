function random10() {
    return Math.round(Math.random() * 10)
}

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function ploshaPryamokutnika(height, weight) {
    let a = height
    let b = weight
    return a * b
}

document.write('Площа прямокутника = ' + ploshaPryamokutnika(x = random10(), y = random10()) + '<br> Висота = ' + x + '<br>Ширина = ' + y)

document.write('<br>____________________________________________________________________<br>')

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function ploshaKola(radius) {
    let r = radius
    return Math.PI * Math.pow(r, 2)
}

document.write('Площа кола = ' + ploshaKola(r = random10()) + '<br> При радіусі = ' + r)

document.write('<br>____________________________________________________________________<br>')

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function ploshaCilindru(height, radius) {
    let h = height
    let r = radius
    return 2 * Math.PI * r * (r + h)
}

document.write('Площа циліндру = ' + ploshaCilindru(h = random10(), r = random10()) + '<br>Висота = ' + h + '<br>Радіус = ' + r)

document.write('<br>____________________________________________________________________<br>')
// - створити функцію яка приймає масив та виводить кожен його елемент
function writeArray(array){
    let a = array
    return a
}
document.write('Перший спосіб: ' + writeArray([a = random10(), b = random10(), c = random10()]))
//aбо
document.write('<br>Другий спосіб: ')
function writeArray2(array){
    for (let element of array){
        document.write(' ' + element + ';')
    }
}
writeArray2([a = random10(), b = random10(), c = random10()])

document.write('<br>____________________________________________________________________<br>')
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragrafText(text){
    document.write('<p>' + text + '</p>')
}
paragrafText('Довільний текст в параграфі')

document.write('<br>____________________________________________________________________<br>')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLi(text){
    document.write('<ul>')
    for(let i = 0; i < 3; i ++){
        document.write('<li>' + text+ '</li>')
    }
    document.write('</ul>')
}
ulLi('Довільний текст для ліжок')

document.write('<br>____________________________________________________________________<br>')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulLiN(text, N){
    document.write('<ul>')
    for(let i = 0; i < N; i ++){
        document.write('<li>' + text+ '</li>')
    }
    document.write('</ul>')
}
ulLiN('Довільний текст для ліжок 2', N = random10())

document.write('<br>____________________________________________________________________<br>')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primitivArray(array){
    document.write('<ul>')
    for (let element of array){
        document.write('<li>' + element + '</li>')
    }
    document.write('</ul>')
}
primitivArray([true, false, 'l','r', 1,2])

document.write('<br>____________________________________________________________________<br>')
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr =  [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'misha', age: 50},
];
function idNameAge(array){
    for (let element of array)
    document.write(`${element.id}, ${element.name}, ${element.age}<br>`)
}

idNameAge(arr)

document.write('<br>____________________________________________________________________<br>')
// - створити функцію яка повертає найменьше число з масиву
function minOfArr(array){
    let min = array[0]
    for(let i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i]
        }
    }
    return min
}
document.write('Мінімальне: ' + minOfArr([a = random10(), b = random10(), c = random10()]) + '<br>Значення: ' + a +'  ' + b + '  ' + c)

document.write('<br>____________________________________________________________________<br>')
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArr(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
document.write('Сума: ' + sumArr([a = random10(), b = random10(), c = random10()]) + '<br>Значення: ' + a +'  ' + b + '  ' + c)

document.write('<br>____________________________________________________________________<br>')
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    let x = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = x
    return arr
}
document.write(swap([1, 2, 3, 4], 0, 1))

document.write('<br>____________________________________________________________________<br>')
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]
function exchange(sumUAH, currencyValues, exchangeCurrency){
    let arr = currencyValues;
    for (let i = 0; i < arr.length; i++){
        if (exchangeCurrency === arr[i].currency){
            return sumUAH/arr[i].value
        }
    }
}
document.write(exchange(10000, currencyValues, 'USD'))