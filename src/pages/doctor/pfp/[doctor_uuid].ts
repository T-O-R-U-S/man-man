import type {APIRoute} from "astro";
import {sql} from "../../../../lib/database.ts";


export const GET: APIRoute = async ({request, params}) => {
    let profile_picture_results = await sql`
        SELECT profile_picture FROM Doctor WHERE doc_id = ${params.doctor_uuid}
    `;

    let profile_picture = profile_picture_results.pop();

    if(!profile_picture) {
        return new Response("Not found", {
            status: 404
        })
    }

    return new Response(profile_picture.profile_picture, {
        status: 200,
        headers: {
            'Content-Type': 'images/generic' // No such MIME type ('image/generic') exists, but this will at least tell the
                                             // browser that the content is an image.
        }
    })
}