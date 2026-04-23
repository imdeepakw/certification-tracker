import express from "express";
import { authRequired } from "../config/jwt.js";
import { createNewCert, deleteCert, getACert, getAllCerts, updateCert} from "../controllers/certControllers.js";
import { inputValidator } from "../middleware/inputValidator.js";
import { certSchema } from "../schema/certSchema.js";

const router = express.Router()

router.get('/',  authRequired, getAllCerts)
router.get('/:id',  authRequired, getACert)
router.post('/',  authRequired, inputValidator(certSchema), createNewCert)
router.put('/:id',  authRequired, inputValidator(certSchema), updateCert)
router.delete('/:id', authRequired, deleteCert)
export default router