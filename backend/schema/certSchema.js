import z from 'zod'

export const certSchema = z.object({
    name: z.string({required_error: 'Certification name is required'}).min(5, {message: 'Certification name must be at least 5 character long'}).trim(),
    issuedBy: z.string({required_error: 'Certification issuer is required'}).min(2, {message: 'Issuer name too short'}).trim(),
    issuedDate: z.coerce.date({required_error: 'Issued Date is required'}),
    expiryDate: z.coerce.date({required_error: 'Exprity Date is required'}),
    certificationURL: z.url({required_error: 'Certification URL is required'})
})