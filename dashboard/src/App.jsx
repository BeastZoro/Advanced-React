import { useState } from 'react'
import Siderbar from './components/Siderbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
