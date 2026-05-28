type Person = {
    name: string
}

type Todo = {
    title: string
}

function print(obj: Person | Todo) {
    if ("name" in obj){
        console.log(obj.name)
    return
    }

    console.log(obj.title)

}