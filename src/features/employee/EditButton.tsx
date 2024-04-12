import { Button, MantineGradient } from '@mantine/core'
import React from 'react'
import { primaryGradient } from '@/const'

const EditButton = () => {
  const secondaryGradient: MantineGradient = {from: 'red', to:'purple'};

  return (
    <div>
      <Button variant="gradient" gradient={secondaryGradient} mb="sm">
            Edit
      </Button>
    </div>
  )
}

export default EditButton
