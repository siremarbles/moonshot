import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Login extends Component {
  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className='container'>
        <h3>Login</h3>
        <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
          <fieldset className='form-group'>
            <label>Email: </label>
            <input { ...email } className='form-control' />
          </fieldset>
          <fieldset>
            <label>Password: </label>
            <input { ...password } type='password' className='form-control' />
          </fieldset>
          { this.renderAlert() }
          <button type='submit' className='btn btn-primary'>Login!</button>
        </form>
        <br />
        <br />
        <div>
          <h4>Or Sign up</h4>
          <Link to='/signup' className='btn btn-primary'>Sign up!</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Login);
