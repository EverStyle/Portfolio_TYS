import { useState } from 'react'
import React from 'react';
import './screen_styles/Education.css'
import phot from '../assets/nti.jpg';
function Education() {
    return (
        // <div className='education_container'>
        //     <div className="education_img">
        //         <img src={phot} alt="My Photo" className="img-responsive" />
        //     </div>
        //     <div className="education_text">
        //         Завершил обучение в Нижнетагильском Технологическом Институте (филиал) Уральского федерального университета
        //     </div>
        // </div>

        <div className='education_container'>
            <div className='education_title'>
                <h1>Образование</h1>
                <div className='title_strip'></div>
            </div>
            <div className='about_bottom'>
                <div className='about_img'>
                    <img src={phot} alt="My Photo" className="img-responsive" />
                </div>
                <div className='education_text'>
                    Завершил обучение в Нижнетагильском Технологическом Институте (филиал) Уральского федерального университета. По направлению - Информационные системы и технологии
                </div>
            </div>
        </div>
    )
}
export default Education