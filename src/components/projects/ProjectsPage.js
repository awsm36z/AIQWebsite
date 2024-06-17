// src/components/projects/ProjectsPage.js
import React from 'react';
import './ProjectsPage.css';
import underConstructionRobot from '../../assets/images/underConstructionRobot.webp'; // Add the vector image path

const ProjectsPage = () => (
    <div className="under-construction" data-aos="fade-up">
      <h2>Projects Page Under Construction</h2>
      <img src={underConstructionRobot} alt="Under Construction Robot" data-aos="zoom-in" />
      <p data-aos="fade-up">We are working hard to bring you new content. Stay tuned!</p>
    </div>
  );

export default ProjectsPage;
