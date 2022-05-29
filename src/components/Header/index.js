import './header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Des crêpes et des pancakes sur une planche en bois avec des fraises"
      />
      <div className="header__content">
        <h1 className="header__content__title">recette de crêpes</h1>
        <p className="header__content__desc">John Deuf - Facile</p>
      </div>
    </header>
  );
}

export default Header;
