import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Posts from './pages/Posts'

function App() {
  return (
    <Router>
      <Route path='/' component={Posts} />
    </Router>
  )
}

export default App
