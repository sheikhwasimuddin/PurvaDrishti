import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { FiLock, FiEye, FiEyeOff, FiCheckCircle } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const oobCode = searchParams.get('oobCode');

  const [newPassword, setNewPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  const [loading, setLoading] = useState(true);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!oobCode) {
      setError('Invalid or missing password reset link.');
      setLoading(false);
      return;
    }
    // Verify the code from the URL is valid
    verifyPasswordResetCode(auth, oobCode)
      .then((userEmail) => {
        setEmail(userEmail);
        setIsValidCode(true);
        setLoading(false);
      })
      .catch((err) => {
        setError('The password reset link is invalid or has expired. Please request a new one.');
        setLoading(false);
      });
  }, [oobCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!newPassword) {
      return setError('Please enter a new password.');
    }
    if (!isValidCode) {
      return setError('Cannot reset password with an invalid link.');
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccess('Your password has been reset successfully!');
      // Redirect to login after a short delay
      setTimeout(() => navigate('/'), 4000);
    } catch (err) {
      setError(`Error resetting password: ${err.message}`);
    }
  };

  if (loading) {
    return <div className="loading-screen">Verifying link...</div>;
  }

  return (
    <div className="auth-container-split">
      <div className="auth-visual-pane">
        <div className="auth-branding-logo">
          <span>PURVA DRISTI</span>
        </div>
        <div className="auth-motto">
          Capturing Insights. Creating Foresight.
        </div>
      </div>
      <div className="auth-form-pane">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Set a New Password</h2>
            {isValidCode && !success && <p>Resetting password for: {email}</p>}
          </div>

          {error && <p className="error-message">{error}</p>}
          
          {success && (
            <div className="success-message" style={{textAlign: 'center'}}>
              <FiCheckCircle className="success-icon" />
              <h2>Success!</h2>
              <p>{success}</p>
              <p>Redirecting to login...</p>
            </div>
          )}

          {isValidCode && !success && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <FiLock className="input-icon" />
                <input 
                  type={passwordVisible ? "text" : "password"} 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required 
                  placeholder=" "
                />
                <label>Enter new password</label>
                <span className="password-toggle-icon" onClick={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
              <button type="submit" className="primary-button">Reset Password</button>
            </form>
          )}

          {!isValidCode && !loading && (
             <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <span onClick={() => navigate('/')} className="toggle-link">
                &larr; Back to Login
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
