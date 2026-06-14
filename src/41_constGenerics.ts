function someFunc<const T>(arr: T[]): T {
    return arr[0]
}

const a = ['red', 'green', 'blue']

console.log(someFunc(a))