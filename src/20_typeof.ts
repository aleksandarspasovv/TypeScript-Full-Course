const person = {name: 'Andrey', age: 20, isProgrammer: true}
const people: (typeof person)[] = []

people.push({name: 'Sally', age: 20, isProgrammer: false})

function sayHi(name: string){
    console.log(name)
}

type FuncType = typeof sayHi