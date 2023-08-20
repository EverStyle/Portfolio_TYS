import React, { useState } from 'react';
import './screen_styles/Experience.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';

function Experience() {
  const initialImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    // Add more images as needed
  ];

  const [expandedImageId, setExpandedImageId] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleImageClick = (imageId) => {
    if (expandedImageId === imageId) {
      setExpandedImageId(null);
    } else {
      setExpandedImageId(imageId);
    }
  };

  const handleShowAllImages = () => {
    setShowAllImages(!showAllImages);
  };

  const displayedImages = showAllImages ? initialImages : initialImages.slice(0, 3);

  return (
    <div className="experience_container">
      <div className='about_title'>
        <h1>Мои проекты</h1>
        <div className='title_strip'></div>
      </div>

      <div className="nti_project">
        <div className="nti_description">
          №1 Разработка Клиентской части личного кабинета пользователя для сайта Нижнетагильского Машиностроительного Техникума
        </div>
        <div className="nti_stack">
          <div className="technology-box">React JS</div>
          <div className="technology-box">HTML</div>
          <div className="technology-box">CSS</div>
          <div className="technology-box">Bootstrap</div>
        </div>
        <div className="image-list">
          {displayedImages.map((image) => (
            <div
              key={image.id}
              className={`image-item ${expandedImageId === image.id ? 'expanded' : ''}`}
              onClick={() => handleImageClick(image.id)}
            >
              <img
                src={image.src}
                alt={`Image ${image.id}`}
              />
            </div>
          ))}
        </div>
        {initialImages.length > 3 && (
          <button className="show-more-button" onClick={handleShowAllImages}>
            {showAllImages ? 'Скрыть' : 'Показать еще'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Experience;


{/* <div className="experience_container">
      <h2>Experience</h2>
      <div className="image-list">
        {initialImages.map((image) => (
          <div
            key={image.id}
            className={`image-item ${expandedImageId === image.id ? 'expanded' : ''}`}
            onClick={() => handleImageClick(image.id)}
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          </div>
        ))}
      </div>
    </div> */}





