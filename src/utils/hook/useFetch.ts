import { useEffect, useState } from 'react';
import { IMovie } from '../interface/IMovie';

export default function useFetch(uri: string) {
  const [data, setData] = useState<IMovie[]>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);
  return {
    data,
    error,
    loading,
  };
}
