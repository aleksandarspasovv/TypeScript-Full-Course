const person = {
    name: 'Alex',
    age: 30
}

Object.entries(person).forEach(([key, value]) => {
    console.log(key, value)
})

type Tuple = [string, string | number]
const tupleValue = ['Alex', 30]