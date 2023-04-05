import { MovieDescription } from 'components/MovieDescription';
import { MovieList } from 'components/MovieList';
import { Route, Routes } from 'react-router-dom';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:id" element={<MovieDescription />} />
      </Routes>
    </main>
  );
};
