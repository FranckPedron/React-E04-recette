import PropTypes from 'prop-types';
import './instructions.scss';

function Instructions({ steps }) {
  return (
    <section className="instructions">
      <ul className="instructions__list">
        {
          steps.map((step) => <li key={step} className="instructions__list__item">{step}</li>)
        }
      </ul>
    </section>
  );
}

Instructions.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Instructions;
