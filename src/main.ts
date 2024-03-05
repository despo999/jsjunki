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

