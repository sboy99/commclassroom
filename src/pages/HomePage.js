import React from "react";
import {
  Header,
  Podcast,
  Founder,
  Event,
  About,
  Courses,
  Mentorship,
  Blog,
} from "../components";

const HomePage = () => {
  return (
    <div className="flex flex-col container mx-auto p-4">
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
