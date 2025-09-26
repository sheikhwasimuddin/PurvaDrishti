import React, { useCallback, useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import '../App.css'; 

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const toggleView = useCallback(() => {
    setIsLoginView(prevMode => !prevMode);
  }, []);

  return (
    <div className="auth-container-split">
      <div className="auth-visual-pane">
        <div className="auth-branding-logo">
          <span>PURVA DRISTI</span>
        </div>
        <div className="auth-motto">
          Capturing Insights. Creating Foresight.
        </div>
        <a href="/" className="back-to-website-btn">
          Back to website &rarr;
        </a>
      </div>
      <div className="auth-form-pane">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        {isLoginView 
          ? <Login onToggleView={toggleView} /> 
          : <Signup onToggleView={toggleView} />}
      </div>
    </div>
  );
}

export default AuthPage;