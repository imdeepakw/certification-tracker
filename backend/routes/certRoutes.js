import express from "express";
import { authRequired } from "../config/jwt.js";
import { createNewCert, deleteCert, getACert, getAllCerts, updateCert } from "../controllers/certControllers.js";

const router = express.Router()

router.get('/',  authRequired, getAllCerts)
router.get('/:id',  authRequired, getACert)
router.post('/',  authRequired, createNewCert)
router.put('/:id',  authRequired, updateCert)
router.delete('/:id', authRequired, deleteCert)

export default router