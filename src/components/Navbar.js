import PropTypes from 'prop-types';

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button
        onClick={() => {
          setPage('planets');
        }}>
        Planets
      </button>
      <button
        onClick={() => {
          setPage('people');
        }}>
        People
      </button>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired
};
