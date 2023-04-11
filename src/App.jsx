import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Header/Navbar';

const App = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;