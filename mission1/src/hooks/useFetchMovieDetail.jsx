import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchMovieDetail = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (!movieId) return; // movieId 없으면 요청 안함
    
    const fetchMovieDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        setMovie(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  return { movie, loading, error };
};

export default useFetchMovieDetail;