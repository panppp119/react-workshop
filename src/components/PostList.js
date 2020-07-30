import React from 'react'
import { Link } from 'react-router-dom'

const PostList = (props) => {
  return (
    <div className='post-list'>
      {props.posts.reverse().map((post, index) => {
        return (
          <div
            className='post-detail'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
            key={index}
          >
            <div className='content' style={{ textAlign: 'left' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>

            <div className='actions'>
              <Link to={`/${post.id}`}>View</Link>
              <button onClick={() => props.delPost(post.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostList
