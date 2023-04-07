import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import IFilter from 'utils/interface/IFilter';

type props = {
  listYears: string[];
  updateFilter: (data: IFilter) => void;
};

export const Form = ({ listYears, updateFilter }: props) => {
  const { register, getValues } = useForm<IFilter>();

  const collectData = () => {
    updateFilter(getValues());
  };

  return (
    <form className="mb-5 flex w-full">
      <select
        multiple
        size={3}
        className="w-[100px] p-1"
        {...register('year', {
          onChange: collectData,
        })}
      >
        {listYears &&
          listYears.map((year) => {
            return <option key={uuidv4()}>{year}</option>;
          })}
      </select>
      <fieldset className="ml-10 text-white">
        <legend>Тип</legend>
        <div className="flex w-[100px]">
          <input
            type="radio"
            id="movie"
            value="movie"
            defaultChecked
            {...register('typeMovie', {
              onChange: collectData,
            })}
          />
          <div className="pl-3">Кино</div>
        </div>

        <div className="flex w-[100px]">
          <input
            type="radio"
            id="serial"
            value="serial"
            {...register('typeMovie', { onChange: collectData })}
          />
          <div className="pl-3">Сериал</div>
        </div>
      </fieldset>
    </form>
  );
};
