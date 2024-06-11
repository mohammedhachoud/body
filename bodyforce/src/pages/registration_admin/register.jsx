import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ImageWrapper = ({ src, alt }) => (
  <div className="image-wrapper">
    <img src={src} alt={alt} className="image" />
  </div>
);

const Button = ({ children, className }) => (
  <button className={`button ${className}`}>{children}</button>
);

const RegisterForm = () => {
  const [participantName, setParticipantName] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [birthday, setBirthday] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [member, setMember] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = { participantName, joinDate, birthday, contactNo, gender, role };
    setMember(newMember);
    console.log(newMember);
    console.log(member); // This will print the member object to the console
    //const response = await axios.post('/members', member);
    //console.log(response.data);
  };
  return (
    <form onSubmit={handleSubmit} className="register-form">
        <header className="header">
          <h1 className="title">Register</h1>
        </header>
        <div className="container-img">
        <div className="photo-attachment">
            <span className="photo-text">Attach Photo</span>
            <input style={{ display: 'none' }} id="file-upload" type="file" accept="image/*" capture="camera" />
<label htmlFor="file-upload">
  <ImageWrapper
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc11dec4123927fbe4b1fe31983959f2e6c1a149b88addf7b334cffe12c4747?apiKey=c870781db53a4609b6fa9f5a93cb9ccc&"
    alt="Attach photo icon"
  />
</label>
          </div>
          </div>
      <div className="form-row">
        <div className="form-group">
          <label>Name of Participant</label>
          <input type="text" 
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Date of Join</label>
          <input type="date" value={joinDate} onChange={(e) => setJoinDate(e.target.value)}  />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Birthday</label>
          <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)}  />
        </div>
        <div className="form-group">
          <label>Contact No.</label>
          <input type="tel" value={contactNo}
            onChange={(e) => setContactNo(e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Sexe</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="male">Coach</option>
            <option value="female">User</option>
            <option value="other">Other</option>
          </select>        
          </div>
      </div>
      <footer className="form-actions">
          <Button className="fingerprint-btn">Cordinate Fingerprint</Button>
          <div className="membership-actions">
            <Button className="membership-btn" type="submit">Avail Membership</Button>
            <Button className="cancel-btn">Cancel</Button>
          </div>
        </footer>
      <style jsx>{`
        .register-form {

          background-color: #858585;
          padding: 20px;
          border-radius: 10px;
          width: 80%;
          max-width: 800px;
          margin: auto;
          color: white;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #ffd700;
        }
        .header {
          display: flex;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .container-img {
          margin-top: 0px;
          display: flex;
          justify-content: space-between;
        }
        .photo-attachment {
          display: flex;
          align-items: center;
          margin-top: 18px;
          gap: 10px;
          font-size: 16px;
          color: #fff;
          font-weight: 400;
        }
        
        .photo-text {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        
        .image {
          aspect-ratio: 1.18;
          object-fit: auto;
          object-position: center;
          width: 20px;
          fill: #fecc09;
        }
        
        .photo-placeholder {
          background-color: #fff;
          margin-top: 9px;
          width: 112px;
          height: 112px;
        }

        .title {
          color: #fecc09;
          letter-spacing: 2px;
          font: 800 40px Poppins, sans-serif;
        }
        .form-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .form-group {
          flex: 1;
          margin-right: 40px;
        }
        .form-group:last-child {
          margin-right: 0;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input,
        select,
        button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
        }
        input[type="date"],
        input[type="tel"],
        input[type="text"] {
          background-color: white;
          color: black;
        }
        select {
          background-color: white;
          color: black;
        }
        button {
          background-color: #ffeb3b;
          color: black;
          cursor: pointer;
          margin-top: 5px;
        }
        .form-actions {
          display: flex;
          justify-content: space-between;
        }
        .form-actions button {
          width: 32%;
        }
        .form-actions button:nth-child(3) {
          background-color: #f44336;
          color: white;
        }
        .form-actions {
          display: flex;
          margin-top: 16px;
          gap: 20px;
          font-size: 16px;
          text-align: center;
        }

        @media (max-width: 991px) {
          .form-actions {
            flex-wrap: wrap;
          }
        }

        .fingerprint-btn {
          font-family: Poppins, sans-serif;
          justify-content: center;
          border-radius: 12px;
          background-color: #fecc09;
          align-self: start;
          color: #fff;
          font-weight: 700;
          flex-grow: 1;
          width: fit-content;
          padding: 3px 21px;
        }

        @media (max-width: 991px) {
          .fingerprint-btn {
            padding: 0 20px;
          }
        }

        .membership-actions {
          display: flex;
          gap: 13px;
          flex-grow: 1;
          flex-basis: auto;
        }

        .membership-btn {
          font-family: Poppins, sans-serif;
          align-items: start;
          border-radius: 12px;
          background-color: #fecc09;
          color: #fff;
          font-weight: 700;
          justify-content: center;
          padding: 3px 21px;
        }

        @media (max-width: 991px) {
          .membership-btn {
            padding: 0 20px;
          }
        }

        .cancel-btn {
          font-family: Poppins, sans-serif;
          justify-content: center;
          border-radius: 12px;
          border: 2px solid #fecc09;
          background-color: #fff;
          color: #fecc09;
          font-weight: 400;
          white-space: nowrap;
          padding: 3px 21px;
        }

        @media (max-width: 991px) {
          .cancel-btn {
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </form>
  );
};

export default RegisterForm;
