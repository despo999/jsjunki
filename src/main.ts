import './style.css'
console.log("Hello")


console.log(typeof 12)
console.log(typeof '12')
console.log(typeof true)
console.log(parseInt('d'))
console.log(parseFloat('12.5wggwgw'))
console.log(typeof false)
console.log(typeof [])
console.log(typeof [])
console.log(typeof undefined)
console.log(null)
console.log(typeof null)
console.log(typeof alert)
console.log(+ 12.5)
console.log(String(12.5))
console.log(`В этой строке мы сложим 2 числа $newVar+5`)

let num1 = 1
let num2 = 2
console.log(2 > 1)
console.log(num1 == num2)
console.log(num1 != num2)
console.log(num1 != 1)
console.log(num1 === 1)
console.log(1 === +'1')
// console.log(2 != 1) 

console.log(+false)


// console.log(Boolean'')
// console.log(Boolean (0))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(+'')



let year = 2010
if (year == 2015) {
    console.log('yes')
} else {
    console.log('no')
}

// let year = 2010
if (year == 2015) {
    console.log('yes')
}
else if (year == 2010) {
    console.log('maybe')
} else {
    console.log('no')
}

let age = 18
let message
if (age>16) {
    message='helllo'
} else{
    message='too yung'
}
console.log (message)

message = age > 16 ? 'hello' : 'too yung'

const isThursday = new Date ().getDate() == 22
console.log(isThursday)

