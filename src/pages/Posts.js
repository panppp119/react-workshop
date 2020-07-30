import React, { useState, useEffect } from 'react'

import PostForm from '../components/PostForm'

function Posts() {
  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <h1>Posts</h1>

      <PostForm />
    </div>
  )
}

export default Posts
