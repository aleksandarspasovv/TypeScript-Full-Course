type Todo = {
    name: string,
    task: string
}

type FinalTodo = Readonly<Todo> 

//as const can only be used on JS code 


Object.freeze() // retusn a copy of an objctb that is immutable