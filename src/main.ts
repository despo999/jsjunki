import './style.css'
// console.log("Hello")


// console.log(typeof 12)
// console.log(typeof '12')
// console.log(typeof true)
// console.log(parseInt('d'))
// console.log(parseFloat('12.5wggwgw'))
// console.log(typeof false)
// console.log(typeof [])
// console.log(typeof [])
// console.log(typeof undefined)
// console.log(null)
// console.log(typeof null)
// console.log(typeof alert)
// console.log(+ 12.5)
// console.log(String(12.5))
// console.log(`В этой строке мы сложим 2 числа $newVar+5`)

// let num1 = 1
// let num2 = 2
// console.log(2 > 1)
// console.log(num1 == num2)
// console.log(num1 != num2)
// console.log(num1 != 1)
// console.log(num1 === 1)
// console.log(1 === +'1')
// // console.log(2 != 1) 

// console.log(+false)


// // console.log(Boolean'')
// // console.log(Boolean (0))
// // console.log(Boolean(undefined))
// // console.log(Boolean(null))
// // console.log(+'')



// let year = 2010
// if (year == 2015) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

// // let year = 2010
// if (year == 2015) {
//     console.log('yes')
// }
// else if (year == 2010) {
//     console.log('maybe')
// } else {
//     console.log('no')
// }

// let age = 18
// let message
// if (age>16) {
//     message='helllo'
// } else{
//     message='too yung'
// }
// console.log (message)

// message = age > 16 ? 'hello' : 'too yung'

// const isThursday = new Date ().getDate() == 22
// console.log(isThursday)

// let age = 13

// if (age >= 14 && age <= 90) {
//     console.log('Вы крутой')
// } else {
//     console.log('Вы некрутой')
// }




// if (age < 14 || age > 90) {
//     console.log('Вы крутой')
// }

// let userName = prompt('Кто там?', '');
// let pass
// if (userName === 'Админ') {
//     pass = prompt('Пароль?', '')

//     if (pass === 'я главный') {
//         alert('WASSUP');
//     } else if (pass === '' || pass === null) {
//         alert('BYE')
//     } else {
//         alert('Go away')
//     }
// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert("Я вас не знаю");
// }


// for (let x=0; x<2; x+=1) {
//     for(let y=0; y<2; y++){
//         console.log (`(x:${x}, y:${y})`)
//     }
// }

// let userInput = 10
// let text = ''
// while ( userInput) {
//     text = text + userInput +'_'
//     userInput--
// }
// console.log(text)

// //Запросить число и степень. Возвести число в указанную
// // степень и вывести результат.
// let num = 10
// let count = 3
// let result = 1
// while (count) {
//     result *= num 
//     count--
// }
// console.log(result)

// //Запросить 2 числа и найти все общие делители.
// let num1 = 416
// let num2 = 793
// text = ''
// let min = num1 < num2 ? num1 : num2
// while(min) {
//     if(num1%min ==0 && num2%min == 0){
//         text += min + '_'
//     }
//     min--
// }
// console.log(text)

// num = 5
// result = 1
// while(num){
//     if (num > 0) result *- num
//     num--
// }
// console.log(result)

//дз2.1

// let age = 12
// let message
// if (age <12){
//     message = 'ребенок'
// }else if (age <=18){
//     message = 'подросток'
// }else if (age <60){
//     message = 'взрослый'
    
// }else{
//     message = 'пенсия'
// }
// console.log(message)

// д2з2
// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// let numbers = prompt('Введите число от 0 до 9');
// if (numbers == '0') {
//     alert(')')
// } else if (numbers == '1') {
//     alert('!')
// } else if (numbers == '2') {
//     alert('@')
// } else if (numbers == '3') {
//     alert('#')
// } else if (numbers == '4') {
//     alert('$')
// } else if (numbers == '5') {
//     alert('%')
// } else if (numbers == '6') {
//     alert('^')
// } else if (numbers == '7') {
//     alert('&')
// } else if (numbers == '8') {
//     alert('*')
// } else if (numbers == '9') {
//     alert('(')
// } else {
//     alert('Строки запрещены !')
// }

// д2з3
// Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
// let number = prompt('Введите трехзначное число');
//     number = number + '';
//     if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
//     {
//         alert('TRUE');
//     }else
//         alert('FALSE');

//д2з4


//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100
// {
    
//     let year = 2006
//     let resulte
//     if (year % 4 == 0 && year % 100 !== 0) {
//         resulte = 'год високосный'
//     } else {
//         resulte = 'год невисокосный'
//     }
//     console.log(resulte)
// }

// д2з6 
// Написать конвертор валют. Пользователь вводит количе-ство USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// let dollar = parseFloat(prompt('Введите количество USD') as string)
// let currency = prompt('EUR = 1, UAH = 2, AZN = 3')
// if (currency == '1') {
//     alert(dollar * 0.92 + ' евро')
// } else if (currency == '2') {
//     alert(dollar * 7.20 + ' жэньминьби')
// } else if (currency == '3') {
//     alert(dollar * 1.70 + ' aзербайджанский манат')
// } else {
//     alert('ошибка')
// }

// д2з7 
// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3 %, от 300 до 500 – 5 %, от 500 и выше – 7 %.
// let amount = parseFloat(prompt('Введите сумму покупки:') as string)
// if (amount >= 200 && amount < 300) {
//     alert(amount / 100 * 97 + 'руб. со скидкой 3%');
// } else if (amount >= 300 && amount < 500) {
//     alert(amount / 100 * 95 + 'руб. со скидкой 5%')
// } else if (amount >= 500) {
//     alert(amount / 100 * 93 + 'руб. со скидкой 7%')
// }

// д2з9
// Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-рианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
// let question1 = prompt('Какая планета самая горячая? 1)Венера 2)Меркурий 3)Марс')
// let question2 = prompt('Какая соцсеть появилась в 2003 году? 1)Twitter 2)Facebook 3)My space')
// let question3 = prompt('Самый крупный наркоторговец в истории? 1)Эль Чапо 2)Пабло Эскобар 3)Хоакин Гусман')
// let score = 0
// if (question1 == '1') {
//     score += 2
// }
// if (question2 == '3') {
//     score += 2
// }
// if (question3 == '2') {
//     score += 2
// }
// alert('Вы набрали ' + score + ' очков')

// п2з1 
// Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

// let num = 0
// let resulte
// if (num > 0) {
//     resulte = 'число положительное'
// } else if (num < 0) {
//     resulte = 'число отрицательное'
// } else {
//     resulte = 'ноль'
// }
// console.log(resulte)

// п2з2
// Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
// let ages = prompt('Сколько вам лет?')
// let correct = prompt('Вам ' + ages + ' лет? 1-да, 2-нет')
// if (correct == '1') {
//     alert('супер!')
// } else if (correct == '2') {
//     alert('жаль')
// }

//п2з4
//Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
// let hour = prompt('Сколько сейчас часов?')
// let minutes = prompt('Сколько минут?')
// let sec = prompt('А сколько секунд?')
// let verify = prompt('сейчас ' + hour + ' часов ' + minutes + ' минут ' + sec + ' секунд, 1-да, 2-нет')
// if (verify == '1') {
//     alert('супер!')
// } else if (verify == '2') {
//     alert('жаль')
// }

//п2з3 
// Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).
// let numb = -448
// let resultat
// if (numb = -numb) {
//     resultat = +numb
// } else {
//     resultat = numb
// }
// console.log(resultat)

//п2з6
// Запросить у пользователя номер месяца и вывести на экран его название.
// let numberOfMonth = 8
// let Month
// switch (numberOfMonth) {
//     case 1:
//         Month = 'январь'
//         break;
//     case 2:
//         Month = 'февраль'
//         break;
//     case 3:
//         Month = 'март'
//         break;
//     case 4:
//         Month = 'апрель'
//         break;
//     case 5:
//         Month = 'май'
//         break;
//     case 6:
//         Month = 'июнь'
//         break;
//     case 7:
//         Month = 'июль'
//         break;
//     case 8:
//         Month = 'август'
//         break;
//     case 9:
//         Month = 'сентябрь'
//         break;
//     case 10:
//         Month = 'октябрь'
//         break;
//     case 11:
//         Month = 'ноябрь'
//         break;

//     case 12:
//         Month = 'декабрь'
//         break;
// }
// console.log(Month)

//п2з7 
//Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.
// {
//     let figure1 = 28
//     let figure2 = 43
//     let arifmetica = '+'
//     switch (arifmetica) {
//         case '+':
//             console.log(figure1 + figure2)
//             break;
//         case '-':
//             console.log(figure1 - figure2)
//             break;
//         case '*':
//             console.log(figure1 * figure2)
//             break;
//         case '/':
//             console.log(figure1 / figure2)
//             break;
//         default:
//             console.log('ошибка')
//     }
// }


// showMessage

// function showMessage() {
//     console.log('Всем привет!');
// }

// function sum(a: number, b: number) {
//     console.log(a)
//     console.log(b)
//     return a + b
// }
// console.log(sum)

// let sumOf2And4 = sum(2, 4)

// console.log(sumOf2And4)

// function getSumRest(...rest[]) {
//     for (let i = 0; i < arguments.lenght; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(getSumRest(1,2,43,55))

// function powRecursive(x:number, n:number) {
//   return n == 1 ? x : x * powRecursive(x, n - 1);
// if (n==1){
//     console.log('Условие выхода сработало')
//     return x
// }else{
//     console.log(n,x)
// }
// }
// console.log(powRecursive(7,6))

//practice 5

// 1
// Написать функцию, которая вычисляет факториал задан-
// ного числа.

// function getFucktorial(n:number):number{
//     if(n==1){
//         return n
//     }else{
//         return n * getFucktorial(n-1)
//     }

// }
// console.log(getFucktorial(7))

// 2
// Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.

// function getStripeOfRawNumbers (start:number,end:number):void{
//     if(start > end){
//         return
//     }
 
//     console.log (start)
//     getStripeOfRawNumbers(start+1,end)
// }
// getStripeOfRawNumbers(1,5)

// 3
// Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321


// function getReverseNumber ( n: number):number {
//     if(n < 10){
//      return n
//     }else{
//         return + (n % 10 + '' + getReverseNumber(Math.floor(n/10)))
//     }
// }
// console.log(getReverseNumber(1234))

// 4
// Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16

// function getSumOfDigits(n:number):number {
//     if (n < 10){
//         return n
//     }else{
//         return n % 10  + getSumOfDigits(Math.floor(n / 10))
//     }
// }

// console.log(getSumOfDigits(1357))


// 5
// Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).

// function getBracketsPairsByNum (n:number):string{
//     if (!n) {
//         return '()'
//     }else{
//         return '(' + getBracketsPairsByNum(n-1) + ')'
//     }
// }

// console.log(getBracketsPairsByNum(4))

//практика 4 ФУНКЦИИ
//задание1
// Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.
// function getMin(a: number, b: number) {
//     if (a < b) {
//         return a
//     }
//     return b
// }

// console.log(getMin(3, 5))

// задание 2
// Написать функцию, которая возводит переданное число
// в указанную степень.
// function pow(x: number, n: number): number {
//     if (n != 1) {
//         return x *= pow(x, n - 1)
//     } else {
//         return x
//     }
// }
// console.log((pow(2, 4)))



// задание 3
// Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.
// function getNum(figure1: number, figure2: number, arifmetica: string) {
//     switch (arifmetica) {
//         case '+':
//             return figure1 + figure2
//             break;
//         case '-':
//             return figure1 - figure2
//             break;
//         case '*':
//             return figure1 * figure2
//             break;
//         case '/':
//             return figure1 / figure2
//             break;
//         default:
//             return 'ошибка'
//     }
// }

// console.log(getNum(1, 5, '-'))

// // задание 4
// // Написать функцию, которая проверяет, является ли пере-
// // данное ей число простым.
// function getPrimeNum(a: number) {
//     if (a == 0) {
//         return false
//     } else if (a === 2) {
//         return ('простое')
//     } else {
//         for (var x = 2; x < a; x++) {
//             if (a % x === 0) {
//                 return ('не простое')
//             }
//         }
//         return ('простое')
//     }
// }
// console.log(getPrimeNum(5))

// // задание 5
// // Написать функцию, которая принимает число и выводит
// // таблицу умножения для этого числа. Вызовите функцию
// // для всех чисел от 2 до 9
// function ShowTimesTableForNum(a: number) {
//     if (a > 1 && a < 10) {
//         return (`
//         ${a}*2=${a * 2}  
//         ${a}*3=${a * 3}  
//         ${a}*4=${a * 4}  
//         ${a}*5=${a * 5}  
//         ${a}*6=${a * 6}  
//         ${a}*7=${a * 7}  
//         ${a}*8=${a * 8}  
//         ${a}*9=${a * 9} 
//         `)
//     }
//     return 'введите число от 2 до 9'
// }

// console.log(ShowTimesTableForNum(2))
// console.log(ShowTimesTableForNum(3))
// console.log(ShowTimesTableForNum(4))
// console.log(ShowTimesTableForNum(5))
// console.log(ShowTimesTableForNum(6))
// console.log(ShowTimesTableForNum(7))
// console.log(ShowTimesTableForNum(8))
// console.log(ShowTimesTableForNum(9))
// console.log(ShowTimesTableForNum(360))

// задание 6
// Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от
// деления первого параметра на второй. В функции исполь-
// зовать только + - * /, оператор % не использовать.
// function getRemaiderOfNum(a: number, b: number) {
//     return a - b * Math.floor(a / b)
// }
// console.log(getRemaiderOfNum(11, 3))

// задание 7
// Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает их сумму.
// function sumNumbers(n1: number, n2 = 0, n3 = 0, n4 = 0, n5 = 0) {
//     return n1 + n2 + n3 + n4 + n5
// }
// console.log(sumNumbers(8, 9, 7, 9, 8))



//практика 5 РЕКУРСИИ
// задание 1
// Написать функцию, которая вычисляет факториал задан-
// ного числа.
// function getFactorialOfNum(n: number): number {
//     if (n == 1) {
//         return n
//     } else {
//         return n * getFactorialOfNum(n - 1)
//     }
// }
// console.log(getFactorialOfNum(6))

// задание 2
// Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.
// function showAllNum(start: number, end: number): void {
//     if (start > end) {
//         return
//     }
//     console.log(start)
//     showAllNum(start + 1, end)
// }
// showAllNum(1, 5)


// function showAllNumBack(start: number, end: number): void {
//     if (start < end) {
//         return
//     }
//     console.log(start)
//     showAllNumBack(start - 1, end)
// }
// showAllNumBack(5, 1)


// задание 3
// Написать функцию, которая выводит переданное ей число задом наперед.
// Например: число 1234 вывести как 4321
// function getReverseNum(n: number): number {
//     if (n < 10) {
//         return n
//     } else {
//         return + (n % 10 + '' + getReverseNum(Math.floor(n / 10)))
//     }
// }
// console.log(getReverseNum(9849))

// задание 4
// Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
// function getSumOfDigits(n: number): number {
//     if (n < 10) {
//         return n
//     } else {
//         return n % 10 + getSumOfDigits(Math.floor(n / 10))
//     }
// }
// console.log(getSumOfDigits(344))

// задание 5
// Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).
// function getBracketsPairsByNum(n: number): string {
//     if (!n) {
//         return ''
//     } else {
//         return '(' + getBracketsPairsByNum(n - 1) + ')'
//     }
// }

// return '(' + getBracketsPairsByNum(4) +')' = return '(' + getBracketsPairsByNum(3) +')' =(((())))
// return '(' + getBracketsPairsByNum(3) +')'= return '(' + getBracketsPairsByNum(2) +')' = ((()))
// return '(' + getBracketsPairsByNum(2) +')' = return '(' + getBracketsPairsByNum(1) +')' =(())
// return '(' + getBracketsPairsByNum(1) +')'= return '(' + getBracketsPairsByNum(0) +')' =()

// console.log(getBracketsPairsByNum(4))

//дз РЕКУРСИИ
// Написать функцию возведения числа в степень.
// function pow2(x: number, n: number): number {
//     if (n != 1) {
//         return x *= pow2(x, n - 1)
//     } else {
//         return x
//     }
// }
// console.log((pow2(2, 4)))

// Написать функцию поиска наибольшего общего делителя.
// function getLardestDivisor(a: number, b: number): number {
//     if (b == 0)
//         return a
//     if (a > b)
//         return getLardestDivisor(b, a % b)
//     else
//         return getLardestDivisor(a, b % a)
// }
// console.log(getLardestDivisor(4, 6))

// // Написать функцию для поиска максимальной цифры в числе.
// function getMinDigitInNum(a: number, b = 0): number {
//     if (a % 10 > b) {
//         b = a % 10
//     }
//     if (n > 10) {
//         getMinDigitInNum(a / 10)
//     }
//     return b
// }
// console.log(getMinDigitInNum(348379))


// Написать функцию, которая определяет простое ли пере-
// данное число.
// function isPrime(n: number, divisor = 2): boolean {
//     if (n < 2) {
//         return false;
//     } else if (divisor >= Math.sqrt(n)) {
//         return true;
//     } else if (n % divisor === 0) {
//         return false;
//     } else {
//         return isPrime(n, divisor + 1);
//     }
// }
// console.log(isPrime(17))

// Написать функцию для вывода всех множителей передан-
// ного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3



// Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8
// function getFibonacci(n: number): number {
//     if (n == 1 && n == 2) {
//         return 1
//     } else {
//         return getFibonacci(n - 1) + getFibonacci(n - 2)
//     }
// }
// console.log(getFibonacci(10)) ОШИБКА

//практика 6 ОБЬЕКТЫ

// Создать объект, описывающий автомобиль (производитель,
//     модель, год выпуска, средняя скорость), и следующие функции
//     для работы с этим объектом.
// type Car = {
//     brand: string,
//     model: number,
//     year: number,
//     speed: number
// }

// const car = {
//     brand: 'porsche',
//     model: 911,
//     year: 2018,
//     speed: 80
// }

// //     1 Функция для вывода на экран информации об автомобиле.
// function showInfoAboutCar() {
//     return car
// }
// console.log(showInfoAboutCar())

// // 2 Функция для подсчета необходимого времени для пре-
// //     одоления переданного расстояния со средней скоростью.
// //     Учтите, что через каждые 4 часа дороги водителю необхо-
// //     димо делать перерыв на 1 час.
// function getTimeOfWay(S: number) {
//     let time = S / car.speed
//     time = Math.floor(time / 60)
//     return time

// }

// console.log(getTimeOfWay(30))


// // Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// // и следующие функции для работы с этим объектом.
// type Fraction = {
//     numerator: number,
//     denominator: number
// }

// const fraction1: Fraction = {
//     numerator: 1,
//     denominator: 2
// }

// const fraction2 = {
//     numerator: 3,
//     denominator: 10
// } as Fraction

// function transformToCommonDenominator(fr1: Fraction, fr2: Fraction) {
//     return {
//         fr1: {
//             numerator: fr1.numerator * fr2.denominator,
//             denominator: fr1.denominator * fr2.denominator
//         },
//         fr2: {
//             numerator: fr2.numerator * fr1.denominator,
//             denominator: fr1.denominator * fr2.denominator
//         }
//     }
// }

// 1 Функция сложения 2 - х объектов - дробей.

// function getSumOfFractions(fr1: Fraction, fr2: Fraction) {
//     const commonFractions = transformToCommonDenominator(fr1, fr2)
//     return {
//         numerator: commonFractions.fr1.numerator + commonFractions.fr2.numerator,
//         denominator: commonFractions.fr1.denominator
//     }
// }

// console.log(getSumOfFractions(fraction1, fraction2))

// function getRedusedSumOfFractions(fr1: Fraction, fr2: Fraction) {
//     const result = getSumOfFractions(fr1, fr2)
//     return getReductedFraction(result)
// }

// console.log(getRedusedSumOfFractions(fraction1, fraction2))

// // 2 Функция вычитания 2 - х объектов - дробей.

// function getSubtrOfFractions(fr1: Fraction, fr2: Fraction) {
//     const commonFractions = transformToCommonDenominator(fr1, fr2)
//     const result = {
//         numerator: commonFractions.fr1.numerator - commonFractions.fr2.numerator,
//         denominator: commonFractions.fr1.denominator
//     }
//     return getReductedFraction(result)
// }

// console.log(getSubtrOfFractions(fraction1, fraction2))

// 3 Функция умножения 2 - х объектов - дробей.

// function getMulOfFractions(fr1: Fraction, fr2: Fraction) {
//     const result = {
//         numerator: fr1.numerator * fr2.numerator,
//         denominator: fr1.denominator * fr2.denominator
//     }
//     return getReductedFraction(result)
// }

// console.log(getMulOfFractions(fraction1, fraction2))

// 4 Функция деления 2 - х объектов - дробей.

// function getDivOfFractions(fr1: Fraction, fr2: Fraction) {
//     const result = {
//         numerator: fr1.numerator * fr2.denominator,
//         denominator: fr1.denominator * fr2.numerator
//     }
//     return getReductedFraction(result)
// }

// console.log(getDivOfFractions(fraction1, fraction2))

