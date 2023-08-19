import React, { useState, useEffect } from 'react';
import './screen_styles/About.css'

function About() {
    const [aboutData, setAboutData] = useState("");
  
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/about'); // Replace with your API endpoint
        const data = await response.json();
        console.log(data);
        setAboutData(data); // Assuming the data structure contains a "message" field
        // Use the received data in your frontend
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array to ensure fetchData runs only once after initial render
  
    return (
      <div className='about_container'>
        {aboutData}
      </div>
    );
  }
  
  export default About;

// async function fetchData() {
//     const [aboutData, setAboutData] = useState("");
//     try {
//       const response = await fetch('http://localhost:8000/about'); // Replace with your API endpoint
//       const data = await response.json();
//       console.log(data);
//       setAboutData(data)
//       // Use the received data in your frontend
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchData();


// function About() {
//     return (
//         <div className='about_container'>
//             {aboutData}
//         </div>
//     )
// }
// export default About