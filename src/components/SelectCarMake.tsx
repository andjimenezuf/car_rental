import { Select } from '@mantine/core'
import React from 'react'

export const SelectCarMake = () => {
  return (
    <Select
      label="Region"
      placeholder="Ferrari"
      data={["Toyota", "Honda", "Ford"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  )
}
