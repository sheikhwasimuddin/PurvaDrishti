import React, { useState, useEffect } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiCheckCircle, FiXCircle, FiMapPin } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { auth, db, signInWithGoogle } from '../src/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { Link ,useNavigate} from 'react-router-dom';
const Signup = ({ onToggleView }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState('');
  const [siteLocation, setSiteLocation] = useState('');

  const [validation, setValidation] = useState({
    minLength: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false,
  });

  useEffect(() => {
    setValidation({
      minLength: password.length >= 8,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*]/.test(password),
    });
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const isPasswordValid = Object.values(validation).every(Boolean);
    if (!isPasswordValid) {
      return setError('Your password does not meet all the requirements.');
    }
    if (!firstName || !lastName || !email || !password || !agreedToTerms || !siteLocation) {
      return setError('Please fill in all fields, select a site, and agree to the terms.');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: 'user',
        siteLocation: siteLocation
      });

      setSignupSuccess(true);
    } catch (error) {
      setError(`Signup failed: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(`Google sign-up failed: ${error.message}`);
    }
  };

  if (signupSuccess) {
    return (
      <div className="form-wrapper success-message">
        <FiCheckCircle className="success-icon" />
        <h2>Account Created!</h2>
        <p>A verification link has been sent to your email address:</p>
        <p className="success-email">{email}</p>
        <p>Please check your inbox to activate your account.</p>
        <button 
        onClick={() => navigate("/auth")} 
        className="primary-button"
      >
        Back to Login
      </button>
      </div>
    );
  }
const navigate = useNavigate();
  return (
    
    <div className="form-wrapper">
      <div className="form-header">
        <h2>Create an account</h2>
        <p>
          Already have an account? <Link to="/auth" className="toggle-link">
          Log In
        </Link>
        </p>
      </div>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="name-inputs">
          <div className="input-group">
            <FiUser className="input-icon" />
            <input type="text" id="signup-first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder=" " />
            <label htmlFor="signup-first-name">First name</label>
          </div>
          <div className="input-group">
            <input type="text" id="signup-last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder=" " />
            <label htmlFor="signup-last-name">Last name</label>
          </div>
        </div>
        <div className="input-group">
          <FiMail className="input-icon" />
          <input type="email" id="signup-email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder=" " />
          <label htmlFor="signup-email">Email</label>
        </div>
        <div className="input-group">
          <FiLock className="input-icon" />
          <input
            type={passwordVisible ? "text" : "password"}
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="signup-password">Enter your password</label>
          <span className="password-toggle-icon" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <div className="password-requirements">
          <div className={`requirement-item ${validation.minLength ? 'valid' : 'invalid'}`}>
            {validation.minLength ? <FiCheckCircle /> : <FiXCircle />} At least 8 characters
          </div>
          <div className={`requirement-item ${validation.hasUpper ? 'valid' : 'invalid'}`}>
            {validation.hasUpper ? <FiCheckCircle /> : <FiXCircle />} One uppercase letter
          </div>
          <div className={`requirement-item ${validation.hasNumber ? 'valid' : 'invalid'}`}>
            {validation.hasNumber ? <FiCheckCircle /> : <FiXCircle />} One number
          </div>
          <div className={`requirement-item ${validation.hasSpecial ? 'valid' : 'invalid'}`}>
            {validation.hasSpecial ? <FiCheckCircle /> : <FiXCircle />} One special character (!@#$...)
          </div>
        </div>

        <div className="input-group">
          <FiMapPin className="input-icon" />
          <select
            id="site-location"
            value={siteLocation}
            onChange={(e) => setSiteLocation(e.target.value)}
            required
            className="custom-select"
          >
            <option value="" disabled>-- Select a Site Location --</option>
            <option value="Bageshwar district, Uttarakhand">Bageshwar district, Uttarakhand</option>
            <option value="Pithoragarh, Chamoli, Uttarkashi (Uttarakhand)">Pithoragarh, Chamoli, Uttarkashi (Uttarakhand)</option>
            <option value="Bailadila Range, Chhattisgarh">Bailadila Range, Chhattisgarh</option>
            <option value="Aamdai Ghati / Bastar region, South Chhattisgarh">Aamdai Ghati / Bastar region, South Chhattisgarh</option>
            <option value="Aravalli Range regions (Haryana / Rajasthan)">Aravalli Range regions (Haryana / Rajasthan)</option>
          </select>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="agree-terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            required
          />
          <label htmlFor="agree-terms">I agree to the Terms & Conditions</label>
        </div>
        <button type="submit" className="primary-button">Create account</button>
      </form>
      <div className="social-login-section">
        <div className="separator"><span>Or register with</span></div>
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

export default Signup;