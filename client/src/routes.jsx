import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { AuthPage } from './api_pages/AuthPage';
import { Companies } from './api_pages/companies/Companies';
import { CreateCompany } from './api_pages/companies/CreateCompany';
import { DetailCompany } from './api_pages/companies/DetailCompany';
import { NewCompany } from './api_pages/companies/NewCompany';
import { Login } from './api_pages/user/Login';
import { Registration } from './api_pages/user/Registration';

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Routes>
                <Route exact path='/companies' element={<Companies />} />
                <Route path='/create' element={<CreateCompany />} />
				<Route path='/createCompany' element={<NewCompany />} />
                <Route path='/detail/:id' element={<DetailCompany />} />
                <Route path="*" element={<CreateCompany />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route exact path='/' element={<AuthPage />} />           
            <Route path="*" element={<AuthPage />} />            
            <Route path="/registration" element={<Registration />} />            
            <Route path="/login" element={<Login />} />             
        </Routes>
    )    
}
