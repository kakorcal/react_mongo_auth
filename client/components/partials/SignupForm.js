import React, {Component} from 'react'
import validateInput from '../../../server/shared/validations/signup'
import TextFieldGroup from './common/TextFieldGroup'

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

  isValid(){
    const {errors, isValid} = validateInput(this.state);
    if(!isValid) this.setState({errors});
    return isValid;
  }

  onSubmit(e){
    e.preventDefault();
    if(this.isValid()){
      this.setState({isLoading: true});
      this.props.userSignupRequest(this.state)
        .then(res=>{
          console.log(res.data);
        }).catch(err=>{
          console.log(err.response.data);
          this.setState({errors: err.response.data, isLoading: false});
        });
    }
  }

  render(){
    const {errors} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          label='Username'
          field='username'
          error={errors.username}
          value={this.state.username}
          onChange={this.onChange}
        />
        <TextFieldGroup
          label='Password'
          type='password'
          field='password'
          error={errors.password}
          value={this.state.password}
          onChange={this.onChange}
        />
        <div className="form-group">
          <input type="submit" 
            disabled={this.state.isLoading} 
            className='btn btn-primary btn-lg' 
            value='Submit'
          />
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};