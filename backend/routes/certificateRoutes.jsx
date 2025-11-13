const certificateControllers = require('../controllers/certificateControllers')

const express = require('express')

const router = express.Router()


router.get('/', certificateControllers.getAllCertificates)
router.get('/:id', certificateControllers.getCertificate)
router.post('/', certificateControllers.createCertificate)
router.put('/:id', certificateControllers.updateCertificate)
router.delete('/:id', certificateControllers.deleteCertificate)


