import { IMovie } from 'utils/interface/IMovie';
import { useNavigate } from 'react-router-dom';

type props = {
  movie: IMovie;
};

export const MovieItem = (props: props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${props.movie.id}`);

  return (
    <div
      onClick={handleClick}
      className="mb-5 flex min-h-[255px] min-w-[485px] max-w-[100%] flex-col rounded border-2 bg-orange-50 p-2 sm:flex-row"
    >
      <div className="w-200px">
        <img
          src={`${import.meta.env.VITE_SERVER_API}${props.movie.preview}`}
          className="block h-auto w-[100%] cursor-zoom-in"
          alt={`${props.movie.title} poster`}
        />
      </div>
      <div className="pl-5">
        <p className="pb-2">
          <span>Название фильма: </span>
          <span className="font-bold">{props.movie.title}</span>
        </p>
        <p className="pb-2">
          Дата выхода: <span className="font-bold">{String(props.movie.release)}</span>
        </p>
        <p className="pb-5">
          Краткое описание: <span className="italic">{props.movie.shortDescription}</span>
        </p>
        <p>
          <span onClick={handleClick} className="cursor-pointer underline">
            Подробнее...
          </span>
        </p>
      </div>
    </div>
  );
};
