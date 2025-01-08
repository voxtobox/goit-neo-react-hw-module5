import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesByQuery } from '../../api';

export default function MoviesPage() {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef();
  const query = searchParams.get('query');

  async function search(query) {
    const data = await fetchMoviesByQuery(query);
    setList(data.results || []);
  }

  function handleSearch() {
    const query = inputRef.current.value;
    setSearchParams({ query });
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <>
      <div>
        <input type="text" onKeyDown={handleKeyDown} ref={inputRef} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MovieList list={list} />
    </>
  );
}
