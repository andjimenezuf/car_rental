import Link from 'next/link';
import { Button } from '@mantine/core';
import { primaryGradient } from '@/const';

const HeroButton = () => {
  return (
    <Link href="/cars" passHref>
      <Button component="a" variant="gradient" gradient={primaryGradient} size="xl" radius="xl">
        Explore Cars
      </Button>
    </Link>
  );
};

export default HeroButton;
