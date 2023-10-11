import type {APIRoute} from "astro";
import {sql} from "../../../../lib/database.ts";
import {z} from "zod";

export const POST: APIRoute = async ({request}) => {
    let search_data = await request.json();

    const SearchValidation = z.object(
        {
            query: z.string(),
            page_number: z.number().int().min(1)
        }
    )

    const search = SearchValidation.safeParse(search_data);

    if(!search.success) {
        return new Response("Forbidden", {status: 400})
    }



    let results = await sql`
        SELECT doc_id, profile_picture, name, description FROM doctor
        WHERE LOWER(name) LIKE LOWER(${'%' + search_data.query + '%'}) OR LOWER(description) LIKE LOWER(${'%' + search.data.query + '%'})
        LIMIT 50 OFFSET ${(search.data.page_number - 1) * 50}
    `;

    console.log(results, search_data.query, search_data.page_number);

    return new Response(JSON.stringify(results), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}