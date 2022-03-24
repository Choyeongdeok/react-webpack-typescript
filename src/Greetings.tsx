import React from 'react'

type GreetingsProps = {
    name: string,
    mark: string,
    optional?: string,
    onClick: (name: string) => void // name을 매개변수로 받고 아무것도 리턴하지 않음
}

function Greetings({ name, mark, optional, onClick }: GreetingsProps) { // {...props}: props의 Type
    const handleClick = () => onClick(name)
    
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Here</button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings