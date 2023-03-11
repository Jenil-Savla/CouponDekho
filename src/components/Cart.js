import React from "react";
import "./css/card.css";
import { Button, Grid, Card, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom'; 
import { ADD } from '../redux/actions/action';
import { DLT } from '../redux/actions/action';

function Cart() {

  const carts = [{company: 'Amazon', tag: 'prime', price: 12, id: '1' }, {company: 'Flipkart', tag: 'prime', price: 123, id: '2'}, {company: 'Myntra', tag: 'prime', price: 123,  id: '3'}, {company: 'Snapdeal',  tag: 'prime', price: 123, id: '4'}];
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
    <Card sx={{ maxWidth: 345, marginTop:3 , marginLeft: 10 , display: 'flex'}}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {post.company}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Price: {post.price}₹
      </Typography>
    </CardContent>
    <CardActions> 
      <Button size="small" onClick={() => dlt(post.id)} color='primary' variant='contained' sx={{marginLeft: 15}}>DELETE</Button>
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

  console.log(sum);

  const dlt = (id) => {
    dispatch(DLT(id));
  }
  return (
    <>
    <div>
        <div style={{display: 'flex', marginTop: 50}}>
        <Typography variant="h4" align="center" style={{marginLeft: 50, marginBottom: 5}}>Products</Typography>
        <Button color='primary' variant='contained' height='100px' style={{ marginLeft: "auto" , marginRight: 50}}><ShoppingCartIcon />Cart</Button>
        </div>
        <div style={{display: 'flex'}}>
        <Grid container alignItems='strech' spacing={3} sx={{flex: '60%', marginLeft: 5}}>
          {carts.map((card) => (
            <Grid item>
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
          <p class="text head">{card.company}</p>
          <span>{card.tag}</span>
          <p class="text price">{card.price}</p>
          <button class="btn" style={{color: 'white'}} onClick={() => handleClick(card)}>Add to cart</button>
        </div>
      </div>
            </Grid>
          ))}
        </Grid>
        <Grid sx={{flex: '40%', marginLeft: '10' }}>
        <Card sx={{width: '100%' , height: '100%'}}>
            {renderedPosts}    
        </Card>
        <Card>
        <Typography>Total Amount: {sum}</Typography>
        </Card>
        </Grid>
        
        
        </div>
    </div>
      
    </>
  );
}

export default Cart;
