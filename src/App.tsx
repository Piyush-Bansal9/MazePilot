import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PathFindingProvider } from './context/PathFindingContext'
import { TileContextProvider } from './context/TileContext'
import { SpeedContextProvider } from './context/SpeedContext'
import { Grid } from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PathFindingProvider>
      <TileContextProvider>
        <SpeedContextProvider>
          <div className='h-screen w-screen flex flex-col'>
            <Grid/>
          </div>
        </SpeedContextProvider>
      </TileContextProvider>
    </PathFindingProvider>
  )
}

export default App
