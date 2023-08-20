import { useState } from 'react'
import React from 'react';
import './screen_styles/Work.css'
import phot from '../assets/job.png';
function Work() {
    return (

        <div className='work_container'>
            <div className='about_title'>
                <h1>Работа</h1>
                <div className='title_strip'></div>
            </div>
            <div className='about_bottom'>
                <div className='about_img'>
                    <img src={phot} alt='My Photo' className='img-responsive' />
                </div>
                <div className='about_text'>
                    На данный момент (20.08.2023) нахожусь в активном поиске работы 
                </div>
            </div>
        </div>
    )
}
export default Work