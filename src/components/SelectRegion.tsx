import { Select } from '@mantine/core'
import React, { useState } from 'react'

export const SelectRegion = () => {
  const [city, setCity] = useState<string | null>("Gainesville")

  return (
    <Select
      label="Region"
      value={city}
      placeholder="Gainesville"
      data={["Gainesville","Miami", "Tampa", "Orlando"]}
      searchable
      nothingFoundMessage="Nothing Found"
      onChange={setCity}
    />
  )
}

