import React, { useState } from 'react'
import { Input } from '../../api_tools/Input/Input'
import { Button } from '../../api_tools/Button/Button'
import './signStyle.css'
import axios from "axios";

export const SignIn = (props, create) => {  
  const [form, setForm] = useState({email: '', password: ''});
  const [validate, setValidate] = useState({
    emailDirty: false, 
    passwordDirty: false,
    emailError: 'Email is required', 
    passwordError: 'Password is required', 
    validForm: false
  });

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'email': setValidate({...validate, emailDirty: true});
        break;
      case 'password': setValidate({...validate, passwordDirty: true});
        break;
      default: setValidate({...validate, passwordDirty: false});
    }
  }

  const register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/registration', {email, password});
      console.log('Data response: ', response);
      alert(response.data.message)
    } catch (e){
      console.log(e);
      alert(e);
    }
    setForm({email: '', password: ''});
  }

  const emailHandler = (e) => {
    setForm({...form, email: e.target.value});
    const regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regExp.test(String(e.target.value).toLowerCase())){
      setValidate({...validate, emailError: 'Email is not correct'});
    } else {
      setValidate({...validate, emailError: ''});
    }
  }

  const passwordHandler = (e) => {
    setForm({...form, password: e.target.value});
    const required = 'Password is required';
    const errMessage = 'Password must be between 5 and 8 characters';
    if(e.target.value.length < 5 || e.target.value.length > 8){
      if(!e.target.value){
        setValidate({...validate, passwordError: required});
      }
      setValidate({...validate, passwordError: errMessage});
    } else {
      setValidate('');
    }
  }

  return (
    <section className = 'sign'>
      <h2> {props.title}</h2>
      <form action="/registration" method="post">
        {(validate.emailDirty && validate.emailError) && <div className = 'error'>{validate.emailError}</div>}
        <label for = 'email'>Email</label>     
        <Input  id = 'email' 
          name='email' 
          type='email' 
          className = 'input' 
          placeholder='Enter your email' 
          required="required"
          value={form.email}  
          onChange={e => emailHandler(e)}
          onBlur={e => blurHandler(e)}
        />
        {(validate.passwordDirty && validate.passwordError) && <div className = 'error'>{validate.passwordError}</div>}
        <label for ='password'>Password</label> 
        <Input id = 'password'
          name="password"
          type="password"
          className = 'input'
          placeholder="password"
          required="required"
          value={form.password}
          onChange={e => passwordHandler(e)}
          onBlur={e => blurHandler(e)}
        />         
      </form>
      <Button type = 'button'         
        onClick={() => register({...form})}         
      >Sign In</Button>
    </section>
  )
}
