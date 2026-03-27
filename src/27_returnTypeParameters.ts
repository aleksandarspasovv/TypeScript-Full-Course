function chekcLenght(a: string, b: number){
    return a.length > b
}

type ReturnTypeOfCheckLenght = ReturnType<typeof chekcLenght>


type Func = () => void

type ReturnTypeOfFunc = ReturnType<Func>

type ParametersFunc = Parameters<Func>

