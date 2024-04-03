import { Select } from '@mantine/core'
import React from 'react'

export const SelectRegion = () => {
  return (
    <Select
      label="Region"
      placeholder="Gainesville"
      data={["Gainesville","Miami", "Tampa", "Orlando"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  )
}
