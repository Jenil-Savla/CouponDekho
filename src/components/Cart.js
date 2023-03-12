import React from "react";
import "./css/card.css";
import { Button, Grid, Card, Typography, Box, TextField } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom'; 
import { ADD } from '../redux/actions/action';
import { DLT } from '../redux/actions/action';
import CloseIcon from '@mui/icons-material/Close';
import Payment from "./Payment";


function Cart() {

  const carts = [{company: 'Amazon', tag: 'prime', price: 12, id: '1', image: 'https://assets.devfolio.co/hackathons/7a20cc713c0c4dd3aa4a7eeb78ff2bb0/sponsors/872c24cd4a4641769a5a4578e8aa1812/68.png' }, {company: 'Flipkart', tag: 'prime', price: 123, id: '2', image: 'https://th.bing.com/th/id/OIP._qfZ13lDcG2ICCwXzI_YywHaBM?pid=ImgDet&rs=1'}, {company: 'Myntra', tag: 'prime', price: 123,  id: '3', image: 'https://stakehound.com/wp-content/uploads/2021/04/Polygon-logo.png'}, {company: 'Snapdeal',  tag: 'prime', price: 123, id: '4'}];
  let total = [];
  const dispatch = useDispatch();
  
  const handleClick = (card) => {
    // console.log("clicked");
    dispatch(ADD(card));
  }

  const posts = useSelector((state) => state.cartreducer.carts);
  // console.log(carts[2].price + carts[0].price);
  

  const renderedPosts = posts.map(post => (
    <Grid item xs={2} key={post.id}>
      
    <Card sx={{ maxWidth: 345, marginTop:3 , marginLeft: 5 , display: 'flex', paddingLeft: 2}}>
    <img src={post.image} height='50px' width='100px'/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {post.company}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Price: {post.price}₹
      </Typography>
    </CardContent>
    <CardActions> 
      <CloseIcon size="small" onClick={() => dlt(post.id)} sx={{marginLeft: 5}} />
    </CardActions>
  </Card>
  </Grid>
  ))


  let sum = 0;
  for(let i=0; i<posts.length; i++){
    total.push(posts[i].price);
    let p = parseInt(total[i])
    sum+=p;
  }

  // console.log(sum);

  const dlt = (id) => {
    dispatch(DLT(id));
  }
  return (
    <>
    <div>
      <Box style={{display: 'flex'}}>
        <Box sx={{flex: 70}}>
          <Typography variant="h4" align="center" style={{marginLeft: 50, marginBottom: 10, marginTop: 10}}>Products</Typography>
        <Grid container alignItems='strech' spacing={3} sx={{marginLeft: 1}} >
          {carts.map((card) => (
            <Grid item lg={4}>
              {/* <Card sx={{ maxWidth: 300, marginTop:3 , padding: 5}}> */}
                <img src={card.image} width='200px' height='100'/>
                <Box sx={{display: 'flex', marginTop: 3}}>
                <Typography variant="h5" component="div" sx={{marginRight: 12}}>{card.company}</Typography>
                <Typography variant="h5" component="div" color='grey'>₹{card.price}</Typography>
                </Box>
                <Button color='inherit' variant='outlined' size='small' onClick={() => handleClick(card)} sx={{ marginTop: 2, marginLeft: 5 }}>Add to Cart</Button>
              {/* </Card> */}
            </Grid>
          ))}
        </Grid>    
        </Box>
        <Box>
        <Card sx={{flex: 30, backgroundColor: 'aliceblue', marginLeft: 2, marginTop: 4, marginRight: 4, height: 250}}>
          <Box>
          <Typography variant='h5' sx={{marginTop: 2}}><center>Total Amount: {sum}</center></Typography>
              <Typography variant="h6" align="center" sx={{ mt: 2, mb: 1 }}>Do you have any discount code?</Typography>
              <TextField placeholder="Enter coupon code" variant="outlined" type='name' 
                    InputProps={{
                      sx: { borderRadius: 10, color: 'region', backgroundColor: 'white', marginLeft: 5},}} />
                <Button variant="contained" size='large' sx={{marginTop: 0.7, marginLeft: 3, marginBottom: 3, borderRadius: 10, marginRight: 2}}>Apply</Button>
                <center><Payment /></center>
          </Box>
        </Card>
        <Grid sx={{flex: '40%', marginTop: 5, marginRight: 4, }}>
          <Grid>
        <Typography variant='h6'><center>Added Products</center></Typography>
            {renderedPosts}    
          </Grid>
        </Grid>
        </Box>

                      
            
        
        </Box>
        
    </div>
      
    </>
  );
}

export default Cart;
