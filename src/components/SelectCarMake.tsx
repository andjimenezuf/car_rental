import { Select } from '@mantine/core'
import React from 'react'

export const SelectCarMake = () => {
  return (
    <Select
      label="Type"
      placeholder="Sedan"
      data={["Sedan", "Suv", "SuperCar"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  )
}
