import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api';

export default function MovieCast() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadMovieData() {
      setLoading(true);
      const data = await fetchMovieCast(movieId);
      setList(data.cast);
      setLoading(false);
    }
    loadMovieData();
  }, [movieId]);

  return (
    <ul>
      {!loading &&
        (list.length ? (
          list.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w92/${item.profile_path}`}
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie.</p>
        ))}
    </ul>
  );
}
