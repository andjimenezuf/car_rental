import { primaryGradient } from '@/const'
import { Button, Flex, Container } from '@mantine/core'
import React from 'react'
import classes from "./SearchEngine.module.css"
import { SelectRegion } from '@/components/SelectRegion'
import { SelectCarMake } from '@/components/SelectCarMake'
import { SelectDate } from '@/components/SelectDate'

export const SearchEngine = () => {
  return (
    <Container className={classes.container} size="100%">
    <Flex direction={{base: 'column', sm:"row"}} justify="center" gap={{base: 'sm', sm: 'lg'}}
        align={{base: 'stretch', sm: 'flex-end'}}>
        <SelectRegion/>
        <SelectCarMake/>
        <SelectDate label="Pickup Date"/>
        <SelectDate  label="Return Date"/>
       
        <Button variant='gradient' gradient={primaryGradient}>Search for car</Button>

    </Flex>
    </Container>
  )
}
