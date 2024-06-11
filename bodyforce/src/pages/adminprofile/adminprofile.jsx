import * as React from "react";
import './adminprofile.css'
function Adminprofile() {
    const handleUpdateProfileClick = () => {
        // TODO: Implement update profile logic
        console.log("Update profile clicked");
      };
    
      const handleRegisterClick = () => {
        // TODO: Implement register new admin account logic  
        console.log("Register new admin account clicked");
      };
    
      const handleSaveClick = () => {
        // TODO: Implement save logic
        console.log("Save clicked");
      };
    
      const handleCancelClick = () => {
        // TODO: Implement cancel logic
        console.log("Cancel clicked");  
      };
    
      const handleChangeClick = () => {
        // TODO: Implement change password logic
        console.log("Change password clicked");
      };
    
      const handleClearClick = () => {
        // TODO: Implement clear password fields logic
        console.log("Clear password fields clicked");
      };
    
      return (
        <>
          <div className="coontainer">
            <div className="coontent">
              <h1 className="tiitle">Admin Information</h1>
              <div className="cooolumns">
                <div className="cooolumn">
                  <div className="oprofile-card">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a54c157fff8dbb62dbd082f58a56d4be75a5af0d5e75b884cea90aa689b0edbe?apiKey=c870781db53a4609b6fa9f5a93cb9ccc&" className="profile-img" alt="" />
                    <button className="oupdate-profile-btn" onClick={handleUpdateProfileClick}>
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7864c21770e88984369bac20f61f2df88774b0a41aeb73e3dfefe085a114ba5?apiKey=c870781db53a4609b6fa9f5a93cb9ccc&" className="update-icon" alt="" />
                      Update Profile
                    </button>
                    <div className="profile-details">
                      <div className="profile-labels">
                        <div>Username</div>
                        <div>Contact no.</div>
                        <div>Role:</div>
                      </div>
                      <div className="profile-values">
                        <div>JuanDelaCruz</div>
                        <div>09123456789</div>
                        <div>Coach</div>
                      </div>
                    </div>
                  </div>
                  <button className="register-btn" onClick={handleRegisterClick}>
                    Register New Admin Account
                  </button>
                </div>
                <div className="cooolumn">
                  <div className="form-card">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" className="form-input" />
                    </div>
                    <div className="form-group">  
                      <label>Birthday</label>
                      <input type="date" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label>Role</label>  
                      <input type="text" className="form-input" />
                    </div>
                    <div className="form-actions">
                      <button className="save-btn" onClick={handleSaveClick}>
                        Save
                      </button>
                      <button className="cancel-btn" onClick={handleCancelClick}>
                        Cancel  
                      </button>
                    </div>
                  </div>
                  <div className="password-card">
                    <h2 className="password-title">Password</h2>
                    <div className="form-group">
                      <label>Current Password</label>
                      <input type="password" className="form-input" />  
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input type="password" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label>Re-type Password</label>
                      <input type="password" className="form-input" />
                    </div>
                    <div className="form-actions">
                      <button className="change-btn" onClick={handleChangeClick}>
                        Change
                      </button>
                      <button className="clear-btn" onClick={handleClearClick}>
                        Clear
                      </button>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
    )
    }


export default Adminprofile;
