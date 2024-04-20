import { primaryGradient, secondaryGradient } from '@/const'
import { Button, CloseButton, Image, Text, Flex } from '@mantine/core'
import React, { Dispatch } from 'react'

const RentalListingDrop = ({state, stateChange}:{
  state: boolean
  stateChange: Dispatch<React.SetStateAction<boolean>>
}) => {
  const container = {
    marginTop: 25,
    marginRight: 25,
    border: "1px solid rgba(150, 150, 150)"
  }

  const title_container = {
    display: "flex",
    marginBottom: -25,
  }

  const image_content_container = {
    display: "flex",
    height: 300,
  }

  return (
    <div style={container}>
      <div style={title_container}>
        <div style={{flex: 30}}>
          <p style={{paddingLeft: 30, fontSize: 26}}>Toyota Camry</p>
        </div>
        <div style={{paddingTop: 35, flex: 1, paddingRight: 45}}>
          <Button variant="gradient" gradient={primaryGradient} mb="sm" size='xs'
              onClick={() => stateChange(!state)}
            >
              {state ? "Hide" : "View"}
          </Button>
        </div>
      </div>
      <div style={{paddingLeft: 30, paddingBottom: 10, color: "gray", borderBottom: "1px solid rgba(150, 150, 150)"}}>
        Sedan
      </div>
      <div style={image_content_container}>
        <div style={{flex: 5, marginTop: 65}}>
          <Image
            style={{marginLeft: "auto", marginRight: "auto", width: 600}} // Adjust size directly
            radius="md"
            h={200}
            my={8}
            src='https://res.cloudinary.com/dicme7cio/image/upload/v1697124203/car-go-rentals/cars/znn2meedol66ikfm5fue.webp'
            alt="Toyota Camry"
          />
        </div>
        <div style={{flex: 2, margin: "auto"}}>
          <Flex style={{marginBottom: 15}}>
            <Text>
              Mileage:
            </Text>
            <Text style={{marginLeft: 5}} c={"dimmed"}>
              5
            </Text>
          </Flex>
          <Flex style={{marginBottom: 15}}>
            <Text>
              Cost/Day:
            </Text>
            <Text style={{marginLeft: 5}} c={"dimmed"}>
              $300
            </Text>
          </Flex>
          <Flex style={{marginBottom: 15}}>
            <Text>
              Cost/Mile:
            </Text>
            <Text style={{marginLeft: 5}} c={"dimmed"}>
              $1
            </Text>
          </Flex>
          <Flex style={{marginBottom: 15}}>
            <Text>
              Start Date:
            </Text>
            <Text style={{marginLeft: 5}} c={"dimmed"}>
              April 24th, 2024
            </Text>
          </Flex>
          <Flex style={{marginBottom: 15}}>
            <Text>
              End Date:
            </Text>
            <Text style={{marginLeft: 5}} c={"dimmed"}>
              April 26th, 2024
            </Text>
          </Flex>
        </div>
        <div style={{flex: 1, margin: "auto"}}>
          <Button variant="gradient" gradient={secondaryGradient} mb="sm" size='xs'>
                Cancel Reservation
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RentalListingDrop
