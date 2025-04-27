import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCredits = (movieId) => {
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchCredits = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
        );
        setCredits(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [movieId]);

  return { credits, loading, error };
};

export default useFetchCredits;
