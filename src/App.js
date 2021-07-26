import './App.css'

import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import BlogPage from './BlogPage'
import PostPage from './PostPage'
import BlogCreate from './BlogCreate'
import SignIn from './SignIn'

import { Blog } from './models'

function App () {
  const [blogs, setBlogs] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const blogData = await DataStore.query(Blog)
        setBlogs(blogData)
        const user = await Auth.currentAuthenticatedUser()
        setIsAdmin(user.signInUserSession.accessToken.payload['cognito:groups'].includes('admin'))
        setUser(user)
      } catch (err) {
        console.error(err)
      }
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
          {!user.attributes && <Link to='/sign-in'>Sign In</Link>}
          {user.attributes && <button onClick={async () => await Auth.signOut()}>Sign Out</button>}
          {isAdmin && <Link to='/blog/create'>Create a Blog</Link>}
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
