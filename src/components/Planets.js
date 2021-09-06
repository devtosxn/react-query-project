import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
  const response = await fetch('http://swapi.dev/api/planets/');
  return response.json();
};

// console.log(fetchPlanets());

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(data);
  console.log(status);
  //   console.log('DATA---->', data);
  //   console.log('STATUS---->', status);
  return <div>Planets Component</div>;
};

export default Planets;
