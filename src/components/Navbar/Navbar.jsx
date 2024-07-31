import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AuthContext } from '../AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { role, updateRole } = useContext(AuthContext);
  return (
    <nav className='navbar'>
      <div className='title'>Tender Management System</div>
      <div className='navbar-menu'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/user" className='link'><Button variant="contained" size="small" onClick={() => updateRole('user')}>User Panel</Button></Link>
        <Link to="/admin" className='link'><Button variant="contained" size="small" onClick={() => updateRole('admin')}>Admin Panel</Button></Link>
        <Link to="/bid" className='link'><Button variant="contained" size="small">Bid Manage</Button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
