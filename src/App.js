import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Generate from './components/Generate';
import Card from './components/Card';
import Ecommerce from './components/Ecommerce';
// import Generate from './components/Generate';
// import MyPieChart from './components/Piechart';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Generate /> */}
      {/* <MyPieChart /> */}
      {/* <Card /> */}
      {/* <Ecommerce /> */}
      <Routes>
        <Route path='/cards' element={<Ecommerce />}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/generate' element={<Generate/>} />
      </Routes>
    </>
  )
}

export default App;
