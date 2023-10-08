import type {APIRoute} from "astro";

import {sql} from "../../../../../lib/database.ts";

export const POST: APIRoute = async ({ request, props }) => {
    let user_uuid = props["verify"];

    let result = await sql`
        UPDATE Patient
        SET verified = true
        WHERE patient_id = ${user_uuid}
    `;

    return new Response("Work in progress :^)", {status:500})
}