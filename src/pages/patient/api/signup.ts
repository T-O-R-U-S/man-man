import {type APIRoute} from "astro";

import {Signup} from '../../../../lib/patient/types.ts';

export const POST: APIRoute = async ({request}) => {
    const data = await  request.formData();

    let full_name = data.get("full-name")
    let password = data.get("password")
    let email = data.get("email")

    let validation = Signup.safeParse({
        full_name,
        password,
        email
    });

    if(!validation.success) {
        return new Response(JSON.stringify({message: "Invalid parameters"}), {status: 400})
    }



    return new Response(JSON.stringify({message: "Account created"}), {status: 500})
}