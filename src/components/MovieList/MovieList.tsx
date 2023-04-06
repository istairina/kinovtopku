import { v4 as uuidv4 } from 'uuid';
import useFetch from './hook/useFetch';
import { MovieItem } from 'components/MovieItem';
import { Loading } from 'components/Loading';
import { Form } from 'components/Form';

export const MovieList = () => {
  const { loading, data, error } = useFetch(`${import.meta.env.VITE_SERVER_API}catalog`);

  if (loading) return <Loading />;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const getListYears = () => {
    let res: string[] = [];
    if (data) {
      res = data.map((elem) => {
        return elem.release.slice(-4);
      });
    }
    return res;
  };

  console.log(getListYears());

  return (
    <div className="flex w-[100%] flex-wrap px-20">
      <Form listYears={getListYears()} />
      {data &&
        data.map((elem) => {
          const uuid = uuidv4();
          return <MovieItem movie={elem} key={uuid} id={uuid} />;
        })}
    </div>
  );
};
