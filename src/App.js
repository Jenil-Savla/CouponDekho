import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Generate from './components/Generate';
import Cart from './components/Cart';
import CouponDetails from './components/Coupon_details';
// import Ecommerce from './components/Ecommerce';
// import Generate from './components/Generate';
// import MyPieChart from './components/Piechart';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/cards' element={<Ecommerce />}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/generate' element={<Generate/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:title' element={<CouponDetails />} />
      </Routes>
    </>
  )
}

export default App;
