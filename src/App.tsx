import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PathFindingProvider } from './context/PathFindingContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PathFindingProvider>
      <div className='bg-white text-black'>Hi there</div>
    </PathFindingProvider>
  )
}

export default App
