import React, { useState } from 'react';
// 1. IMPORT ArrowLeft icon
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { ArrowLeft } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { auth, signInWithGoogle } from '../src/firebase';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!email || !password) {
      return setError('Please enter your email and password.');
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        await signOut(auth);
        setError('Your email is not verified. Please check your inbox for a verification link.');
      } else {
        navigate('/dashboard'); 
      }
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        setError('Login failed: Incorrect email or password.');
      } else {
        setError(`Login failed: ${error.message}`);
      }
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!email) {
      return setError('Please enter your email address.');
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset link sent! Please check your email inbox.');
    } catch (error) {
      setError(`Failed to send reset email: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setMessage('');
    try {
      await signInWithGoogle();
      // App.jsx's onAuthStateChanged will handle the redirect
    } catch (error) {
      setError(`Google sign-in failed: ${error.message}`);
    }
  };

  if (isForgotPassword) {
    return (
        // Wrapper to contain the back button and the form
      <div className="w-full max-w-md mx-auto p-4">
        {/* 2. ADD the Back to Home button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        <div className="form-wrapper">
          {/* ... Forgot Password form remains the same ... */}
        </div>
      </div>
    );
  }

  return (
    // Wrapper to contain the back button and the form
    <div className="w-full max-w-md mx-auto p-4">
      {/* 2. ADD the Back to Home button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
      
      <div className="form-wrapper">
        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="toggle-link">
              Sign Up
            </Link>
          </p>
        </div>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <FiMail className="input-icon" />
            <input type="email" id="login-email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder=" " />
            <label htmlFor="login-email">Email</label>
          </div>
          <div className="input-group">
            <FiLock className="input-icon" />
            <input type={passwordVisible ? "text" : "password"} id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder=" " />
            <label htmlFor="login-password">Password</label>
            <span className="password-toggle-icon" onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          <div style={{ textAlign: 'right', marginTop: '-10px', marginBottom: '10px' }}>
            <span onClick={() => setIsForgotPassword(true)} className="toggle-link" style={{fontSize: '0.9rem'}}>
              Forgot Password?
            </span>
          </div>
          <button type="submit" className="primary-button">Sign In</button>
        </form>

        <div className="social-login-section">
          <div className="separator"><span>OR</span></div>
          <div className="social-buttons-container">
            <button className="social-button google-button" onClick={handleGoogleSignIn}>
              <FcGoogle className="social-icon" /> Google
            </button>
            <button className="social-button apple-button">
              <AiFillApple className="social-icon" /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;