import React, { useState } from 'react'
import { Box, Grid, TextField, Typography, Button, Paper, Avatar } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Navigate } from "react-router-dom";
import signup from './images/signup.jpg';
import './style.css';


const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
const validPassword = new RegExp('^.*(?=.{8,}).*$');


const Signup = () => {
  const paperStyle = { marginTop: 60, border: 1, height: 550, paddingTop: 10, marginLeft: 10, marginRight: 50 };
  const gridStyle = { paddingLeft: 10, paddingRight: 10, paddingTop: 2.5  }
  const avatarStyle={backgroundColor: '#0eb3ae', marginBottom: 0}
  const signupStyle = {width: '100%', height: '100%', objectFit: 'cover', marginTop: 30}
  

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [pwdError, setPwdError] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [conpwdError, setConpwdError] = useState(false);
//   const [showPwd, setShowPwd] = useState(false);

const [isLoggedIn, setLogin] = useState("");

  let url = "http://127.0.0.1:8000/api/register/";
  const handleClickShowPassword = () => setShowPwd((show) => !show);

  const handleSubmit = async() => {
    !validEmail.test(email) ? setEmailErr(true) : setEmailErr(false);

    !validPassword.test(password)? setPwdError(true) : setPwdError(false);

    password !== confirmPassword ? setConpwdError(true) : setConpwdError(false);

    if(name==='' || email==='' || password==='' || confirmPassword==='' || pwdError || conpwdError || emailErr) {
        return (
            alert("Please check all the text fields")
        )
    }
    else{
      const data = {
        name: name,
        password: password,
        password2: password,
        email: email,
      };
      await axios
        .post(url, data)
        .then((res) => {
          localStorage.setItem('token', res.data.data.token);
          setLogin(true);
        })
        .catch((err) => {
          alert(JSON.parse(err.request.response).message);
        });
    };

    }
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }

  

  return (
        <Box style={{display: 'flex'}}>
            <Box style={{flex: 50}}>
              <img  src={signup} style={signupStyle}/>
            </Box>
            <Box style={{flex: 35}}>
            <Paper elavation={3} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign Up</h2>
          </Grid>

                <Grid sx={gridStyle}>
                    {/* <Typography sx={{marginLeft: 2, fontSize: 'large' }}>Name</Typography> */}
                    <TextField placeholder="Enter your name" variant="outlined" type='name' fullWidth value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonOutlineIcon color="disabled"/>
                        </InputAdornment>
                    ),
                    sx: { borderRadius: 10, color: 'region', backgroundColor: 'white'},}} />
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
                  sx: { borderRadius: 10, color: "#000", backgroundColor: 'white'},}}  error={pwdError}/>
                  { pwdError && <Typography variant='body2' sx={{marginLeft: 5, color: '#AF0D0D'}}>*The password must be minimum 8 characters</Typography>}
              </Grid>
              
              <Grid sx={gridStyle}>
                {/* <Typography sx={{marginLeft: 2, fontSize: 'large'}}>Confirm Password</Typography> */}
                <TextField placeholder="Confirm password" variant="outlined" fullWidth value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} type={showPwd ? 'text' : 'password'}
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
                  sx: { borderRadius: 10, color: "#000", backgroundColor: 'white'},}}  error={conpwdError}/>
                  { conpwdError && <Typography variant='body2' sx={{marginLeft: 5, color: '#AF0D0D'}}>*The password does not match</Typography>}
              </Grid>
              <Grid sx={gridStyle}>
                <Button variant='contained' sx={{width: '250px', height: 50, borderRadius: 10, marginLeft: 15 }} fullWidth onClick={handleSubmit}>Signup</Button>
              </Grid>
            </Paper>
        </Box>
        
        </Box>
  )
}

export default Signup;