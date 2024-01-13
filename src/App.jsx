import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextEditor from './TextEditor'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<TextEditor />
		</>
	)
}

export default App
