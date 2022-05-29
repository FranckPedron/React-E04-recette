import PropTypes from 'prop-types';
import './ingredients.scss';

function Ingredients({ ingredients }) {
  return (
    <section className="ingredients">
      <ul className="ingredients__list">
        {
          ingredients.map((ingredient) => (
            <li key={ingredient.id} className="ingredients__list__item">
              <span className="ingredients__list__item__quantity">{ingredient.quantity} {ingredient.unit}</span>
              {ingredient.name}
            </li>
          ))
        };
      </ul>
    </section>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default Ingredients;
