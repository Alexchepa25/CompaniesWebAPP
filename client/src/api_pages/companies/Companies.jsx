import React from 'react'
import { RowCompany } from './RowCompany';
import './companyStyle.css';

export const Companies = ({companies, title, remove}) => {
  if(!companies.length) { 
    return (
      <div> 
        <h2 className='center'>Company is not found</h2>
      </div>
    )
  }
  return (    
    <section>        
      <h1 className='center'>{title}</h1>
      <table className='table'>
        <tr className='row tr'>
            <th className='row'>Name</th>           
            <th className='row'>Address</th>
            <th className='row'>Service of activity</th>
            <th className='row'>Number of employees</th>
            <th className='row'>Description</th>
            <th className='row'>Type</th>
            <th className='row'>Actions</th>
        </tr>
      </table> 
      {companies.map((company, index) => 
          <RowCompany remove={remove} number={index + 1} company={company} key={company.id}/>
      )}       
    </section>
  )
}

