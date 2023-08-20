
import React from 'react';
import './comp_styles/Header.css';

function Header({ handleAboutClick, handleEducationClick, handleExperienceClick, handleHellowClick, handleStatusClick, handleWorkClick }) {

  // const handleMouseEnter = (event) => {
  //   event.target.style.fill = 'white';
  //   event.target.style.color = 'darkblue';
  // };

  // const handleMouseLeave = (event) => {
  //   event.target.style.fill = 'black';
  //   event.target.style.color = 'black';
  // };

  return (
    <div className='header_container'>
      <div className='header_img_block'>

      <div className='svg-container'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="svg-icon"
      >
        <polygon
          points="50,20 100,50 50,80 0,50"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <text
          x="50"
          y="50"
          fontSize="20"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
        >
          TYuS
        </text>
      </svg>
    </div>

      </div>
      <div className='header_nav_block'>
        <button className='nav_buttons' onClick={handleHellowClick}>
          Приветствую
        </button>
        <button className='nav_buttons' onClick={handleAboutClick}>
          Обо мне
        </button>
        <button className='nav_buttons' onClick={handleEducationClick}>
          Образование
        </button>
        <button className='nav_buttons' onClick={handleExperienceClick}>
          Проекты
        </button>
        <button className='nav_buttons' onClick={handleWorkClick}>
         Работа
        </button>
        {/* <button className='nav_buttons' onClick={handleStatusClick}>
          Статус
        </button> */}
      </div>
    </div>
  );
}

export default Header;