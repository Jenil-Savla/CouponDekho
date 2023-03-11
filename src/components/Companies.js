import { Typography, Card, Grid, Box, Button } from '@mui/material';
import React from 'react'

const Companies = () => {
  const companies = ['Amazon', 'Flipkart', 'Sugar', 'Filecoin'];

  return (
    <Box sx={{padding: 10}}>
    <Box>
        <h1>Companies</h1>
        <Grid container alignItems='strech' spacing={3} sx={{margin: 'auto'}}>
          {companies.map((company) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Card>
                <Typography variant='h5' sx={{padding: 4}}><center>{company}</center></Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Box>
    <Box sx={{paddingTop: 5}}>
        <h1>Recently Added Coupons</h1>
        <Grid container alignItems='strech' spacing={3} sx={{margin: 'auto'}}>
          {companies.map((company) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Card>
                <Typography variant='h5' sx={{padding: 4}}><center>{company}</center></Typography>
                <Button>Redeem Now</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Box>
    <Box sx={{paddingTop: 5}}>
        <h1>Expires Today Coupons</h1>
        <Grid container alignItems='strech' spacing={3} sx={{margin: 'auto'}}>
          {companies.map((company) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Card>
                <Typography variant='h5' sx={{padding: 4}}><center>{company}</center></Typography>
                <Button>Redeem Now</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Box>
    </Box>
  )
}

export default Companies;
