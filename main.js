console.log(`--------------------------------------------------------------------------------
#1. Створіть об'єкт userObj, що описує людину.`);

const userObj = {
    firstName: 'Oleksandr',
    lastName: 'Sidelnikov',
    age: 37,
    level: 'Junior',

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(userObj);

console.log(`--------------------------------------------------------------------------------
#2. Для об'єкта з п.1 створіть метод fullName(), що повертає коректне повне ім'я, яке є конкатенацією firstName та lastName через пробіл.`);

console.log(userObj.fullName());


console.log(`--------------------------------------------------------------------------------
#3. Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр, тобто: defUpperStr('My text') → 'MY TEXT'.`);

function defUpperStr(str) {
     return (str || 'default text').toUpperCase();
};

console.log(defUpperStr('My text'));
console.log(defUpperStr('1'));
console.log(defUpperStr());             


console.log(`--------------------------------------------------------------------------------
#4. Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n.
Функція повинна повернути масив, що складається тільки з парних значень, які генеруються в циклі.`);


function evenFn(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            res.push(i)
        }
    }
    return res;
}

console.log(evenFn(10)) // [2, 4, 6, 8, 10]
console.log(evenFn(15)) // [2, 4, 6, 8, 10, 12, 14]
console.log(evenFn(20)) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


console.log(`--------------------------------------------------------------------------------
#5. Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.`);

function weekFn(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 1 || n > 7) {
        return null;
    }

    switch (n) {
        case 1:
            return 'Понеділок';
        case 2:
            return 'Вівторок';
        case 3:
            return 'Середа';
        case 4:
            return 'Четвер';
        case 5:
            return "П'ятниця";
        case 6:
            return 'Субота';
        case 7:
            return 'Неділя';
        default:
            return null;
    }
}




console.log(weekFn(1))   // 'Понеділок'
console.log(weekFn(3))   // 'Середа'
console.log(weekFn(7))   // 'Неділя'
console.log(weekFn(9))   // null
console.log(weekFn(1.5)) // null
console.log(weekFn('2')) // null

console.log(`--------------------------------------------------------------------------------
#6. створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами, n:`);

function ageClassification(n) {
    if (typeof n !== 'number' || n <= 0 || n > 122) {
        return null;
    }

    return n <= 24 ? 'Дитинство' :
           n <= 44 ? 'Молодість' :
           n <= 65 ? 'Зрілість' :
           n <= 75 ? 'Старість' :
           n <= 90 ? 'Довголіття' :
                     'Рекорд';           
};
console.log('    -1 :', ageClassification(-1)) // -1 : null
console.log('     0 :', ageClassification(0)) // 0 : null
console.log('     1 :', ageClassification(1)) // 1 : Дитинство
console.log('    24 :', ageClassification(24)) // 24 : Дитинство
console.log(' 24.01 :', ageClassification(24.01)) // 24.01 : Молодість
console.log('    44 :', ageClassification(44)) // 44 : Молодість
console.log(' 44.01 :', ageClassification(44.01)) // 44.01 : Зрілість
console.log('    65 :', ageClassification(65)) // 65 : Зрілість
console.log('  65.1 :', ageClassification(65.1)) // 65.1 : Старість
console.log('    75 :', ageClassification(75)) // 75 : Старість
console.log(' 75.01 :', ageClassification(75.01)) // 75.01 : Довголіття
console.log('    90 :', ageClassification(90)) // 90 : Довголіття
console.log(' 90.01 :', ageClassification(90.01)) // 90.01 : Рекорд
console.log('   122 :', ageClassification(122)) // 122 : Рекорд
console.log('122.01 :', ageClassification(122.01)) // 122.01 : null
console.log('   150 :', ageClassification(150)) // 150 : null


 //Блок тестирования, везде должны быть true:
console.log('    -1 :', ageClassification(-1) === null); // -1 : null
console.log('     0 :', ageClassification(0) === null) // 0 : null
console.log('     1 :', ageClassification(1) === 'Дитинство'); // 1 : Дитинство
console.log('    24 :', ageClassification(24) === 'Дитинство'); // 24 : Дитинство
console.log(' 24.01 :', ageClassification(24.01) === 'Молодість'); // 24.01 : Молодість
console.log('    44 :', ageClassification(44) === 'Молодість'); // 44 : Молодість
console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість'); // 44.01 : Зрілість
console.log('    65 :', ageClassification(65) === 'Зрілість'); // 65 : Зрілість
console.log('  65.1 :', ageClassification(65.1) === 'Старість'); // 65.1 : Старість
console.log('    75 :', ageClassification(75) === 'Старість'); // 75 : Старість
console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття'); // 75.01 : Довголіття
console.log('    90 :', ageClassification(90) === 'Довголіття'); // 90 : Довголіття
console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд'); // 90.01 : Рекорд
console.log('   122 :', ageClassification(122) === 'Рекорд'); // 122 : Рекорд
console.log('122.01 :', ageClassification(122.01) === null); // 122.01 : null
console.log('   150 :', ageClassification(150) === null); // 150 : null


console.log(`--------------------------------------------------------------------------------
#7. Створіть функцію oddFn(n), яка приймає параметром число - кількість ітерацій циклу.
Функція повинна повернути масив, що складається тільки з непарних значень, які генеруються в циклі.`);


function oddFn(n) {
    const result = [];
    let i = 1;                    

    while (i <= n) {
        result.push(i);
        i += 2;                   
    }

    return result;
}

console.log(oddFn(10)) // [1, 3, 5, 7, 9]
console.log(oddFn(15)) // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)) // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

/*
 * #8
 *
 * Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:
 * a - число,
 * b - число,
 * callback - функція зворотнього виклику, що обробляє параметри a і b.
 *
 * Реалізуйте перевірку: якщо третім параметром передається не функція, потрібно повернути false.
 */


console.log(`--------------------------------------------------------------------------------
#8. Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:`);
function mainFunc(a, b, callback) {
    if (typeof callback !== 'function') {
        return false;
    }

    return callback(a, b);
}

console.log(mainFunc);

/*
 * Реалізуйте callback функції (cbRandom, cbPow, cbAdd) до основної функції (mainFunc), що повертатимуть відповідні результати обчислень.
 * Використовуйте Math для піднесення до ступеня (Math.pow) та генерації випадкових чисел (Math.floor, Math.random).
 */
console.log(`--------------------------------------------------------------------------------
Реалізуйте callback функції (cbRandom, cbPow, cbAdd) до основної функції (mainFunc), що повертатимуть відповідні результати обчислень.`);

function cbRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
};
console.log(cbRandom);

function cbPow(a, b) {
    return Math.pow(a, b);
};
console.log(cbPow);

function cbAdd(a, b) {
    return a + b;
};
console.log(cbAdd);


console.log(`--------------------------------------------------------------------------------`);

console.log(mainFunc(2, 5, cbRandom)) // цілі числа в діапазоні 2..5
console.log(mainFunc(2, 5, cbPow)) // 32
console.log(mainFunc(2, 5, cbAdd)) // 7
console.log(mainFunc(2, 5, 'not a func')) // false
