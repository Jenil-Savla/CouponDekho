import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Generate from './components/Generate';

const App = () => {
  return (
    <>
      <Navbar />
      <Generate />
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App;
