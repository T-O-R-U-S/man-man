import {constants as http_constants} from "http2";
import jsonwebtoken, {type JwtPayload} from "jsonwebtoken";
import {type AstroCookies} from "astro";

type CookieType = 'hospital-jwt' | 'patient-jwt' | 'doctor-jwt';

export function verify_jwt(cookies: AstroCookies, cookie_name: CookieType): object | undefined {
    let jwt = cookies.get(cookie_name)?.value;

    if(!jwt) {
        return undefined
    }

    let data: JwtPayload;

    try {
        data = jsonwebtoken.verify(jwt, process.env["ENCRYPTION_SECRET"]!) as JwtPayload;
        return data
    } catch {
        return undefined
    }
}