import { primaryGradient } from '@/const'
import { Button, TextInput } from '@mantine/core'
import React from 'react'
import EmployeeListing from './EmployeeListing'

const ManageEmployee = () => {
  return (
    <div>
      <div style={{display: "flex"}}>
        <div style={{flex: 1}}>
          <h1>Manage Employees</h1>
        </div>
        <div style={{marginTop: 30}}>
          <Button variant='gradient' gradient={primaryGradient}>Add Employee</Button>
        </div>
      </div>
      <div>
        <TextInput
          label="Search for Employees"
          placeholder='John Doe'
          style={{marginBottom: 30}}
        />
      </div>
      <EmployeeListing/>
      <EmployeeListing/>
      <EmployeeListing/>
    </div>
  )
}

export default ManageEmployee
