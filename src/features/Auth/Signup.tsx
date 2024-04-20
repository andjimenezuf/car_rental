'use client'
import Link from 'next/link';

import { Logo } from '@/components/Navbar/Logo';
import classes from './Style.module.css';
import { Anchor, Box, Button, Checkbox, Divider, Group, Paper, PasswordInput, Stack, TextInput, Text, LoadingOverlay } from '@mantine/core';
import link from 'next/link';
import { useSignupForm } from '@/hooks/useSignupForm';
import { signupWithEmailPassword } from '@/services/auth.service';
import { useState } from 'react';
import { EmailConfirmation } from '@/components/EmailConfirmation';

export function Signup() {
    const signupForm = useSignupForm();
    const [isSubmitted, setIsSubmitted]= useState<boolean>(false)
    const [isSubmitting, setIsSubmitting]= useState(false)

    const handleSignup = async() =>{
        const {email, password} = signupForm.values;
        setIsSubmitting(true);
        const {error} = await signupWithEmailPassword(email, password);

        if(error){
            setIsSubmitting(false);
            console.log(error);
        }else{
            setIsSubmitting(false);
            setIsSubmitted(true);
            console.log('Signup Successful');
        }

    };
    return (
        <>
            {isSubmitted ? (<EmailConfirmation email={signupForm.values.email}/> 
            ):( 
            <>
            <LoadingOverlay
                visible={isSubmitting}
                overlayProps={{radius:'sm', blur: 2}}
            />
            
            <Box px="md" py="xl">
                <Paper className={`${classes.formPaper} withBorder`}>
                  <Text size="lg" fw={500}>
                        Welcome to <Logo /> !
                    </Text>
                   
                    <form onSubmit={signupForm.onSubmit(()=> handleSignup())}>
                        <Stack>
                            <TextInput
                                label="Email"
                                placeholder='hello@ufl.edu'
                                radius='md'
                                value={signupForm.values.email}
                                onChange={(event) => signupForm.setFieldValue('email', event.currentTarget.value )}
                                error={signupForm.errors.email && signupForm.errors.email}


                            />
                            <PasswordInput
                                label="Password"
                                placeholder='Your secret password'
                                radius='md'
                                value={signupForm.values.password}
                                onChange={(event) => signupForm.setFieldValue('password', event.currentTarget.value )}
                                error={signupForm.errors.password && signupForm.errors.password}
                            />
                            <PasswordInput
                                label="Confirm Password"
                                placeholder='Confirm please'
                                radius='md'
                                value={signupForm.values.confirmPassword}
                                onChange={(event) => signupForm.setFieldValue('confirmPassword', event.currentTarget.value )}
                                error={signupForm.errors.confirmPassword && signupForm.errors.confirmPassword}
                            />
                            <Checkbox label="I accept terms and conditions" 
                            checked={signupForm.values.terms}
                            onChange={(event) => signupForm.setFieldValue('terms', event.currentTarget.checked )}
                            error={signupForm.errors.terms && signupForm.errors.terms}
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
                </Paper>
            </Box>
            </>
            )}
            
        </>
    );
}

