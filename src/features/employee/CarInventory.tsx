import React from 'react'
import { CarList } from '../cars/CarList'
import { Box, Button, Container, Flex } from '@mantine/core'
import { primaryGradient } from '@/const'
import { EmployeeCarCard } from './EmployeeCarCard'
import { FiltersDrawer } from '../cars/FiltersDrawer'
import { SelectRegion } from '@/components/SelectRegion'
import { SelectDate } from '@/components/SelectDate'

const CarInventory = () => {
  const container = {
    borderRadius: "rem(6px)",
    border: "1px solid rgba(150, 150, 150)",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 40
  }

  return (
    <div>
      <h1>
        Inventory
      </h1>
      <Container style={container} size="100%">
        <Flex direction={{base: 'column', sm:"row"}} justify="center" gap={{base: 'sm', sm: 'lg'}} align={{base: 'stretch', sm: 'flex-end'}}>
            <SelectRegion/>
          
            <Button variant='gradient' gradient={primaryGradient}>Show cars</Button>
          
        </Flex>
      </Container>
      <Box w="100%"> 
        <Flex wrap="wrap" justify="space-between" gap="lg">
          <EmployeeCarCard />
          <EmployeeCarCard />
          <EmployeeCarCard />
          <EmployeeCarCard />
       
        </Flex>
      </Box> 
    </div>
      
  )
}

export default CarInventory
