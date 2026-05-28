// soemthing in between Any and Uknown 
//  where TypeSafety and code doesnt suffer

type Todo = {
    title: string
}


fetch('sds').then(res => res.json()).then(data => {
    return data as Todo
}).then(todo => ) //here TS says you know better, this is a Todo