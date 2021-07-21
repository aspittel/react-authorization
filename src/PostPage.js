import { DataStore } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { Post } from './models'

export default function BlogPage ({ user }) {
  const { name } = useParams()

  const [post, setPost] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    const getData = async () => {
    }
    getData()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
  }
  return (
    <div>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        <label>Content</label>
        <input type='text' value={content} onChange={e => setContent(e.target.value)} />
        <input type='submit' value='update' />
      </form>
    </div>
  )
}
