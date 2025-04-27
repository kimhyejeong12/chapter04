import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div
      onClick={handleClick}
      className="relative w-60 cursor-pointer overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105"
    >
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-full object-cover transition duration-300 hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition duration-300 text-white bg-black bg-opacity-40">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm mt-2 px-2 text-center">{movie.overview ? movie.overview.slice(0, 80) + "..." : "No description."}</p>
      </div>
    </div>
  );
};

export default MovieCard;

