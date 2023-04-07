import { useState } from 'react';
import useFetch from '../../utils/hook/useFetch';
import { MovieItem } from 'components/MovieItem';
import { Loading } from 'components/Loading';
import { Form } from 'components/Form';
import IFilter from '../../utils/interface/IFilter';
import { getListYears } from './utils/getListYears';

export const MovieList = () => {
  const { loading, data, error } = useFetch(`${import.meta.env.VITE_SERVER_API}catalog`);
  const [filter, setFilter] = useState<IFilter | null>({
    typeMovie: 'movie',
    year: [],
  });

  if (loading) return <Loading />;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const updateFilter = (data: IFilter) => {
    setFilter(data);
  };

  return (
    <div className="w-max-[100%] mx-auto flex flex-wrap">
      <Form listYears={getListYears(data || undefined)} updateFilter={updateFilter} />
      {data &&
        data
          .filter((elem) => elem.type === filter?.typeMovie)
          .filter((elem) =>
            filter!.year.length > 0 ? filter?.year.some((y) => elem.release.slice(-4) === y) : true
          )
          .map((elem) => {
            return <MovieItem movie={elem} key={elem.id} />;
          })}
    </div>
  );
};
