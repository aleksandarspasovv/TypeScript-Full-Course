type Todo = {
 title: string,
 priority: 'High' | 'Normal' | 'Low',
 isCompelte: boolean,
 description? : string, //string or undefined
 dueDate: Date | string
}



function extendTodo3(todo: Todo) {
    switch (todo.priority){
        case 'High':
            console.log('High')
            break
        case 'Low':
            console.log('Low')
            break

        case 'Normal':
            console.log('Normal')
            break
        default:
            const exhaustCheck: never = todo.priority
            return exhaustCheck // this will give an error of aythring is added to the todo.priority

    }
}

//never type is that it is Never possible to be anuthing