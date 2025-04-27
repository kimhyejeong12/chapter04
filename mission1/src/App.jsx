import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import UpcomingPage from "./pages/UpcomingPage";
import TopRatedPage from "./pages/TopRatedPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/popular" element={<PopularPage />} />
          <Route path="/movies/upcoming" element={<UpcomingPage />} />
          <Route path="/movies/top-rated" element={<TopRatedPage />} />
          <Route path="/movies/now-playing" element={<NowPlayingPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
