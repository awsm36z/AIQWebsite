// src/components/about/AboutPage.js
import React from 'react';
import './AboutPage.css';

const AboutPage = () => (
  <div className="about-page">
    <section className="about" data-aos="fade-up">
      <h2>About AIQ</h2>
      <p>AIQ is dedicated to developing advanced LLM solutions for various industries, helping businesses harness the power of large language models. Our team of experts is committed to innovation and excellence, ensuring our clients achieve their goals through cutting-edge AI technology.</p>
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

export default AboutPage;
