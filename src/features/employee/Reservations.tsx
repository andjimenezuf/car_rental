import { Box, Button, Container, Flex, Modal, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import ReservedCarCard from './ReservedCarCard'
import { SelectRegion } from '@/components/SelectRegion'
import { SelectDate } from '@/components/SelectDate'
import { primaryGradient } from '@/const'

const Reservations = () => {
  const [newReservationOpen, setNewReservationOpen] = useState(false)

  const container = {
    borderRadius: "rem(6px)",
    border: "1px solid rgba(150, 150, 150)",
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
          <Button variant='gradient' gradient={primaryGradient} onClick={() => setNewReservationOpen(true)}>New Reservation</Button>
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

      <Modal
        opened={newReservationOpen}
        onClose={() => setNewReservationOpen(false)}
        withCloseButton={false}
      >
        <h2>New Reservation</h2>

        <TextInput
          label="Car ID"
          placeholder='000'
          style={{marginBottom: 30}}
          onChange={() => {
            
          }}
        />

        <Flex>
          <TextInput
            label="Pickup Date"
            placeholder='2024-04-24'
            style={{marginBottom: 30}}
          />
          <TextInput
            label="Return Date"
            placeholder='2024-04-26'
            style={{marginLeft: 10, marginBottom: 30}}
          />
        </Flex>
        
        <TextInput
          label="Total Price"
          placeholder='300'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Status"
          placeholder='Booked'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="User ID"
          placeholder='********'
          style={{marginBottom: 30}}
        />

        <Button
          style={{marginTop: 20}}
          variant='gradient'
          gradient={primaryGradient}
          onClick={() => {
            setNewReservationOpen(false)
          }}
        >
          Add
        </Button>
      </Modal> 
    </div>
  )
}

export default Reservations
