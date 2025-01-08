import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function loadMovieData() {
      const data = await fetchMovieDetails(movieId);
      setMovieData(data);
    }
    loadMovieData();
  }, [movieId]);

  const ratingPercent = Math.round(movieData?.vote_average * 10);
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movieData?.poster_path}`;
  const releaseYear = movieData?.release_date?.split('-')?.[0];
  const genres = movieData?.genres?.map(gen => gen.name).join(' ');

  return (
    <>
      {!!movieData?.id && (
        <div className={css.page}>
          <Link to={location.state || '/movies'}>
            <button>Go back</button>
          </Link>
          <div className={css.main}>
            <img src={imageUrl} className={css.poster} />
            <div>
              <h1>
                {movieData.title} ({releaseYear})
              </h1>
              <p>User Score: {ratingPercent}%</p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <p>{genres}</p>
            </div>
          </div>
          <div className={css.links}>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <Outlet />
        </div>
      )}
    </>
  );
}
