type Person = {
    readonly id: string
}

type NumberArray = readonly number[]

const array: NumberArray = [1, 2, 3]

array.push //not allowed