import { primaryGradient, secondaryGradient } from '@/const'
import { Button, Modal, Select, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import EmployeeListing from './EmployeeListing'

const ManageEmployee = () => {

  const [addModalOpen, setAddModalOpen] = useState(false)

  return (
    <div>
      <div style={{display: "flex"}}>
        <div style={{flex: 1}}>
          <h1>Manage Employees</h1>
        </div>
        <div style={{marginTop: 30}}>
          <Button variant='gradient' 
          gradient={primaryGradient}
          onClick={() => setAddModalOpen(true)}
          >Add Employee</Button>
        </div>
      </div>
      <div>
        <TextInput
          label="Search for Employees"
          placeholder='John Doe'
          style={{marginBottom: 30}}
        />
      </div>
      <div>
        <EmployeeListing/>
        <EmployeeListing/>
        <EmployeeListing/>
      </div>
      <Modal
        opened={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        withCloseButton={false}
      >
        <h2>Add Employee</h2>
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
          gradient={primaryGradient}
          onClick={() => {
            setAddModalOpen(false)
          }}
        >
          Add
        </Button>
      </Modal>
    </div>
  )
}

export default ManageEmployee
