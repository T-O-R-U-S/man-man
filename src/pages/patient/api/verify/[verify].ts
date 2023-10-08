import type {APIRoute} from "astro";

import {sql} from "../../../../../lib/database.ts";

export const POST: APIRoute = async ({ request, params }) => {
    let user_uuid = params["verify"]!;

    let result = await sql`
        UPDATE Patient
        SET verified = true
        WHERE patient_id = ${user_uuid}
    `;

    return new Response("You've been verified.", {status:200})
}