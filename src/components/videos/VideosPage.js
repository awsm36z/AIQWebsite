// src/components/videos/VideosPage.js
import React from 'react';
import './VideosPage.css';
import underConstructionRobot from '../../assets/images/underConstructionRobot.webp'; // Add the vector image path

const VideosPage = () => (
    <div className="under-construction" data-aos="fade-up">
      <h2>Videos Page Under Construction</h2>
      <img src={underConstructionRobot} alt="Under Construction Robot" data-aos="zoom-in" />
      <p data-aos="fade-up">We are working hard to bring you new content. Stay tuned!</p>
    </div>
  );

export default VideosPage;
