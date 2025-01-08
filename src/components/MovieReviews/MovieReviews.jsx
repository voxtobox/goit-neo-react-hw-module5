import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api';

export default function MovieReviews() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadMovieData() {
      setLoading(true);
      const data = await fetchMovieReviews(movieId);
      setList(data.results);
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
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie.</p>
        ))}
    </ul>
  );
}
