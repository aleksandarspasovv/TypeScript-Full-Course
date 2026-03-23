type Person = {
    name: string,
     age: number,
    isProgrammer?: boolean,
    firnds?: string[]
    }

const person2: Person = {
    name: 'Alex',
    age: 30
}

interface Person2 { //can only bes used with objecsts
    name: string,
    age: number,
    address: {
        street: string,
    }
}