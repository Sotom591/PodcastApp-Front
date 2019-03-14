import React from "react"
import { connect } from 'react-redux'
import { signUpUser } from '../Redux/actions'


class SignUpForm extends React.Component {

//need to add avatar to state//
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  }

  handleSignUp = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUpUser(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    });
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Sign Up
          </div>
          <div>
            First Name: <input type="text" name="firstName" onChange={this.handleSignUp}/>
          </div>
          <div>
            Last Name: <input type="text" name="lastName" onChange={this.handleSignUp}/>
          </div>
          <div>
            Email: <input type="text" name="email" onChange={this.handleSignUp}/>
          </div>
          <div>
            Username: <input type="text" name="username" onChange={this.handleSignUp}/>
          </div>
          <div>
            Password: <input type="password" name="password" onChange={this.handleSignUp}/>
          </div>

          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, {signUpUser})(SignUpForm);
