type Options = {
    debugMdoe: boolean
}


function printName2(name = 'Alex', options?: Options){
    console.log(name, options)
}