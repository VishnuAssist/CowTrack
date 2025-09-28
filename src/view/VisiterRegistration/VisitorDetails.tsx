import { Card, Divider } from '@mui/material'
import React from 'react'
import VisitorSearch from './VisitorSearch'
import VisitorTable from './VisitorTable'

const VisitorDetails = () => {
  return (
    <div>
      <Card>
        <VisitorSearch/>
        <Divider/>
        <VisitorTable/>
      </Card>
    </div>
  )
}

export default VisitorDetails
