import { Select } from '@mantine/core'
import React from 'react'

export const SelectCarMake = () => {
  
  return (
    <Select
      label="Type"
      placeholder="Sedan"
      data={["Sedan", "SUV", "SuperCar"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  )
}
