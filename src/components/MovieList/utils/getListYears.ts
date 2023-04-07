import { IMovie } from 'utils/interface/IMovie';

export const getListYears = (data: IMovie[] | undefined) => {
  let res: string[] = [];
  if (data) {
    res = data.map((elem) => {
      return elem.release.slice(-4);
    });
  }
  return Array.from(new Set(res)).sort();
};
