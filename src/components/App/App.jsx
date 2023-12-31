import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';


const Home = lazy(() => import('../../pages/Home/Home'));
const MoviesDetails = lazy(() =>
  import('../../pages/MoviesDetals/MoviesDetals')
);
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
