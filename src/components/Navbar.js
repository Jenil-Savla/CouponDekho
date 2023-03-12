import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import coupon from './images/coupon.png';
import Form from 'react-bootstrap/Form';

// import { useDispatch } from 'react-redux';

const Navbar = () => {
    const logoStyle = { height: 35, width: 40 }
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
//   const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/login')
  }

//   const sellBookForm = () => {
//     navigate('/form')
//   }

  const handleSearch = () => {
    
  }

  
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
    //     <Toolbar>
          <Box sx={{display: 'flex', marginTop: 2, marginLeft: 2}}>
            <Box sx={{display: 'flex'}}>
              <img src={coupon} style={logoStyle} />
                <Typography variant="h6" sx={{ color: 'hotpink', fontSize: 24, marginRight: 30}}>
                  COUPONDEKHO
                </Typography>
            </Box>
          
            <Box sx={{marginRight: 50}}>
                <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button sx={{color: 'black', borderColor: 'black'}} variant='outlined' onClick={handleSearch}>Search</Button>
              </Form>
            </Box>
            
            <Button onClick={() => navigate('/')} sx={{color: 'black'}}>Home</Button>
          <Button onClick={() => navigate('/generate')} sx={{color: 'black'}}>Generate Coupon</Button>
          <Button onClick={handleLogin} sx={{color: 'black'}} >Login</Button>

          </Box>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}

export default Navbar;