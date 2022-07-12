import React from 'react';
import './companyStyle.css';

export const RowCompany = (props) => {

  return (
    <section>
      <h2 className='none'>RowCompany</h2>
      <table className='table'>
        <tr key={props.company.id} className='row'> 
            <td className='row'>{props.company.name}</td>           
            <td className='row'>{props.company.address}</td>
            <td className='row'>{props.company.service_of_activity}</td>
            <td className='row'>{props.company.number_of_employees}</td>
            <td className='row'>{props.company.description}</td>
            <td className='row'>{props.company.type}</td>
            <td className='row'>
            <button className='btnTable'>Show company</button><br />
            <button className='btnTable' onClick={() => props.remove(props.company)}>Delete company</button>
            </td>
        </tr>  
      </table> 
    </section>
  )
}
