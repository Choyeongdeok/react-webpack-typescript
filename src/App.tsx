import React from 'react'
import ReactDOM from 'react-dom'

interface Props {}

const App = ({}: Props) => {
	return (
		<>
			<h1>Hello World!</h1>
			<h2>Written By Typescript</h2>
		</>
		
	)
}
ReactDOM.render(<App />, document.getElementById('app'))