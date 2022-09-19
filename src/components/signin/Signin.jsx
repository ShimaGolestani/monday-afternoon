
import React, {useRef}  from 'react'
import './signin.css'
import ReCAPTCHA from 'react-google-recaptcha';
import { Field, Form, Formik,} from 'formik';
import ValidateNationalId from '../Validation/ValidationNationalId';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';


const Signin = () => { 

  
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  // API
  const loginOnSubmit = (values) => {
    const url = "login";
    const customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
    };

    var jsonObject = { 
      username : values.code,
      password : values.password};


    axios.post(url,JSON.stringify(jsonObject), customConfig).then(res => {
        if(res.data.hasOwnProperty('token')){
          localStorage.setItem('accessToken',res.data.token)
          navigate('/')
        }else{
          console.log(res.data) // msg: username and password not valid
        }
    }).catch(err => {
        console.log(err);
    })
  }

  const validate = values => {
    let errors = {}
    // if (!values.code) {
    //   errors.code = 'کد ملی خود را وارد نمایید'
    // }
    // else if (!/^[0-9]{10}$/i.test(values.name)) {
    //   errors.code = 'لطفا کد ملی ده رقمی خود را وارد نمایید'
    // }
    if(!ValidateNationalId(values.code) ||  values.code === "123456789"){
      errors.code= 'لطفا کد ملی ده رقمی خود را وارد نمایید'
     }
    
    if (!values.password){
      errors.password= 'رمزعبور اشتباه است'
    }
    return errors
  }

  const captcha = useRef ();


  const onChange = () => {
      console.log(captcha)

  }

  // console.log('Visted fields', formik.touched)


  return (
   <>
    {
      token ?
        <Navigate replace to="/" />
      :
      
      <Formik
      const initialValues = {{
       code:"",
       password:""
     }}
     onSubmit={loginOnSubmit}
     validate={validate}
     >
       {({ errors, touched }) => (
        
       
     
  
      <Form className="auth-wrapper" >
       <div className='auth-inner '>
           <h2>کارگزاری تدبیرگران فردا</h2>
           <div className="mb-3 ">
             <label htmlFor='code'>نام کاربری</label>
             <Field
               name='code'
               type="text"
               className="form-control"
               placeholder="کد ملی خود را وارد کنید"
               />
             {touched.code || errors.code ? <div className='error'>{errors.code}</div> : null}
           </div>
           <div className="mb-2 ">
             <label htmlFor='password'>رمز عبور</label>
             <Field
               name='password'
               type="password"
               className="form-control"
               placeholder="رمز عبور خود را وارد کنید"
             />
             {touched.password || errors.password ? <div className='error'>{errors.password}</div> : null}
           </div>
           <p className="forgot-password text-right">
             <a href="#">رمز خود را فراموش کرده ام؟</a>
           </p>
           <div className="mb-3 ">
             <div className="custom-control custom-checkbox">
               <input
                 type="checkbox"
                 className="custom-control-input"
                 id="customCheck1"
               />
               <label className="custom-control-label" htmlFor="customCheck1">
                 مرا بخاطر داشته باش
               </label>
             </div>
           </div>
           <div>
           <ReCAPTCHA
               ref={captcha}
               sitekey="6LcsH7IhAAAAAPFEDAOkCo6gfizp7GQdNfXsg8sd"
               onChange={onChange}
               style ={{justifyContent:"center" }}
               className="captcha"
            />
           </div>
           <div className="d-grid">
             <button type="submit" className="btn btn-success mt-3" >
               ورود
             </button>
           </div>
           <p className="sign-up text-center mt-3">
             <a className="sign-up" href="/sign-up"> ثبت نام</a>
           </p>
           </div>
        </Form>
        
    )}
  </Formik>
  
    }
    
   </>
  )
}

export default Signin