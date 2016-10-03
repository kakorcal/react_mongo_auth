import React, {Component} from 'react'
import SignupForm from './partials/SignupForm'

export default class Signup extends Component{
  render(){
    return (
      <div>
        <h1>Signup</h1>
        <hr/>
        <SignupForm/>
      </div>
    );
  }
}