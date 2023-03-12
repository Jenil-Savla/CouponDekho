import { Typography, Card, Grid, Box, Button, CardMedia } from '@mui/material';
import React from 'react'

const Companies = () => {
  const companies = ['https://assets.devfolio.co/hackathons/7a20cc713c0c4dd3aa4a7eeb78ff2bb0/sponsors/872c24cd4a4641769a5a4578e8aa1812/68.png', 'https://th.bing.com/th/id/OIP._qfZ13lDcG2ICCwXzI_YywHaBM?pid=ImgDet&rs=1','https://stakehound.com/wp-content/uploads/2021/04/Polygon-logo.png','https://brandongaille.com/wp-content/uploads/2014/02/17-Greatest-Indian-Company-Logos-of-All-Time.jpg'];
  // const companies = ['amazon', 'flipkart']
  return (
    <Box sx={{padding: 10}}>
    <Box>
        <h1>Companies</h1>
 
        <Grid container alignItems='strech' spacing={3} sx={{margin: 'auto'}}>
          {companies.map((company) => (
            <Grid item xs={12} sm={12} md={6} lg={3} >
                <img src={company} height='100px' width='200px'/>
                {/* // <Card >
                //   <CardMedia sx={{display: 'flex', alignItems: 'center'}} image={company}/>
                // </Card> */}
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
                {/* <Typography variant='h5' sx={{padding: 4}}><center>{company}</center></Typography> */}
                <img src={company} sx={{display: 'flex',marginLeft:"10px" ,  alignItems: 'center'}} height='100px' width='200px'/>
                <br></br>
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
              {/* <Typography variant='h5' sx={{padding: 4}}><center>{company}</center></Typography> */}
              <img src={company} sx={{display: 'flex',marginLeft:"10px" ,  alignItems: 'center'}} height='100px' width='200px'/>
              <br></br>
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
