import React from "react";
import Navbar from "../components/NavbarOld.js";
import Header from "../components/Header.js";
import Podcast from "../components/Podcast.js";
import Founder from "../components/Founder.js";
import Footer from "../components/Footer.js";
import About from "../components/About.js";
import Courses from "../components/Courses.js";
import Event from "../components/Event.js";
import Mentorship from "../components/Mentorship.js";
import Blog from "../components/Blog.js";
import Course from "../components/Course/Course.js";

const HomePage = () => {
  return (
    <div className="homepage_main">
      <Header />
      <About />
      <Courses />
      <Event />
      <Mentorship />
      <Podcast />
      <Blog />
      <Founder />
    </div>
  );
};

export default HomePage;
