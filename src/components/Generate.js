import { Box, Container, Paper, TextareaAutosize, TextField } from '@mui/material'
import React, {useState} from 'react'
import {Typography,Stepper, Step, Input, StepLabel, InputLabel, Button, FormControlLabel, MenuItem, Select, Radio, RadioGroup, FormControl} from '@mui/material';
// import Dropdown from 'react-dropdown';
// import { SelectChangeEvent } from '@mui/material/Select';
// import {useDispatch} from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import { createPost } from '../../actions/posts';
// import FileBase from 'react-file-base64';

function getSteps(){
    return[
        "Basic Information",
        "Detail Information",
        "Price Information"
    ]
} 

const Generate = () => {

    const [postData, setPostData] = useState({
        discountAmt: '',
        discountType: '',
        limit: '',
        maxdiscount: '',
        format: '',
        applicableTo: '',
    });

    const [sku, setsku] = useState([{skuAmt: ""}]);

    const type = postData.discountType;

    const validDiscount = new RegExp('^.*(?=.{ ,100}).*$');

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [error, seterror] = useState(false);

    const handleNext = (e) =>{
        e.preventDefault();
        
        setActiveStep(activeStep+1);
        if(activeStep==2){
            console.log(postData);
            // dispatch(createPost({...postData}, navigate));
        }

        if(type=='percentage'){
            !validDiscount.test(postData.discountAmt) ? seterror(true) : seterror(false);
        }

    } 

    const handleBack = () =>{
        setActiveStep(activeStep-1);
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...sku];
        list[index][name] = value;
        setsku(list);
      };
      
      const handleAddClick = () => {
        setsku([...sku, {skuAmt: ""}]);
      };

    function getStepContent(step){ 
    
        switch(step){ 
            case 0:
                return(
                    <>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Discount Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={postData.discountType}
                        label="discounttype"
                        onChange={(e) => setPostData({ ...postData, discountType : e.target.value})}
                    >
                        <MenuItem value='percentage'>Percentage</MenuItem>
                        <MenuItem value='amount'>Amount</MenuItem>
                    </Select>
                    </FormControl>
                    {
                        type=='percentage' ? (
                            <TextField
                            label="Discount Percentage"
                            variant="outlined"
                            fullWidth
                            margin='dense'
                            name="title"
                            error={error}
                            value = {postData.discountAmt}
                            onChange= {(e) => setPostData({ ...postData, discountAmt : e.target.value})}
                            />
                        ):(
                            <TextField
                            label="Discount Amount"
                            variant="outlined"
                            fullWidth
                            margin='dense'
                            name="title"
                            value = {postData.discountAmt}
                            onChange= {(e) => setPostData({ ...postData, discountAmt : e.target.value})}
                            />
                        )
                    }
                    <TextField
                    label="Redemption-Limit"
                    variant="outlined"
                    fullWidth
                    margin='dense'
                    name="publication/author"
                    value = {postData.limit}
                    onChange= {(e) => setPostData({ ...postData, limit : e.target.value})}
                    />
                    <TextField
                    label="Max-Discount"
                    variant="outlined"
                    fullWidth
                    margin='dense'
                    name="publication/author"
                    value = {postData.maxdiscount}
                    onChange= {(e) => setPostData({ ...postData, maxdiscount : e.target.value})}
                    />
                    </>
                );
            case 1:
                return(
                    <>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Format</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={postData.format}
                        label="format"
                        onChange={(e) => setPostData({ ...postData, format : e.target.value})}
                    >
                        <MenuItem value='Alphabetic'>Alphabetic</MenuItem>
                        <MenuItem value='Numeric'>Numeric</MenuItem>
                        <MenuItem value='Alphanumeric'>Alphanumeric</MenuItem>
                    </Select>
                    </FormControl>
                    </>
                );
            case 2:
                return(
                    <>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Applicable To</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={postData.applicableTo}
                        label="applicableto"
                        onChange={(e) => setPostData({ ...postData, applicableTo : e.target.value})}
                    >
                        <MenuItem value='Overall cost'>Overall cost</MenuItem>
                        <MenuItem value='Specific item'>Specific SKU's</MenuItem>
                    </Select>
                    </FormControl>
                    {sku.map((x,i) =>{
                        return(
                            <>
                            <TextField
                            label="Enter SKU"
                            variant="outlined"
                            fullWidth
                            margin='dense'
                            name="Enter SKU"
                            value = {x.sku}
                            onChange={e => handleInputChange(e, i)}
                            />
                            <Button color='primary' variant='contained'onClick={handleAddClick} style={{marginTop: 4}}>Add SKU</Button>
                            </>
                        );
                    })}
                    </>
                )
            default:
                return "unknown step";
        }
    }
    // console.log(postData);
    return (
        <Container component={Box} p={4}>
            <Paper component={Box} p={3}>
                <div>
                    <Stepper activeStep={activeStep} sx={{marginBottom: 5}}>
                        {
                            steps.map((step, index) =>{
                                return(
                                    <Step>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                );
                            })
                        }
                    </Stepper>
                    {
                        activeStep===3 ? (
                            <Typography variant='h3' align='center'>Thank You</Typography>
                        ): (
                            <>
                            <form> {getStepContent(activeStep)} </form>
                            <Button variant="contained" disabled={activeStep===0} onClick={handleBack} sx={{marginTop: 3}}>Back</Button>
                            <Button variant="contained" onClick={handleNext} sx={{marginTop: 3, marginLeft: 120}} >{activeStep===2 ? 'Finish' : 'Next'}</Button>
                            
                            </>
                        )
                    }
                </div>
            </Paper>
        </Container>
    )
}

export default Generate