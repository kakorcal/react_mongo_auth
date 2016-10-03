import React, {Component} from 'react'

export default class SignupForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    if(Object.keys(this.state.errors)) this.setState({errors: {}});
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({isLoading: true});
    this.props.userSignupRequest(this.state)
      .then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err.response.data);
        this.setState({errors: err.response.data, isLoading: false});
      });
  }

  render(){
    const {errors} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="username" className='control-label'>Username:</label>
          <input type="text" 
            id='username' 
            className='form-control' 
            name='username' 
            onChange={this.onChange}/>
          {errors.username && <span className='help-block' style={{color:'red'}}>*{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className='control-label'>Password:</label>
          <input type="password"  
            id='password' 
            className='form-control' 
            name='password' 
            onChange={this.onChange}/>
          {errors.password && <span className='help-block' style={{color:'red'}}>*{errors.password}</span>}
        </div>
        <div className="form-group">
          <input type="submit" disabled={this.state.isLoading} className='btn btn-primary btn-lg' value='Submit'/>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};