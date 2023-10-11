import type {APIRoute} from "astro";
import {sql} from "../../../../lib/database.ts";
import {Login} from "../../../../lib/types.ts";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import 'dotenv/config';
pnpm 
export const POST: APIRoute = async ({request}) => {
    let form_data = await request.formData();

    let email = form_data.get("email");
    let password = form_data.get("password");

    let validation = Login.safeParse({
        email,
        password
    });

    if(!validation.success) {
        return new Response(JSON.stringify({message: "Bad form"}), {status: 400})
    }

    let doctor = await sql`
        SELECT * FROM doctor WHERE email = ${validation.data.email}
    ` as any;

    let encrypted_password = doctor.password;

    let valid_password = await bcrypt.compare(validation.data.password, encrypted_password);

    if(!valid_password) {
        return new Response(JSON.stringify({message: "Forbidden"}), {status: 403})
    }

    let doctor_jwt = jsonwebtoken.sign({
        doctor_id: doctor.id,
        full_name: doctor.name
    }, process.env["ENCRYPTION_SECRET"]!);

    return new Response("Success", {
        status: 303,
        headers: {
            "Set-Cookie": `doctor-jwt=${doctor_jwt}; Path=/`,
            "Location": "/doctor"
        }
    })
}