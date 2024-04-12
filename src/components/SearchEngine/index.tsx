import { primaryGradient } from '@/const'
import { Button, Flex, Container, rem, px } from '@mantine/core'
import React,{useState, useRef } from 'react'
import classes from "./SearchEngine.module.css"
import { SelectRegion } from '@/components/SelectRegion'
import { SelectDate } from '@/components/SelectDate'


export const SearchEngine = () => {
  return (
    <Container className={classes.container} size="100%">
      <Flex direction={{base: 'column', sm:"row"}} justify="center" gap={{base: 'sm', sm: 'lg'}} align={{base: 'stretch', sm: 'flex-end'}}>
          <SelectRegion/>

          <SelectDate label="Pickup Date"/>
          <SelectDate  label="Return Date"/>
        
          <Button variant='gradient' gradient={primaryGradient}>Search for car</Button>
        
      </Flex>
    </Container>
  )
}
