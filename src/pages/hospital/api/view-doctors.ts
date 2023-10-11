import type {APIRoute} from "astro";
import {verify_jwt} from "../../../../lib/verify-jwt.ts";
import {sql} from "../../../../lib/database.ts";

export const GET: APIRoute = async ({request, cookies}) => {
    let hospital_data = verify_jwt(cookies, 'hospital-jwt');

    if (!hospital_data) {
        return new Response("Forbidden", {status: 403})
    }

    // @ts-ignore
    let doctors = await sql`SELECT * FROM doctor WHERE hospital_id = ${hospital_data.hospital_id}`;

    return new Response(JSON.stringify(doctors), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}