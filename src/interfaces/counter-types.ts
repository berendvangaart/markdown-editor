export type CounterType = 'string'

export type CounterAction = {
    type: any,
    payload: number
}

export type CountState = {
    count: number
}


export type Store = {
    counter: CountState
}