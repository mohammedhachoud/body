import * as React from "react";
import './style.css'; // Import the CSS file
import { navbarData } from "./navbardata"; // Import navbar data

function NavBar() {
  return (
    <div className="navBar">
      <ul className="navBarlist">
        <li onClick={() => (window.location.href = navbarData[0].link)} className="logo-start">
          <img
            loading="lazy"
            src={navbarData[0].icon}
            id="img"
            className="tmg"
            alt={navbarData[0].title}
          />
        </li>
        <li onClick={() => (window.location.href = navbarData[1].link)} className="logo-end">
          <img
            loading="lazy"
            src={navbarData[1].icon}
            id="img"
            className="img"
            alt={navbarData[1].title}
          />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
