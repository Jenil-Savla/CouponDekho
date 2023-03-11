import React from 'react'
import Card1 from './Card'
import { Grid, Typography } from '@mui/material'

const Ecommerce = () => {
    const cards = [{company: 'Amazon'}, {company: 'Flipkart'}, {company: 'Myntra'}, {company: 'Snapdeal'}];

  return (
    <div>
        <Grid container alignItems='strech' spacing={3} sx={{margin: 'auto'}}>
          {cards.map((card) => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Card1 />
            </Grid>
          ))}
        </Grid>
    </div>
  )
}

export default Ecommerce