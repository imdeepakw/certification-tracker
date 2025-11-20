function calculateDays(expiryDate){
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const [expiryYear, expiryMonth, expiryDay] = expiryDate.split('-').map(Number)
    const localExpiryDate = new Date(expiryYear, expiryMonth - 1, expiryDay)
    return (Math.ceil((localExpiryDate - today)/(1000 * 60 * 60 * 24)))
}

module.exports = calculateDays