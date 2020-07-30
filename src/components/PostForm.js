import React, { useState } from 'react'

const PostForm = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleChangeInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === 'title') {
      setTitle(value)
    } else {
      setBody(value)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()

    const data = { title, body }

    props.addPost(data)
  }

  return (
    <div className='post-form'>
      <form>
        <label>
          <span>Title</span>
          <input type='text' name='title' onChange={handleChangeInput} />
        </label>

        <label>
          <span>Body</span>
          <input type='text' name='body' onChange={handleChangeInput} />
        </label>

        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default PostForm
