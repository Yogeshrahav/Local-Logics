import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import UserPage from './Components/UserPage'

const App = () => {
  return (
    <Router>
     <div>
      <nav>
        <Link path='/'>Home</Link>
        <Link path='/UserPage'>UserPage</Link>
      </nav>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='UserPage' element={<UserPage/>}/>
      </Routes>
     </div>
    </Router>
  )
}

export default App