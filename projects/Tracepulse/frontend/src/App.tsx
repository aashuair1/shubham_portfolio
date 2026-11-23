
import { useState } from 'react'
import './App.css'

import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login')

  return (
    <main>
      <h1>TracePulse</h1>

      {currentPage === 'login' ? (
        <Login onSwitchPage={() => setCurrentPage('signup')} />
      ) : (
        <Signup onSwitchPage={() => setCurrentPage('login')} />
      )}
    </main>
  )
}

export default App
