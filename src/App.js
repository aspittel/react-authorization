import './App.css'

import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import BlogPage from './BlogPage'
import PostPage from './PostPage'
import BlogCreate from './BlogCreate'
import SignIn from './SignIn'

function App () {
  const [blogs, setBlogs] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getData = async () => {
    }
    getData()
  }, [])

  return (
    <div className='App'>
      <Switch>
        <Route path='/sign-in'>
          <SignIn />
        </Route>
        <Route path='/blog/create'>
          <BlogCreate isAdmin={isAdmin} />
        </Route>
        <Route path='/blog/:name'>
          <BlogPage user={user} />
        </Route>
        <Route path='/post/:name'>
          <PostPage user={user} />
        </Route>
        <Route path='/' exact>
          <h1>Blogs</h1>
          {blogs.map(blog => (
            <Link to={`/blog/${blog.name}`} key={blog.id}>
              <h2>{blog.name}</h2>
            </Link>
          ))}
        </Route>
      </Switch>
    </div>
  )
}

export default App
