import React, { useState, useReducer } from 'react'

type Action = { type: 'INCREASE'} | { type: 'DECREASE'}

function reducer(state: number, action: Action): number { // 숫자를 리턴
    switch(action.type) {
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        default:
            throw new Error('Unhandled Action')
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
    const onIncrease = () => dispatch({type: 'INCREASE'})
    const onDecrease = () => dispatch({type: 'DECREASE'})
    // const [count, setCount] = useState<number>(0) // <number> (Generics: 어떤 타입을 가지고 있을지 설정)
    //                                               // useState는 Generics를 사용하지 않아도 알아서 타입을 유추
    // const onIncrease = () => setCount(prevCount => prevCount + 1)
    // const onDecrease = () => setCount(count - 1)

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter

/*
    useState에서 Generics를 사용하는 경우

    1. 상태가 null일 수도 있고 아닐 수도 있을 때

        type Information = { name: string, description: string }
        const [info, setInfo] = useState<Information | null>(null)

    2. 상태의 타입이 까다로운 구조를 가진 객체 또는 배열일 때

        type Todo = { id: number, text: string, done: boolean }
        const [todos, setTodos] = useState<Todo[]>([]) // 빈 배열만 넣었을 때 해당 배열이 어떤 타입으로 이루어진 배열인지 추론 할 수 없기 때문에 Generics 를 명시

        Type Assertion(as)을 사용하여 리팩토링
        type Todo = { id: number, text: string, done: boolean }
        const [todos, setTodos] = useState([] as Todo[]) // '특정 값이 특정 타입이다.' 라는 정보를 덮어 쓸 수 있음
*/