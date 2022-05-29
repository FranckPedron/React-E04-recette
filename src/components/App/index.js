// == Import
import Header from '../Header';
import Instructions from '../Instructions';
import Ingredients from '../Ingredients';
import './app.scss';
// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Ingredients />
      <Instructions />
    </div>
  );
}

// == Export
export default App;
