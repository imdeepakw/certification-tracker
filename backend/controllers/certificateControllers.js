const calculateDays = require('../utils/daysCalculation')
const Certificate = require('../models/Certificate')

module.exports = {
    getAllCertificates: async (req, res) => {
        try {
            const allCerts = await Certificate.find()
            res.status(200).json(allCerts)
        } catch (error) {
            console.error("Error in the get All Certificates controller", error)
        }
    }, 
    getCertificate: async (req, res) => {

    }, 
    createCertificate: async (req, res) => {
        try {
            const expiryDate = req.body.expirationDate
            const expiresInDays = calculateDays(expiryDate)
            const newCert = new Certificate({
                ...req.body, 
                expiresInDays: expiresInDays
            })
            const savedCert = await newCert.save()
            res.json(savedCert)
        } catch (error) {
            console.error("Error happened in the create certificate controller", error)
        }
    }, 
    updateCertificate: async (req, res) => {

    }, 
    deleteCertificate: async (req, res) => {

    }
}