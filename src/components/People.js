import { useState } from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async (page) => {
  console.log(page);
  const response = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return response.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['people', page], ({ queryKey }) => fetchPeople(queryKey[1]));
  return (
    <div>
      <h2>People Component</h2>
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
          {data.results.map((person, index) => (
            <Person key={index} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
