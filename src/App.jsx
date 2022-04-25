import { Route, Routes } from 'react-router';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/Notfound/Notfound';
import Products from './Pages/Product/Product';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
