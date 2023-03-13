import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import coupon from "./images/coupon.png";
import Form from "react-bootstrap/Form";
import axios from "axios";
// import { useDispatch } from 'react-redux';

const Navbar = () => {
  const logoStyle = { height: 35, width: 40 };
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  //   const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("/login");
  };
  let token = localStorage.getItem("token");
  let searchh = (q) => {
    let config = {
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(`http://127.0.0.1:8000/api/product/0/`, { name: q }, config)
      .then((res) => {
        setResults(res.data);
      });
  };

  //   const sellBookForm = () => {
  //     navigate('/form')
  //   }

  const handleSearch = (e) => {
    navigate("/" + e.target.value);
  };

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
    //     <Toolbar>
    <Box sx={{ display: "flex", marginTop: 2, marginLeft: 2 }}>
      <Box sx={{ display: "flex" }}>
        <img src={coupon} style={logoStyle} />
        <Typography
          variant="h6"
          sx={{ color: "hotpink", fontSize: 24, marginRight: 20 }}
        >
          COUPONDEKHO
        </Typography>
      </Box>

      <Box sx={{ marginRight: 40 }}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
          />
          <Button
            sx={{ color: "black", borderColor: "black" }}
            variant="outlined"
          >
            Search
          </Button>
        </Form>
      </Box>

      <Button onClick={() => navigate("/")} sx={{ color: "black" }}>
        Home
      </Button>
      <Button onClick={() => navigate("/dashboard")} sx={{ color: "black" }}>
        Dashboard
      </Button>
      <Button onClick={() => navigate("/generate")} sx={{ color: "black" }}>
        Generate Coupon
      </Button>
      <Button onClick={handleLogin} sx={{ color: "black" }}>
        Login
      </Button>
    </Box>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default Navbar;
