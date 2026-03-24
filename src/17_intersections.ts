type Person = {
    name: string
    age: number
}

type PersonWithId = Person & {id: string}

const person = {id: 22, name: 'Alex', age:30}

//Interface

interface PersonInterface {
    name: string,
    age: number
}

interface PersonWithIdInterface extends Person {
    id: string
}

// cannot use & with primitive types
//cannto be number and a Persona as it will give an error