import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ProductCard from '@/components/store/ProductCard'
import newArrivals from '@/components/store/newArrivals'

export default function OtherProducts({ items, itemPreview }) {
  const combinedData = [...items, ...newArrivals]

  let filtered = combinedData.filter(product => product.id !== itemPreview.id)
  return (
    <Box
      maxWidth="100%"
      display="flex"
      flexDirection="column"
      gap={2}
      marginTop={4}
    >
      <Typography textAlign="left" variant="h4" color="secondary.dark">
        Other Products
      </Typography>
      <Grid
        container
        spacing={1}
        boxSizing="border-box"
        columns={{ xl: '5', lg: '5', md: '4', sm: '2', xs: '1' }}
      >
        {filtered.slice(0, 20).map(product => (
          <Grid item key={product.id} xs={1}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
