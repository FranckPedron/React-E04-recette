// == Import
import recipeData from 'src/data/recipe';
import Header from '../Header';
import Instructions from '../Instructions';
import Ingredients from '../Ingredients';
import './app.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header
        title={recipeData.title}
        difficulty={recipeData.difficulty}
        author={recipeData.author}
        imageUrl={recipeData.thumbnail}
      />
      <Ingredients ingredients={recipeData.ingredients} />
      <Instructions steps={recipeData.instructions} />
    </div>
  );
}

// == Export
export default App;
