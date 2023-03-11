import React from 'react';
import { Grid, Paper, Avatar, Box, TextField, Button, Typography, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const paperStyle = { padding: 30, height: '50vh', width: 300, margin: ' 100px auto' }
    const avatarStyle={backgroundColor: '#0eb3ae'}
    const navigate = useNavigate();

  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LoginIcon/></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email" variant="standard" fullWidth required />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Password" variant="standard" fullWidth required />
          </Box>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
          </FormGroup>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button variant='contained' color='success' fullWidth>Sign In</Button>
          </Box>
          <Link href="#" underline="none">
            {"Forgot Password?"}
          </Link>
          <Typography>Don't have an account?<Button onClick={() => navigate('/register')}>Sign Up</Button></Typography>
        </Paper>
    </Grid>
  )
}

export default Login;