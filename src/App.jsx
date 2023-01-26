import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container-fluid">
      <NavBar brand="ZetaEle" />
      <ItemListContainer greeting="Hola, Cliente" />
    </div>
  )
}

export default App
