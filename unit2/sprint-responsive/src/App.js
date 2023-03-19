import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Main from './pages/Main';
import Footer from './component/Footer';
import SearchBar from './component/Search';
import Favorites from './component/Favorites';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SearchBar/>
      <Favorites/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
