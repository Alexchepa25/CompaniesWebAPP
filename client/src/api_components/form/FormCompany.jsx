import React from 'react'
import { Company } from '../../api_pages/companies/Company'
import './formStyle.css'

export const FormCompany = (props) => {
  return (  
    <section className = 'form'>
      <Company         
        {...props}
      />    
    </section>
  )
}
