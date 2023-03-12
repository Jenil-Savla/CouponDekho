import React from "react";
import "./css/card.css";
import { Button, Grid, Card, Typography, Box, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { ADD } from "../redux/actions/action";
import { DLT } from "../redux/actions/action";
import CloseIcon from "@mui/icons-material/Close";
import Payment from "./Payment";
import axios from "axios";
import { useEffect, useState } from "react";
import { StrikethroughS } from "@mui/icons-material";

function Cart() {
  const [carts , setCarts] = useState([
    {
      company_name: "Amazon",
      tag: "prime",
      price: 12,
      id: "1",
      image_url:
        "https://assets.devfolio.co/hackathons/7a20cc713c0c4dd3aa4a7eeb78ff2bb0/sponsors/872c24cd4a4641769a5a4578e8aa1812/68.png",
    },
    // {
    //   company: "Flipkart",
    //   tag: "prime",
    //   price: 123,
    //   id: "2",
    //   image:
    //     "https://th.bing.com/th/id/OIP._qfZ13lDcG2ICCwXzI_YywHaBM?pid=ImgDet&rs=1",
    // },
    // {
    //   company: "Myntra",
    //   tag: "prime",
    //   price: 123,
    //   id: "3",
    //   image:
    //     "https://stakehound.com/wp-content/uploads/2021/04/Polygon-logo.png",
    // },
    // { company: "Snapdeal", tag: "prime", price: 123, id: "4" , image : "https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_pink.png" },]
  ]
  );
  let [applied , setApplied] = useState(false);
  let [coupon , setCoupon] = useState("");
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Token " + token,
      "Content-Type": "multipart/form-data",
    },
  };
  let handleCoupon = (e) => {
    e.preventDefault();
    setCoupon(e.target.value);
  };
  const [discount   , setDiscount] = useState(0);
  useEffect(() => {
    axios.get(url , config).then((res) => {
      console.log(res.data);
      setCarts([])
  
      let temp2 = []
      for (let i = 0; i < res.data.data.length; i++) {
        let temp = { 
        }
        temp.image = res.data.data[i].product.image_url;
        temp.company = res.data.data[i].product.name.substr(0, 30);;
        temp.id = res.data.data[i].product.id;
        temp.price = res.data.data[i].product.price;
        temp.skuid = res.data.data[i].product.sku;
        console.log(temp);  
        temp2.push(temp);
      }
      setCarts( temp2);
      console.log(carts , temp2);
    });
    }, []);
  console.log(carts);
  let total = [];
  const dispatch = useDispatch();
  let url = "http://127.0.0.1:8000/api/product/";
  const handleClick = (card) => {
    // count++;
    dispatch(ADD(card));
  };

  const posts1 = useSelector((state) => state.cartreducer.carts);
  let validatee = () => {
    let temp = []  ;
    for (let i = 0; i < posts1.length; i++) {
      temp.push(posts1[i].skuid);
    }
    let data = {
      "skus": temp,
      "coupon": coupon
    } 
    console.log(data);
    let url1 = 'http://127.0.0.1:8000/api/validate_coupon'
    axios.post(url1 , data , config).then((res) => {
      console.log(res.data);
      if (res.data.data.valid == true) {
        alert("Coupon Applied");
        setDiscount(res.data.data.discount);
        setApplied(true);
      } else {
        alert("Invalid Coupon");
      }
    });
  }
  // console.log(count);

  const posts = useSelector((state) => state.cartreducer.carts);
  // console.log(carts[2].price + carts[0].price);
 
  // for (let i = 0; i < posts.length; i++) {
  //   console.log(posts);
  //   }
  const renderedPosts = posts.map((post) => (
    <Grid item xs={2} key={post.id}>
      <Card
        sx={{
          maxWidth: 345,
          marginTop: 3,
          marginLeft: 5,
          display: "flex",
          paddingLeft: 2,
        }}
      >
        <img src={post.image} height="50px" width="100px" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.company}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {post.price*post.qnty} ₹
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {post.qnty}
          </Typography>
        </CardContent>
        <CardActions>
          <CloseIcon
            size="small"
            onClick={() => dlt(post.id)}
            sx={{ marginLeft: 5 }}
          />
        </CardActions>
      </Card>
    </Grid>
  ));

  let sum = 0;
  let sum2  = 0;
  for (let i = 0; i < posts.length; i++) {
    total.push(posts[i].price);
    let p = parseInt(total[i]);
    sum += p*(1-discount);
    sum2 += p;
  }


  // console.log(sum);

  const dlt = (id) => {
    dispatch(DLT(id));
  };
  return (
    <>
      <div>
        <Box style={{ display: "flex" }}>
          <Box sx={{ flex: 70 }}>
            <Typography
              variant="h4"
              align="center"
              style={{ marginLeft: 50, marginBottom: 10, marginTop: 10 }}
            >
              Products
            </Typography>
            <Grid
              container
              alignItems="strech"
              spacing={3}
              sx={{ marginLeft: 1 }}
            >
              {carts.map((card) => (
                <Grid item lg={4}>
                  {/* <Card sx={{ maxWidth: 300, marginTop:3 , padding: 5}}> */}
                  <img src={card.image} width="200px" height="100" />
                  <Box sx={{ marginTop: 3 }}>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ marginRight: 5 }}
                    >
                      {card.company}
                    </Typography>
                    <Typography variant="h5" component="div" color="grey">
                      Price: ₹{card.price}
                    </Typography>
                  </Box>
                  <Button
                    color="inherit"
                    variant="outlined"
                    size="small"
                    onClick={() => handleClick(card)}
                    sx={{ marginTop: 2, marginLeft: 5 }}
                  >
                    Add to Cart
                  </Button>
                  {/* </Card> */}
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box>
            <Card
              sx={{
                flex: 30,
                backgroundColor: "aliceblue",
                marginLeft: 2,
                marginTop: 4,
                marginRight: 4,
                height: 250,
              }}
            >
              <Box>
                {applied?<Typography variant="h5" sx={{ marginTop: 2 }}>
                  <center><strike >Total Amount: {sum2} </strike></center>
                </Typography>:<Typography variant="h5" sx={{ marginTop: 2 }}>
                  <center>Total Amount: {sum2}</center>
                </Typography>}
                {applied? <Typography variant="h5" sx={{ marginTop: 2 , marginBottom: 10}}>
                  <center>Total Amount: {sum}</center>
                </Typography>: <><Typography variant="h6" align="center" sx={{ mt: 2, mb: 1 }}>
                  Do you have any discount code?
                </Typography>
                <TextField
                  placeholder="Enter coupon code"
                  variant="outlined"
                  type="name"
                  InputProps={{
                    sx: {
                      borderRadius: 10,
                      color: "region",
                      backgroundColor: "white",
                      marginLeft: 5,
                    },
                  }}
                  onChange = {handleCoupon}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    marginTop: 0.7,
                    marginLeft: 3,
                    marginBottom: 3,
                    borderRadius: 10,
                    marginRight: 2,
                    
                  }}
                  onClick = {validatee}
                >
                  Apply
                </Button></>}
                <center>
                  <Payment  amt = {sum}/>
                </center>
              </Box>
            </Card>
            <Grid sx={{ flex: "40%", marginTop: 5, marginRight: 4 }}>
              <Grid>
                <Typography variant="h6">
                  <center>Added Products</center>
                </Typography>
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
