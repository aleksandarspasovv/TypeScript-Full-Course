type Todo = {
 title: string,
 priority: 'High' | 'Normal' | 'Low',
 isCompelte: boolean,
 description? : string, //string or undefined
 dueDate: Date | string
}

function extendTodo (todo: Todo){
    if (typeof todo.dueDate === 'string'){ // string is a primitive type so it can be checked
        console.log(todo.dueDate.length)
    }

    if (todo.dueDate instanceof Date) {

    }//in the case of Date we use isnatnce of
}

function extendTodo2(todo: Todo){
    todo.description?.length // the  ? checks if the property is undefined or string
}


const form = document.querySelector<HTMLFormElement>('.form')
form?.addEventListener('submit', () => {}) // ? is there if the form is not there
form!.addEventListener('submit', () => {})// ! tels TS there will be a form - no Null

//Using Switch statments to narrow down a typoe


function extendTodo3(todo: Todo) {
    switch (todo.priority){
        case 'High':
            console.log('High')
            break
        case 'Low':
            console.log('Low')
            break
    }
}