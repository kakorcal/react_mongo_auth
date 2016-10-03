import React, {Component} from 'react'

export default class SignupForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState(
      Object.assign(this.state, {[e.target.name]: e.target.value})
    );
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="username" className='control-label'>Username:</label>
          <input type="text" 
            id='username' 
            className='form-control' 
            name='username' 
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password" className='control-label'>Password:</label>
          <input type="password"  
            id='password' 
            className='form-control' 
            name='password' 
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <input type="submit" className='btn btn-primary btn-lg' value='Submit'/>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};