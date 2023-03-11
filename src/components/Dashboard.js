import React from 'react'
import Graph from './Graph.js'
import { Card, Typography } from '@mui/material';
import PieChart from './Piechart.js';
import { Box } from '@mui/system';

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mt: 5, mb: 5 }}>Dashboard</Typography>
      <Card sx={{width: "25%", height: "25%", mx: "auto", mb: 5, align: "left"}}>
      <Typography variant="h6" align="center" sx={{ mt: 5, mb: 5}}>No. of coupons</Typography>

      </Card>
      <Graph />
      <Box sx={{width: "25%", height: "25%"}}>
        <PieChart />
      </Box>
    </div>
    
  )
}

export default Dashboard