type A<T> = T extends string ? true : false
//is this type T part of the string type
// and if yes frist if not second


const a: A<string> //retuns the true


type B<T> = T extends { path: string} ? true : false


const b: B<{path: 'Black'}> //retuen True

type C<T> = T extends { path: string} ? { label: string} : { age: number}

const c: C<{path: 'Black'}> = { label: 'Red'}

//usually going to be used like this

type N<T> = T extends {path: string} ? T : never

const n: N<{path: string}> = { path: "red"} 


//However extends works weirdly with unions

type Color = 'red' | 'blue' | 'green'

type Col<T> = T extends string ? T : never // int his case extends loops through all of the values and retusn a new union

const color:Col<Color> = 'red'