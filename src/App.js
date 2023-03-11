import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Dashboard from './components/Dashboard';
import Home from './components/Home';
=======
import Generate from './components/Generate';
>>>>>>> cf0e3b089426d4db7f5d5b10a2781b69106c23a8

const App = () => {
  return (
    <>
      <Navbar />
      <Generate />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App;
