import { Button, Group } from '@mantine/core';
import React from 'react';

export const GoogleButton = () => {
  return (
    <Group grow mb="md" mt="md">
      <Button
        leftSection={<GoogleIcon />}
        variant="default"
        color="gray"
        radius="xl"
      >
        Google
      </Button>
    </Group>
  );
};

function GoogleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 262"
        width="0.9rem"
        height="0.9rem"
        {...props}
      >
        <path
          fill="#4285F4"
          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-3.104 16.576-12.623 30.622-26.906 40.294v33.6h43.605c25.554-23.566 40.281-58.208 40.281-95.652z"
        />
        <path
          fill="#34A853"
          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-43.605-33.6c-11.75 7.899-26.749 12.559-42.848 12.559-32.956 0-60.865-22.248-70.811-52.329h-43.842v33.027c20.969 39.546 62.837 66.965 110.661 66.965z"
        />
        <path
          fill="#FBBC05"
          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82s1.595-17.697 4.351-25.82v-33.027H12.439c-20.27 37.348-20.27 82.333 0 119.694l43.842-35.027z"
        />
        <path
        fill="#EB4335"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 13.872 165.293 0 130.55 0 82.837 0 40.96 23.419 20.991 58.956l43.842 33.906c9.946-29.081 37.855-51.383 70.717-51.383z"
        />

      </svg>
    );
  }
  
