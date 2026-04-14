import { Certificate } from "../models/Certificates.js";
import { calculateDays } from "../config/calculateDays.js";
export const getAllCerts = async (req, res) => {
    const userId = req.user.id
    try {
        const allCerts = await Certificate.find({user: userId})
        if(!allCerts) return res.status(400).json({message: 'Certificates not found'});
        res.status(200).json(allCerts)
    } catch (error) {
        console.log(error)
    }
}

export const getACert = async(req, res) => {
    const {id} = req.params
    try {
        const cert = await Certificate.findById({id})
        if(!cert) return res.status(400).json({message: 'Certification not found!'});
        res.status(200).json(cert)
    } catch (error) {
        console.log(error)
    }
}

export const createNewCert = async(req, res) => {
    const {name, issuedBy, expiryDate, issuedDate, certificationURL} = req.body
    const days = calculateDays(issuedDate, expiryDate)

    if(days < 0) return res.status(400).json({message: "Expiry date can't be before the issued date"});

    try {
        const newCert = new Certificate({
            name, 
            issuedBy, 
            issuedDate, //YYYY-MM-DD
            expiryDate, //YYYY-MM-DD
            expiresInDays: days,
            certificationURL,
            user: req.user.id
        })
        const savedCert = await newCert.save()
        res.status(200).json(savedCert)
    } catch (error) {
     console.log(error)   
    }
}

export const updateCert = async(req, res) => {
    const {id} = req.params
    try {
        const updateCert = {
            ...req.body, 
            expiresInDays: calculateDays(req.body.issuedDate, req.body.expiryDate)
        }
        const updatedCert = await Certificate.findByIdAndUpdate(id, updateCert, {new: true})
        if(!updatedCert) return res.status(404).json({message: 'Certification not found!'})
        res.status(200).json(updatedCert)
    } catch (error) {
     console.log(error)   
    }
}

export const deleteCert = async (req, res) => {
    const {id} = req.params
    try {
        const deletedCert = await Certificate.findByIdAndDelete(id)
        if(!deletedCert) return res.status(404).json({message: 'Certification not found!'})
        res.status(200).json('deleted successfully')
    } catch (error) {
        console.log(error)
    }
}