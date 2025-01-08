import { useState } from 'react';
import { fetchTrandingMovies } from '../../api';
import MovieList from '../../components/MovieList/MovieList';
import { useEffect } from 'react';

export default function HomePage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function loadList() {
      const data = await fetchTrandingMovies();
      setList(data.results);
    }
    loadList();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList list={list} />
    </>
  );
}
