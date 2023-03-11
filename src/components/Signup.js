import React, { useState } from 'react'
import { Box, Grid, TextField, Typography, Button, Paper, Avatar } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Modal from '@mui/material/Modal';


const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
const validPassword = new RegExp('^.*(?=.{8,}).*$');


const Signup = () => {
  const paperStyle = {  margin: 'auto',marginTop: 30, border: 1, width: '40%', height: 600, paddingTop: 10 };
  const gridStyle = { paddingLeft: 10, paddingRight: 10, paddingTop: 0.7 }
  const avatarStyle={backgroundColor: '#0eb3ae', marginBottom: 0}
  

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [pwdError, setPwdError] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [conpwdError, setConpwdError] = useState(false);
//   const [showPwd, setShowPwd] = useState(false);
  

  const handleClickShowPassword = () => setShowPwd((show) => !show);

  const handleSubmit = () => {
    !validEmail.test(email) ? setEmailErr(true) : setEmailErr(false);

    !validPassword.test(password)? setPwdError(true) : setPwdError(false);

    password != confirmPassword ? setConpwdError(true) : setConpwdError(false);

    if(name==='' || email==='' || password==='' || confirmPassword==='') {
        return (
            alert("Please enter all the text fields")
        )
    }

  }

  return (
        <Box>
            <Paper elavation={3} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign Up</h2>
          </Grid>

                <Grid sx={gridStyle}>
                    <Typography sx={{marginLeft: 2, fontSize: 'large' }}>Name</Typography>
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
                <Typography sx={{marginLeft: 2, fontSize: 'large' }}>Email</Typography>
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
                <Typography sx={{marginLeft: 2, fontSize: 'large'}}>Password</Typography>
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
                <Typography sx={{marginLeft: 2, fontSize: 'large'}}>Confirm Password</Typography>
                <TextField placeholder="Create password" variant="outlined" fullWidth value={confirmPassword}
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
  )
}

export default Signup;