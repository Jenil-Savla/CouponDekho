import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import coupon from './images/coupon.png';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@mui/icons-material/Search';

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'white'}}>
        <Toolbar>
                <img src={coupon} style={logoStyle} />
            <div>
                <Typography variant="h6" sx={{ color: 'hotpink', fontSize: 24, marginRight: 30, marginRight: 80 }}>
                  COUPONDEKHO
                </Typography>
            </div>

          <Button onClick={() => navigate('/')}>Home</Button>
          <Button onClick={() => navigate('/generate')}>Generate Coupon</Button>
          <Button onClick={handleLogin} >Login</Button>
          <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
          
            {/* <SearchIcon color="primary"/> */}
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button color="primary" onClick={handleSearch} variant='contained'>Search</Button>
          </Form>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;