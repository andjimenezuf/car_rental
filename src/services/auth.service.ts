import { AuthTokenResponse } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const signupWithEmailPassword =async (email: string, password:string):Promise<AuthTokenResponse> => {
    const supabase = createClientComponentClient();
    const res = await supabase.auth.signInWithPassword({email, password});

    return res

    
}

