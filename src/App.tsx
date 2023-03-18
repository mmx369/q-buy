import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRouts from './components/AnimatedRoutes'
import { AppContextProvider } from './store/AppContextProvider'

function App() {
  return (
    <>
      <AppContextProvider>
        <Router>
          <AnimatedRouts />
        </Router>
      </AppContextProvider>
    </>
  )
}

export default App
