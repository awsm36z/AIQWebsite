// src/components/blog/BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import blogs from '../../data/blogs';

const BlogPage = () => (
  <div className="blog-page">
    <section className="blogs" data-aos="fade-up">
      <h2>Our Blog</h2>
      <div className="blogs-content">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h3><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h3>
            <p className="blog-date">{blog.date}</p>
            <p>{blog.content.substring(0, 200)}...</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default BlogPage;
