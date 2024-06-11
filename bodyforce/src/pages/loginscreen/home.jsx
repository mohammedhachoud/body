import * as React from 'react';
import logo from '../../logo/logo.png';
export default function LoginPage() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h1 className="title">Sign-in</h1>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button className="login-button">Login</button>
        </div>
        <div className="logo-section">
        <img src={logo} alt="Logo" />
      </div>
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          height: 100vh;
          background-color: #000;
          justify-content: center;
          align-items: center;
          color: #fff;
        }
        .login-form {
          flex: 1;
          max-width: 400px;
          padding: 40px;
        }
        .title {
          color: #fecc09;
          font: 700 32px Poppins, sans-serif;
          margin-bottom: 40px;
        }
        .input-group {
          margin-bottom: 20px;
        }
        .input-group label {
          display: block;
          margin-bottom: 8px;
          font: 700 14px Poppins, sans-serif;
        }
        .input-group input {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: none;
          background-color: #2c2c2c;
          color: #fff;
          font: 400 14px Poppins, sans-serif;
        }
        .options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .remember-me {
          display: flex;
          align-items: center;
        }
        .remember-me input {
          margin-right: 8px;
        }
        .forgot-password a {
          color: #fff;
          text-decoration: none;
        }
        .login-button {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 5px;
          background-color: #fecc09;
          color: #000;
          font: 700 16px Poppins, sans-serif;
          cursor: pointer;
        }
        .logo-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .logo-section img {
          width: 500px; /* Adjust the width as needed */
          height: 700px; /* Maintain aspect ratio */
      }
      
      `}</style>
    </>
  );
}
