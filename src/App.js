
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';
import Deshboard from './Components/Deshboard/Deshboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/deshboard' element={<Deshboard></Deshboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
