import React, { useState } from 'react'
import { Box, Grid, TextField, Typography, Button, Paper, Avatar } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import axios from "axios";
import login from './images/login.jpg';

const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
const validPassword = new RegExp('^.*(?=.{8,}).*$');


const Login = () => {
  const paperStyle = { marginTop: 60, border: 1, height: 550, paddingTop: 10, marginLeft: 10, marginRight: 50 };
  const gridStyle = { paddingLeft: 10, paddingRight: 10, paddingTop: 2.5  }
  const avatarStyle={backgroundColor: '#0eb3ae', marginBottom: 0}
  const loginStyle = {width: '100%', height: '100%', objectFit: 'cover', marginTop: 30}
  
  const url = 'http://127.0.0.1:8000/api/login/'
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState('');
  // const [pwdError, setPwdError] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [isLoggedIn, setLogin] = useState("");
//   const [showPwd, setShowPwd] = useState(false);
  // const [error, setError] = useState("");

const navigate = useNavigate();

  

  const handleClickShowPassword = () => setShowPwd((show) => !show);

  const handleSubmit = async() => {
    !validEmail.test(email) ? setEmailErr(true) : setEmailErr(false);
    console.log(emailErr)
    console.log(email, password , email===''  ,password==='')
    if( email==='' || password==='' || emailErr ) {
        console.log("Please enter all the text fields")
        // return (
        //     alert("Please enter all the text fields")
        // )

    }
    else{
      console.log(email, password)
      let data = {
        email: email,
        password: password,
      };
      await axios
      .post(url, data)
      .then((res) => {  
        console.log(res ,  res.data.data.token)
        localStorage.setItem('token', res.data.data.token)
        setLogin(true);
      })
      .catch((err) => {
        console.log(JSON.parse(err.request.response).message);
      alert(JSON.parse(err.request.response).message)
    });
    }

  }
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Box style={{display: 'flex'}}>
        <Box style={{flex: 50}}>
            <Paper elavation={3} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                <h2>Log In</h2>
          </Grid>              

              <Grid sx={gridStyle}>
                {/* <Typography sx={{marginLeft: 2, fontSize: 'large' }}>Email</Typography> */}
                <TextField placeholder="Enter your email" variant="outlined"  type='email' fullWidth value={email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        <MailOutlineIcon color="disabled"/>
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 10, color: "#000", backgroundColor: 'white'},}} 
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailErr}/>
                  {emailErr && <Typography variant='body' sx={{marginLeft: 4, color: '#AF0D0D'}}>Invalid email</Typography>}
              </Grid>

              <Grid sx={gridStyle}>
                {/* <Typography sx={{marginLeft: 2, fontSize: 'large'}}>Password</Typography> */}
                <TextField placeholder="Create password" variant="outlined" fullWidth value={password}
                onChange={(e) => setPassword(e.target.value)} type={showPwd ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPwd ? <VisibilityOff color='disabled' /> : <Visibility color='disabled' />}
                </IconButton>
                        
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 10, color: "#000", backgroundColor: 'white'},}} />
                 
              </Grid>
              
              
              <Grid sx={gridStyle}>
                <Button variant='contained' sx={{width: '250px', height: 50, borderRadius: 10, marginLeft: 15 }} fullWidth onClick={handleSubmit}>Sign In</Button>
                <Typography sx = {{padding : 2}}>Don't have an account?<Button onClick={() => navigate('/signup')}>Sign Up</Button></Typography>
              </Grid>
            </Paper>
            <Box style={{flex: 50}}>
              <img  src={login} style={loginStyle}/>
            </Box>
        </Box>
        </Box>
  )
}

export default Login;