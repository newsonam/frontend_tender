import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import BidTable from './pages/BidTable';
import MainPage from './pages/MainPage';
import UserPanel from './components/UserPanel/UserPanel';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const showToastMessage = () => {
    toast.success("Tender data submitted !");
  };
  return (
    <div>
  
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bid" element={<BidTable />} />
            <Route path="/main" element={<MainPage showToastMessage={showToastMessage} />} />
            <Route path="/user" element={<ProtectedRoute element={<UserPanel />} roles={['user']} />} />
            <Route path="/admin" element={<ProtectedRoute element={<AdminPanel />} roles={['admin']} />} />
          </Routes>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
