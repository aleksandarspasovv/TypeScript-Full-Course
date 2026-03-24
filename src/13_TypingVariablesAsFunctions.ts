function printSum(a: number, b: number, callBack: (sum: number) => void){
    callBack(a + b)
}

printSum(1, 2, () => {
    console.log()
})


type PrintNameFunc = (name: string) => void //this is the way to decalre a function as a type
