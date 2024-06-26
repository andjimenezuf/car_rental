import { AuthResponse } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const signupWithEmailPassword =async (
    email: string,
     password:string
     ): Promise<AuthResponse> => {
    const supabase = createClientComponentClient();
    const res = await supabase.auth.signUp({email, password});

    return res  
};


export const logInWithEmailPassword =async (email: string, password: string) => {
    const supabase = createClientComponentClient();
    const res = await supabase.auth.signInWithPassword({email, password})
    return res;
}

export const logOut = async () =>{
    const supabase = createClientComponentClient();
    const res = await supabase.auth.signOut();
    return res;
}

// Inside auth.service.ts
export const supabaseClient = createClientComponentClient();

