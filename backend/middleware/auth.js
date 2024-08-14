const jwt = require('jsonwebtoken');
const auth = async(req,res,next) =>{
    try {
        const Authorization = req.header("Authorization");
        const token = Authorization?Authorization.slice(7,Authorization.length):"";
        if(!token){
            return res.status(400).send({msg:"Invalid Authorization"});
        }
        jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
            if(err){
                return res.status(400).send({msg:"Invalid Authorization"});
            }
            req.user = user;
            next();
        })

    } catch (error) {
        return res.status(500).send({msg:error.message})
    }
}

module.exports = {
    auth
}