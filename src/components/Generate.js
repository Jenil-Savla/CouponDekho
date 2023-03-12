import {
  Box,
  Card,
  Container,
  Paper,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  Typography,
  Stepper,
  Step,
  Input,
  StepLabel,
  InputLabel,
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
// import Dropdown from 'react-dropdown';
// import { SelectChangeEvent } from '@mui/material/Select';
// import {useDispatch} from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import { createPost } from '../../actions/posts';
// import FileBase from 'react-file-base64';
// import {makeStyles} from '@mui/styles';
// import generate from './images/generate.png';
// import "./style.css";
import Copy from "./Copy_clipboard";
// const useStyles = makeStyles(() => ({
//     root: {
//       "& .MuiStepIcon-active": { color: "red" },
//       "& .MuiStepIcon-completed": { color: "green" },
//       "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
//     }
//   }));

// const c = useStyles();

// const bg = {
//     background-img
// }

const step = {
  "& .MuiStepIcon-active": { color: "red" },
  "& .MuiStepIcon-completed": { color: "green" },
  "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" },
};

function getSteps() {
  return ["Basic Information", "Detail Information", "Price Information"];
}

let url = "http://127.0.0.1:8000/api/coupon/";

const Generate = () => {
  const [sku, setsku] = useState([]);
  const [jenil, setJenil] = useState(true);
  const [file, setFile] = useState(null);
  const [dynamic, setDynamic] = useState(false);
  const handleFileInputChange = async (event) => {
    setFile(event.target.files[0]);
    setJenil(false);
  };

  const handlemee = () => {
    setDynamic(true);
  };

  let handleme = (e) => {
    document.getElementById("133").click();
  };
  let token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("product_list", file);
  let config = {
    headers: {
      Authorization: "Token " + token,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    let url1 = "http://127.0.0.1:8000/api/sku_list";
    axios
      .get(url1, formData, config)
      .then((res) => {
        setsku(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [postData, setPostData] = useState({
    discountAmt: "",
    discountType: "",
    limit: "",
    maxdiscount: "",
    format: "",
    applicableTo: "",
    date: "",
    file: "",
  });
  console.log(postData);
  console.log(file);

  const handleUploadClick = async () => {
    console.log(postData);
    var formData = new FormData();
    formData.append("product_list", file);
    // formData.append("format", postData.format);
    // formData.append("applicable_to", postData.applicableTo);
    // formData.append("discount_type", postData.discountType);
    // formData.append("discount_value", postData.discountAmt);
    // formData.append("redemption_limit", postData.limit);
    // formData.append("max_discount_amount", postData.maxdiscount);
    // formData.append("expiry_date", postData.date);
    // formData.append("applicable_sku", selectedsku);
    let data = {
      format: JSON.stringify(postData.format.toLowerCase()),
      applicable_to: postData.applicableTo,
      discount_type: postData.discountType,
      discount_value: postData.discountAmt,
      redemption_limit: postData.limit,
      max_discount_amount: postData.maxdiscount,
      expiry_date: postData.date,
      applicable_sku: selectedsku,
      product_list: file,
    };
    formData.append("data", JSON.stringify(data));
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    const json = JSON.stringify(data);
    const blob = new Blob([json], {
      type: "application/json",
    });
    const data1 = new FormData();
data1.append("document", blob);
    axios
      .post("http://127.0.0.1:8000/api/coupon/", data1, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [code, setCode] = useState("");
  const [selectedsku, setselectedsku] = useState([]);
  const type = postData.discountType;

  const validDiscount = new RegExp("^.*(?=.{ ,100}).*$");

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [error, seterror] = useState(false);

  const handleNext = async (e) => {
    e.preventDefault();

    setActiveStep(activeStep + 1);
    if (activeStep == 2) {
      let skus = "";
      sku.map((item, index) => {
        skus += item.skuAmt + ",";
      });
      skus = skus.substring(0, skus.lastIndexOf(","));

      let data = {
        format: postData.format.toLowerCase(),
        applicable_to: postData.applicableTo,
        discount_type: postData.discountType,
        discount_value: postData.discountAmt,
        redemption_limit: postData.limit,
        max_discount_amount: postData.maxdiscount,
        expiry_date: postData.date,
        applicable_sku: selectedsku,
      };
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: "Token " + token,
        },
      };
      await axios
        .post(url, data, config)
        .then((res) => {
          setCode(res.data.data.code);
        })
        .catch((err) => {
          //   alert(JSON.parse(err.request.response).message);
        });
      // dispatch(createPost({...postData}, navigate));
    }

    if (type == "percentage") {
      !validDiscount.test(postData.discountAmt)
        ? seterror(true)
        : seterror(false);
    }
  };

  if (postData.discountAmt > 100 && postData.discountType == "percentage") {
    alert("Percentage cannot be more than 100!");
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleInputChange = (e) => {
    setselectedsku(e.target.value);
  };

  const handleAddClick = (e) => {
    setsku([...sku, { skuAmt: e.target.value }]);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Discount Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={postData.discountType}
                label="discounttype"
                onChange={(e) =>
                  setPostData({ ...postData, discountType: e.target.value })
                }
              >
                <MenuItem value="percentage">Percentage</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
              </Select>
            </FormControl>
            {type == "percentage" ? (
              <TextField
                label="Discount Percentage"
                variant="outlined"
                fullWidth
                margin="dense"
                name="title"
                // error={error}
                value={postData.discountAmt}
                onChange={(e) =>
                  setPostData({ ...postData, discountAmt: e.target.value })
                }
              />
            ) : (
              <TextField
                label="Discount Amount"
                variant="outlined"
                fullWidth
                margin="dense"
                name="title"
                value={postData.discountAmt}
                onChange={(e) =>
                  setPostData({ ...postData, discountAmt: e.target.value })
                }
              />
            )}
            <TextField
              label="Redemption-Limit"
              variant="outlined"
              fullWidth
              margin="dense"
              name="publication/author"
              value={postData.limit}
              onChange={(e) =>
                setPostData({ ...postData, limit: e.target.value })
              }
            />
            <TextField
              label="Max-Discount"
              variant="outlined"
              fullWidth
              margin="dense"
              name="publication/author"
              value={postData.maxdiscount}
              onChange={(e) =>
                setPostData({ ...postData, maxdiscount: e.target.value })
              }
            />
          </>
        );
      case 1:
        return (
          <>
            <FormControl fullWidth>
              <TextField
                label="Expiry Date"
                variant="outlined"
                fullWidth
                margin="dense"
                name="date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  shrink: true,
                }}
                value={postData.date}
                onChange={(e) =>
                  setPostData({ ...postData, date: e.target.value })
                }
                sx={{
                  marginBottom: "10px",
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Format</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={postData.format}
                label="format"
                onChange={(e) =>
                  setPostData({ ...postData, format: e.target.value })
                }
              >
                <MenuItem value="Alphabetic">Alphabetic</MenuItem>
                <MenuItem value="Numeric">Numeric</MenuItem>
                <MenuItem value="Alphanumeric">Alphanumeric</MenuItem>
              </Select>
            </FormControl>
          </>
        );
      case 2:
        return (
          <>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Applicable To
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={postData.applicableTo}
                label="applicableto"
                onChange={(e) =>
                  setPostData({ ...postData, applicableTo: e.target.value })
                }
              >
                <MenuItem value="overall_cart_amount">Overall cost</MenuItem>
                <MenuItem value="specific_sku">Specific SKU's</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginTop: "10px" }}>
              <InputLabel id="demo-simple-select-label">Select sku</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedsku}
                label="format"
                onChange={(e) => handleInputChange(e)}
              >
                {sku.map((x) => {
                  return (
                    <MenuItem
                      label="SKU"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      name="skuAmt"
                      value={x.sku}
                    >
                      {x.sku}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {/* 
            <Button
              color="primary"
              variant="contained"
              onClick={handleAddClick}
              style={{ marginTop: 4 }}
            >
              Add SKU
            </Button> */}
          </>
        );
      default:
        return "unknown step";
    }
  }
  // console.log(postData);

  return (
    <div className="main">
      <Container component={Box} p={4}>
        <Paper
          component={Box}
          p={3}
          style={{ marginTop: 90, width: 600, marginLeft: 600 }}
        >
          <div>
            <Stepper
              style={step}
              activeStep={activeStep}
              sx={{ marginBottom: 5, color: "green" }}
            >
              {steps.map((step, index) => {
                return (
                  <Step>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === 3 ? (
              <Container>
                <Typography variant="h3">Successful Generation</Typography>
                <Typography variant="h5">
                  Your coupon code is: {code ? code : "421644993277"}
                  <Copy text={code ? code : "421644993277"}></Copy>
                </Typography>
              </Container>
            ) : (
              <>
                <form> {getStepContent(activeStep)} </form>
                <Button
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ marginTop: 3 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ marginTop: 3, marginLeft: 3 }}
                >
                  {activeStep === 2 ? "Finish" : "Next"}
                </Button>
                {activeStep === 2 ? (
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: 3,
                      marginLeft: 24,
                      backgroundColor: "green",
                    }}
                    onClick={handlemee}
                  >
                    Generate Dynamic
                  </Button>
                ) : null}

                <input
                  type="file"
                  onChange={handleFileInputChange}
                  style={{ display: "none" }}
                  id="133"
                />
                {dynamic ? (
                  jenil ? (
                    <Button
                      variant="contained"
                      onClick={handleme}
                      sx={{
                        marginTop: 3,
                        marginLeft: 24,
                        backgroundColor: "green",
                      }}
                    >
                      Add Files
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleUploadClick}
                      sx={{
                        marginTop: 3,
                        marginLeft: 24,
                        backgroundColor: "green",
                      }}
                    >
                      Submit
                    </Button>
                  )
                ) : null}
              </>
            )}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Generate;
