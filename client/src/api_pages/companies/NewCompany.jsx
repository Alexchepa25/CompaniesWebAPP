import React, { useState } from 'react';
import { FormCompany } from '../../api_components/form/FormCompany';
import { Companies } from './Companies';

export const NewCompany = () => {
  const [companies, setCompanies] = useState('');

  const createCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  }
  const removeCompany = (company) => {
    setCompanies(companies.filter(c => c.id !== company.id));
  }
  return (
    <section>
      <h2 className='none'>NewCompany</h2>
      <FormCompany create={createCompany} />      
      <Companies remove={removeCompany} companies={companies} title='List of Companies'/>
    </section>
  )
}
