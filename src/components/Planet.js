import PropTypes from 'prop-types';

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Climate: {planet.climate}</p>
    </div>
  );
};

export default Planet;

Planet.propTypes = {
  planet: PropTypes.object.isRequired
};
