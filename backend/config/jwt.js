import jwt from "jsonwebtoken";

export async function createAccessToken(id){
    try {
        const token = await jwt.sign(id, process.env.SIGN_KEY, {expiresIn: '1d'})
        return token
    } catch (error) {
        console.log(error)   
    }
}

export async function verifyAccesToken(req, res, next){
    const token = req.cookies.token
    if(!token) return res.status(401).json({message: 'Unauthorized!'});

    await jwt.verify(token, process.env.VERIFY_KEY, (err, user) => {
        if(err) return res.status(403).json({mesage: 'Invalid token'}); 

        req.user = user
        next()
    })

}