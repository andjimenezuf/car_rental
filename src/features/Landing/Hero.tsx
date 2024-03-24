import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { primaryGradient } from '@/const';
import { SearchEngine } from '@/components/SearchEngine';

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 20%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>AutoCraze Rentals</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Book the selected car effortlessly, Pay for driving only,
                Book the Car Now
        </Text>

        <Button variant="gradient" gradient={primaryGradient} size="xl" radius="xl" className={classes.control}>
        Explore Cars
        </Button>
      </Container>


    <Container pb= "4rem">
      <SearchEngine />

    </Container>

    </div>
  );
}