// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/global.css";
import Root from "./routes/root";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import BlogPage from "./components/blog/BlogPage";
import BlogPost from "./components/blog/BlogPost";
import VideosPage from "./components/videos/VideosPage";
import ProjectsPage from "./components/projects/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:slug", element: <BlogPost /> },
      { path: "/videos", element: <VideosPage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
