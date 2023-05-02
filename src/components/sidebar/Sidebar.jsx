import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src="Dark.png" alt="Katherine Johnson" />
        </span>
      </div>

      <div className="center">
        <ul>
          <li>
            <i className="fi fi-rr-house-blank icon"></i>
            <span>Dashboard</span>
          </li>

          <li>
            <i class="fi fi-rr-apps icon"></i>
            <span>Project</span>
          </li>
          <li>
            <i class="fi fi-rr-list-check icon"></i>
            <span>Task</span>
          </li>
          <li>
            <i class="fi fi-rr-users-alt icon"></i>
            <span>Teams</span>
          </li>
          <li>
            <i class="fi fi-rr-settings icon"></i>
            <span>Setting</span>
          </li>
        </ul>
      </div>

      <div className="middle">
        <div className="middle_card">
          <h1 className="card_text">Upgrade to Pro 🔥</h1>
          <p>Get 1 month free and unlock all pro feature</p>
          <button className="card_button">Upgrade</button>
        </div>
      </div>

      <div className="center">
        <ul>
          <li>
            <i class="fi fi-rr-interrogation icon"></i>
            <span>Help</span>
          </li>

          <li>
            <i class="fi fi-rr-exit icon"></i>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
