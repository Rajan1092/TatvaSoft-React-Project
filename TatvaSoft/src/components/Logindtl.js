import React from 'react'
import {Link} from 'react-router-dom'
import './Logindtl.css'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const validate = values => {
  const errors = {};
  if (!values.fname) {
    errors.fname = 'Required';
  } else if (values.fname.length > 15) {
    errors.fname = 'Must be 15 characters or less';
  }

  if (!values.lname) {
    errors.lname = 'Required';
  } else if (values.lname.length > 20) {
    errors.lname = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 8) {
      errors.password = 'Must be 8 characters or less';
    }
    if (!values.repassword) {
      errors.repassword = 'Required';
    } else if (values.repassword.length > 8) {
      errors.repassword = 'Must be 8 characters or less';
    }

  return errors;
};


function Logindtl() {
  const [values, setValues] = React.useState({});
const handleChange = event => {
    setValues(prevValues => ({
      ...prevValues,
    
      [event.target.name]: event.target.value
    })
  )}
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      
      email:'',
      password:'',
      



  },
  validate,
  handleChange,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      navigate('/book')
    },
  });
  return (
    <>
    <Header />
       <div className='reg-login-heading'>
                <Link to='/loginreg' className='link'><h3>Login Or</h3></Link>
                <Link to='/' className='link'><h3>Create an Account</h3></Link>
        </div>
        <form>
                <div className='box1'>
                    <p>User Login</p>
                </div>
                <div className='box2'>
                    <input type='email' placeholder='Email Address'  onChange={formik.handleChange} value={formik.values.email} />
                    <input type='password' placeholder='Password'  onChange={formik.handleChange} value={formik.values.password} />
                    <button type='submit' >Login </button>
                </div>
                </form>
            
    <div>Loginbox css is incomplete for this page</div>
    </>
  )
}

export default Logindtl