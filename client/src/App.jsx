import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Navbar } from './api_components/navbar/Navbar';
import { useRoutes } from './routes';

export const App = () => {
  const routes = useRoutes(false);
  return (    
    <Router>
      <div>
        <Navbar />
        {routes}
      </div>
    </Router>
  )
}
