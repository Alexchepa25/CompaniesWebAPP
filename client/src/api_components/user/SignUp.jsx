import React, { useState } from 'react';
import { Button } from '../../api_tools/Button/Button';
import { Input } from '../../api_tools/Input/Input';
import './signStyle.css';
import axios from "axios";
import { Link } from 'react-router-dom';

export const SignUp = (props) => {  
  let formState = {
    email: '', 
    password: '', 
    first_name: '',    
    last_name: '',
    nickname: '',
    phone_number: '',
    position: '',
    description: ''
  }
  const [form, setForm] = useState(formState);

  const [validate, setValidate] = useState({
    emailDirty: false, 
    passwordDirty: false,
    first_nameDirty: false,
    last_nameDirty: false,
    nicknameDirty: false,
    phone_numberDirty: false,
    positionDirty: false,
    descriptionDirty: false,
    emailError: 'Email is required', 
    passwordError: 'Password is required', 
    requiredField: 'This field is required',
    validForm: false
  });

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'email': setValidate({...validate, emailDirty: true});
        break;
      case 'password': setValidate({...validate, passwordDirty: true});
        break;
      case 'first_name': setValidate({...validate, first_nameDirty: true});
        break;
      case 'last_name': setValidate({...validate, last_nameDirty: true});
        break;
      case 'nickname': setValidate({...validate, nicknameDirty: true});
        break;
      case 'phone_number': setValidate({...validate, phone_numberDirty: true});
        break;
      case 'position': setValidate({...validate, positionDirty: true});
        break;
      case 'description': setValidate({...validate, descriptionDirty: true});
        break;
      default: setValidate({...validate, passwordDirty: false});
    }
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

  const fieldHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });   
    const required = 'This field is required';    
    if(!e.target.value){
      setValidate({...validate, requiredField: required});      
    } else {
      setValidate('');
    }
  }

  const register = async ({...form}) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/registration', {...form});
      console.log('Data response: ', response);
      alert(response.data.message)
    } catch (e){
      console.log(e);
      alert(e);
    }
    document.getElementById("formSignUp").reset(); 
  }

  return (    
    <section className = 'sign'>
      <h2> {props.title}</h2>
      <form id="formSignUp">
        {(validate.emailDirty && validate.emailError) && <div className = 'error'>{validate.emailError}</div>}
        <label for = 'email'>Email</label>     
        <Input  id = 'email' 
          name='email' 
          type='email' 
          className = 'input' 
          placeholder='Enter your email' 
          required="required"
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
          onChange={e => passwordHandler(e)}
          onBlur={e => blurHandler(e)}
        />  
        {(validate.first_nameDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for = 'first_name'>First name</label>     
        <Input  id = 'first_name' 
          name = 'first_name' 
          type = 'text' 
          className = 'input' 
          placeholder = 'Enter your First name' 
          required = "required"         
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />
        {(validate.last_nameDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for = 'last_name'>Last name</label>     
        <Input  id = 'last_name' 
          name = 'last_name'
          type='text' 
          className = 'input' 
          placeholder='Enter your Last name' 
          required="required"
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />
        {(validate.nicknameDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for = 'nickname'>Nick name</label>     
        <Input  id = 'nickname' 
          name = 'nickname'
          type='text' 
          className = 'input' 
          placeholder='Enter your Nick name' 
          required="required"
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />
        {(validate.phone_numberDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for = 'phone_number'>Phone number</label>     
        <Input  id = 'phone_number' 
          name = 'phone_number'
          type='text' 
          className = 'input' 
          placeholder='Enter Phone number' 
          required="required"
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />
        {(validate.positionDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for = 'position'>Position</label>     
        <Input  id = 'position' 
          name = 'position'
          type='text' 
          className = 'input' 
          placeholder='Your Position' 
          required="required"
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />
        {(validate.descriptionDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for = 'description'>Description</label>     
        <Input  id = 'description' 
          name = 'description'
          type='text' 
          className = 'input' 
          placeholder='Description' 
          required="required"
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}          
        />
      </form>      
      <div className='upBtn'>
        <Button type = 'button' 
          onClick={() => register({...form})} 
        >Sign Up</Button>
        <Link to='/createCompany' className='btn'><Button>Create Company</Button></Link>
      </div>
    </section>
  )
}
 