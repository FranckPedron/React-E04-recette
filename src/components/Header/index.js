import PropTypes from 'prop-types';
import './header.scss';

function Header({ imageUrl, author, title, difficulty }) {
  return (
    <header className="header">
      <img
        className="header__img"
        src={imageUrl}
        alt="Des crêpes et des pancakes sur une planche en bois avec des fraises"
      />
      <div className="header__content">
        <h1 className="header__content__title">{title}</h1>
        <p className="header__content__desc">{author} - {difficulty}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Header;
