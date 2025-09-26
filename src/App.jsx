import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import your page components
import HomePage from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Features from '../pages/Features.jsx';
import AuthPage from '../pages/Login.jsx';
import Dashboard from '../pages/dashboard.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import Signup from '../pages/Signup.jsx';

// Import Firebase auth
import { auth } from './firebase.js'; 
import { onAuthStateChanged } from 'firebase/auth';

import './App.css';

// This helper component protects routes that require a user to be logged in.
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    // If no user is logged in, redirect to the authentication page.
    return <Navigate to="/auth" replace />;
  }
  return children;
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // This effect listens for any changes in the user's login state.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); 
      setLoading(false);
    });
    // Cleanup the subscription when the component unmounts.
    return () => unsubscribe();
  }, []);

  // While Firebase is checking the auth state, show a loading message.
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <BrowserRouter>
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />

        {/* --- Corrected Auth Routes --- */}
        {/* This logic automatically redirects a logged-in user away from the auth/signup pages. */}
        <Route 
          path="/auth" 
          element={currentUser ? <Navigate to="/dashboard" replace /> : <AuthPage />} 
        />
        <Route 
          path="/signup" 
          element={currentUser ? <Navigate to="/dashboard" replace /> : <Signup />} 
        />
        
        {/* --- Protected Routes --- */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute user={currentUser}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute user={currentUser}>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        
        {/* --- Fallback Route --- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;