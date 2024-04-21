import React, {useState} from 'react'
import { Button, CloseButton, MantineGradient, Modal, Select, TextInput, Title } from '@mantine/core'
import EditButton from '../employee/EditButton'
import { primaryGradient } from '@/const';

const EmployeeListing = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const container = {
    display: "flex",
    border: "1px solid rgba(150, 150, 150)",
    marginTop: 20
  }

  const secondaryGradient: MantineGradient = {from: 'red', to:'purple'};

  const name_container = {
    paddingLeft: 10,
    width: "15%"
  }

  const email_container = {
    flex: 2
  }

  const location = {
    flex: 3
  }

  const close_button = {
    paddingTop: "10px",
    paddingRight: "15px"
  }

  function handleClick() {
    setEditModalOpen(true);
  }

  return (
    <div style={container}>
      <div style={name_container}>
        <p style={{marginLeft: 10}}>John Doe</p>
      </div>
      <div style={email_container}>
        <p style={{marginLeft: 10}}>jdoe@gmail.com</p>
      </div>
      <div style={location}>
        <p style={{marginLeft: 10}}>Gainesville, FL</p>
      </div>
      <div style={{paddingTop: 12, paddingRight: 10}}>
        <Button 
        variant="gradient" 
        gradient={secondaryGradient} 
        mb="sm" 
        size='xs'
        onClick={handleClick}>
              Edit
        </Button>
      </div>
      <div style={close_button}>
        <CloseButton
          size={"lg"}
        />
      </div>
      <Modal
      opened={editModalOpen}
      onClose={() => {setEditModalOpen(false)}}
      withCloseButton={false}
      >
        <h2>Update Employee</h2>
        <TextInput
          label="First Name"
          placeholder='John'
          style={{marginBottom: 30}}
          onChange={() => {
            
          }}
        />
        <TextInput
          label="Last Name"
          placeholder='Doe'
          style={{marginBottom: 30}}
        />
        <TextInput
          label="Email"
          placeholder='jdoe@example.com'
          style={{marginBottom: 30}}
        />
        <TextInput
          label="Assigned Location"
          placeholder='Gainesville, Miami, etc'
          style={{marginBottom: 30}}
        />
        <Select
          label="Role"
          data={['Employee', 'Administrator']}
        />
        <Button
          style={{marginTop: 20}}
          variant='gradient'
          gradient={secondaryGradient}
          onClick={() => setEditModalOpen(false)}
        >
          Update
        </Button>
      </Modal>
    </div>
  )
}

export default EmployeeListing
