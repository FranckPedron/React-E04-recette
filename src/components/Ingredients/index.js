import './ingredients.scss';

function Ingredients() {
  return (
    <section className="ingredients">
      <ul className="ingredients__list">
        <li className="ingredients__list__item">
          <span className="ingredients__list__item__quantity">375g</span>
          de farine
        </li>
        <li className="ingredients__list__item">
          <span className="ingredients__list__item__quantity">50cl</span>
          d'eau
        </li>
        <li className="ingredients__list__item">
          <span className="ingredients__list__item__quantity">4 gouttes</span>
          d'eau de fleur d'oranger
        </li>
      </ul>
    </section>
  );
}

export default Ingredients;
