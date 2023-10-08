import { z } from 'zod';

export const Login = z.object({
    email: z.string().email(),
    password: z.string()
});

export const Signup = z.object({
    email: z.string().email(),
    password: z.string(),
    full_name: z.string()
});

export const HospitalInfo = z.object({
    hospital_id: z.string(),
    full_name: z.string()
})