import { Route, Routes } from 'react-router';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/Notfound/Notfound';
import Products from './Pages/Product/Product';
import Single from './Pages/Single/Single';
import { useDispatch, useSelector } from 'react-redux';
import Spin from './Components/Spinner/Spinner';
import { useEffect } from 'react';
import { setGlobalLoader } from './Components/store/Slices/Loading';
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loader.globalLoading);
     useEffect(() => {
       fetch("https://nargiz-back.herokuapp.com/pottery")
         .then((res) => res.json())
         .then((data) => {
           if (data) {
            dispatch(setGlobalLoader(false))
          }
         });
     }, [dispatch]);
  return (
    <div className="App">
      {loading?<Spin/>:<><Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/single/:id' element={<Single/>}/>
        <Route path="/*" element={<Notfound />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer /></>}
    </div>
  );
}

export default App;
