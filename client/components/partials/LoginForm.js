import React, {Component} from 'react'
import TextFieldGroup from './common/TextFieldGroup'
import validateInput from '../../../server/shared/validations/login'
import {connect} from 'react-redux'
import {login} from '../../actions/loginActions'
import {browserHistory} from 'react-router'

/*
  form state:
    fields, errors, isLoading
  handlers: 
    onSubmit, onChange
  form validations: 
    do server side validation first before client
    if valid, dispatch thunk action and handle response

*/

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid(){
    const {errors, isValid} = validateInput(this.state);

    if(!isValid){
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(e){
    e.preventDefault();
    if(this.isValid()){
      this.setState({errors: {}, isLoading: true});
      this.props.login(this.state)
        .then(res => {
          console.log(res.data);
          // this.props.addFlashMessage({
          //   type: 'success',
          //   text: 'You have successfully logged in.'
          // });
          browserHistory.push('/');
        })
        .catch(err => {
          console.log(err.response.data);
          this.setState({errors: err.response.data, isLoading: false});
        });
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup 
          field='identifier'
          label='Username'
          value={this.state.identifier}
          error={this.state.errors.identifier}
          onChange={this.onChange}/>

        <TextFieldGroup 
          field='password'
          type='password'
          label='Password'
          value={this.state.password}
          error={this.state.errors.password}
          onChange={this.onChange}/>

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

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default connect(null, {login})(LoginForm);