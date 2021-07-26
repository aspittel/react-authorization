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
      const posts = await DataStore.query(Post, p => p.title('eq', name))
      setPost(posts[0])
      setTitle(posts[0].title)
      setContent(posts[0].content)
    }
    getData()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    await DataStore.save(Post.copyOf(post, updated => {
      updated.title = title
      updated.content = content
    }))
  }
  return (
    <div>
      <h1>{name}</h1>
      {user.attributes && (post.owner === user.attributes.email) && (
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
          <label>Content</label>
          <input type='text' value={content} onChange={e => setContent(e.target.value)} />
          <input type='submit' value='update' />
        </form>
      )}
    </div>
  )
}
