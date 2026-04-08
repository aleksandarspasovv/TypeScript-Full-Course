type Person = {
    name: string,
    age: number,
    address: {
        street: string,
        number: number
    }
}

type SimplePerson = Omit<Person, 'address'>
