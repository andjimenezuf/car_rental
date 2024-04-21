import React, { useState } from 'react'
import { Box, Button, Container, Flex, Modal, TextInput } from '@mantine/core'
import { primaryGradient } from '@/const'
import { EmployeeCarCard } from './EmployeeCarCard'
import { FiltersDrawer } from '../cars/FiltersDrawer'
import { SelectRegion } from '@/components/SelectRegion'
import { SelectDate } from '@/components/SelectDate'
import { DatePicker } from '@mantine/dates'

const CarInventory = () => {
  const [addCarOpen, setAddCarOpen] = useState(false);

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
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <h1>Inventory</h1>
        </div>
        <div style={{marginTop: 30}}>
          <Button variant='gradient' gradient={primaryGradient} onClick={() => setAddCarOpen(true)}>Add Car</Button>
        </div>
      </div>
      
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

      <Modal
      opened={addCarOpen}
      onClose={() => setAddCarOpen(false)}
      withCloseButton={false}
      >
        <h2>Add Car</h2>
        <Flex>
          <TextInput
            label="Make"
            placeholder='Toyota'
            style={{marginBottom: 30}}
          />
          <TextInput
            label="Model"
            placeholder='Camry'
            style={{marginLeft: 10, marginBottom: 30}}
          />

          <TextInput
            label="Model Year"
            placeholder='2023'
            style={{marginLeft: 10, marginBottom: 30}}
          />
        </Flex>
        
        <Flex>
          <TextInput
            label="City"
            placeholder='Gainesville'
            style={{marginBottom: 30, paddingRight: 20}}
          />
            <TextInput
            label="State"
            placeholder='Florida'
            style={{paddingLeft: 20, marginBottom: 30}}
        />
        </Flex>

        <TextInput
          label="Available After"
          placeholder='2024-04-24'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Price/Day"
          placeholder='200'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Image"
          placeholder='https...'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Status"
          placeholder='With Customer'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Mileage"
          placeholder='10000'
          style={{marginBottom: 30}}
        />

        <TextInput
          label="Price/Mile"
          placeholder='5'
          style={{marginBottom: 30}}
        />
        
        <Button
          style={{marginTop: 20}}
          variant='gradient'
          gradient={primaryGradient}
          onClick={() => setAddCarOpen(false)}
        >
          Add
        </Button>


      </Modal>

    </div>
      
  )
}

export default CarInventory
