
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';
import Deshboard from './Components/Deshboard/Deshboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Notmatch from './Components/Notmatch/Notmatch';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/deshboard' element={<Deshboard></Deshboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notmatch></Notmatch>}></Route>
      </Routes>
    </div>
  );
}

export default App;
