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

let userInput = 10
let text = ''
while ( userInput) {
    text = text + userInput +'_'
    userInput--
}
console.log(text)

//Запросить число и степень. Возвести число в указанную
// степень и вывести результат.
let num = 10
let count = 3
let result = 1
while (count) {
    result *= num 
    count--
}
console.log(result)

//Запросить 2 числа и найти все общие делители.
let num1 = 416
let num2 = 793
text = ''
let min = num1 < num2 ? num1 : num2
while(min) {
    if(num1%min ==0 && num2%min == 0){
        text += min + '_'
    }
    min--
}
console.log(text)

num = 5
result = 1
while(num){
    if (num > 0) result *- num
    num--
}
console.log(result)