import { MovieDetails } from 'components/MovieDetails';
import { MovieList } from 'components/MovieList';
import { Route, Routes } from 'react-router-dom';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
    </main>
  );
};
