import { withAuthenticator } from '@aws-amplify/ui-react'
import React from 'react'

import { Link } from 'react-router-dom'

function SignIn () {
  return (
    <div>
      <h1>Hello!</h1>
      <Link to='/'>home</Link>
    </div>
  )
}

export default withAuthenticator(SignIn)
