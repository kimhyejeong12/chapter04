import { useState, useEffect } from 'react'; 
import axios from 'axios';

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (!url) return; // url 없으면 아무것도 안함
    
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return { movies, loading, error };  
};

export default useFetchMovies;

