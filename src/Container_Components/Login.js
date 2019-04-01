import React from "react"
import LoginForm from "../Presentational_Components/LoginForm"

import Button from '@material-ui/core/Button'

const Login = (props) => {
  return(
    <div>
      <LoginForm />
      <Button>
        test
      </Button>
    </div>
  )
}

export default Login
