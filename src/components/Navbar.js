import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import coupon from './images/coupon.png';

// import { useDispatch } from 'react-redux';

const Navbar = () => {
    const logoStyle = { height: 35, width: 40 }
  const navigate = useNavigate();
//   const [search, setSearch] = useState('');
//   const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/login')
  }

//   const sellBookForm = () => {
//     navigate('/form')
//   }

  const handleSearch = () => {
    
  }

  

  const handleClick = () => {

  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'white'}}>
        <Toolbar>
                <img src={coupon} style={logoStyle} />
            <div>
                <Typography variant="h6" sx={{ color: 'hotpink', fontSize: 24 }}>
                COUPONDEKHO
                </Typography>
            </div>
          
          
          <Button sx={{color: '#000'}}>Home</Button>
          <Button>Generate Coupon</Button>
          <Button onClick={handleLogin} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;