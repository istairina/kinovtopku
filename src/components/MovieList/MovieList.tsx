import { v4 as uuidv4 } from 'uuid';
import useFetch from './hook/useFetch';
import { MovieItem } from 'components/MovieItem';
import { Loading } from 'components/Loading';

export const MovieList = () => {
  const { loading, data, error } = useFetch('http://localhost:3000/catalog');

  if (loading) return <Loading />;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="cards__wrap">
      {data &&
        data.map((elem) => {
          return <MovieItem movie={elem} key={uuidv4()} />;
        })}
    </div>
  );
};
