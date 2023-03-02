import React from 'react'

import{ useList} from "@pankod/refine-core"
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from 'components'
import { Typography, Box, Stack } from '@pankod/refine-mui'

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25}  fontWeight= {700} color= "#11142d">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
            title="Properties for Sale"
            value = {684}
            series = {[75, 25]}
            colors ={ ["#4758e8", "#e4e8ef"]}
        ></PieChart>
          <PieChart
            title="Properties for Rent"
            value = {550}
            series = {[75, 25]}
            colors ={ ["#475ae8", "#e4b8ef"]}
        ></PieChart>
          <PieChart
            title="Total Customers"
            value = {5056}
            series = {[75, 25]}
            colors ={ ["#47c8e8", "#e4a8ef"]}
        ></PieChart>
          <PieChart
            title="Properties by City"
            value = {555}
            series = {[75, 25]}
            colors ={ ["#4758e8", "#e4e8ef"]}
        ></PieChart>
      </Box>
    </Box>
  )
}

export default Home