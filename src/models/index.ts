export interface ISignupFormDetails{
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

export interface IRegionProps{
    id: number;
    created_at: string;
    name?: string
    lattitude?: number;
    longitude?: number;
}
