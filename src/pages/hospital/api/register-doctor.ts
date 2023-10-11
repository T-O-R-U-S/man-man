import {type APIRoute} from "astro";

import {HospitalInfo, Signup} from '../../../../lib/types.ts';
import {sql} from "../../../../lib/database.ts";
import bcrypt from 'bcrypt';
import 'dotenv/config';
import {constants as http_constants} from 'http2'
import {verify_jwt} from "../../../../lib/verify-jwt.ts";

export const POST: APIRoute = async ({request, redirect, cookies}) => {
    let data = verify_jwt(cookies, 'hospital-jwt');

    let hospital_validation = HospitalInfo.safeParse(data);

    if (!hospital_validation.success) {
        return new Response("Bad jwt", {
            status: http_constants.HTTP_STATUS_BAD_REQUEST,
            headers: {
                'Set-Cookie': 'hospital-jwt=none; Max-Age=-1'
            }
        })
    }

    let doctor_info = await request.json();

    let doctor_validation = Signup.safeParse(doctor_info);

    if (!doctor_validation.success) {
        return new Response("Bad form", {status: http_constants.HTTP_STATUS_BAD_REQUEST})
    }

    let encrypted_password: string;

    bcrypt.genSalt(async (err, salt) => {
        if (err)
            throw err

        if(!doctor_validation.success || !hospital_validation.success) {
            return;
        }

        encrypted_password = await bcrypt.hash(doctor_validation.data.password, salt);

        try {
            await sql`
        INSERT INTO
            doctor(hospital_id, password, email, name)
        VALUES
            (${hospital_validation.data.hospital_id},
             ${encrypted_password},
             ${doctor_validation.data.email},
             ${doctor_validation.data.full_name}
            )`;
        } catch (e) {
            console.error(e)
        }
    })

    return new Response(JSON.stringify({message: "Successfully created new doctor", type:"Success"}), {status: 200})
}