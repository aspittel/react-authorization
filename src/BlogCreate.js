import { DataStore } from 'aws-amplify'
import { useState } from 'react'

import { Blog } from './models'

export default function BlogCreate ({ isAdmin }) {
  const [name, setName] = useState('')

  const createBlog = async e => {
    e.preventDefault()
    const newBlog = await DataStore.save(new Blog({
      name
    }))
    console.log(newBlog)
  }

  if (!isAdmin) {
    return <h2>You aren't allowed on this page!</h2>
  } else {
    return (
      <form onSubmit={createBlog}>
        <h2>Create a Blog</h2>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' onChange={e => setName(e.target.value)} />
        <input type='submit' value='create' />
      </form>
    )
  }
}
