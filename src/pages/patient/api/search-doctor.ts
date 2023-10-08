import type {APIRoute} from "astro";
import {sql} from "../../../../lib/database.ts";

export const GET: APIRoute = async ({ request }) => {
    let search_data = await request.json();

    if(!search_data.query || !search_data.page_number) {
        return new Response("Bad form", {status: 400})
    }

    if(typeof search_data.page_number !== 'number') {
        return new Response("Bad form", {status: 400})
    }

    search_data.page_number = Math.floor(search_data.page_number)

    let results = await sql`
        SELECT doc_id, profile_picture, name, description FROM doctor
        WHERE name LIKE ${'%' + search_data.query + '%'} OR description LIKE ${'%' + search_data.query + '%'}
        LIMIT 50 OFFSET ${search_data.page_number * 50}
    `;

    return new Response(JSON.stringify(results), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}