import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './List'
import PostView from './View'

function PostsRoutes() {
  return (
    <Router>
      <Route exact path='/' component={List} />
      <Route exact path='/:id' component={PostView} />
    </Router>
  )
}

export default PostsRoutes
