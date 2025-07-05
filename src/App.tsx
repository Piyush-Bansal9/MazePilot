import { useRef} from 'react'
import './App.css'
import { PathFindingProvider } from './context/PathFindingContext'
import { TileContextProvider } from './context/TileContext'
import { SpeedContextProvider } from './context/SpeedContext'
import { Grid } from './components/Grid'
import { Nav } from './components/Nav'

function App() {
  const isVisualisationRunning = useRef(false);

  return (
    <PathFindingProvider>
      <TileContextProvider>
        <SpeedContextProvider>
          <div className='h-screen w-screen flex flex-col items-center'>
            <Nav/>
            <Grid isVisualisationRunning = {isVisualisationRunning}/>
          </div>
        </SpeedContextProvider>
      </TileContextProvider>
    </PathFindingProvider>
  )
}

export default App
