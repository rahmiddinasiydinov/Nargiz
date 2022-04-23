import { Route, Routes } from 'react-router';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path='/' element={ <Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
