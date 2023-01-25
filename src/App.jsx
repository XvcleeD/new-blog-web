import React from 'react'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div>
      <Route path="/" component={Home}/>
      <Route path='/blog/:id' component={Blog}/>
    </div>
  )
}

export default App