import React, { useState } from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false); // State to control rendering
  const [alertMessage, setAlertMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setAlertMessage('Please fill in all fields');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setAlertMessage('Login successful');
      clearForm();
      setIsLogin(true); // Set to true to redirect
    } else {
      setAlertMessage('Invalid username or password');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setAlertMessage('Please fill in all fields');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    setAlertMessage('Signup successful. Please login now.');
    setIsLogin(true); // Set to true to redirect
    clearForm();
  };

  const clearForm = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="text-start">
      <div className="g-font-b">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 justify-content-center ">
          {!isLogin ? (
            <Link to="/home">
              <div className='btn btn-dark btn-lg px-4 me-md-2 text-capitalize'>
                Continue as Guest
              </div>
            </Link>
          ) : (
            <Link to="/home">
              <div className='btn btn-dark btn-lg px-4 me-md-2 text-capitalize'>
                Continue Your Coffee
              </div>
            </Link>
          )}
          {!isLogin && (
            <button type="button" className="btn btn-outline-dark btn-lg px-4 me-md-2 text-capitalize" data-bs-toggle="modal" data-bs-target="#loginModal">
              Login
            </button>
          )}
        </div>
      </div>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Sign In</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {alertMessage && <div className={`alert ${alertMessage.includes('successful') ? 'alert-success' : 'alert-danger'}`} role="alert">{alertMessage}</div>}
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="loginUsername" className="form-label">Username</label>
                  <input type="text" className="form-control" id="loginUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-outline-dark">Sign In</button>
              </form>
              <p className="mt-3">Don't have an account? <button className="btn btn-link btn-sm" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button></p>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Sign Up</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {alertMessage && <div className={`alert ${alertMessage.includes('successful') ? 'alert-success' : 'alert-danger'}`} role="alert">{alertMessage}</div>}
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-3">
                  <label htmlFor="signupUsername" className="form-label">Username</label>
                  <input type="text" className="form-control" id="signupUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signupPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-outline-dark">Sign Up</button>
              </form>
              <p className="mt-3">Already have an account? <button className="btn btn-link btn-sm" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginModal" >Login</button></p>
              {/* <p className="mt-3">Already have an account? <button className="btn btn-link btn-sm" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => setIsLogin(true)}>Login</button></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
