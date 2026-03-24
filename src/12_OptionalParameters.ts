type Options = {
    debugMode?: boolean,
    indentLevel?: number,
}

function printName(name: string, {debugMode = false, indentLevel}: Options = {}){
    console.log(name, debugMode, indentLevel)
}

printName('Alex')


function sum(...nums: number[]){
    return //...
}