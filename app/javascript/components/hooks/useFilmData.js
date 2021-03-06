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
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
          }
        })
        .then(data => data.json())
        .then(json => {
          setState(json);
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