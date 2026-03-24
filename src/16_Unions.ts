type Todo = {
    name: string,
    staus: 'Complete' | 'Incomplete'| 'Draft'
}

type Person = {
    name: string,
    age: number
}

type TodoPerson = Todo | Person | {name: string}

const todo: Todo = {name: 'Task', staus: "Complete"}