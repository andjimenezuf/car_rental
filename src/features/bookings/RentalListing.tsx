'use client'
import { Button, MantineGradient } from '@mantine/core';
import React, { useState } from 'react'
import RentalListingDrop from './RentalListingDrop';

const RentalListing = () => {
  const container = {
    display: "flex",
    border: "1px solid rgba(150, 150, 150)",
    marginTop: 20,
    marginRight: 25,
  }

  const secondaryGradient: MantineGradient = {from: 'blue', to:'purple'};

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

  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? <RentalListingDrop state={show} stateChange={setShow}/> : 
      
      <div style={container}>
        <div style={name_container}>
          <p style={{marginLeft: 10}}>Toyota Camry</p>
        </div>
        <div style={email_container}>
          <p style={{marginLeft: 10}}>Gainesville, FL</p>
        </div>
        <div style={location}>
          <p style={{marginLeft: 10}}>April 24th - April 26th</p>
        </div>
        <div style={{paddingTop: 15, paddingRight: 45}}>
          <Button variant="gradient" gradient={secondaryGradient} mb="sm" size='xs'
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "View"}
          </Button>
        </div>
      </div>}
    </div>
    
  )
}

export default RentalListing
