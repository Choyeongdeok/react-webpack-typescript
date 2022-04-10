import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './Greetings'
import Counter from './Counter'
import UserForm from './UserForm'

interface Props {}

const App = ({}: Props) => {
	const onClick = (name: string) => {
		console.log(`Hi, ${name}!`)
	}

	const onSubmit = (form: {name: string, description: string}) => {
		console.log(form)
	}

	return (
		<>
			{/* <Greetings name='Yeong Deok Cho' mark='!!!' onClick={onClick}/> */}
			{/* <Counter/> */}
			<UserForm onSubmit={onSubmit}/>
			<h2>Written By Typescript</h2>
		</>
		
	)
}
ReactDOM.render(<App />, document.getElementById('app'))