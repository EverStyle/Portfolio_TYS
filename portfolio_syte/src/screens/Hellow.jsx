import { useState } from 'react'
import React from 'react';
import './screen_styles/Hellow.css'
import backgrImage from '../assets/backgr.jpg';

function Hellow() {
    return (
        <div className='hellow_container'>
      <div className="hellow_background"></div>
      <div className="hellow_content">
        <div className="hellow_text">
          Приветствую тебя посетитель, меня зовут
        </div>
        <div className="hellow_text_expanded">
          Юрий
        </div>
        <div className="hellow_text">
          Я Junior FrontEnd-Developer
        </div>
        <div className="hellow_discription">
          Я специализируюсь на разработке Клиентских частей веб приложений
        </div>
      </div>
    </div>
    )
}
export default Hellow