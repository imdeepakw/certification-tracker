import z from "zod";

export const inputValidator = schema => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        res.status(400).json(error.flatten())
    }
}