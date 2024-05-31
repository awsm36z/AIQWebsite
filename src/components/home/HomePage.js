// src/components/home/HomePage.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';
import vectorImage from '../../assets/images/logo.webp'; // Update this path based on your directory structure

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <img src={vectorImage} alt="Technology Illustration" className="hero-image" data-aos="fade-right" />
          <div className="hero-text" data-aos="fade-left">
            <h1>WE CREATE INNOVATIVE LLM SOLUTIONS</h1>
            <p>Enhancing your business with advanced language models</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="services-content">
          <div className="service-item">
            <i className="fas fa-brain"></i>
            <h3>LLM Development</h3>
            <p>Creating advanced large language model solutions tailored to your needs.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-museum"></i>
            <h3>Museum Agents</h3>
            <p>Enhancing visitor engagement with intelligent museum agents.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-robot"></i>
            <h3>Automation</h3>
            <p>Implementing AI-driven automation for improved efficiency.</p>
          </div>
        </div>
      </section>

      <section className="projects" data-aos="fade-up">
        <h2>Featured Projects</h2>
        <div className="projects-content">
          <div className="project-item">
            <img src="/path/to/project-image1.jpg" alt="Project 1" />
            <h3>Project Title 1</h3>
            <p>Brief description of the project.</p>
          </div>
          <div className="project-item">
            <img src="/path/to/project-image2.jpg" alt="Project 2" />
            <h3>Project Title 2</h3>
            <p>Brief description of the project.</p>
          </div>
          <div className="project-item">
            <img src="/path/to/project-image3.jpg" alt="Project 3" />
            <h3>Project Title 3</h3>
            <p>Brief description of the project.</p>
          </div>
        </div>
      </section>

      <section className="about" data-aos="fade-up">
        <h2>About AIQ</h2>
        <p>AIQ is dedicated to developing advanced LLM solutions for various industries, helping businesses harness the power of large language models.</p>
      </section>

      <section className="contact" data-aos="fade-up">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
