import { Box, Button, Container, Flex } from '@mantine/core'
import React from 'react'
import ReservedCarCard from './ReservedCarCard'
import { SelectRegion } from '@/components/SelectRegion'
import { SelectDate } from '@/components/SelectDate'
import { primaryGradient } from '@/const'

const Reservations = () => {
  const container = {
    borderRadius: "rem(6px)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 40
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <h1>Reservations</h1>
        </div>
        <div style={{marginTop: 30}}>
          <Button variant='gradient' gradient={primaryGradient}>New Reservation</Button>
        </div>
      </div>
      
      <Container style={container} size="100%">
      <Flex direction={{base: 'column', sm:"row"}} justify="center" gap={{base: 'sm', sm: 'lg'}} align={{base: 'stretch', sm: 'flex-end'}}>

          <SelectDate label="From"/>
          <SelectDate  label="To"/>
        
          <Button variant='gradient' gradient={primaryGradient}>Search for car</Button>
        
      </Flex>
    </Container>
      <Box w="100%"> 
        <Flex wrap="wrap" justify="space-between" gap="lg">
          <ReservedCarCard/>
          <ReservedCarCard/>
          <ReservedCarCard/>
          <ReservedCarCard/>
        </Flex>
      </Box> 
    </div>
  )
}

export default Reservations
