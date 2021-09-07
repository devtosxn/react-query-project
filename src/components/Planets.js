import { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (page) => {
  console.log(page);
  const response = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return response.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['planets', page], ({ queryKey }) => fetchPlanets(queryKey[1]));
  return (
    <div>
      <h2>Planets Component</h2>
      <button
        onClick={() => {
          if (page >= 2) {
            setPage(page - 1);
          }
        }}>
        Previous Page
      </button>
      <button
        onClick={() => {
          if (page <= 5) {
            setPage(page + 1);
          }
        }}>
        Next Page
      </button>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error!</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet, index) => (
            <Planet key={index} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
