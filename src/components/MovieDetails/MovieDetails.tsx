import { Carousel } from 'components/Carousel';
import { Loading } from 'components/Loading';
import useFetch from 'components/MovieList/hook/useFetch';
import { IMovie } from 'components/MovieList/interface/IMovie';
import { useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const location = useLocation();
  const currentId = location.pathname.slice(1);

  console.log(currentId);
  const { loading, data, error } = useFetch('http://localhost:3000/catalog');

  if (loading) return <Loading />;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  let movie: IMovie | undefined = undefined;

  if (data) {
    movie = data.find((elem: IMovie) => elem.id === +currentId);
  }

  return (
    <>
      {movie && (
        <div>
          <img src={`/img/${movie.poster}`} className="card__image" alt={`${movie.title} poster`} />
          <div>
            <p>
              Название фильма: <span className="card__name">{movie.title}</span>
            </p>
            <p>
              Режиссер: <span className="card__name">{movie.director}</span>
            </p>
            <p>
              Сценарист: <span className="card__name">{movie.screenwriter.join(', ')}</span>
            </p>
            <p>
              Оператор: <span className="card__name">{movie.operator}</span>
            </p>
            <p>
              В главных ролях: <span className="card__name">{movie.starring.join(', ')}</span>
            </p>
            <p>
              Описание: <span className="card__eats">{movie.description}</span>
            </p>
          </div>
          <div>
            <Carousel screenshots={movie.screenshots} />
          </div>
        </div>
      )}
    </>
  );
};
