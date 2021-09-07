import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const response = await fetch('http://swapi.dev/api/planets/');
  return response.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log('PLANET DATA---->', data);
  console.log('PLANET STATUS---->', status);
  return (
    <div>
      <h2>Planets Component</h2>
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
