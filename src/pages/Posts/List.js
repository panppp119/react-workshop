import React, { useState, useEffect } from 'react'

import PostForm from '../../components/PostForm'
import PostList from '../../components/PostList'
import { getPosts, createPost, deletePost } from '../../actions/posts'

function List() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    try {
      const response = await getPosts()

      if (response.status === 200) {
        setPosts(response.data)
      }
    } catch (error) {
      alert(error)
    }
  }

  const addPost = async (data) => {
    try {
      const response = await createPost(data)

      if (response.status === 201) {
        getList()
      }
    } catch (error) {
      alert(error)
    }
  }

  const delPost = async (id) => {
    try {
      const response = await deletePost(id)

      if (response.status === 200) {
        getList()
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div
      className='App'
      style={{
        textAlign: 'center',
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
      }}
    >
      <h1>Posts</h1>

      <PostForm addPost={addPost} />
      <PostList posts={posts} delPost={delPost} />
    </div>
  )
}

export default List
