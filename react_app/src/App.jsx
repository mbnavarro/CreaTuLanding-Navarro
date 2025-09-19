import './App.css';
import { Carrito } from './components/Carrito';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Carrito />
      <ItemListContainer saludo="Hola"/>
    </>
  )
}

export default App;
