type Person = {
    name: string,
    age: number
}

type PeopleGroupedByName = {
    [index: string]: Person[]
}

type PeopleGroupedByName2 = Record<string, Person[]>// string could be replaced with Person['name']