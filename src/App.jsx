import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navigation = lazy(() => import('./components/Navigation/Navigation.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews.jsx')
);
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
