import React, { useState, useEffect } from 'react'
import { getPost } from '../../actions/posts'

const PostView = (props) => {
  const [post, setPost] = useState({})

  useEffect(() => {
    getPostID()
  }, [])

  const getPostID = async () => {
    try {
      const response = await getPost(props.match.params.id)

      if (response.status === 200) {
        setPost(response.data)
      }
    } catch (error) {
      alert('error')
    }
  }

  return (
    <div className='post-view'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostView
