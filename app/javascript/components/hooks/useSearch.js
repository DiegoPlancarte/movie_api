import { useState, useEffect } from 'react';

const useSearch = (movie) => {
  
  const [ state, setState ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true)
        fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movie}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
          }
        })
        .then(data => data.json())
        .then(json => {
          const titles = json.titles
          setState(titles);
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

export default useSearch;