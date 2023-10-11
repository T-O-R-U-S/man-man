import {type APIRoute} from "astro";

import {Signup} from '../../../../lib/types.ts';
import {sql} from "../../../../lib/database.ts";
import bcrypt from 'bcrypt';

export const POST: APIRoute = async ({request, redirect}) => {
    const data = await request.formData();

    let full_name = data.get("full-name")
    let password = data.get("password")
    let email = data.get("email")

    let validation = Signup.safeParse({
        full_name,
        password,
        email
    });

    if (!validation.success) {
        return new Response(JSON.stringify({message: "Invalid parameters"}), {status: 400})
    }

    bcrypt.genSalt(async (err, salt) => {
        if (err)
            throw err

        // @ts-ignore
        let encrypted_password = await bcrypt.hash(validation.data.password, salt);

        // @ts-ignore
        let result = await sql`INSERT INTO patient(email, password, name) VALUES (${validation.data.email}, ${encrypted_password}, ${validation.data.full_name})`;
    })


    return redirect("/patient/account-created", 303)
}