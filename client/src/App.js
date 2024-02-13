import './App.css';
import TopNav from './Components/TopNav';
import CatNav from './Components/CatNav';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';

function App() {
  return (
    <div lclassName="App">
      <TopNav/>
      <CatNav/>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/productDetails' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
    </div>
  );
}

export default App;
