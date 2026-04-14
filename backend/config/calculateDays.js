export function calculateDays(issuedDate, expiryDate){

    
    const issued = new Date(issuedDate).getTime()
    const expiry = new Date(expiryDate).getTime()

    return (expiry - issued) / 86400000
}