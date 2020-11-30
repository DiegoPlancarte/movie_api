import { useState, useEffect } from 'react';

const useFilmData = ( movie_id ) => {
  
  const [ state, setState ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true)
        fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movie_id}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "f4b8921800mshfbdf284de7f5eadp156a07jsn487a98c13d4e",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
          }
        })
        .then((data) => {
          setState(data);
          setIsLoading(false)
        })
        .catch((err) => {
          if(err) {
            setIsLoading(true)
            setError(err)
          }
        })
    }
    fetchData()
  }, []);

  return [
    state,
    setState,
    isLoading,
    error
  ]
};

export default useFilmData;