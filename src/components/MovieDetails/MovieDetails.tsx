import { Carousel } from 'components/Carousel';
import { Loading } from 'components/Loading';
import useFetch from 'utils/hook/useFetch';
import { IMovie } from 'utils/interface/IMovie';
import { useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const location = useLocation();
  const currentId = location.pathname.slice(1);
  const { loading, data, error } = useFetch(
    `${import.meta.env.VITE_SERVER_API}catalog?id=${currentId}`
  );

  if (loading) return <Loading />;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const movie: IMovie | undefined = data ? data[0] : undefined;

  let pluralScr = '';
  if (movie) {
    pluralScr = movie.screenwriter.length > 1 ? 'ы' : '';
  }

  return (
    <>
      {movie && (
        <div className="mx-auto flex min-w-[600px] max-w-[1000px] overflow-hidden rounded-xl bg-orange-100 pr-5">
          <img
            src={`${import.meta.env.VITE_SERVER_API}${movie.poster}`}
            className="max-w-[500px] pr-5"
            alt={`${movie.title} poster`}
          />
          <div className="py-10">
            <p className="pb-2">
              Название фильма: <span className="font-bold">{movie.title}</span>
            </p>
            <p className="pb-2">
              Режиссер: <span className="font-bold">{movie.director}</span>
            </p>
            <p className="pb-2">
              Сценарист{pluralScr}:
              <span className="font-bold"> {movie.screenwriter.join(', ')}</span>
            </p>
            <p className="pb-2">
              Оператор: <span className="font-bold">{movie.operator}</span>
            </p>
            <p className="pb-2">
              В главных ролях: <span className="font-bold">{movie.starring.join(', ')}</span>
            </p>
            <p>
              Описание: <span className="italic">{movie.description}</span>
            </p>
            <div className="h-[300px] w-[100%]">
              <Carousel screenshots={movie.screenshots} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
