function wait(duration: number): Promise<string> {
    return new Promise<string>(resovle => {
        setTimeout(() => resovle('Hi'), duration)
    })
}

wait(1000).then(value => {
    console.log(value.length)
})


async function wait2(duaration: number): Promise<Response> {
    return await fetch('dwad')
} //wehen we have an async function we always have Promise<Response>