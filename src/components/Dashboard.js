// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Graph from "./Graph";
// import PieChart from "./Piechart";
// import { Card, Typography, Box, Grid, Paper, Button } from "@mui/material";
// import img1 from "./images/img1.png";
// import img2 from "./images/img2.png";
// import img3 from "./images/img3.png";
// import img4 from "./images/img4.png";
// import axios from "axios";

// function Dashboard() {
//   const [ jenil , setJenil ] = useState(true);
//   const [file, setFile] = useState(null);
  
//   const handleFileInputChange = async (event) => {
//     setFile(event.target.files[0]);
//     setJenil(false);
    
//   };

//   const handleUploadClick = async () => {
  
//     const formData = new FormData();
//     formData.append("product_list", file);
//     axios
//       .post("http://127.0.0.1:8000/api/product/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           "Authorization" : `Token ${localStorage.getItem('token')}`
//         },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   let handleme=(e)=>{
//     document.getElementById('133').click();
//   }

//   const imageStyle = { width: 200, height: 100 };
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <Box sx={{ marginTop: 2, marginBottom: 2, display: "flex" }}>
//             <Box sx={{ flex: 70, marginTop: 2 }}>
//               <Typography variant="h3">Dashboard</Typography>
//             </Box>
//             <Box sx={{ flex: 30, marginTop: 2 }}>
//               {/* <input
//                 id="csvFileInput"
//                 type="file"
//                 accept=".csv"
//                 onChange={handleFileInputChange}
//                 style={{ display: "none" }}
//               /> */}
//               <input type="file" onChange={handleFileInputChange} style = {{display :"none"}} id = '133'/>
//               {/* {jenil?<Button
//                 variant="contained"
//                 size="large"
//                 sx={{ color: "white", marginRight: 1, borderRadius: 10 }}
//                 onClick={handleme}
//               >
//                 Add Products
//               </Button>: <Button
//                 variant="contained"
//                 size="large"
//                 sx={{ color: "white", marginRight: 1, borderRadius: 10 }}
//                 onClick={handleUploadClick}
//               >
//                 Submit
//               </Button>} */}
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{ color: "white", marginRight: 1, borderRadius: 10 }}
//               >
//                 View Coupons
//               </Button>
//             </Box>
//           </Box>
//         </div>

//         <Grid
//           container
//           sx={{ display: "flex", marginBottom: 5 }}
//           spacing={3}
//           alignItems="strech"
//         >
//           <Grid item xs={12} sm={12} md={6} lg={3}>
//             <Card>
//               <div>
//                 <center>
//                   <Typography variant="h5">91340</Typography>
//                   <Typography variant="body">New Coupons Used</Typography>
//                 </center>
//               </div>
//               <div>
//                 <center>
//                   <img src={img1} style={imageStyle} />
//                 </center>
//               </div>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={3}>
//             <Card>
//               <div>
//                 <center>
//                   <Typography variant="h5">2620</Typography>
//                   <Typography variant="body">Average Monthly Order</Typography>
//                 </center>
//               </div>
//               <div>
//                 <center>
//                   <img src={img2} style={imageStyle} />
//                 </center>
//               </div>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={3}>
//             <Card>
//               <div>
//                 <center>
//                   <Typography variant="h5">310200</Typography>
//                   <Typography variant="body">Total Revenue This Year</Typography>
//                 </center>
//               </div>
//               <div>
//                 <center>
//                   <img src={img3} style={imageStyle} />
//                 </center>
//               </div>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} lg={3}>
//             <Card>
//               <div>
//                 <center>
//                   <Typography variant="h5">1567</Typography>
//                   <Typography variant="body">New Visitors</Typography>
//                 </center>
//               </div>
//               <div>
//                 <center>
//                   <img src={img4} style={imageStyle} />
//                 </center>
//               </div>
//             </Card>
//           </Grid>
//         </Grid>

//         <Box sx={{ display: "flex" }}>
//           <Paper style={{ flex: 60, marginRight: 40 }} elevation={6}>
//             <Typography variant="h4" sx={{ marginBottom: 5 }}>
//               <center>Redemption Rate
//               </center>
//             </Typography>
//             <div>
//               <center>
//                 <Graph />
//               </center>
//             </div>
//           </Paper>
//           <Paper style={{ flex: 30, padding: 30 }} elevation={6}>
//             <PieChart />
//           </Paper>
//         </Box>
//       </div>
//     </>
//   );
// }

// export default Dashboard;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Graph from "./Graph";
import PieChart from "./Piechart";
import { Card, Typography, Box, Grid, Paper, Button } from "@mui/material";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [ jenil , setJenil ] = useState(true);
  const [file, setFile] = useState(null);
  
  const handleFileInputChange = async (event) => {
    setFile(event.target.files[0]);
    setJenil(false);
    
  };
  const navigate = useNavigate();

  const handleUploadClick = async () => {
  
    const formData = new FormData();
    formData.append("product_list", file);
    axios
      .post("http://127.0.0.1:8000/api/product/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization" : `Token ${localStorage.getItem('token')}`
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let handleme=(e)=>{
    document.getElementById('133').click();
  }

  const imageStyle = { width: 200, height: 100 };
  return (
    <>
      <div className="container">
        <div className="row">
          <Box sx={{ marginTop: 2, marginBottom: 2, display: "flex" }}>
            <Box sx={{ flex: 70, marginTop: 2 }}>
              <Typography variant="h3">Dashboard</Typography>
            </Box>
            <Box sx={{ flex: 30, marginTop: 2 }}>
              {/* <input
                id="csvFileInput"
                type="file"
                accept=".csv"
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              /> */}
              <input type="file" onChange={handleFileInputChange} style = {{display :"none"}} id = '133'/>
              {jenil?<Button
                variant="contained"
                size="large"
                sx={{ color: "white", marginRight: 1, borderRadius: 10 }}
                onClick={handleme}
              >
                Add Products
              </Button>: <Button
                variant="contained"
                size="large"
                sx={{ color: "white", marginRight: 1, borderRadius: 10 }}
                onClick={handleUploadClick}
              >
                Submit
              </Button>}
              <Button
                variant="contained"
                size="large"
                sx={{ color: "white", marginRight: 1, borderRadius: 10 }}
                onClick={()=>navigate("/cart")}
              >
                View Cart
              </Button>
            </Box>
          </Box>
        </div>

        <Grid
          container
          sx={{ display: "flex", marginBottom: 5 }}
          spacing={3}
          alignItems="strech"
        >
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card>
              <div>
                <center>
                  <Typography variant="h5">91340</Typography>
                  <Typography variant="body">New Coupons Used</Typography>
                </center>
              </div>
              <div>
                <center>
                  <img src={img1} style={imageStyle} />
                </center>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card>
              <div>
                <center>
                  <Typography variant="h5">2620</Typography>
                  <Typography variant="body">Average Monthly Order</Typography>
                </center>
              </div>
              <div>
                <center>
                  <img src={img2} style={imageStyle} />
                </center>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card>
              <div>
                <center>
                  <Typography variant="h5">310200</Typography>
                  <Typography variant="body">Total Revenue This Year</Typography>
                </center>
              </div>
              <div>
                <center>
                  <img src={img3} style={imageStyle} />
                </center>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card>
              <div>
                <center>
                  <Typography variant="h5">1567</Typography>
                  <Typography variant="body">New Visitors</Typography>
                </center>
              </div>
              <div>
                <center>
                  <img src={img4} style={imageStyle} />
                </center>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex" }}>
          <Paper style={{ flex: 60, marginRight: 40 }} elevation={6}>
            <Typography variant="h4" sx={{ marginBottom: 5 }}>
              <center>Redemption Rate
              </center>
            </Typography>
            <div>
              <center>
                <Graph />
              </center>
            </div>
          </Paper>
          <Paper style={{ flex: 30, padding: 30 }} elevation={6}>
            <PieChart />
          </Paper>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
