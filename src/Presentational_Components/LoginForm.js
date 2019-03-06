import React from 'react'
import { connect } from 'react-redux'
import { fetchingUser } from '../Redux/actions'

class LoginForm extends React.Component{

  state = {
    username: "",
    password: ""
  }

  handleLogin = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchingUser(this.state)
  }
  render(){
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          Login
        </div>
        <div>
          Username: <input type="text" name="username" onChange={this.handleLogin}/>
        </div>
        <div>
          Password: <input type="password" name="password" onChange={this.handleLogin}/>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </div>
    )
  }
}

export default connect(null, {fetchingUser})(LoginForm)
