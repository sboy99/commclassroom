import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CoursePage,
  EventsPage,
  HomePage,
  RoadMapsPage,
  PodcastsPage,
  ErrorPage,
  AttributePage,
} from "./pages";
import { Layout } from "./components";

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="podcasts" element={<PodcastsPage />} />
          <Route path="roadmaps" element={<RoadMapsPage />} />
          <Route path="attributes" element={<AttributePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
