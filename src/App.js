import './App.css';
import ProductList from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <div>
          <Counter title ={"PhoenixChips"}/>
        </div>
    </div>
  );
}

export default App;
