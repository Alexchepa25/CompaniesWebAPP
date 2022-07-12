import React, { useState } from 'react'
import { Button } from '../../api_tools/Button/Button';
import { Input } from '../../api_tools/Input/Input';
import './companyStyle.css';


export const Company = ({create}) => {

  let companyState = {
    name: '', 
    address: '', 
    service_of_activity: '', 
    number_of_employees: '', 
    description: '', 
    type: ''
  }
  const [company, setCompany] = useState(companyState);

  const addNewCompany = (e) => {
    e.preventDefault();

    const newCompany = {
      ...company, id: Date.now()
    }
    
    create(newCompany);
    setCompany(companyState);
}

  const [validate, setValidate] = useState({
    nameDirty: false, 
    addressDirty: false,
    service_of_activityDirty: false,
    number_of_employeesDirty: false,
    descriptionDirty: false,
    typeDirty: false,
    requiredField: 'This field is required',
    validForm: false
  });

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'name': setValidate({...validate, nameDirty: true});
        break;
      case 'address': setValidate({...validate, addressDirty: true});
        break;
      case 'service_of_activity': setValidate({...validate, service_of_activityDirty: true});
        break;
      case 'number_of_employees': setValidate({...validate, number_of_employeesDirty: true});
        break;
      case 'description': setValidate({...validate, descriptionDirty: true});
        break;
      case 'type': setValidate({...validate, typeDirty: true});
        break;
      default: setValidate({...validate, descriptionDirty: false});
    }
  }

  const fieldHandler = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });   
    const required = 'This field is required';    
    if(!e.target.value){
      setValidate({...validate, requiredField: required});      
    } else {
      setValidate('');
    }
  }

  return (  
    <section className='company'>
     <h2>Company registration</h2>
      <form action="/create" method="post" id='formCompany'>
      {(validate.nameDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for = 'name'>Company name</label>     
        <Input  id = 'name' 
          name='name' 
          type='text' 
          className = 'input' 
          placeholder='Company name'   
          required="required"   
          value={company.name}                  
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />
        {(validate.addressDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for ='address'>Address</label> 
        <Input id = 'address'
          name="address"
          type="text"
          className = 'input'
          placeholder="Address"    
          required="required"  
          value={company.address}
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />   
        {(validate.service_of_activityDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}  
        <label for ='service_of_activity'>Service of activity</label> 
        <Input id = 'service_of_activity'
          name="service_of_activity"
          type="text"
          className = 'input'
          placeholder="Service of activity"  
          required="required"    
          value={company.service_of_activity}
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        /> 
        {(validate.number_of_employeesDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}
        <label for ='number_of_employees'>Number of employees</label> 
        <Input id = 'number_of_employees'
          name="number_of_employees"
          type="text"
          className = 'input'
          placeholder="Number of employees"  
          required="required"    
          value={company.number_of_employees}
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        /> 
        {(validate.descriptionDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}   
        <label for ='description'>Description</label> 
        <Input id = 'description'
          name="description"
          type="text"
          className = 'input'
          placeholder="Description"  
          required="required"    
          value={company.description}
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />  
        {(validate.typeDirty && validate.requiredField) && <div className = 'error'>{validate.requiredField}</div>}   
        <label for ='type'>Type</label> 
        <Input id = 'type'
          name="type"
          type="text"
          className = 'input'
          placeholder="Type"     
          required="required" 
          value={company.type}
          onChange={e => fieldHandler(e)}
          onBlur={e => blurHandler(e)}
        />     
      </form>
      <Button type = 'button' onClick={addNewCompany}>Create Company</Button>
    </section>
  )
}
