import * as React from "react";
import './style.css'
import { sidebarData } from "./usersidebardata";
import admin from '../icons/admin.svg'
function UsersideBar() {
  return(
    <div className="sidebar">
      <ul className="sidebarlist">
        <li onClick={()=> {window.location.pathname = "/home" }} className="divv">
        <img
          loading="lazy"
          src= {admin}
          className="img"
        />
        <div className="div-2">Administrator Name</div>
        <div className="div-3">juan.delacruz@gmail.com</div>
        </li>
  {sidebarData.map((val, key) => {
    return (
      <li key={key} onClick={() => (window.location.pathname = val.link)} className="row">
        <div id="icon">
          <img
            loading="lazy"
            src={val.icon}
            id="img"
            className="icon"
            alt={val.title}
          />
        </div>
        <div id="title">{val.title}</div>
      </li>
    );
  })}
</ul>
    </div>
  )
  /*return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aceb17da3c5d6316288b5e83ac55132763c68dd2751eabdf30dd475a66b1d6e?"
          className="img"
        />
        <div className="div-2">Administrator Name</div>
        <div className="div-3">juan.delacruz@gmail.com</div>
        <div className="div-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/976a4f185741a8c7144bacabdf918263400447b52b2dad7985118cb3a75adbb3?"
            className="img-2"
          />
          <div className="div-5">Dashboard</div>
        </div>
        <div className="div-6">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/639c686e4c11256785e2d8ddfe71db7574a5e8f5fb21e951a5d9cd7db6add70f?"
            className="img-3"
          />
          <div className="div-7">Admin Profile</div>
        </div>
        <div className="div-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8adea682d77f75838b83efee119596b849c082fa5fbabf7fcf317a9390cfced5?"
            className="img-4"
          />
          <div className="div-9">Registration</div>
        </div>
        <div className="div-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1bffed9a6d4f5ca72098b39319612a2e2a8e96a2653b83238fae3a7391d9b84?"
            className="img-5"
          />
          <div className="div-11">Plan</div>
        </div>
        <div className="div-12">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a22b30b692c664f9f691b187073335ab6766d177aa74438f71a1aa30795efacf?"
            className="img-6"
          />
          <div className="div-13">Subscription Report</div>
        </div>
        <div className="div-14">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5124c54963e12a0a81a94190e9e8efb652fe511130ec59c33749b821372b6ecc?"
            className="img-7"
          />
          <div className="div-15">Logout</div>
        </div>
      </div>
    
    </>
  );*/
}

export default UsersideBar