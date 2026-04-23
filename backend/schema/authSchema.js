import z from "zod";

export const registerSchema = z.object({
    username: z.string({required_error: 'Username is required'}).min(5, {message: 'Username must be at least 5 characters long'}).toLowerCase().trim(),
    email: z.email({required_error: 'Email is required'}),
    password: z.string({required_error: 'Password is required'}).min(8, {message: 'Password must be atleast 8 characters long'})
})

export const loginSchema = z.object({
    email: z.email({required_error: 'Email is required'}), 
    password: z.string({required_error: 'Password is required'}).min(8, {message: 'Password must be atleast 8 characters long'})
})