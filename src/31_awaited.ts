type Async = Promise<string>

type Value = Awaited<Async> // string


async function doSomething() {
    return 3
}

type Value2 = Awaited<ReturnType<typeof doSomething>>