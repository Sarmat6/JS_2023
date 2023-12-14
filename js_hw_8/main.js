// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User( 1, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user2 = new User( 3, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user3 = new User( 2, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user4 = new User( 5, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user5 = new User( 4, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user6 = new User( 7, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user7 = new User( 6, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user8 = new User( 9, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user9 = new User( 8, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')
let user10 = new User( 10, 'vasya', 'blokov', 'vasya1@gmail.ua','+380991388445')

let user = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]

console.log(user)
console.log('________________________________________________________')

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(user.filter(value => value.id % 2 === 0));

console.log('________________________________________________________')
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(user.sort((a, b) => a.id - b.id));

console.log('________________________________________________________')
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone)
        this.order = order;
    }
}

let client1 = new Client(1, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa'])
let client2 = new Client(2, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa','bbb'])
let client3 = new Client(3, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa','bbb','ccc'])
let client4 = new Client(4, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa','bbb'])
let client5 = new Client(5, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa'])
let client6 = new Client(6, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa','bbb'])
let client7 = new Client(7, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa','bbb','ccc'])
let client8 = new Client(8, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa','bbb'])
let client9 = new Client(9, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa'])
let client10 = new Client(10, 'vasa', 'vasasas','vasa1@gmail.ua', '+380991338786', ['aaa'])

let client = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
console.log(client)

console.log('________________________________________________________')
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(client.sort((a, b) => a.order.length - b.order.length));

console.log('________________________________________________________')
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car1 (model,producer,year,maxSpeed,engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function'){
                console.log(`${carKey} -- ${this[carKey]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car1 ('Beha','Nmths','2222',100500,5);

car1.drive();
car1.info();
car1.increaseMaxSpeed(200600);
car1.changeYear(2023);
car1.addDriver({name: 'Luntik'});
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model,producer,year,maxSpeed,carEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.carEngine = carEngine;
    }


    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info () {
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function'){
                console.log(`${carKey} -- ${this[carKey]}`);
            }
        }
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear (newValue) {
        this.year = newValue;
    }

    addDriver (driver) {
        this.driver = driver;
    }
}

let car2 = new Car2 ('Beha','Nmths','2222',100500,5);

car2.drive();
car2.info();
car2.increaseMaxSpeed(200600);
car2.changeYear(2023);
car2.addDriver({name: 'Luntik'});
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderella1 = new Cinderella('cinderella',20,35);
let cinderella2 = new Cinderella('cinderella',21,36);
let cinderella3 = new Cinderella('cinderella',22,37);
let cinderella4 = new Cinderella('cinderella',23,38);
let cinderella5 = new Cinderella('cinderella',24,39);
let cinderella6 = new Cinderella('cinderella',25,40);
let cinderella7 = new Cinderella('cinderella',26,41);
let cinderella8 = new Cinderella('cinderella',27,42);
let cinderella9 = new Cinderella('cinderella',28,43);
let cinderella10 = new Cinderella('cinderella',29,44);

let arrayOfCinderella = [];
arrayOfCinderella.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);

class Prince{

    constructor(name, age, findFootSize) {
        this.name = name;
        this.age = age;
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('prince',50,36);

let findCinderellas = (arr, daddy) => {
    for (const item of arr) {
        if (item.footSize === daddy.findFootSize) {
            console.log(`Джекпот виграла попелюшка з ${item.footSize} розміром ноги`);
        }
    }
}

findCinderellas(arrayOfCinderella, prince);

// додатково

let find = arrayOfCinderella.find(value => value.footSize === prince.findFootSize);
console.log(find);