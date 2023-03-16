



import React from 'react'
import './Reg.css'
import './textbox.css'
import RedButton from './RedButton';
import {Link} from 'react-router-dom'
import { useFormik} from 'formik'

import {useNavigate} from "react-router-dom"
import Header from './Header';
import Search from './Search';
import Footer from './Footer';



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
 
 
  


function Reg() {
  
  const navigate = useNavigate();
 
    const [values, setValues] = React.useState({});
    const handleChange = event => {
        setValues(prevValues => ({
          ...prevValues,
        
          [event.target.name]: event.target.value
        })
      )}
    const formik = useFormik({
        initialValues: {
            fname:'',
            lname:'',
            email:'',
            password:'',
            repassword:''



        },
        validate,
        handleChange,
        onSubmit: values => {
            
          navigate('/book')
          },
      
    });




  return (
   <>
    <Header />
            <Search placeholder="What are you looking for..." />
   <div className='reg-login-heading'>
                <Link to='/loginreg' className='link'><h3>Login Or</h3></Link>
                
                <Link to='/' className='link'><h3>Create an Account</h3></Link>
            </div>
            <div className='reg-sub-heading'>
                <span className='reg-info'>Personal Information </span>
                <hr></hr>
               
            </div>
            <div className='reg-login-container'>
                <form className='reg-login-form' onSubmit={formik.handleSubmit}>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="fname">First Name</label>
                            <input type="text" id='fname' className='textBox' name='fname' onChange={formik.handleChange} value={formik.values.fname}  onBlur={formik.handleBlur}></input>
                            {formik.touched.fname && formik.errors.fname ? (
         <div>{formik.errors.fname}</div>
       ) : null}
 
                        </div>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="lname">Last Name</label>
                            <input type="text" id='lname' className='textBox' name='lname' onChange={formik.handleChange} value={formik.values.lname}  onBlur={formik.handleBlur}></input>
                            {formik.touched.lname && formik.errors.lname ? (
         <div>{formik.errors.lname}</div>
       ) : null}
 
                        </div>
                    </div>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="email">Email Address</label>
                            <input type="email" id='email' className='textBox' name='email' onChange={formik.handleChange} value={formik.values.email}  onBlur={formik.handleBlur}></input>
                            {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
                        </div>
                    </div>
                    <div className='reg-holder'>
                    <div className='reg-sub-holder'>
                        <select id="Roles" value="Roles" >
                            <option value="Buyer" >Buyer</option>                   
                            <option value="Seller" >Seller</option>
                        </select>
                        </div>
                    </div>
                    <div className='reg-sub-heading' id='reg-login'>
                        <span className='reg-info' style={{ margin: "0px" }}>Login Information</span>
                        <hr></hr>
                    </div>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="password">Password</label>
                            <input type="password" id='password' className='textBox' name='password' onChange={formik.handleChange} value={formik.values.password}  onBlur={formik.handleBlur}></input>
                            {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
 
                        </div>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="repassword">Confirm Password</label>
                            <input type="password" id='repassword' className='textBox' name='repassword' onChange={formik.handleChange} value={formik.values.repassword}  onBlur={formik.handleBlur}></input>
                            {formik.touched.repassword && formik.errors.repassword ? (
         <div>{formik.errors.repassword}</div>
       ) : null}
 
                        </div>
                    </div>
                    <div className='reg-holder'>
                        <RedButton buttonText="Register"   type="submit" />
                    </div>
                </form>
                <hr></hr>
            </div>
            <Footer />
   </>
  )
}

export default Reg