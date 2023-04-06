import { v4 as uuidv4 } from 'uuid';

export const Form = ({ listYears = [''] }) => {
  return (
    <form className="mb-5 flex">
      <select multiple size={5} className="w-[100px] p-1">
        {listYears &&
          listYears.map((year) => {
            return (
              <option key={uuidv4()} selected>
                {year}
              </option>
            );
          })}
      </select>
      <fieldset className="ml-10 text-white">
        <legend>Тип</legend>

        <div className="flex w-[100px]">
          <input type="radio" id="movie" name="drone" value="movie" checked />
          <div className="pl-3">Кино</div>
        </div>

        <div className="flex w-[100px]">
          <input type="radio" id="serial" name="drone" value="serial" />
          <div className="pl-3">Сериал</div>
        </div>
      </fieldset>
    </form>
  );
};
