import React from 'react'

const PostList = (props) => {
  return (
    <div className='post-list'>
      {props.posts.map((post, index) => {
        return (
          <div className='post-detail'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <button onClick={() => props.delPost(post.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default PostList
