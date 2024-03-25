'use client'
import Link from 'next/link';
import {GoogleButton} from './GoogleButton';
import { Logo } from '@/components/Navbar/Logo';
import classes from './Style.module.css';
import { Anchor, Box, Button, Checkbox, Divider, Group, Paper, PasswordInput, Stack, TextInput, Text } from '@mantine/core';
import link from 'next/link';
import { useSignupForm } from '@/hooks/useSignupForm';
import { signupWithEmailPassword } from '@/services/auth.service';

export function Signup() {
    const signupForm = useSignupForm();

    const handleSignup = async() =>{
        const {email, password} = signupForm.values;
        const {error} = await signupWithEmailPassword(email, password);

        if(error){
            console.log(error);
        }else{
            console.log('Signup Successful');
        }

    };
    return (
        <>
            <Box px="md" py="xl">
                <Paper className={`${classes.formPaper} withBorder`}>
                  <Text size="lg" fw={500}>
                        Welcome to <Logo />
                    </Text>
                    <GoogleButton />
                    <Divider label="Or Continue with" labelPosition="center" my="md" />
                    <form onSubmit={signupForm.onSubmit(()=> handleSignup())}>
                        <Stack>
                            <TextInput
                                label="Email"
                                placeholder='hello@ufl.edu'
                                radius='md'
                                value={signupForm.values.email}
                                onChange={(event) => signupForm.setFieldValue('email', event.currentTarget.value )}


                            />
                            <PasswordInput
                                label="Password"
                                placeholder='Your secret password'
                                radius='md'
                                value={signupForm.values.password}
                                onChange={(event) => signupForm.setFieldValue('password', event.currentTarget.value )}
                            />
                            <PasswordInput
                                label="Confirm Password"
                                placeholder='Confirm please'
                                radius='md'
                                value={signupForm.values.confirmPassword}
                                onChange={(event) => signupForm.setFieldValue('password', event.currentTarget.value )}
                            />
                            <Checkbox label="I accept terms and conditions" 
                            checked={signupForm.values.terms}
                            onChange={(event) => signupForm.setFieldValue('terms', event.currentTarget.checked )}
                            />
                         
                        </Stack>
                        <Group justify="space-between" mt="xl">
                            <Anchor
                                component={Link}
                                href="/login"
                                type="button"
                                c="dimmed"
                                size="xs"
                            >
                                Already have an account? Login
                            </Anchor>
                            <Button type="submit" radius="xl">
                                Sign up
                            </Button>
                        </Group>
                    </form>
                    <Group mt='xl'>
                        <Anchor
                        component={link}
                        href='/providers'
                        type="button"
                        c="dimmed"
                        size="xs"
                        >
                            Want to rent your car? creat e provide acount.
                        </Anchor>
                    </Group>

                </Paper>
            </Box>
            
        </>
    );
}

