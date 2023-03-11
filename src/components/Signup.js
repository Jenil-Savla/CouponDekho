import React, { useState } from 'react';
import { Grid, Paper, Avatar, Box, TextField, Button, Typography, Popover } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';


// const initialState = { username: '', email: '', password: '', confirmPassword: ''};
const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

const Register = () => {
    const paperStyle = { padding: 30, height: '70vh', width: 300, margin: ' 100px auto' }
    const avatarStyle={backgroundColor: '#0eb3ae'}
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [conpwdError, setConpwdError] = useState(false);
    
    const handleSignup = () => {
      !validEmail.test(email) ? setEmailErr(true) : setEmailErr(false);

      !validPassword.test(password)? setPwdError(true) : setPwdError(false);

      password != confirmPassword ? setConpwdError(true) : setConpwdError(false);

    }

  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign Up</h2>
          </Grid>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Username" variant="standard" fullWidth required onChange={(e) => setUsername(e.target.value)}/>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email" variant="standard" fullWidth required 
            onChange={(e) => setEmail(e.target.value)}
            error={emailErr}
            helperText= {
              emailErr? "Invalid Email" : ''
            }/>
            
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
            onMouseLeave={() => setAnchorEl(null)}>
            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Password" variant="standard" fullWidth required onChange={(e) => setPassword(e.target.value)}
            // aria-owns={open ? 'mouse-over-popover' : undefined}
            // aria-haspopup="true"
            error={pwdError}
            helperText= {
              pwdError? "Invalid Password" : ''
            }/>
            
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              disableRestoreFocus
            >
            <Typography sx={{ p: 1 }}>Should contain atleast one Uppercase <br></br> and Lowercase character, number, <br></br> special character(Eg. @,#,$,etc)</Typography>
          </Popover>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Confirm Password" variant="standard" fullWidth required 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              error={conpwdError}
              helperText= {
                conpwdError? "Password does not match!" : ''
              }/>
          </Box>

          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="I agree to terms and conditions" />
          </FormGroup>

          <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: 2}}>
            <Button variant='contained' color='success' fullWidth onClick={handleSignup}>Sign Up</Button>
          </Box>
          
          <Typography>Already have an account?<Button onClick={() => navigate('/')}>Sign In</Button></Typography>
        </Paper>
    </Grid>
  )
}

export default Register;