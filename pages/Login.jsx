import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { auth, signInWithGoogle } from '../src/firebase';
import { Link,useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';

const Login = ({ onToggleView }) => {
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
      // SUCCESS! User is logged in and verified.
      // Now, redirect them to the dashboard.
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
    } catch (error) {
      setError(`Google sign-in failed: ${error.message}`);
    }
  };

  if (isForgotPassword) {
    return (
      <div className="form-wrapper">
        <div className="form-header">
          <h2>Reset Your Password</h2>
          <p>Enter your email to receive a reset link.</p>
        </div>

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message" style={{textAlign:'center', color:'green'}}>{message}</p>}

        <form onSubmit={handlePasswordReset} noValidate>
          <div className="input-group">
            <FiMail className="input-icon" />
            <input type="email" id="reset-email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder=" " />
            <label htmlFor="reset-email">Email</label>
          </div>
          <button type="submit" className="primary-button">Send Reset Link</button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <span onClick={() => setIsForgotPassword(false)} className="toggle-link">
            &larr; Back to Login
          </span>
        </div>
      </div>
    );
  }

  return (
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
  );
};

export default Login;