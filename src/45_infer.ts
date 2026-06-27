type UnwrapArray<T> = T extends Array<infer E> ? E : never

const arrr = ['dadsa', 232424, true]

type Element = UnwrapArray<typeof arrr>


//------------------------------

type CustomAwaited<T> = T extends Promise<infer E> ? E : never

type A = Awaited<Promise<string>> //type of A is string


type B = CustomAwaited<Promise<string>> //now B does the same thing as A

//infer is great for unwraping something from a Generic

//------------------------------
type Return<F> = F extends (...args: infer P) => any ? P : never

type AF = ReturnType<() => false>
type BF = Return<(a: string, b: number) => false>