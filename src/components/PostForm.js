import React, { useState } from 'react'

const PostForm = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className='post-form'>
      <form>
        <label>
          <span>Title</span>
          <input type='text' name='title' />
        </label>

        <label>
          <span>Body</span>
          <input type='text' name='body' />
        </label>

        <button>Add</button>
      </form>
    </div>
  )
}
