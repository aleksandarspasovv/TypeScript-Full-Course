type Todo = {
    name?: string,
    completed: boolean,
    address: {
        street: string
    }
}

type FormTodoRequired = Required<Todo>
type FormTodoPartial = Partial<Todo>


type FormTodoRequiredName = Required<Pick<Todo, 'name'>> & Omit<Todo, 'name'>
// this is going tot ake the anme and make it required and Leave the rest as thrya re


type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T

type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>
