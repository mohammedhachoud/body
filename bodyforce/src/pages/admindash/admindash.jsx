import * as React from "react";
import "./styleadmin.css";
import SideBar from "../../components/sidebar/sidebar";
import Coaches from "../../components/coaches/coaches";
import Calendar from "../../components/calendar/calendar";
function adminDash() {
  return (
    
    <>
    
      <div className="divv">
        
        <div className="div-22">
          <div className="columnn">
            <div className="div-33">
              <div className="div-44">
                <div className="div-55">
                  <div className="column-22">
                    <div className="div-66">
                      <div className="div-77">
                        <span><h1>Welcome Banner, Martell </h1></span>
                      </div>
                      <div className="div-88">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="column-33">
                    <div className="div-99" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-44">
            <div className="div-111"> <Calendar /> </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default adminDash;