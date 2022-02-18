import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import './topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">johudergb</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img alt="avatar" className="topAvatar" src="https://images.pexels.com/photos/4243351/pexels-photo-4243351.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </div>
      </div>
    </div>
  )
}

export default Topbar;
