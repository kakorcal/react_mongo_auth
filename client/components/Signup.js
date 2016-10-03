import React, {Component} from 'react'
import SignupForm from './partials/SignupForm'
import {connect} from 'react-redux'
import {userSignupRequest} from '../actions/signupActions'
import {addFlashMessage} from '../actions/flashMessages'

class Signup extends Component{
  render(){
    return (
      <div>
        <h1>Signup</h1>
        <hr/>
        <SignupForm 
          userSignupRequest={this.props.userSignupRequest}
          addFlashMessage={this.props.addFlashMessage}
        />
      </div>
    );
  }
}

Signup.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};
// can pass null if you don't need the redux store
export default connect(null, {userSignupRequest, addFlashMessage})(Signup);