import { IMovie } from 'components/MovieList/interface/IMovie';
import { useNavigate } from 'react-router-dom';

type props = {
  movie: IMovie;
  key: React.Key;
};

export const MovieItem = (props: props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${props.movie.id}`);

  return (
    <div key={props.key} onClick={handleClick}>
      <img
        src={`http://localhost:3000/${props.movie.preview}`}
        className="card__image"
        alt={`${props.movie.title} poster`}
      />
      <div className="card__text">
        <p>
          Название фильма: <span className="card__name">{props.movie.title}</span>
        </p>
        <p>
          Дата выхода: <span className="card__name">{String(props.movie.release)}</span>
        </p>
        <p>
          Краткое описание: <span className="card__eats">{props.movie.shortDescription}</span>
        </p>
      </div>
    </div>
  );
};
