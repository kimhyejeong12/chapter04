import React, { useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const TopRatedPage = () => {
  const [page, setPage] = useState(1);

  const { movies, loading, error } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${page}`
  );

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${page === 1 ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
        >
          이전
        </button>
        <div className="flex items-center font-bold">{page} 페이지</div>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default TopRatedPage;
