import React, {Component} from 'react'
import requireAuth from '../utils/requireAuth'

class User extends Component{
  render(){
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}

export default requireAuth(User)