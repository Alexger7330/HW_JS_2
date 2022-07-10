// 1
let Yname = prompt("Ваше имя"),
    age = prompt("Ваш возраст"),
    city = prompt("Город вашего проживания"),
    phone = prompt("Ваш телефон"),
    email = prompt("Ваш email"),
    company = prompt("Название компании, в которой вы рааботаете"),
    result = `Меня зовут ${Yname}. Мне ${age} лет. Я проживаю в
городе ${city} и работаю в компании ${company}. Мои контактные данные:
${phone}, ${email}.`;
console.log(result);

// 2
let YofB = 2022 - age;
console.log(`${Yname} родился в ${YofB} году`);

// 3
let str = prompt("Введите строку из 6 цифр");
str1 = +str[0] + +str[1] + +str[2];
str2 = +str[3] + +str[4] + +str[5];
(str1 == str2) ? console.log("yes") : console.log("no");

// 4
let a1 = prompt("Write a:");
a1 > 0 ? console.log("Верно") : console.log("Неверно")

// 5
let a = 10,
    b = 2,
    sum = a + b,
    razn = a - b,
    proiz = a * b,
    chast = a / b;
console.log(`Сумма = ${sum}, разность = ${razn}, произведение = ${proiz}, частное = ${chast}`);
(a + b > 0) ? console.log((a + b) ** 2) : console.log("сумма чилел меньше нуля");

// 6
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

// 7
let n = prompt("Введите число от 0 до 59");
switch (true) {
    case (n >= 0 && n <= 15):
        console.log("1я четверть часа");
        break;
    case (n > 15 && n <= 30):
        console.log("2я четверть часа");
        break;
    case (n > 30 && n <= 45):
        console.log("3я четверть часа");
        break;
    case (n > 45 && n <= 59):
        console.log("4я четверть часа");
        break;
    default:
        console.log("Неверное значение");
}

// 8
let day = prompt('Введите число от 1 до 31');
switch (true) {
    case day >= 1 && day <= 10:
        console.log('1я декада месяца');
        break;
    case day >= 11 && day <= 20:
        console.log('2я декада месяца');
        break;
    case day >= 21 && day <= 31:
        console.log('3я декада месяца');
        break;
    default:
        console.log('Неверное число');
}

// 9
let days = prompt('Введите число'),

    year = days / 365,
    month = days / 365 * 12,
    week = month * 4,
    hour = days * 24,
    minutes = hour * 60,
    seconds = minutes * 60;
switch (true) {
    case true:
        switch (true) {
            case year >= 0 && year < 1:
                console.log('Меньше года');
                break;
            case year >= 1:
                console.log(`${year} year`);
                break;
        }
    case true:
        switch (true) {
            case month >= 0 && month < 1:
                console.log('Меньше месяца');
                break;
            case month >= 1:
                console.log(`${month} month`);
                break;
        }
    case true:
        switch (true) {
            case week >= 0 && week < 1:
                console.log('Меньше недели');
                break;
            case week >= 1:
                console.log(`${week} week`);
                break;
        }
    case day >= 1:
        console.log(`${days} days, ${minutes} minutes, ${seconds} seconds.`);
        break;
    default:
        console.log('Неверное значение.')
        break;
}

// 10
month = Math.trunc(days / 365 * 12);
switch (true) {
    case month >= 3 && month <= 5:
        console.log(`${month} месяц года Весна`);
        break;

    case month >= 6 && month <= 8:
        console.log(`${month} месяц года Лето`);
        break;

    case month >= 9 && month <= 11:
        console.log(`${month} месяц года Осень`);
        break;

    default:
        console.log(`${month} месяц года Зима`);
}