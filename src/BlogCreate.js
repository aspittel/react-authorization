import { DataStore } from 'aws-amplify'
import { useState } from 'react'

export default function BlogCreate ({ isAdmin }) {
  const [name, setName] = useState('')

  const createBlog = async e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={createBlog}>
      <h2>Create a Blog</h2>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' onChange={e => setName(e.target.value)} />
      <input type='submit' value='create' />
    </form>
  )
}
