import React, { useState, useEffect } from 'react';
import './screen_styles/About.css'
import phot from '../assets/ph.jpg';

function About() {
  return (
    <div className='about_container'>
    <div className='about_title'>
      <h1>Обо мне</h1>
      <div className='title_strip'></div>
    </div>
    <div className='about_bottom'>
      <div className='about_img'>
        <img src={phot} alt='My Photo' className='img-responsive' />
      </div>
      <div className='about_text'>
        Мое имя - Юрий Сергеевич, я начинающий веб-программист. Недавно закончил обучение в НТИ (Нижнетагильской технологическом институте). Мой стэк разработки это - JavaScript, HTML, CSS, React, Vite
      </div>
    </div>
  </div>
  );
}
export default About



//   const [aboutData, setAboutData] = useState("");
  
//   async function fetchData() {
//     try {
//       const response = await fetch('http://localhost:8000/about'); // Replace with your API endpoint
//       const data = await response.json();
//       console.log(data);
//       setAboutData(data); // Assuming the data structure contains a "message" field
//       // Use the received data in your frontend
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array to ensure fetchData runs only once after initial render

//   return (
//     <div className='about_container'>
//       {aboutData}
//     </div>
//   );
// }
