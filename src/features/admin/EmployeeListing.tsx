import React from 'react'
import { Button, CloseButton, MantineGradient } from '@mantine/core'
import EditButton from '../employee/EditButton'

const EmployeeListing = () => {
  const container = {
    display: "flex",
    border: "1px solid rgba(255, 255, 255, 0.125)",
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
        <Button variant="gradient" gradient={secondaryGradient} mb="sm" size='xs'>
              Edit
        </Button>
      </div>
      <div style={close_button}>
        <CloseButton
          size={"lg"}
        />
      </div>
    </div>
  )
}

export default EmployeeListing
