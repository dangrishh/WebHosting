import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Spinner from './components/pages/users/Home/Spinner'; 
import Signup from './components/pages/users/Auth/registration';
import Login from './components/pages/users/Auth/login';
import ForgetPassword from './components/pages/users/Auth/forgetPassword';
import ResetPassword from './components/pages/users/Auth/resetPassword';
import Userdashboard from './components/pages/users/Home/Pages/userdashboard';
import Profile from './components/pages/users/Home/Pages/profile';
import Activities from './components/pages/users/Home/Pages/activities';
import AuthAdmin from './components/pages/admin/auth';
import AdminAnalytics from './components/pages/admin/Home/adminAnalytics';
import AdminActivities from './components/pages/admin/Home/adminActivities';
import AdminTask from './components/pages/admin/Home/adminTask';
import Pending from './components/pages/admin/Home/pending';
import Page404 from './Page404'
import './App.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Users */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />    
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activities/:id" element={<Activities />} />

          {/* Admin */}
          <Route path="/admin/auth" element={<AuthAdmin />} />
          <Route path="/admin/Analytics" element={<AdminAnalytics />} />
          <Route path="/admin/Activities" element={<AdminActivities />} />
          <Route path="/admin/users" element={<Pending />} />
          <Route path="/admin/Task/:id" element={<AdminTask />} />

          {/* Catch-all route for handling 404 errors */}
          <Route path="*" element={<Page404 />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
