import React, { useState, useEffect } from 'react';
import { auth, db } from '../src/firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import {
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser
} from 'firebase/auth';
import { FiUser, FiMail, FiLock, FiSettings, FiLayout, FiMap, FiBell, FiFileText, FiMapPin } from 'react-icons/fi';

const ProfilePage = () => {
  const user = auth.currentUser;
  const [profile, setProfile] = useState({ firstName: '', lastName: '', siteLocation: '' });
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        firstName: profile.firstName,
        lastName: profile.lastName,
        siteLocation: profile.siteLocation,
      });
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile.');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!currentPassword || !newPassword) {
        return setError('Please fill in both password fields.');
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setSuccess('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      setError(`Failed to change password: ${err.message}`);
    }
  };

  const handleDeleteAccount = async () => {
    setError('');
    setSuccess('');

    const password = prompt('To delete your account, please enter your password for confirmation.');
    if (!password) return;

    try {
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);
      const userDocRef = doc(db, 'users', user.uid);
      await deleteDoc(userDocRef);
      await deleteUser(user);
    } catch (err) {
      setError(`Failed to delete account: ${err.message}`);
    }
  };

  return (
    <div className="profile-page-layout">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>PURVA DRISTI</h2></div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><a href="/profile"><FiSettings /><span>Settings</span></a></li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="dashboard-header">
          <h1>Account Settings</h1>
        </header>
        <main className="profile-main">
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message" style={{textAlign:'center', color:'green'}}>{success}</p>}

          {/* Edit Profile Section */}
          <div className="profile-section">
            <h3>Edit Profile</h3>
            <form onSubmit={handleProfileUpdate}>
              <div className="name-inputs">
                <div className="input-group">
                  <FiUser className="input-icon" />
                  <input type="text" value={profile.firstName || ''} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} placeholder=" " />
                  <label>First Name</label>
                </div>
                <div className="input-group">
                  <input type="text" value={profile.lastName || ''} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} placeholder=" " />
                  <label>Last Name</label>
                </div>
              </div>
              <div className="input-group">
                <FiMail className="input-icon" />
                <input type="email" value={user?.email || ''} readOnly disabled />
                <label>Email</label>
              </div>

              {/* Site Location Dropdown */}
              <div className="input-group">
                <FiMapPin className="input-icon" />
                <select
                  value={profile.siteLocation || ''}
                  onChange={(e) => setProfile({ ...profile, siteLocation: e.target.value })}
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

              <button type="submit" className="primary-button">Save Changes</button>
            </form>
          </div>

          {/* Change Password Section */}
          <div className="profile-section">
            <h3>Change Password</h3>
            <form onSubmit={handleChangePassword}>
              <div className="input-group">
                <FiLock className="input-icon" />
                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder=" " />
                <label>Current Password</label>
              </div>
              <div className="input-group">
                <FiLock className="input-icon" />
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder=" " />
                <label>New Password</label>
              </div>
              <button type="submit" className="primary-button">Update Password</button>
            </form>
          </div>

          {/* Danger Zone */}
          <div className="profile-section danger-zone">
            <h3>Danger Zone</h3>
            <p>Deleting your account is a permanent action and cannot be undone.</p>
            <button onClick={handleDeleteAccount} className="danger-button">Delete My Account</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;