import React from "react";
import { useParams } from "react-router-dom";
import useFetchMovieDetail from "../hooks/useFetchMovieDetail";
import useFetchCredits from "../hooks/useFetchCredits";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { movie, loading: movieLoading, error: movieError } = useFetchMovieDetail(id);
  const { credits, loading: creditsLoading, error: creditsError } = useFetchCredits(id);

  if (movieLoading || creditsLoading) return <LoadingSpinner />;
  if (movieError) return <ErrorMessage message={movieError.message} />;
  if (creditsError) return <ErrorMessage message={creditsError.message} />;
  if (!movie) return null;

  return (
    <div className="p-8 flex flex-col items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-md mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-700 text-lg text-center">{movie.overview}</p>

      {/* 출연진 */}
      <h2 className="text-2xl font-bold mt-12 mb-4">감독/출연</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {credits.cast.slice(0, 20).map((person) => (
          <div key={person.cast_id} className="w-24 text-center">
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={person.name}
              className="rounded-full mb-2 w-24 h-24 object-cover"
            />
            <div className="text-sm font-semibold">{person.name}</div>
            <div className="text-xs text-gray-500">{person.character}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
