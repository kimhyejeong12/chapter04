import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-500 font-bold"
      : "text-gray-700 hover:text-blue-400";

  return (
    <>
      <nav className="flex justify-center gap-8 py-4 bg-gray-100 shadow-md">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>
        <Link to="/movies/popular" className={linkClass("/movies/popular")}>
          인기 영화
        </Link>
        <Link to="/movies/upcoming" className={linkClass("/movies/upcoming")}>
          개봉 예정
        </Link>
        <Link to="/movies/top-rated" className={linkClass("/movies/top-rated")}>
          평점 높은
        </Link>
        <Link to="/movies/now-playing" className={linkClass("/movies/now-playing")}>
          상영 중
        </Link>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
