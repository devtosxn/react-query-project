import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
  const response = await fetch('http://swapi.dev/api/people/');
  return response.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  return (
    <div>
      <h2>People Component</h2>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error!</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person, index) => (
            <Person key={index} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
