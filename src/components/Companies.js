import { Typography, Card, Grid, Box, Button, CardMedia } from '@mui/material';
import React from 'react'
import Payment from './Payment';

const Companies = () => {
  const companies = ['https://assets.devfolio.co/hackathons/7a20cc713c0c4dd3aa4a7eeb78ff2bb0/sponsors/872c24cd4a4641769a5a4578e8aa1812/68.png',  'https://cryptosrus.com/wp-content/uploads/2021/07/Filecoin-logo.jpg', 'https://rezonant.net/wp-content/uploads/2022/04/Kuhoo-logo-for-website.png', 'https://th.bing.com/th/id/OIP._qfZ13lDcG2ICCwXzI_YywHaBM?pid=ImgDet&rs=1','https://stakehound.com/wp-content/uploads/2021/04/Polygon-logo.png','https://brandongaille.com/wp-content/uploads/2014/02/17-Greatest-Indian-Company-Logos-of-All-Time.jpg'];
  // const companies = ['amazon', 'flipkart']

  const carts = [{company: 'Amazon', tag: 'Samsung', price: 1200, discount: '20%' }, {company: 'Myntra', tag: 'Handbag', price: 1000, discount: '10%'}, {company: 'flipkart', tag: 'LCD', price: 10000, discount: '15%'}, {company: 'BigBasket',  tag: 'Apples', price: 120, discount: '5%'}];
  const coupons = [];

  let cost;
  const handleClick = (amt) => {
        cost = amt; 
  }
  // console.log(cost);
  return (
    <Box sx={{padding: 10}}>
    <Box>
        <h1>Companies</h1>
 
        <Grid container alignItems='strech' spacing={3} sx={{margin: 'auto'}}>
          {companies.map((company) => (
            <Grid item xs={12} sm={12} md={6} lg={2} >
                <img src={company} height='100px' width='200px' style={{marginRight: 25}}/>
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
          {carts.map((company) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
             
          
        <div class="card">
        <svg
          viewBox="0 0 784.37 1277.39"
          clip-rule="evenodd"
          fill-rule="evenodd"
          image-rendering="optimizeQuality"
          text-rendering="geometricPrecision"
          shape-rendering="geometricPrecision"
          version="1.1"
          height="100%"
          width="100%"
          xmlSpace="preserve"
          class="img"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <g id="_1421394342400">
              <g>
                <polygon
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
                  fill-rule="nonzero"
                  fill="#343434"
                ></polygon>
                <polygon
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
                  fill-rule="nonzero"
                  fill="#8C8C8C"
                ></polygon>
                <polygon
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
                  fill-rule="nonzero"
                  fill="#3C3C3B"
                ></polygon>
                <polygon
                  points="392.07,1277.38 392.07,956.52 -0,724.89"
                  fill-rule="nonzero"
                  fill="#8C8C8C"
                ></polygon>
                <polygon
                  points="392.07,882.29 784.13,650.54 392.07,472.33"
                  fill-rule="nonzero"
                  fill="#141414"
                ></polygon>
                <polygon
                  points="0,650.54 392.07,882.29 392.07,472.33"
                  fill-rule="nonzero"
                  fill="#393939"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        <div class="textBox">
          <p class="text head">{company.company}</p>
          <p>{company.tag}</p>
          <p class="text price">Price: {company.price}</p>
          <p class="text price">Discount: {company.discount}</p>
            <Payment onClick={handleClick} amt={company.price} cost/>
          {/* <button class="btn" style={{color: 'white'}} >Reedem</button> */}
          {/* onClick={() => handleClick(card)} */}
        </div>
      </div>
         
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
