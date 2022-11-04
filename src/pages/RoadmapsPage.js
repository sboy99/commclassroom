import React, { useRef } from "react";
import Navbar from "../components/NavbarOld.js";
import Footer from "../components/Footer.js";
import Header from "../components/Roadmap/Header.js";
import Mentorship from "../components/Roadmap/Mentorship.js";
import CardsList from "../components/Roadmap/CardsList.js";

const RoadmapsPage = () => {
  const scrollRoadmapRef = useRef();

  return (
    <div className="homepage_main">
      <Header scrollRoadmapRef={scrollRoadmapRef} />
      <Mentorship />
      <CardsList scrollRoadmapRef={scrollRoadmapRef} />
    </div>
  );
};

export default RoadmapsPage;
