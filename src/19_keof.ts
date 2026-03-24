type Person = {
    name: string,
    age: number,
    isAdmin?: boolean
}

function getVaueNyKey(key: keyof Person, person: Person){
    return person[key]
}

const age = getVaueNyKey('age', {name: 'Alex', age: 30})