import React, { Component } from 'react';
import Field from './common/Fields.jsx';

const fields = [
  {
    name: 'email', type: 'email', placeholder: 'Please enter your email address', label: 'Email Address'
  },
  {
    name: 'password', type: 'password', placeholder: 'Please enter your password', label: 'Password'
  }
];

class Login extends Component {
  render() {
    return (
        <div className="login-wrapper">
          <form action="">
            <div className='login-form-header'>
              <h1>{this.props.header}</h1>
              <h2>{this.props.subHeader}</h2>
            </div>
                {fields.map((field, i) => <Field
                            key={i}
                            {...field}
                            label={field.label}
                            htmlFor ={field.name}
                        />)}
                        <div className="form-group">
                          <button type="submit" className='btn-primary'>Login</button>

                        </div>
        </form>
        <div className='footer'>
            <h4>Forgot Password</h4>
            <h4>Don't Have an account? <span className='blue-span'>Sign Up </span> </h4>
        </div>
        </div>

    );
  }
}

export default Login;
