import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken';
import {type APIRoute} from "astro";

import {Login} from "../../../../lib/types.ts";
import {sql} from "../../../../lib/database.ts";

import {compare} from 'bcrypt';

export const POST: APIRoute = async ({request, cookies, redirect}) => {
    const data = await request.formData();

    let password = data.get("password");
    let email = data.get("email");

    let validation = Login.safeParse({
        password,
        email
    });

    if (!validation.success) {
        return new Response(JSON.stringify({message: "Incorrect form details"}), {status: 400})
    }

    let query = await sql`SELECT password, name, patient_id, verified FROM Patient WHERE email = ${validation.data.email}`;

    let result = query.pop();

    if (!result) {
        return new Response(JSON.stringify({message: "No user with that email exists."}), {status: 400})
    }

    if (!result.verified) {
        return redirect("/patient/account-created")
    }

    let encrypted_password = result.password;

    let password_is_valid = await compare(validation.data.password, encrypted_password);

    if (!password_is_valid) {
        return new Response(JSON.stringify({message: "Incorrect password"}), {status: 403})
    }

    let patient_jwt = jsonwebtoken.sign({
        full_name: result.name,
        patient_id: result.patient_id
    }, process.env["ENCRYPTION_SECRET"]!);

    cookies.set("patient-jwt", patient_jwt);

    let headers = new Headers({
        'Set-Cookie': `patient-jwt=${patient_jwt}; Path=/`,
        'Location': '/patient'
    })

    return new Response("Successful", {
        status: 303,
        headers
    })
}