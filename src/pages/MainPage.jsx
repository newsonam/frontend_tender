import React, { useContext } from 'react';
import AddTender from './AddTender';
import TenderTable from './TenderTable';
import { AuthContext } from '../components/AuthContext';
import './style.css';

const MainPage = ({ showToastMessage }) => {
  const { role } = useContext(AuthContext);
  console.log("role value", role)
  return (
    <div className='main'>
      <h1>{role === 'user' ? 'USER PANEL' : 'ADMIN PANEL'}</h1>
      {role === 'admin' && <div className='addtender'>
        <AddTender showToastMessage={showToastMessage} />
      </div>
      }
      <div className='tender-table'>
        <h1>Tender Details</h1>
        <TenderTable showToastMessage={showToastMessage} />
      </div>
    </div>
  )
};

export default MainPage;
