import * as React from "react";
import { useState } from 'react';
import axios from 'axios';

const ImageWrapper = ({ src, alt }) => (
  <div className="image-wrapper">
    <img src={src} alt={alt} className="image" />
  </div>
);

const InputField = ({ label, type, id, placeholder }) => (
  <div className="input-field">
    <label htmlFor={id} className="visually-hidden">
      {label}
    </label>
    <input type={type} id={id} placeholder={placeholder} aria-label={label} />
  </div>
);

const Button = ({ children, className }) => (
  <button className={`button ${className}`}>{children}</button>
);

function RegisterForm() {
  const [participantName, setParticipantName] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [birthday, setBirthday] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [gender, setGender] = useState('');
  const [member, setMember] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = { participantName, joinDate, birthday, contactNo, gender };
    setMember(newMember);
    console.log(newMember);
    console.log(member); // This will print the member object to the console
    //const response = await axios.post('/members', member);
    //console.log(response.data);
  };
  return (
    <>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
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
          
        <div className="photo-placeholder" />
        </div>
        <div className="input-fields">
        <input
          label="Name of Participant"
          className="input-field"
          type="text"
          id="participantName"
          placeholder="Name of Participant"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
        />
          <div className="date-input">
            <label htmlFor="joinDate">Date of Join</label>
            <div className="date-picker">
           
            <input type="date" id="joinDate" name="joinDate" alt="Calendar icon" value={joinDate} onChange={(e) => setJoinDate(e.target.value)} />
                
              
            </div>
          </div>
        </div>
        <div className="additional-fields">
          <label htmlFor="birthday">Birthday</label>
          <label htmlFor="contactNo">Contact No.</label>
        </div>
        <div className="input-fields">
          <div className="date-picker">
          <input type="date" id="birthday" name="birthday" alt="Calendar icon" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          </div>
          <input
            type="tel"
            id="contactNo"
            placeholder="Contact No."
            aria-label="Contact No."
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>
        <div className="gender-label">Sexe</div>
          <div className="gender-options">
          <select className="gender-option" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          </div>
        <footer className="form-actions">
          <Button className="fingerprint-btn">Cordinate Fingerprint</Button>
          <div className="membership-actions">
            <Button className="membership-btn" type="submit">Avail Membership</Button>
            <Button className="cancel-btn">Cancel</Button>
          </div>
        </footer>
      </form>
      </div>
      <style jsx>{`
        .form-container {
          margin-top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100vh; // This makes sure the container takes up the full height of the viewport
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .registration-form {
          border-radius: 12px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #939393;
          display: flex;
          max-width: 738px;
          flex-direction: column;
          padding: 19px 23px 12px;
          font-size: 20px; /* Increase font size */
        }

        @media (max-width: 991px) {
          .registration-form {
            padding: 0 20px;
          }
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

        .title {
          color: #fecc09;
          letter-spacing: 2px;
          font: 800 40px Poppins, sans-serif;
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

        .input-fields {
          display: flex;
          flex-wrap: wrap;
          margin-top: 0;
          gap: 18px;
        }

        @media (max-width: 991px) {
          .input-fields {
            flex-wrap: wrap;
          }
        }

        .input-field {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }

        .input-field label {
          font-family: Poppins, sans-serif;
        }

        .input-field input {
          border-radius: 12px;
          background-color: #e9e9e9;
          margin-top: 15px;
          height: 38px;
        }

        .date-input {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }

        .date-input label {
          color: #fff;
          font: 700 16px Poppins, sans-serif;
        }

        .date-picker {
          border-radius: 12px;
          background-color: #e9e9e9;
          display: flex;
          margin-top: 19px;
          flex-direction: column;
          align-items: end;
          justify-content: center;
          padding: 7px 60px;
        }

        @media (max-width: 991px) {
          .date-picker {
            padding: 0 20px;
          }
        }

        .additional-fields {
          display: flex;
          width: 463px;
          max-width: 100%;
          gap: 20px;
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          justify-content: space-between;
          margin: 34px 0 0 12px;
        }

        @media (max-width: 991px) {
          .additional-fields {
            flex-wrap: wrap;
          }
        }

        .additional-fields label {
          font-family: Poppins, sans-serif;
        }

        .gender-label {
          color: #fff;
          margin-top: 27px;
          font: 700 16px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .gender-label {
            max-width: 100%;
          }
        }

        .gender-options {
          align-self: start;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          margin: 18px 0 0 12px;
        }

        @media (max-width: 991px) {
          .gender-options {
            margin-left: 10px;
          }
        }

        .gender-option {
          border-radius: 12px;
          background-color: #e9e9e9;
          width: 155px;
          height: 40px;
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
    </>
  );
}

export default function MyComponent() {
  return <RegisterForm />;
}