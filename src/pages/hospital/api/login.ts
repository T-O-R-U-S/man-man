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

    let query = await sql`SELECT password, name, hospital_id FROM hospital WHERE email = ${validation.data.email}`;

    let result = query.pop();

    if (!result) {
        return new Response(JSON.stringify({message: "No hospital with that email exists."}), {status: 400})
    }

    let encrypted_password = result.password;

    let password_is_valid = await compare(validation.data.password, encrypted_password);

    if (!password_is_valid) {
        return new Response(JSON.stringify({message: "Incorrect password"}), {status: 403})
    }

    let hospital_jwt = jsonwebtoken.sign({
        full_name: result.name,
        hospital_id: result.hospital_id
    }, process.env["ENCRYPTION_SECRET"]!);

    let headers = new Headers({
        'Set-Cookie': `hospital-jwt=${hospital_jwt}; Path=/`,
        'Location': '/hospital'
    })

    return new Response("Successful", {
        status: 303,
        headers
    })
}