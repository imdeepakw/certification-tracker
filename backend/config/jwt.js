import jwt from "jsonwebtoken";

export function createAccessToken(id){
    try {
        const token = jwt.sign(id, process.env.SIGN_KEY, {expiresIn: '1d'})
        return token
    } catch (error) {
        console.log(error)   
    }
}

export function authRequired(req, res, next){
    const token = req.cookies.token
    if(!token) return res.status(401).json({message: 'Unauthorized!'});

    jwt.verify(token, process.env.SIGN_KEY, (err, user) => {
        if(err) return res.status(403).json({mesage: 'Invalid token!'}); 
        req.user = user
        next()
    })

}
