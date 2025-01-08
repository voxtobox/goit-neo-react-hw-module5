import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ list }) {
  const location = useLocation();

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <Link
            to={`/movies/${item.id}`}
            state={location.pathname + location.search}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
