
import React from 'react';
import './comp_styles/Header.css';

function Header({ handleAboutClick, handleEducationClick, handleExperienceClick, handleHellowClick, handleStatusClick, handleWorkClick }) {
  return (
    <div className='header_container'>
      <div className='header_img_block'>Header</div>
      <div className='header_nav_block'>
        <button className='nav_buttons' onClick={handleHellowClick}>
          Hellow
        </button>
        <button className='nav_buttons' onClick={handleAboutClick}>
          About
        </button>
        <button className='nav_buttons' onClick={handleEducationClick}>
          Education
        </button>
        <button className='nav_buttons' onClick={handleExperienceClick}>
          Experience
        </button>
        <button className='nav_buttons' onClick={handleWorkClick}>
          Work
        </button>
        <button className='nav_buttons' onClick={handleStatusClick}>
          Status
        </button>
      </div>
    </div>
  );
}

export default Header;