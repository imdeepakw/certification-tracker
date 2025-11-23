const calculateDays = require('../utils/daysCalculation')
const Certificate = require('../models/Certificate')

module.exports = {
    getAllCertificates: async (req, res) => {
        try {
            const allCerts = await Certificate.find()
            res.status(200).json(allCerts)
        } catch (error) {
            console.error("Error in the getAllCertificates controller", error)
        }
    }, 
    getCertificate: async (req, res) => {
        try {
            console.log(req.params.id)
            const certificate = await Certificate.findById(req.params.id)
            res.status(200).json(certificate)
        } catch (error) {
            console.error("Error in the getCertificate controller", error)
        }
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
        try {
            const updatedCert = await Certificate.findByIdAndUpdate(req.params.id, {
                ...req.body, 
                expiresInDays: calculateDays(req.body.expirationDate)
            }, {new: true})            
            res.json(updatedCert)
        } catch (error) {
            console.error("Error occured in updateCertificate controller")
        }
    }, 
    deleteCertificate: async (req, res) => {

    }
}