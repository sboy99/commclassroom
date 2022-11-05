import React from "react";
import {
  Header,
  Podcast,
  Founder,
  Events,
  About,
  Courses,
  Mentorship,
  Blog,
  JoinDiscord,
} from "../components";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <div className="container mx-auto p-4">
        <Header />
      </div>
      <JoinDiscord />
      <About />
      <Courses />
      <Events />
      <Mentorship />
      <Podcast />
      <Blog />
      <Founder />
    </div>
  );
};

export default HomePage;
