import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from '../../common/Fields.jsx';


const fields = [
  {
    name: 'firstName', type: 'text', placeholder: 'Please enter your First Name', label: 'First Name'
  },
  {
    name: 'LasttName', type: 'text', placeholder: 'Please enter your Last Name', label: 'Last Name'
  },
  {
    name: 'email', type: 'email', placeholder: 'Please enter your Email Address', label: 'Email Address'
  },
  {
    name: 'password', type: 'password', placeholder: 'Please enter your password', label: 'Password'
  }
];

class SmeSignup extends Component {
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
            <h4>Already Have an account? <Link to={{ pathname: '/sme-login' }} className='blue-span'> Login </Link> </h4>
        </div>
        </div>

    );
  }
}

SmeSignup.propTypes = {
  subHeader: PropTypes.string
};

export default SmeSignup;
