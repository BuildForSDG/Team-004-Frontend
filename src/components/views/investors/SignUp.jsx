import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Field from '../../common/Fields.jsx';


const fields = [
  {
    name: 'Full Name', type: 'text', placeholder: 'Please enter your Full Name', label: 'Full Name'
  },
  {
    name: 'phone', type: 'number', placeholder: 'Please enter your Phone Number', label: 'Phone Number'
  },
  {
    name: 'email', type: 'email', placeholder: 'Please enter your Email Address', label: 'Email Address'
  },
  {
    name: 'password', type: 'password', placeholder: 'Please enter your password', label: 'Choose Password'
  }
];

class Signup extends Component {
  render() {
    return (
        <div className="login-wrapper signup-wrapper" >
          <form action="">
            <div className='login-form-header'>
              <h2 className='signup-sub'>{this.props.subHeader}</h2>
            </div>
                {fields.map((field, i) => <Field
                            key={i}
                            {...field}
                            label={field.label}
                            htmlFor ={field.name}
                        />)}
                        <div className="form-group">
                          <button type="submit" className='btn-primary'>Register</button>

                        </div>
        </form>
        <div className='footer'>
            <h4>Already Have an account? <Link to={{ pathname: '/investors-login' }} className='blue-span'> Login </Link> </h4>
        </div>
        </div>

    );
  }
}

export default Signup;
