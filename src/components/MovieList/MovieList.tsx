import { v4 as uuidv4 } from 'uuid';
import useFetch from './hook/useFetch';
import { MovieItem } from 'components/MovieItem';
import { Loading } from 'components/Loading';

export const MovieList = () => {
  const { loading, data, error } = useFetch(`${import.meta.env.VITE_SERVER_API}catalog`);

  if (loading) return <Loading />;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="flex w-[100%] flex-wrap px-20">
      {data &&
        data.map((elem) => {
          const uuid = uuidv4();
          return <MovieItem movie={elem} key={uuid} id={uuid} />;
        })}
    </div>
  );
};
