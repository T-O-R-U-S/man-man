import type {APIRoute} from "astro";
import {verify_jwt} from "../../../../lib/verify-jwt.ts";
import {sql} from "../../../../lib/database.ts";

export const GET: APIRoute = async ({request, cookies}) => {
    let hospital_data = verify_jwt(cookies, 'hospital-jwt');

    if(!hospital_data) {
        return new Response("Forbidden", {status: 403})
    }

    let req_data: any = await request.json();

    if(!req_data || !req_data.doctor_id || typeof req_data.doctor_id !== 'string') {
        return new Response("Bad form", { status: 400 })
    }

    // @ts-ignore
    let appointments = await sql`SELECT * FROM appointment WHERE doc_id = ${req_data.doctor_id}`;

    return new Response(JSON.stringify(appointments), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}